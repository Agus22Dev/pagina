# Ángulos en la circunferencia — Guía de tutoría

3° Medio · Sep 27, 2026 · @Agustito

## 1. Conceptos básicos

Todo el tema se reduce a una idea: **cada ángulo se calcula a partir de los arcos que "mira"**. Antes de empezar, hay que manejar estos elementos:

| Elemento | Qué es |
| --- | --- |
| Centro (O) | Punto que está a la misma distancia de todos los puntos de la circunferencia. |
| Radio | Segmento del centro a cualquier punto de la circunferencia. |
| Cuerda | Segmento que une dos puntos de la circunferencia. |
| Diámetro | Cuerda que pasa por el centro (mide 2 radios). Divide la circunferencia en dos arcos de 180°. |
| Secante | Recta que corta la circunferencia en **dos** puntos. |
| Tangente | Recta que toca la circunferencia en **un solo** punto. |
| Arco | Pedazo de circunferencia entre dos puntos. Se mide en grados. |

Dato clave: **la circunferencia completa mide 360°**, así que todos los arcos juntos suman 360°. Esto sirve para encontrar un arco que falta.

## 2. Cómo saber qué fórmula usar

**Primero mira dónde está el vértice del ángulo; eso decide todo.** Después mira qué forman sus lados.

| ¿Dónde está el vértice? | ¿Qué forman los lados? | Tipo de ángulo | Idea para recordar |
| --- | --- | --- | --- |
| En el **centro** | Dos radios | Del centro | Igual al arco |
| **Sobre** la circunferencia | Dos cuerdas | Inscrito | Mitad del arco |
| **Sobre** la circunferencia | Una cuerda y una tangente | Semi-inscrito | Mitad del arco |
| **Dentro**, pero no en el centro | Dos cuerdas que se cruzan | Interior | Semisuma de arcos (se suman) |
| **Fuera** de la circunferencia | Secantes y/o tangentes | Exterior | Semidiferencia de arcos (se restan) |

Truco para recordar: **dentro → se suma, fuera → se resta**. Mientras más lejos del centro está el vértice, más pequeño queda el ángulo comparado con el arco.

## 3. Fórmulas principales

Son cinco fórmulas y todas usan arcos. En cada una, "arco AB" significa el arco que queda **entre los lados del ángulo**.

**Ángulo del centro** — vértice en O. Mide lo mismo que su arco.

```latex
\angle AOB = \text{arco } AB
```

**Ángulo inscrito** — vértice sobre la circunferencia, lados cuerdas. Mide la mitad del arco.

```latex
\angle ACB = \frac{\text{arco } AB}{2}
```

**Ángulo semi-inscrito** — una cuerda y una tangente que se juntan en un punto de la circunferencia. También mide la mitad del arco.

```latex
\alpha = \frac{\text{arco}}{2}
```

**Ángulo interior** — dos cuerdas se cruzan dentro. Mide la semisuma del arco que "mira" y del arco opuesto (el del otro lado de la X).

```latex
\alpha = \frac{\text{arco}_1 + \text{arco}_2}{2}
```

**Ángulo exterior** — vértice fuera; lados secantes o tangentes. Mide la semidiferencia entre el arco lejano (grande) y el arco cercano (chico).

```latex
\beta = \frac{\text{arco lejano} - \text{arco cercano}}{2}
```

La fórmula del ángulo exterior funciona igual con dos secantes, con una secante y una tangente, o con dos tangentes.

## 4. Propiedades extra que salen seguido

Estas no son fórmulas nuevas, pero salvan muchos ejercicios:

- **Ángulo inscrito en una semicircunferencia = 90°.** Si un lado del triángulo es diámetro, el ángulo opuesto es recto (porque subtiende un arco de 180°).
- **Inscritos que miran el mismo arco son iguales.** No importa dónde esté el vértice, si abarcan el mismo arco miden lo mismo.
- **Inscrito = mitad del central.** Si un ángulo inscrito y uno del centro miran el mismo arco, el central mide el doble.
- **Radio y tangente son perpendiculares.** El radio que llega al punto de tangencia forma 90° con la tangente.
- **Dos tangentes desde un punto P:** los segmentos PA y PB miden lo mismo, y el ángulo en P más el ángulo del centro AOB suman 180°.
- **Cuadrilátero inscrito:** los ángulos opuestos suman 180°.
- **Triángulo:** los ángulos interiores suman 180°. Si dos lados son radios, el triángulo es isósceles (dos ángulos iguales).
- **Arcos en razón** (por ejemplo 1:2:3): se suman las partes y se reparte el total. Con 1:2:3 hay 6 partes, cada una vale 360° / 6 = 60°, y los arcos son 60°, 120° y 180°.

## 5. Ejemplos resueltos

Cada ejemplo sigue los mismos 3 pasos: **(1) identificar el tipo de ángulo, (2) escribir la fórmula, (3) reemplazar y despejar.**

**Ejemplo A — Inscrito.** Un ángulo con vértice en la circunferencia abarca un arco de 140°. ¿Cuánto mide?

1. Vértice sobre la circunferencia y lados cuerdas → inscrito.
2. Ángulo = arco / 2
3. Ángulo = 140° / 2 = **70°**

**Ejemplo B — Del centro al revés.** Un ángulo inscrito mide 35°. ¿Cuánto mide el ángulo del centro que abarca el mismo arco?

1. El arco mide 35° · 2 = 70°.
2. El ángulo del centro es igual al arco → **70°**.

**Ejemplo C — Interior.** Dos cuerdas se cruzan. El arco que abarca el ángulo x mide 161° y el arco opuesto 85°.

1. Vértice dentro, dos cuerdas → interior.
2. x = (arco₁ + arco₂) / 2
3. x = (161° + 85°) / 2 = 246° / 2 = **123°**

**Ejemplo D — Interior, despejando un arco.** El ángulo interior mide 85° y uno de los arcos 130°. ¿Cuánto mide el otro arco α?

1. 85° = (130° + α) / 2
2. Multiplico por 2: 170° = 130° + α
3. Resto 130°: **α = 40°**

**Ejemplo E — Exterior.** Dos secantes salen de P. El arco lejano mide 138° y el cercano 50°.

1. Vértice fuera → exterior.
2. δ = (lejano − cercano) / 2
3. δ = (138° − 50°) / 2 = 88° / 2 = **44°**

**Ejemplo F — Dos tangentes.** Desde P salen dos tangentes que tocan en A y B. El arco menor AB mide 110°. ¿Cuánto mide el ángulo en P?

1. Arco mayor = 360° − 110° = 250°.
2. P = (250° − 110°) / 2 = 140° / 2 = **70°**
3. Comprobación con la otra propiedad: ángulo AOB = 110°, y 110° + 70° = 180°. ✔

**Ejemplo G — Semi-inscrito.** Una tangente en A y una cuerda AB forman un ángulo. El ángulo del centro AOB mide 124°.

1. Arco AB = 124° (igual al central).
2. Semi-inscrito = arco / 2 = 124° / 2 = **62°**

## 6. Ejercicios de práctica

Son 16 ejercicios en 3 niveles. En cada uno, que escriba **qué tipo de ángulo es** antes de calcular. Conviene que dibuje la figura ella misma: dibujar ayuda a identificar el tipo.

### Nivel 1 — Aplicar una fórmula directa

1. Un ángulo del centro abarca un arco de 84°. ¿Cuánto mide el ángulo?
2. Un ángulo inscrito abarca un arco de 96°. ¿Cuánto mide?
3. Un ángulo inscrito mide 27°. ¿Cuánto mide el arco que abarca?
4. Una tangente y una cuerda forman un ángulo semi-inscrito que abarca un arco de 150°. ¿Cuánto mide el ángulo?
5. En un triángulo ABC inscrito, AB es diámetro. ¿Cuánto mide el ángulo ACB?

### Nivel 2 — Interior y exterior

6. Dos cuerdas se cortan dentro de la circunferencia. El ángulo abarca un arco de 100° y el arco opuesto mide 60°. ¿Cuánto mide el ángulo?
7. Desde un punto P salen dos secantes. El arco lejano mide 150° y el cercano 40°. ¿Cuánto mide el ángulo en P?
8. Desde P salen una secante y una tangente. El arco lejano mide 200° y el cercano 70°. ¿Cuánto mide el ángulo en P?
9. Desde P salen dos tangentes que tocan la circunferencia en A y B. El arco menor AB mide 120°. ¿Cuánto mide el ángulo en P?
10. PA y PB son tangentes y el ángulo APB mide 50°. ¿Cuánto mide el ángulo del centro AOB?

### Nivel 3 — Despejar y combinar propiedades

11. Un ángulo interior mide 70° y uno de sus arcos mide 90°. ¿Cuánto mide el otro arco?
12. Un ángulo exterior (dos secantes) mide 30° y el arco cercano mide 50°. ¿Cuánto mide el arco lejano?
13. Un triángulo ABC está inscrito y los arcos AB, BC y CA están en razón 2:3:4. Calcula los tres ángulos del triángulo.
14. El cuadrilátero ABCD está inscrito. El ángulo A mide 85° y el ángulo B mide 110°. Calcula los ángulos C y D.
15. AB es diámetro y C está sobre la circunferencia. Si el ángulo CAB mide 35°, calcula el ángulo ABC y el arco BC.
16. Dos secantes salen de P. El arco lejano mide el triple del arco cercano y el ángulo en P mide 40°. ¿Cuánto mide cada arco?

## 7. Soluciones

| N° | Tipo / propiedad | Desarrollo | Resultado |
| --- | --- | --- | --- |
| 1 | Del centro | Ángulo = arco | 84° |
| 2 | Inscrito | 96° / 2 | 48° |
| 3 | Inscrito (al revés) | 27° · 2 | 54° |
| 4 | Semi-inscrito | 150° / 2 | 75° |
| 5 | Inscrito en semicircunferencia | 180° / 2 | 90° |
| 6 | Interior | (100° + 60°) / 2 | 80° |
| 7 | Exterior (dos secantes) | (150° − 40°) / 2 | 55° |
| 8 | Exterior (secante y tangente) | (200° − 70°) / 2 | 65° |
| 9 | Exterior (dos tangentes) | Arco mayor = 240°; (240° − 120°) / 2 | 60° |
| 10 | Dos tangentes | AOB = 180° − 50° | 130° |
| 11 | Interior (despejar) | 70° · 2 = 140°; 140° − 90° | 50° |
| 12 | Exterior (despejar) | 30° · 2 = 60°; 60° + 50° | 110° |
| 13 | Razón de arcos + inscrito | 9 partes de 40° → arcos 80°, 120°, 160°; cada ángulo es la mitad del arco opuesto | C = 40°, A = 60°, B = 80° |
| 14 | Cuadrilátero inscrito | C = 180° − 85°; D = 180° − 110° | C = 95°, D = 70° |
| 15 | Semicircunferencia + triángulo | ACB = 90° → ABC = 180° − 90° − 35°; arco BC = 35° · 2 | ABC = 55°, arco BC = 70° |
| 16 | Exterior con ecuación | (3x − x) / 2 = 40° → x = 40° | Cercano 40°, lejano 120° |

Para comprobar el 13: 40° + 60° + 80° = 180°, como debe sumar todo triángulo.

## 8. Errores comunes y consejos para la tutoría

**Errores que más se repiten:**

- Confundir inscrito con del centro: el inscrito tiene el vértice **en el borde**, el del centro **en O**.
- Olvidar dividir por 2 en inscrito, semi-inscrito, interior y exterior. Solo el del centro no se divide.
- Sumar en vez de restar en el ángulo exterior. Recordar: dentro suma, fuera resta.
- En el exterior, restar al revés: siempre es arco **lejano menos cercano**, para que dé positivo.
- Usar el arco equivocado en el interior: son el arco que mira el ángulo y el que está justo enfrente, no los de los costados.
- No aprovechar que la circunferencia suma 360° cuando falta un arco.

**Cómo llevar la sesión:**

1. Partir por la tabla de la sección 2 y pedirle que la explique con sus palabras.
2. Hacer juntos 2 o 3 ejemplos de la sección 5, que ella diga el tipo de ángulo antes de calcular.
3. Dejarla resolver sola el nivel 1; si le va bien, pasar al nivel 2 y luego al 3.
4. Terminar con algunos ejercicios de su propia guía, porque ahí las figuras traen varios ángulos combinados.
5. Pedirle siempre que escriba la propiedad usada: su guía lo exige en el campo "Propiedad/teorema".
