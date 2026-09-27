/* ================= Figuras (SVG) ================= */
const CX = 100, CY = 100, R = 70;
const rad = d => d * Math.PI / 180;
const f = n => n.toFixed(1);
const pt = d => ({ x: CX + R * Math.cos(rad(d)), y: CY - R * Math.sin(rad(d)) });
const O = { x: CX, y: CY };
// dirección (en grados, sentido matemático) desde a hacia b
const dir = (a, b) => Math.atan2(a.y - b.y, b.x - a.x) * 180 / Math.PI;
const ccw = (a1, a2) => ((a2 - a1) % 360 + 360) % 360;

// arco de la circunferencia desde a1 hasta a2 en sentido antihorario
function arc(a1, a2, cls) {
  const s = pt(a1), e = pt(a2);
  return `<path class="${cls}" d="M${f(s.x)} ${f(s.y)} A${R} ${R} 0 ${ccw(a1, a2) > 180 ? 1 : 0} 0 ${f(e.x)} ${f(e.y)}"/>`;
}
// marca del ángulo (el menor) con vértice V entre las direcciones d1 y d2
function mark(V, d1, d2, r = 18) {
  if (ccw(d1, d2) > 180) [d1, d2] = [d2, d1];
  const s = { x: V.x + r * Math.cos(rad(d1)), y: V.y - r * Math.sin(rad(d1)) };
  const e = { x: V.x + r * Math.cos(rad(d2)), y: V.y - r * Math.sin(rad(d2)) };
  return `<path class="ang" d="M${f(V.x)} ${f(V.y)} L${f(s.x)} ${f(s.y)} A${r} ${r} 0 0 0 ${f(e.x)} ${f(e.y)} Z"/>`;
}
const seg = (a, b, cls = "ln") => `<line class="${cls}" x1="${f(a.x)}" y1="${f(a.y)}" x2="${f(b.x)}" y2="${f(b.y)}"/>`;
const dot = (p, cls = "dot") => `<circle class="${cls}" cx="${f(p.x)}" cy="${f(p.y)}" r="3.6"/>`;
const text = (x, y, t, cls = "lbl") => `<text class="${cls}" x="${f(x)}" y="${f(y)}">${t}</text>`;
// punto con etiqueta hacia afuera de la circunferencia
const onCircle = (d, name) => {
  const p = pt(d);
  return dot(p) + text(CX + (R + 13) * Math.cos(rad(d)), CY - (R + 13) * Math.sin(rad(d)), name);
};
const center = () => dot(O, "dot o") + text(CX, CY - 10, "O");
const svg = (inner, w = 200) =>
  `<svg viewBox="0 0 ${w} 200" role="img" aria-hidden="true"><circle class="circ" cx="${CX}" cy="${CY}" r="${R}"/>${inner}</svg>`;

function intersect(p1, p2, p3, p4) {
  const d = (p1.x - p2.x) * (p3.y - p4.y) - (p1.y - p2.y) * (p3.x - p4.x);
  const a = p1.x * p2.y - p1.y * p2.x, b = p3.x * p4.y - p3.y * p4.x;
  return { x: (a * (p3.x - p4.x) - (p1.x - p2.x) * b) / d, y: (a * (p3.y - p4.y) - (p1.y - p2.y) * b) / d };
}
// segundo punto de corte de la recta P→F con la circunferencia (el más cercano a P)
function nearCut(P, F) {
  const d = { x: F.x - P.x, y: F.y - P.y }, q = { x: P.x - CX, y: P.y - CY };
  const t = (q.x * q.x + q.y * q.y - R * R) / (d.x * d.x + d.y * d.y);
  return { x: P.x + t * d.x, y: P.y + t * d.y };
}

const FIGS = {
  centro() {
    const A = pt(210), B = pt(330);
    return svg(arc(210, 330, "arc-hi") + seg(O, A) + seg(O, B) + mark(O, 210, 330, 20) +
      center() + onCircle(210, "A") + onCircle(330, "B"));
  },
  inscrito() {
    const A = pt(210), B = pt(330), C = pt(90);
    return svg(arc(210, 330, "arc-hi") + seg(C, A) + seg(C, B) + mark(C, dir(C, A), dir(C, B), 22) +
      dot(O, "dot o") + onCircle(210, "A") + onCircle(330, "B") + onCircle(90, "C"));
  },
  semi() {
    const A = pt(270), B = pt(30);
    return svg(arc(270, 30, "arc-hi") + seg({ x: 12, y: A.y }, { x: 188, y: A.y }, "ln tan") + seg(A, B) +
      mark(A, 0, dir(A, B), 22) + dot(O, "dot o") + onCircle(270, "A") + onCircle(30, "B") +
      text(172, A.y + 12, "tangente", "lbl small"));
  },
  interior() {
    const A = pt(150), C = pt(290), B = pt(30), D = pt(250);
    const E = intersect(A, C, B, D);
    return svg(arc(30, 150, "arc-hi") + arc(250, 290, "arc-hi2") + seg(A, C) + seg(B, D) +
      mark(E, dir(E, B), dir(E, A), 16) + dot(E) + text(E.x, E.y + 14, "E") +
      onCircle(150, "A") + onCircle(30, "B") + onCircle(290, "C") + onCircle(250, "D"));
  },
  exterior() {
    const P = { x: 234, y: 100 }, F1 = pt(140), F2 = pt(220);
    const N1 = nearCut(P, F1), N2 = nearCut(P, F2);
    return svg(arc(140, 220, "arc-hi") + arc(dir(O, N2), dir(O, N1), "arc-hi2") + seg(P, F1) + seg(P, F2) +
      mark(P, dir(P, F1), dir(P, F2), 26) + dot(N1) + dot(N2) + dot(F1) + dot(F2) + dot(P) +
      text(P.x - 4, P.y - 14, "P") + dot(O, "dot o"), 250);
  },
};

function drawFigures(root = document) {
  root.querySelectorAll("[data-fig]").forEach(el => {
    const fn = FIGS[el.dataset.fig];
    if (fn && !el.innerHTML.trim()) el.innerHTML = fn();
  });
}

/* ================= Utilidades ================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}
function parseNum(s) {
  const m = String(s).replace(",", ".").match(/-?\d+(\.\d+)?/);
  return m ? parseFloat(m[0]) : NaN;
}
function confetti() {
  const bits = ["🌸", "✨", "💖", "⭐", "🎀", "🩷"];
  for (let i = 0; i < 26; i++) {
    const c = document.createElement("span");
    c.className = "confetti";
    c.textContent = bits[i % bits.length];
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDuration = 1.6 + Math.random() * 1.6 + "s";
    c.style.animationDelay = Math.random() * .4 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3800);
  }
}

/* ================= Puntajes ================= */
const score = {};
function initScore(key, total, label) {
  score[key] = { total, answered: 0, correct: 0, label };
  updateScore(key);
}
function updateScore(key) {
  const s = score[key];
  const txt = key === "desarrollo"
    ? `✅ ${s.correct} / ${s.total} resueltos`
    : `✨ ${s.correct} / ${s.total} correctas · ${s.answered} respondidas`;
  $(`[data-score="${key}"]`).textContent = txt;
  $(`[data-bar="${key}"]`).style.width = (s.answered / s.total) * 100 + "%";
  if (s.answered === s.total) finish(key);
}
function finish(key) {
  const s = score[key];
  const list = $(`#list-${key}`);
  if (list.querySelector(".done-banner")) return;
  const pct = s.correct / s.total;
  const msg = pct === 1 ? "¡Perfecto! Eres una genia de los ángulos 👑"
    : pct >= .75 ? "¡Muy bien! Repasa las que fallaste y quedas lista 💪"
    : pct >= .5 ? "¡Vas bien! Vuelve al resumen y reintenta las que fallaste 🌱"
    : "Tranquila, se aprende practicando. Revisa el resumen y vuelve a intentarlo 💖";
  list.appendChild(el(`<div class="done-banner">${s.correct} de ${s.total} ${key === "desarrollo" ? "resueltos" : "correctas"} · ${msg}</div>`));
  if (pct >= .75) confetti();
}

/* ================= Preguntas de alternativas ================= */
function renderMCQ(key, data) {
  const list = $(`#list-${key}`);
  list.innerHTML = "";
  initScore(key, data.length);
  data.forEach((item, i) => {
    const opts = shuffle(item.opts.map((o, idx) => ({ text: o[0], why: o[1], ok: idx === 0 })));
    const card = el(`
      <article class="q-card">
        <div class="q-top"><span class="q-num">${i + 1}</span><span class="pill ${item.pill}">${item.tag}</span></div>
        <p class="q-text">${item.q}</p>
        ${item.fig ? `<div class="fig" data-fig="${item.fig}"></div>` : ""}
        <div class="opts">
          ${opts.map((o, k) => `<button class="opt" data-k="${k}"><span class="letter">${"ABCD"[k]}</span><span>${o.text}</span></button>`).join("")}
        </div>
      </article>`);
    card.querySelectorAll(".opt").forEach(btn => btn.addEventListener("click", () => {
      const chosen = opts[btn.dataset.k];
      const right = opts.find(o => o.ok);
      card.querySelectorAll(".opt").forEach((b, k) => {
        b.disabled = true;
        if (opts[k].ok) b.classList.add("correct");
        else if (b === btn) b.classList.add("wrong");
        else b.classList.add("dim");
      });
      const explanation = item.steps
        ? `<div class="expl"><b class="t">Desarrollo:</b><ol>${item.steps.map(s => `<li>${s}</li>`).join("")}</ol></div>`
        : `<div class="expl"><b class="t">Explicación:</b> ${item.expl}</div>`;
      const fb = chosen.ok
        ? `<div class="feedback ok"><h4>${pick(["¡Correcto! 🎉", "¡Bien ahí! ✨", "¡Exacto! 💖", "¡Súper! 🌟"])}</h4>${explanation}</div>`
        : `<div class="feedback bad"><h4>Ups, casi 🙈</h4>
             ${chosen.why ? `<p class="why"><b>Tu respuesta:</b> ${chosen.why}</p>` : ""}
             <p>La respuesta correcta es <b>${right.text}</b>.</p>${explanation}</div>`;
      card.appendChild(el(fb));
      score[key].answered++;
      if (chosen.ok) score[key].correct++;
      updateScore(key);
    }));
    list.appendChild(card);
  });
  drawFigures(list);
}
const pick = a => a[Math.floor(Math.random() * a.length)];

/* ================= Preguntas de desarrollo ================= */
function renderDesarrollo() {
  const list = $("#list-desarrollo");
  list.innerHTML = "";
  initScore("desarrollo", DESARROLLO.length);
  DESARROLLO.forEach((item, i) => {
    const card = el(`
      <article class="q-card">
        <div class="q-top"><span class="q-num">${i + 1}</span><span class="pill ${item.pill}">${item.tag}</span></div>
        <p class="q-text">${item.q}</p>
        <div class="fields">
          ${item.fields.map(([label], k) => `
            <div class="field">
              <label for="d${i}-${k}">${label}</label>
              <div class="inwrap"><input id="d${i}-${k}" inputmode="decimal" autocomplete="off" placeholder="?"><span class="unit">°</span></div>
            </div>`).join("")}
        </div>
        <div class="actions">
          <button class="btn mint small" data-act="check">Comprobar ✔</button>
          <button class="btn ghost small" data-act="hint">Pista 💡</button>
          <button class="btn lav small" data-act="show">Ver desarrollo 📖</button>
        </div>
      </article>`);
    let counted = false, solved = false;
    const inputs = card.querySelectorAll("input");

    const showDev = (title, cls) => {
      card.querySelector(".feedback")?.remove();
      card.appendChild(el(`
        <div class="feedback ${cls}">
          <h4>${title}</h4>
          <div class="expl"><b class="t">Desarrollo:</b><ol>${item.steps.map(s => `<li>${s}</li>`).join("")}</ol></div>
        </div>`));
    };

    const check = () => {
      let allOk = true, anyFilled = false;
      inputs.forEach((inp, k) => {
        const v = parseNum(inp.value);
        if (inp.value.trim()) anyFilled = true;
        const ok = Math.abs(v - item.fields[k][1]) < 0.01;
        inp.closest(".field").classList.toggle("ok", ok);
        inp.closest(".field").classList.toggle("bad", !ok);
        if (!ok) allOk = false;
      });
      if (!anyFilled) {
        inputs[0].focus();
        return;
      }
      if (!counted) { counted = true; score.desarrollo.answered++; }
      if (allOk && !solved) { solved = true; score.desarrollo.correct++; }
      updateScore("desarrollo");
      showDev(allOk ? "¡Todo correcto! 🎉 Así se desarrolla:" : "Hay resultados por revisar (en rojo) 🙈 Mira el desarrollo:", allOk ? "ok" : "bad");
    };

    card.querySelector('[data-act="check"]').addEventListener("click", check);
    inputs.forEach(inp => inp.addEventListener("keydown", e => { if (e.key === "Enter") check(); }));
    card.querySelector('[data-act="hint"]').addEventListener("click", e => {
      if (!card.querySelector(".hint")) card.querySelector(".actions").after(el(`<div class="hint">💡 ${item.hint}</div>`));
      e.currentTarget.disabled = true;
    });
    card.querySelector('[data-act="show"]').addEventListener("click", () => {
      showDev("Desarrollo completo 📖", "");
      const solution = item.fields.map(([l, v]) => `${l} = ${v}°`).join(" · ");
      card.querySelector(".feedback").appendChild(el(`<p><b>Resultados:</b> ${solution}</p>`));
    });
    list.appendChild(card);
  });
}

function renderAbiertas() {
  const list = $("#list-abiertas");
  list.innerHTML = "";
  ABIERTAS.forEach((item, i) => {
    const card = el(`
      <article class="q-card">
        <div class="q-top"><span class="q-num">💬${i + 1}</span></div>
        <p class="q-text">${item.q}</p>
        <textarea placeholder="Escribe tu explicación aquí…"></textarea>
        <div class="actions"><button class="btn lav small">Ver respuesta modelo 📖</button></div>
      </article>`);
    card.querySelector("button").addEventListener("click", e => {
      e.currentTarget.disabled = true;
      card.appendChild(el(`
        <div class="feedback">
          <h4>Respuesta modelo ✨</h4>
          <div class="expl"><ul class="checklist">${item.model.map(m => `<li>${m}</li>`).join("")}</ul></div>
          <p>Compara: ¿tu respuesta menciona las mismas ideas? 🌷</p>
        </div>`));
    });
    list.appendChild(card);
  });
}

/* ================= Pestañas ================= */
const TABS = ["resumen", "conceptuales", "aplicacion", "desarrollo"];
function showTab(id, scroll = true) {
  if (!TABS.includes(id)) id = "resumen";
  TABS.forEach(t => { $("#" + t).hidden = t !== id; });
  $$(".tab").forEach(b => b.setAttribute("aria-selected", String(b.dataset.tab === id)));
  history.replaceState(null, "", "#" + id);
  if (scroll) {
    const top = $(".tabs").offsetTop;
    if (window.scrollY > top) window.scrollTo({ top, behavior: "smooth" });
  }
}
$$(".tab").forEach(b => b.addEventListener("click", () => showTab(b.dataset.tab)));
$$("[data-go]").forEach(b => b.addEventListener("click", () => showTab(b.dataset.go)));
$$("[data-reset]").forEach(b => b.addEventListener("click", () => {
  const key = b.dataset.reset;
  if (key === "conceptuales") renderMCQ("conceptuales", CONCEPTUALES);
  if (key === "aplicacion") renderMCQ("aplicacion", APLICACION);
  if (key === "desarrollo") { renderDesarrollo(); renderAbiertas(); }
  showTab(key);
}));

/* ================= Inicio ================= */
drawFigures();
renderMCQ("conceptuales", CONCEPTUALES);
renderMCQ("aplicacion", APLICACION);
renderDesarrollo();
renderAbiertas();
showTab(location.hash.slice(1), false);
