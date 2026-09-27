/*
  Banco de preguntas.
  En las preguntas de alternativas, la PRIMERA opción es siempre la correcta
  (se desordenan al mostrarse). Cada opción es [texto, explicación del error].
  pill: p1 centro · p2 inscrito · p3 semi-inscrito · p4 interior · p5 exterior · p6 conceptos/propiedades
*/

const CONCEPTUALES = [
  {
    tag: "Conceptos básicos", pill: "p6",
    q: "¿Cuánto mide la circunferencia completa?",
    opts: [
      ["360°"],
      ["180°", "180° es media circunferencia, lo que abarca un diámetro."],
      ["90°", "90° es solo un cuarto de la circunferencia."],
      ["100°", "Los grados de la circunferencia no se cuentan de 100 en 100."],
    ],
    expl: "La circunferencia completa mide 360°, así que todos sus arcos juntos suman 360°. Esto sirve para encontrar un arco que falta: arco que falta = 360° − (suma de los otros arcos).",
  },
  {
    tag: "Conceptos básicos", pill: "p6",
    q: "¿Qué es una cuerda?",
    opts: [
      ["Un segmento que une dos puntos de la circunferencia"],
      ["Un segmento que va del centro a un punto de la circunferencia", "Eso es el radio."],
      ["Una recta que toca la circunferencia en un solo punto", "Eso es la tangente."],
      ["Un pedazo de circunferencia entre dos puntos", "Eso es un arco, y se mide en grados."],
    ],
    expl: "Una cuerda es un segmento con ambos extremos sobre la circunferencia. Si la cuerda pasa por el centro, se llama diámetro.",
  },
  {
    tag: "Conceptos básicos", pill: "p6",
    q: "Una recta corta la circunferencia en dos puntos. ¿Cómo se llama?",
    opts: [
      ["Secante"],
      ["Tangente", "La tangente toca la circunferencia en UN solo punto."],
      ["Cuerda", "La cuerda es un segmento que termina en la circunferencia; la secante es una recta que sigue de largo."],
      ["Radio", "El radio es un segmento que parte en el centro."],
    ],
    expl: "La secante es una recta que corta la circunferencia en dos puntos. El trozo de secante que queda dentro de la circunferencia es una cuerda.",
  },
  {
    tag: "Conceptos básicos", pill: "p6",
    q: "Una recta toca la circunferencia en un solo punto. ¿Cómo se llama?",
    opts: [
      ["Tangente"],
      ["Secante", "La secante corta en DOS puntos."],
      ["Diámetro", "El diámetro es una cuerda que pasa por el centro."],
      ["Arco", "El arco es un pedazo de la circunferencia, no una recta."],
    ],
    expl: "La tangente toca la circunferencia en un único punto, llamado punto de tangencia. Además, el radio que llega a ese punto es perpendicular a la tangente (forma 90°).",
  },
  {
    tag: "Conceptos básicos", pill: "p6",
    q: "¿Cuál afirmación sobre el diámetro es correcta?",
    opts: [
      ["Es una cuerda que pasa por el centro, mide 2 radios y divide la circunferencia en dos arcos de 180°"],
      ["Mide lo mismo que el radio", "El diámetro mide el doble del radio."],
      ["Es una recta que toca la circunferencia en un solo punto", "Esa es la tangente."],
      ["Divide la circunferencia en dos arcos de 90°", "Los dos arcos miden 180° cada uno, porque 360° / 2 = 180°."],
    ],
    expl: "El diámetro es la cuerda más larga: pasa por el centro y mide 2 radios. Divide la circunferencia en dos semicircunferencias de 180° cada una.",
  },
  {
    tag: "¿Qué fórmula uso?", pill: "p6",
    q: "Para decidir qué fórmula usar, ¿qué es lo PRIMERO que debes mirar?",
    opts: [
      ["Dónde está el vértice del ángulo"],
      ["Cuánto mide el arco más grande", "Los arcos se usan después, en la fórmula; primero hay que saber el tipo de ángulo."],
      ["Si el ángulo es agudo u obtuso", "Eso no te dice qué fórmula usar."],
      ["El largo de los lados del ángulo", "El largo no importa: todo se calcula con arcos."],
    ],
    expl: "La ubicación del vértice decide todo: en el centro → del centro; sobre la circunferencia → inscrito o semi-inscrito; dentro (no en el centro) → interior; fuera → exterior. Después se mira qué forman los lados.",
  },
  {
    tag: "Inscrito", pill: "p2", fig: "inscrito",
    q: "Un ángulo tiene su vértice sobre la circunferencia y sus lados son dos cuerdas. ¿Qué tipo de ángulo es?",
    opts: [
      ["Inscrito"],
      ["Del centro", "El del centro tiene el vértice en O, no en el borde."],
      ["Semi-inscrito", "El semi-inscrito tiene una cuerda y una TANGENTE."],
      ["Interior", "El interior tiene el vértice dentro de la circunferencia, no sobre ella."],
    ],
    expl: "Vértice sobre la circunferencia + dos cuerdas = ángulo inscrito. Mide la mitad del arco que abarca: ∠ = arco / 2.",
  },
  {
    tag: "Semi-inscrito", pill: "p3", fig: "semi",
    q: "Un ángulo tiene su vértice sobre la circunferencia; uno de sus lados es una cuerda y el otro una tangente. ¿Qué tipo es?",
    opts: [
      ["Semi-inscrito"],
      ["Inscrito", "El inscrito tiene DOS cuerdas."],
      ["Exterior", "El exterior tiene el vértice fuera de la circunferencia."],
      ["Del centro", "El del centro tiene el vértice en O y sus lados son radios."],
    ],
    expl: "Cuerda + tangente que se juntan en un punto de la circunferencia = semi-inscrito. Igual que el inscrito, mide la mitad del arco: α = arco / 2.",
  },
  {
    tag: "Interior", pill: "p4", fig: "interior",
    q: "Dos cuerdas se cruzan dentro de la circunferencia (no en el centro). ¿Cómo se calcula el ángulo que forman?",
    opts: [
      ["Semisuma de arcos: (arco₁ + arco₂) / 2"],
      ["Semidiferencia: (lejano − cercano) / 2", "Esa es la fórmula del exterior. Dentro se SUMA."],
      ["Es igual al arco que mira", "Eso solo pasa con el ángulo del centro."],
      ["Es la mitad del arco que mira", "Eso es el inscrito; en el interior también cuenta el arco opuesto."],
    ],
    expl: "Ángulo interior = (arco que mira + arco opuesto) / 2. El arco opuesto es el que está al otro lado de la X, no los de los costados.",
  },
  {
    tag: "Exterior", pill: "p5", fig: "exterior",
    q: "Un ángulo tiene su vértice fuera de la circunferencia. ¿Cómo se calcula?",
    opts: [
      ["(arco lejano − arco cercano) / 2"],
      ["(arco cercano − arco lejano) / 2", "Restado al revés daría un número negativo. Siempre es lejano − cercano."],
      ["(arco lejano + arco cercano) / 2", "Esa es la fórmula del interior. Fuera se RESTA."],
      ["arco lejano / 2", "Falta restar el arco cercano."],
    ],
    expl: "Ángulo exterior = semidiferencia de arcos = (lejano − cercano) / 2. El lejano es el arco grande (el más alejado del vértice) y el cercano el chico.",
  },
  {
    tag: "¿Qué fórmula uso?", pill: "p6",
    q: "¿Cuál es el ÚNICO tipo de ángulo que NO se divide por 2?",
    opts: [
      ["Del centro"],
      ["Inscrito", "El inscrito es la mitad del arco: sí se divide."],
      ["Semi-inscrito", "El semi-inscrito es la mitad del arco: sí se divide."],
      ["Exterior", "El exterior es (lejano − cercano) / 2: sí se divide."],
    ],
    expl: "El ángulo del centro es igual a su arco. Todos los demás (inscrito, semi-inscrito, interior y exterior) llevan un “/ 2”. Olvidar dividir es uno de los errores más comunes.",
  },
  {
    tag: "¿Qué fórmula uso?", pill: "p6",
    q: "Completa el truco: “dentro → ____ , fuera → ____”",
    opts: [
      ["se suma / se resta"],
      ["se resta / se suma", "Es al revés: el interior es semiSUMA y el exterior semiDIFERENCIA."],
      ["se multiplica / se divide", "En ambos casos se divide por 2; lo que cambia es si sumas o restas los arcos."],
      ["se divide / se multiplica", "En ambos casos se divide por 2; lo que cambia es si sumas o restas los arcos."],
    ],
    expl: "Vértice dentro (interior): (arco₁ + arco₂) / 2. Vértice fuera (exterior): (lejano − cercano) / 2.",
  },
  {
    tag: "¿Qué fórmula uso?", pill: "p6",
    q: "Mientras más lejos del centro está el vértice, el ángulo comparado con su arco queda…",
    opts: [
      ["Más pequeño"],
      ["Más grande", "Es al revés: en el centro es igual al arco y desde ahí va disminuyendo."],
      ["Siempre igual al arco", "Solo el ángulo del centro es igual al arco."],
      ["Siempre de 90°", "90° es un caso particular (inscrito en semicircunferencia)."],
    ],
    expl: "En el centro, el ángulo = arco. En el borde (inscrito), ángulo = mitad del arco. Fuera (exterior), además se resta el arco cercano, así que queda todavía más chico.",
  },
  {
    tag: "Propiedades", pill: "p6",
    q: "Un ángulo inscrito en una semicircunferencia (uno de los lados del triángulo es diámetro) mide…",
    opts: [
      ["90°"],
      ["180°", "180° es el arco (la semicircunferencia). El ángulo inscrito es la mitad."],
      ["45°", "Dividiste dos veces: el arco es 180° y el inscrito es 180° / 2."],
      ["60°", "No es un triángulo equilátero; el ángulo que mira el diámetro es recto."],
    ],
    expl: "El diámetro deja un arco de 180°. El ángulo inscrito que lo mira mide 180° / 2 = 90°. Por eso, si un lado del triángulo es diámetro, el ángulo opuesto es recto.",
  },
  {
    tag: "Propiedades", pill: "p6",
    q: "Dos ángulos inscritos miran el mismo arco, pero tienen el vértice en distintos puntos. ¿Qué se cumple?",
    opts: [
      ["Miden lo mismo"],
      ["El que está más cerca del arco es mayor", "No importa dónde esté el vértice: si abarcan el mismo arco, miden lo mismo."],
      ["Suman 180°", "Eso es para ángulos opuestos de un cuadrilátero inscrito."],
      ["Uno es el doble del otro", "El doble aparece entre un central y un inscrito, no entre dos inscritos."],
    ],
    expl: "Ambos miden la mitad del mismo arco, así que son iguales. Es una propiedad muy útil para “trasladar” ángulos en una figura.",
  },
  {
    tag: "Propiedades", pill: "p6",
    q: "Un ángulo inscrito y un ángulo del centro miran el mismo arco. ¿Qué relación tienen?",
    opts: [
      ["El del centro mide el doble que el inscrito"],
      ["Miden lo mismo", "El central es igual al arco, pero el inscrito es la mitad del arco."],
      ["El inscrito mide el doble que el del centro", "Es al revés."],
      ["Suman 180°", "Esa relación es de las dos tangentes (∠P + ∠AOB = 180°)."],
    ],
    expl: "Central = arco; inscrito = arco / 2. Entonces central = 2 · inscrito. Ej: si el inscrito mide 35°, el arco mide 70° y el central 70°.",
  },
  {
    tag: "Propiedades", pill: "p6",
    q: "El radio que llega al punto de tangencia forma con la tangente un ángulo de…",
    opts: [
      ["90°"],
      ["45°", "No: radio y tangente son perpendiculares."],
      ["180°", "180° sería una línea recta; son perpendiculares."],
      ["Depende del tamaño de la circunferencia", "Siempre es 90°, sin importar el tamaño."],
    ],
    expl: "Radio y tangente son perpendiculares: el radio al punto de tangencia forma 90° con la tangente. Esto aparece mucho en triángulos rectángulos con un punto exterior P.",
  },
  {
    tag: "Propiedades", pill: "p6",
    q: "Desde un punto P salen dos tangentes que tocan la circunferencia en A y B. ¿Qué se cumple?",
    opts: [
      ["PA = PB y ∠APB + ∠AOB = 180°"],
      ["PA = PB y ∠APB = ∠AOB", "No son iguales: suman 180°."],
      ["∠APB + ∠AOB = 360°", "Suman 180°. (En el cuadrilátero PAOB hay dos ángulos de 90°: 360° − 180° = 180°.)"],
      ["PA mide el doble de PB", "Los segmentos tangentes desde un mismo punto miden lo mismo."],
    ],
    expl: "Los dos segmentos tangentes miden lo mismo (PA = PB). En el cuadrilátero PAOB, los ángulos en A y B miden 90° (radio ⟂ tangente), por eso ∠P + ∠AOB = 360° − 180° = 180°.",
  },
  {
    tag: "Propiedades", pill: "p6",
    q: "En un cuadrilátero inscrito en una circunferencia, los ángulos opuestos…",
    opts: [
      ["Suman 180°"],
      ["Son iguales", "No necesariamente; lo que se cumple es que suman 180°."],
      ["Suman 360°", "360° es la suma de los CUATRO ángulos del cuadrilátero."],
      ["Suman 90°", "Suman 180°."],
    ],
    expl: "Dos ángulos opuestos de un cuadrilátero inscrito miran entre los dos toda la circunferencia (360°). Cada uno es la mitad de su arco, así que juntos suman 360° / 2 = 180°.",
  },
  {
    tag: "Propiedades", pill: "p6",
    q: "Un triángulo tiene dos lados que son radios de la circunferencia. ¿Qué tipo de triángulo es?",
    opts: [
      ["Isósceles (tiene dos ángulos iguales)"],
      ["Siempre equilátero", "Solo sería equilátero si el tercer lado también midiera un radio."],
      ["Siempre rectángulo", "No necesariamente."],
      ["Escaleno", "Tiene dos lados iguales (los radios), así que no es escaleno."],
    ],
    expl: "Todos los radios miden lo mismo, así que el triángulo tiene dos lados iguales: es isósceles y los ángulos opuestos a esos lados son iguales. Recuerda que los ángulos de un triángulo suman 180°.",
  },
  {
    tag: "Interior", pill: "p4",
    q: "En el ángulo interior, ¿qué arcos se usan en la fórmula?",
    opts: [
      ["El arco que mira el ángulo y el arco opuesto (al otro lado de la X)"],
      ["Los dos arcos de los costados", "Ese es un error común: los de los costados corresponden al otro par de ángulos."],
      ["Solo el arco que mira el ángulo", "Eso sería un inscrito; el interior usa dos arcos."],
      ["El arco más grande y el más chico de la figura", "No: se usan el que mira y su opuesto, sean grandes o chicos."],
    ],
    expl: "Las dos cuerdas forman una X. El ángulo mira un arco, y su ángulo opuesto por el vértice mira el arco de enfrente. Esos dos arcos se suman y se dividen por 2.",
  },
  {
    tag: "Exterior", pill: "p5",
    q: "La fórmula del ángulo exterior (lejano − cercano) / 2 funciona con…",
    opts: [
      ["Dos secantes, una secante y una tangente, o dos tangentes"],
      ["Solo dos secantes", "También sirve con tangentes."],
      ["Solo dos tangentes", "También sirve con secantes."],
      ["Solo con cuerdas", "Con cuerdas que se cruzan dentro se usa la fórmula del interior."],
    ],
    expl: "Mientras el vértice esté fuera, se usa siempre la misma fórmula. Con dos tangentes, el arco lejano es el arco mayor y el cercano el menor (arco mayor = 360° − arco menor).",
  },
  {
    tag: "Propiedades", pill: "p6",
    q: "Los arcos de una circunferencia están en razón 1 : 2 : 3. ¿Qué haces primero?",
    opts: [
      ["Sumo las partes (6) y reparto 360°: cada parte vale 60°"],
      ["Divido 360° en 3", "Hay 3 arcos, pero 6 partes (1 + 2 + 3)."],
      ["Multiplico 1 · 2 · 3", "Las partes se suman, no se multiplican."],
      ["Divido 180° en 6", "Los arcos de toda la circunferencia suman 360°, no 180°."],
    ],
    expl: "1 + 2 + 3 = 6 partes. 360° / 6 = 60° por parte. Arcos: 1·60° = 60°, 2·60° = 120°, 3·60° = 180°.",
  },
  {
    tag: "Método", pill: "p6",
    q: "¿Cuáles son los 3 pasos para resolver cualquier ejercicio de este tema?",
    opts: [
      ["Identificar el tipo de ángulo → escribir la fórmula → reemplazar y despejar"],
      ["Reemplazar los números → identificar el tipo → comprobar", "Si reemplazas antes de saber el tipo, puedes usar la fórmula equivocada."],
      ["Medir con transportador → anotar → dividir por 2", "Todo se calcula con arcos y fórmulas, no midiendo."],
      ["Sumar todos los arcos → dividir por 2 → listo", "Eso solo sirve para el ángulo interior."],
    ],
    expl: "Siempre: (1) identificar el tipo de ángulo (¿dónde está el vértice?), (2) escribir la fórmula, (3) reemplazar y despejar. Dibujar la figura y escribir la propiedad usada ayuda mucho.",
  },
];

const APLICACION = [
  {
    tag: "Del centro", pill: "p1", fig: "centro",
    q: "Un ángulo del centro abarca un arco de 84°. ¿Cuánto mide el ángulo?",
    opts: [
      ["84°"],
      ["42°", "Dividiste por 2, pero el ángulo del centro NO se divide: es igual al arco."],
      ["168°", "Multiplicaste por 2; eso se hace para pasar de un inscrito a su arco."],
      ["276°", "Ese es el resto de la circunferencia (360° − 84°), no el arco que abarca el ángulo."],
    ],
    steps: ["Vértice en el centro y lados radios → <b>ángulo del centro</b>.", "Fórmula: ángulo = arco.", "Ángulo = <b>84°</b>."],
  },
  {
    tag: "Inscrito", pill: "p2", fig: "inscrito",
    q: "Un ángulo inscrito abarca un arco de 96°. ¿Cuánto mide?",
    opts: [
      ["48°"],
      ["96°", "Olvidaste dividir por 2: el inscrito es la mitad del arco."],
      ["192°", "Multiplicaste en vez de dividir."],
      ["132°", "Eso es (360° − 96°) / 2: usaste el arco que el ángulo no abarca."],
    ],
    steps: ["Vértice sobre la circunferencia, lados cuerdas → <b>inscrito</b>.", "Fórmula: ángulo = arco / 2.", "Ángulo = 96° / 2 = <b>48°</b>."],
  },
  {
    tag: "Inscrito (al revés)", pill: "p2",
    q: "Un ángulo inscrito mide 27°. ¿Cuánto mide el arco que abarca?",
    opts: [
      ["54°"],
      ["13,5°", "Dividiste por 2. Si el ángulo es la mitad del arco, el arco es el DOBLE del ángulo."],
      ["27°", "El arco no es igual al inscrito: es el doble."],
      ["153°", "Eso es 180° − 27°; no tiene relación con esta propiedad."],
    ],
    steps: ["<b>Inscrito</b>: ángulo = arco / 2.", "Despejo: arco = 2 · ángulo.", "Arco = 27° · 2 = <b>54°</b>."],
  },
  {
    tag: "Semi-inscrito", pill: "p3", fig: "semi",
    q: "Una tangente y una cuerda forman un ángulo semi-inscrito que abarca un arco de 150°. ¿Cuánto mide el ángulo?",
    opts: [
      ["75°"],
      ["150°", "Olvidaste dividir por 2: el semi-inscrito es la mitad del arco."],
      ["105°", "Eso es (360° − 150°) / 2: usaste el otro arco."],
      ["300°", "Multiplicaste en vez de dividir."],
    ],
    steps: ["Cuerda + tangente con vértice en la circunferencia → <b>semi-inscrito</b>.", "Fórmula: ángulo = arco / 2.", "Ángulo = 150° / 2 = <b>75°</b>."],
  },
  {
    tag: "Semicircunferencia", pill: "p2",
    q: "En un triángulo ABC inscrito en una circunferencia, AB es diámetro. ¿Cuánto mide el ángulo ACB?",
    opts: [
      ["90°"],
      ["180°", "180° es el arco que abarca (la semicircunferencia). El inscrito es la mitad."],
      ["45°", "Dividiste dos veces."],
      ["60°", "No es un triángulo equilátero."],
    ],
    steps: ["AB es diámetro → el arco AB mide <b>180°</b>.", "∠ACB es <b>inscrito</b> y mira ese arco.", "∠ACB = 180° / 2 = <b>90°</b> (inscrito en semicircunferencia)."],
  },
  {
    tag: "Interior", pill: "p4", fig: "interior",
    q: "Dos cuerdas se cortan dentro de la circunferencia. El ángulo abarca un arco de 100° y el arco opuesto mide 60°. ¿Cuánto mide el ángulo?",
    opts: [
      ["80°"],
      ["20°", "Restaste los arcos: eso es para el exterior. Dentro se SUMA."],
      ["160°", "Sumaste bien, pero olvidaste dividir por 2."],
      ["100°", "Ese es solo uno de los arcos; hay que sumar ambos y dividir por 2."],
    ],
    steps: ["Vértice dentro, dos cuerdas → <b>interior</b>.", "Fórmula: α = (arco₁ + arco₂) / 2.", "α = (100° + 60°) / 2 = 160° / 2 = <b>80°</b>."],
  },
  {
    tag: "Exterior", pill: "p5", fig: "exterior",
    q: "Desde un punto P salen dos secantes. El arco lejano mide 150° y el cercano 40°. ¿Cuánto mide el ángulo en P?",
    opts: [
      ["55°"],
      ["95°", "Sumaste los arcos: fuera se RESTA."],
      ["110°", "Restaste bien, pero olvidaste dividir por 2."],
      ["75°", "Solo dividiste el arco lejano; falta restar el cercano."],
    ],
    steps: ["Vértice fuera → <b>exterior</b>.", "Fórmula: β = (lejano − cercano) / 2.", "β = (150° − 40°) / 2 = 110° / 2 = <b>55°</b>."],
  },
  {
    tag: "Exterior", pill: "p5",
    q: "Desde P salen una secante y una tangente. El arco lejano mide 200° y el cercano 70°. ¿Cuánto mide el ángulo en P?",
    opts: [
      ["65°"],
      ["135°", "Sumaste y dividiste: esa es la fórmula del interior."],
      ["130°", "Restaste bien, pero olvidaste dividir por 2."],
      ["100°", "Solo dividiste el arco lejano; falta restar el cercano."],
    ],
    steps: ["Vértice fuera (secante + tangente) → <b>exterior</b>.", "Fórmula: β = (lejano − cercano) / 2.", "β = (200° − 70°) / 2 = 130° / 2 = <b>65°</b>."],
  },
  {
    tag: "Dos tangentes", pill: "p5",
    q: "Desde P salen dos tangentes que tocan la circunferencia en A y B. El arco menor AB mide 120°. ¿Cuánto mide el ángulo en P?",
    opts: [
      ["60°"],
      ["120°", "120° es el ángulo del centro AOB, no el ángulo en P."],
      ["180°", "Sumaste los arcos: (240° + 120°) / 2. Fuera se resta."],
      ["240°", "240° es el arco mayor, no el ángulo."],
    ],
    steps: ["Vértice fuera con dos tangentes → <b>exterior</b>.", "Arco mayor (lejano) = 360° − 120° = 240°.", "P = (240° − 120°) / 2 = 120° / 2 = <b>60°</b>.", "Comprobación: ∠AOB = 120° y 120° + 60° = 180° ✔"],
  },
  {
    tag: "Dos tangentes", pill: "p5",
    q: "PA y PB son tangentes a la circunferencia de centro O, y el ángulo APB mide 50°. ¿Cuánto mide el ángulo del centro AOB?",
    opts: [
      ["130°"],
      ["50°", "No son iguales: ∠APB y ∠AOB suman 180°."],
      ["100°", "Duplicaste el ángulo; esa relación es entre inscrito y central."],
      ["310°", "Restaste de 360°; la propiedad es con 180°."],
    ],
    steps: ["Propiedad de <b>dos tangentes</b>: ∠APB + ∠AOB = 180°.", "∠AOB = 180° − 50°.", "∠AOB = <b>130°</b>."],
  },
  {
    tag: "Inscrito y central", pill: "p1",
    q: "Un ángulo inscrito mide 35°. ¿Cuánto mide el ángulo del centro que abarca el mismo arco?",
    opts: [
      ["70°"],
      ["35°", "El central no es igual al inscrito: es el doble."],
      ["17,5°", "Dividiste; el central es el DOBLE del inscrito."],
      ["145°", "Eso es 180° − 35°; no tiene relación con esta propiedad."],
    ],
    steps: ["<b>Inscrito</b>: arco = 2 · 35° = 70°.", "<b>Del centro</b>: ángulo = arco.", "Ángulo del centro = <b>70°</b>."],
  },
  {
    tag: "Semi-inscrito", pill: "p3",
    q: "Una tangente en A y una cuerda AB forman un ángulo. El ángulo del centro AOB mide 124°. ¿Cuánto mide el ángulo semi-inscrito?",
    opts: [
      ["62°"],
      ["124°", "124° es el arco AB; el semi-inscrito es la mitad."],
      ["248°", "Multiplicaste en vez de dividir."],
      ["28°", "28° es el ángulo OAB del triángulo isósceles AOB. El semi-inscrito es 90° − 28° = 62° (radio ⟂ tangente)."],
    ],
    steps: ["Arco AB = ∠AOB = 124° (el central es igual a su arco).", "<b>Semi-inscrito</b> = arco / 2.", "α = 124° / 2 = <b>62°</b>."],
  },
  {
    tag: "Interior (despejar)", pill: "p4",
    q: "Un ángulo interior mide 85° y uno de sus arcos mide 130°. ¿Cuánto mide el otro arco?",
    opts: [
      ["40°"],
      ["45°", "Hiciste 130° − 85°: faltó multiplicar el ángulo por 2 primero."],
      ["215°", "Sumaste 85° + 130°; hay que despejar."],
      ["300°", "Multiplicaste por 2 (170°) pero sumaste 130° en vez de restarlo."],
    ],
    steps: ["<b>Interior</b>: 85° = (130° + α) / 2.", "Multiplico por 2: 170° = 130° + α.", "Resto 130°: <b>α = 40°</b>."],
  },
  {
    tag: "Interior (despejar)", pill: "p4",
    q: "Un ángulo interior mide 70° y uno de sus arcos mide 90°. ¿Cuánto mide el otro arco?",
    opts: [
      ["50°"],
      ["20°", "Hiciste 90° − 70°: faltó multiplicar el ángulo por 2 primero."],
      ["230°", "Multiplicaste por 2 pero sumaste 90° en vez de restarlo."],
      ["25°", "Después de restar (140° − 90° = 50°) ya está listo; no hay que dividir otra vez."],
    ],
    steps: ["<b>Interior</b>: 70° = (90° + x) / 2.", "Multiplico por 2: 140° = 90° + x.", "Resto 90°: <b>x = 50°</b>."],
  },
  {
    tag: "Exterior (despejar)", pill: "p5",
    q: "Un ángulo exterior formado por dos secantes mide 30° y el arco cercano mide 50°. ¿Cuánto mide el arco lejano?",
    opts: [
      ["110°"],
      ["10°", "Al despejar restaste el cercano; hay que SUMARLO (pasa sumando)."],
      ["80°", "Sumaste 30° + 50°; faltó multiplicar el ángulo por 2 primero."],
      ["160°", "Hiciste (30° + 50°) · 2; el orden correcto es 30° · 2 + 50°."],
    ],
    steps: ["<b>Exterior</b>: 30° = (L − 50°) / 2.", "Multiplico por 2: 60° = L − 50°.", "Sumo 50°: <b>L = 110°</b>."],
  },
  {
    tag: "Arcos en razón", pill: "p6",
    q: "Los tres arcos de una circunferencia están en razón 1 : 2 : 3. ¿Cuánto mide el arco mayor?",
    opts: [
      ["180°"],
      ["120°", "Ese es el arco mediano (2 partes)."],
      ["60°", "Ese es el valor de UNA parte (el arco menor)."],
      ["90°", "Dividiste 360° en 4 partes; son 1 + 2 + 3 = 6 partes."],
    ],
    steps: ["Sumo las partes: 1 + 2 + 3 = 6.", "Cada parte: 360° / 6 = 60°.", "Arco mayor = 3 · 60° = <b>180°</b> (arcos: 60°, 120°, 180°)."],
  },
  {
    tag: "Arco que falta", pill: "p6",
    q: "Tres puntos dividen la circunferencia en tres arcos. Dos de ellos miden 100° y 150°. ¿Cuánto mide el tercero?",
    opts: [
      ["110°"],
      ["250°", "Esa es la suma de los dos arcos conocidos; falta restarla de 360°."],
      ["50°", "Eso es 150° − 100°; los arcos se completan con 360°."],
      ["210°", "Solo restaste 150°; faltó restar también el de 100°."],
    ],
    steps: ["Todos los arcos suman <b>360°</b>.", "Tercer arco = 360° − (100° + 150°).", "Tercer arco = 360° − 250° = <b>110°</b>."],
  },
  {
    tag: "Mismo arco", pill: "p2",
    q: "Los ángulos inscritos ACB y ADB abarcan el mismo arco AB. Si ∠ACB = 38°, ¿cuánto mide ∠ADB?",
    opts: [
      ["38°"],
      ["76°", "76° es el arco AB; ∠ADB también es inscrito, así que es la mitad."],
      ["19°", "No se divide: los inscritos que miran el mismo arco son iguales."],
      ["142°", "Eso es 180° − 38°; sería si fueran ángulos opuestos de un cuadrilátero inscrito."],
    ],
    steps: ["Ambos son <b>inscritos</b> y miran el <b>mismo arco AB</b>.", "Propiedad: inscritos que miran el mismo arco son iguales.", "∠ADB = <b>38°</b>."],
  },
  {
    tag: "Triángulo isósceles", pill: "p1",
    q: "En el triángulo AOB, O es el centro y A, B están en la circunferencia. Si ∠AOB = 100°, ¿cuánto mide ∠OAB?",
    opts: [
      ["40°"],
      ["80°", "80° es la suma de los dos ángulos iguales; falta dividir por 2."],
      ["50°", "Eso es la mitad del central, como un inscrito; aquí hay que usar el triángulo."],
      ["100°", "Ese es el ángulo del centro, no el de la base."],
    ],
    steps: ["OA y OB son radios → el triángulo es <b>isósceles</b>: ∠OAB = ∠OBA.", "Los ángulos del triángulo suman 180°: 180° − 100° = 80°.", "∠OAB = 80° / 2 = <b>40°</b>."],
  },
  {
    tag: "Radio ⟂ tangente", pill: "p6",
    q: "PA es tangente a la circunferencia de centro O en el punto A. Si ∠AOP = 58°, ¿cuánto mide ∠APO?",
    opts: [
      ["32°"],
      ["58°", "No son iguales; el triángulo OAP es rectángulo en A."],
      ["122°", "Hiciste 180° − 58° y olvidaste el ángulo recto en A."],
      ["29°", "Dividiste 58° por 2; aquí no hay inscrito, hay un triángulo rectángulo."],
    ],
    steps: ["OA es radio y PA tangente → <b>∠OAP = 90°</b> (radio ⟂ tangente).", "En el triángulo OAP: ∠APO = 180° − 90° − 58°.", "∠APO = <b>32°</b>."],
  },
];

/* Preguntas de desarrollo con respuestas numéricas */
const DESARROLLO = [
  {
    tag: "Razón de arcos + inscrito", pill: "p2",
    q: "Un triángulo ABC está inscrito en una circunferencia y los arcos AB, BC y CA están en razón 2 : 3 : 4. Calcula los tres ángulos del triángulo.",
    fields: [["∠C (mira el arco AB)", 40], ["∠A (mira el arco BC)", 60], ["∠B (mira el arco CA)", 80]],
    hint: "Suma las partes para saber cuánto vale cada una. Cada ángulo del triángulo es inscrito y mide la mitad del arco opuesto.",
    steps: [
      "Partes: 2 + 3 + 4 = 9. Cada parte vale 360° / 9 = 40°.",
      "Arcos: AB = 2 · 40° = 80°, BC = 3 · 40° = 120°, CA = 4 · 40° = 160°.",
      "Cada ángulo es <b>inscrito</b> y mira el arco opuesto: ∠C = 80° / 2 = <b>40°</b>, ∠A = 120° / 2 = <b>60°</b>, ∠B = 160° / 2 = <b>80°</b>.",
      "Comprobación: 40° + 60° + 80° = 180° ✔",
    ],
  },
  {
    tag: "Cuadrilátero inscrito", pill: "p6",
    q: "El cuadrilátero ABCD está inscrito en una circunferencia. El ángulo A mide 85° y el ángulo B mide 110°. Calcula los ángulos C y D.",
    fields: [["∠C", 95], ["∠D", 70]],
    hint: "En un cuadrilátero inscrito, los ángulos opuestos suman 180°. ¿Cuál es el opuesto de A? ¿Y el de B?",
    steps: [
      "Propiedad: en un <b>cuadrilátero inscrito</b> los ángulos opuestos suman 180°.",
      "C es opuesto a A: ∠C = 180° − 85° = <b>95°</b>.",
      "D es opuesto a B: ∠D = 180° − 110° = <b>70°</b>.",
      "Comprobación: 85° + 110° + 95° + 70° = 360° ✔",
    ],
  },
  {
    tag: "Semicircunferencia + triángulo", pill: "p2",
    q: "AB es diámetro y C es un punto de la circunferencia. Si el ángulo CAB mide 35°, calcula el ángulo ABC y el arco BC.",
    fields: [["∠ABC", 55], ["Arco BC", 70]],
    hint: "¿Cuánto mide ∠ACB si AB es diámetro? Luego usa la suma de ángulos del triángulo. ∠CAB es inscrito: ¿qué arco mira?",
    steps: [
      "AB es diámetro → ∠ACB = <b>90°</b> (inscrito en semicircunferencia).",
      "Triángulo ABC: ∠ABC = 180° − 90° − 35° = <b>55°</b>.",
      "∠CAB es <b>inscrito</b> y mira el arco BC: arco BC = 2 · 35° = <b>70°</b>.",
    ],
  },
  {
    tag: "Exterior con ecuación", pill: "p5",
    q: "Desde P salen dos secantes. El arco lejano mide el triple del arco cercano y el ángulo en P mide 40°. ¿Cuánto mide cada arco?",
    fields: [["Arco cercano", 40], ["Arco lejano", 120]],
    hint: "Llama x al arco cercano; el lejano es 3x. Usa la fórmula del exterior y despeja.",
    steps: [
      "Sea x el arco cercano → arco lejano = 3x.",
      "<b>Exterior</b>: 40° = (3x − x) / 2 = 2x / 2 = x.",
      "x = 40° → cercano = <b>40°</b>, lejano = 3 · 40° = <b>120°</b>.",
      "Comprobación: (120° − 40°) / 2 = 40° ✔",
    ],
  },
  {
    tag: "Interior con ecuación", pill: "p4",
    q: "Las cuerdas AC y BD se cortan en E. El ángulo AEB mide 70°, el arco AB mide 2x + 10° y el arco CD mide x + 10°. Calcula x y los dos arcos.",
    fields: [["x", 40], ["Arco AB", 90], ["Arco CD", 50]],
    hint: "∠AEB mira el arco AB y su opuesto por el vértice mira el arco CD. Plantea la fórmula del interior.",
    steps: [
      "<b>Interior</b>: 70° = (arco AB + arco CD) / 2 = ((2x + 10°) + (x + 10°)) / 2.",
      "Multiplico por 2: 140° = 3x + 20°.",
      "3x = 120° → <b>x = 40°</b>.",
      "Arco AB = 2 · 40° + 10° = <b>90°</b>; arco CD = 40° + 10° = <b>50°</b>.",
      "Comprobación: (90° + 50°) / 2 = 70° ✔",
    ],
  },
  {
    tag: "Dos tangentes", pill: "p5",
    q: "Desde P salen dos tangentes que tocan la circunferencia (centro O) en A y B. El ángulo APB mide 40°. Calcula el arco menor AB, el arco mayor AB y el ángulo AOB.",
    fields: [["Arco menor AB", 140], ["Arco mayor AB", 220], ["∠AOB", 140]],
    hint: "Si el arco menor es x, el mayor es 360° − x. Usa la fórmula del exterior. O más rápido: ∠P + ∠AOB = 180°.",
    steps: [
      "Camino rápido: ∠AOB = 180° − 40° = <b>140°</b> (propiedad de dos tangentes).",
      "El central es igual a su arco → arco menor AB = <b>140°</b>.",
      "Arco mayor = 360° − 140° = <b>220°</b>.",
      "Comprobación con el <b>exterior</b>: (220° − 140°) / 2 = 80° / 2 = 40° ✔",
    ],
  },
  {
    tag: "Centrales + inscritos", pill: "p1",
    q: "El triángulo ABC está inscrito en una circunferencia de centro O (O queda dentro del triángulo). Si ∠AOB = 110° y ∠BOC = 130°, calcula el arco CA y los tres ángulos del triángulo.",
    fields: [["Arco CA", 120], ["∠ACB", 55], ["∠BAC", 65], ["∠ABC", 60]],
    hint: "Los centrales son iguales a sus arcos. El arco que falta se saca con 360°. Cada ángulo del triángulo es inscrito: la mitad del arco opuesto.",
    steps: [
      "<b>Del centro</b>: arco AB = 110° y arco BC = 130°.",
      "Arco CA = 360° − 110° − 130° = <b>120°</b>.",
      "<b>Inscritos</b>: ∠ACB = 110° / 2 = <b>55°</b>; ∠BAC = 130° / 2 = <b>65°</b>; ∠ABC = 120° / 2 = <b>60°</b>.",
      "Comprobación: 55° + 65° + 60° = 180° ✔",
    ],
  },
  {
    tag: "Secante y tangente", pill: "p5",
    q: "Desde P salen una tangente y una secante. El arco lejano mide 2x + 40°, el arco cercano mide x, y el ángulo en P mide 50°. Calcula x y el arco lejano.",
    fields: [["x (arco cercano)", 60], ["Arco lejano", 160]],
    hint: "Fórmula del exterior: 50° = (lejano − cercano) / 2. Cuidado con el paréntesis al restar.",
    steps: [
      "<b>Exterior</b>: 50° = ((2x + 40°) − x) / 2.",
      "Multiplico por 2: 100° = x + 40°.",
      "<b>x = 60°</b> → arco lejano = 2 · 60° + 40° = <b>160°</b>.",
      "Comprobación: (160° − 60°) / 2 = 50° ✔",
    ],
  },
  {
    tag: "Semi-inscrito = inscrito", pill: "p3",
    q: "Una tangente en A y la cuerda AB forman un ángulo semi-inscrito que mide 3x. El punto C está en el arco mayor AB y el ángulo inscrito ACB mide 2x + 15°. Ambos ángulos abarcan el arco AB. Calcula x y el arco AB.",
    fields: [["x", 15], ["Arco AB", 90]],
    hint: "El semi-inscrito y el inscrito miden la mitad del mismo arco… entonces son iguales.",
    steps: [
      "<b>Semi-inscrito</b> = arco AB / 2 y <b>inscrito</b> = arco AB / 2 → son iguales.",
      "3x = 2x + 15° → <b>x = 15°</b>.",
      "Cada ángulo mide 3 · 15° = 45°, así que arco AB = 2 · 45° = <b>90°</b>.",
    ],
  },
  {
    tag: "Cuadrilátero con ecuación", pill: "p6",
    q: "ABCD es un cuadrilátero inscrito. ∠A = 2x + 10° y ∠C = 3x − 5°. Calcula x, ∠A y ∠C.",
    fields: [["x", 35], ["∠A", 80], ["∠C", 100]],
    hint: "A y C son opuestos. ¿Cuánto suman los ángulos opuestos de un cuadrilátero inscrito?",
    steps: [
      "<b>Cuadrilátero inscrito</b>: ∠A + ∠C = 180°.",
      "(2x + 10°) + (3x − 5°) = 180° → 5x + 5° = 180°.",
      "5x = 175° → <b>x = 35°</b>.",
      "∠A = 2 · 35° + 10° = <b>80°</b>; ∠C = 3 · 35° − 5° = <b>100°</b>. Suman 180° ✔",
    ],
  },
  {
    tag: "Diámetro + ecuación", pill: "p2",
    q: "AB es diámetro y C está sobre la circunferencia. El arco AC (el que no contiene a B) mide 2x y el arco CB mide x + 30°. Calcula x, ∠ABC y ∠BAC.",
    fields: [["x", 50], ["∠ABC", 50], ["∠BAC", 40]],
    hint: "Los arcos AC y CB forman juntos una semicircunferencia. Luego, cada ángulo es inscrito: la mitad del arco que mira.",
    steps: [
      "AB es diámetro → arco AC + arco CB = <b>180°</b>.",
      "2x + x + 30° = 180° → 3x = 150° → <b>x = 50°</b>. Arcos: AC = 100°, CB = 80°.",
      "∠ABC es <b>inscrito</b> y mira el arco AC: 100° / 2 = <b>50°</b>.",
      "∠BAC mira el arco CB: 80° / 2 = <b>40°</b>.",
      "Comprobación: ∠ACB = 90° y 50° + 40° + 90° = 180° ✔",
    ],
  },
];

/* Preguntas abiertas con respuesta modelo */
const ABIERTAS = [
  {
    q: "Explica con tus palabras cómo decides qué fórmula usar cuando te dan un ángulo en una circunferencia.",
    model: [
      "Primero miro <b>dónde está el vértice</b>:",
      "En el centro → ángulo del centro = arco.",
      "Sobre la circunferencia → inscrito (dos cuerdas) o semi-inscrito (cuerda + tangente) = arco / 2.",
      "Dentro, pero no en el centro → interior = (arco₁ + arco₂) / 2.",
      "Fuera → exterior = (lejano − cercano) / 2. Truco: dentro se suma, fuera se resta.",
    ],
  },
  {
    q: "Explica por qué todo ángulo inscrito en una semicircunferencia mide 90°.",
    model: [
      "El diámetro divide la circunferencia en dos arcos de 180°.",
      "Un ángulo con vértice en la circunferencia cuyos lados pasan por los extremos del diámetro es <b>inscrito</b> y abarca un arco de 180°.",
      "Como el inscrito mide la mitad del arco: 180° / 2 = 90°.",
    ],
  },
  {
    q: "Una compañera resolvió un ángulo exterior (arco lejano 138°, cercano 50°) así: (50° + 138°) / 2 = 94°. Encuentra el error y corrígelo.",
    model: [
      "El error: <b>sumó</b> los arcos. Eso es la fórmula del interior; con el vértice fuera se <b>resta</b>.",
      "Además, hay que restar en orden: <b>lejano − cercano</b>.",
      "Corrección: (138° − 50°) / 2 = 88° / 2 = <b>44°</b>.",
    ],
  },
  {
    q: "¿Por qué ∠APB + ∠AOB = 180° cuando PA y PB son tangentes? Explícalo usando el cuadrilátero PAOB.",
    model: [
      "OA y OB son radios que llegan a los puntos de tangencia, así que ∠OAP = ∠OBP = 90° (radio ⟂ tangente).",
      "Los ángulos de un cuadrilátero suman 360°.",
      "Entonces ∠APB + ∠AOB = 360° − 90° − 90° = <b>180°</b>.",
    ],
  },
];
