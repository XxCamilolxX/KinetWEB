import auroraImg from "../assets/aurora_cafe.png";
import fornoImg from "../assets/forno_pizzeria.png";
import nocturnoImg from "../assets/nocturno_acoustics.png";
import spaceImg from "../assets/kinet_space.png";

export const navItems = [
  { label: "Inicio", href: "#top" },
  { label: "Como funciona", href: "#engine" },
  { label: "Trabajos", href: "#lab" },
  { label: "Contacto", href: "#contacto" }
];

export const heroSignals = [
  "Branding generativo",
  "Scroll con fisica",
  "Interaccion tactil",
  "Listo para stand"
];

export const heroRoutes = [
  {
    id: "fair",
    label: "Voy a una feria",
    title: "Tu stand necesita algo mejor que un brochure olvidado en una mesa.",
    description:
      "Kinet convierte la pantalla del stand en una experiencia guiada para mostrar que hace tu producto, por que importa y como seguir la conversacion despues del evento.",
    output: "Experiencia interactiva para stand",
    outcome: "Mas tiempo de atencion y conversaciones comerciales mucho mas utiles.",
    tags: ["Stand", "Tablet", "Pantalla vertical"]
  },
  {
    id: "product",
    label: "Quiero mostrar un producto",
    title: "Si tu producto requiere explicacion, la interfaz tiene que hacer parte del trabajo.",
    description:
      "Kinet construye catalogos interactivos y demos visuales para que el visitante explore funciones, acabados o diferenciales sin depender de una explicacion larga.",
    output: "Catalogo interactivo o demo de producto",
    outcome: "Tu propuesta se entiende mejor y se recuerda mas que con una ficha tecnica.",
    tags: ["Catalogo", "Hotspots", "3D ligero"]
  },
  {
    id: "space",
    label: "Necesito explicar un proyecto",
    title: "Cuando el cliente tiene que imaginar demasiado, la venta se enfria.",
    description:
      "Kinet arma recorridos visuales para arquitectura, inmobiliario o servicios donde materiales, etapas y comparaciones se ven en pantalla con claridad y sin depender de VR.",
    output: "Recorrido interactivo para proyecto",
    outcome: "Las decisiones salen mas rapido porque la visualizacion acompana la conversacion.",
    tags: ["Arquitectura", "Inmobiliario", "Configuracion"]
  }
];

export const heroMetrics = [
  { value: "01", label: "Una pieza que muestra, explica y ayuda a vender" },
  { value: "60fps", label: "Objetivo de fluidez para tabletas y hardware de stand" },
  { value: "Sin PDFs", label: "Menos material olvidado, mas experiencia util" }
];

export const storyChapters = [
  {
    id: "brecha",
    chapter: "01",
    eyebrow: "Atencion",
    title: "El problema no es la falta de contenido. Es la falta de reaccion.",
    description:
      "En feria, casi todo el material es pasivo. El visitante mira, ignora, sigue caminando. Kinet entra justo ahi: en la distancia entre ver algo y querer tocarlo.",
    bullets: [
      "Sustituir brochures invisibles por recorridos vivos",
      "Convertir la pieza grafica en interfaz util",
      "Hacer que la historia de marca responda al gesto"
    ],
    stageLabel: "Pasivo vs interactivo",
    stageLead: "De brochure a pieza que responde",
    stageCode: "ATTN_BREAK",
    matrix: [
      { value: "PDF", label: "material que no pide accion" },
      { value: "Loop", label: "pantalla que no conversa" },
      { value: "Touch", label: "inicio del recorrido" }
    ]
  },
  {
    id: "editorial",
    chapter: "02",
    eyebrow: "Editorial",
    title: "La rejilla no desaparece al programar. Se vuelve comportamiento.",
    description:
      "La identidad no se pega encima del codigo. Se traduce a ritmo, densidad, tension visual y transiciones. El diseno editorial sigue mandando, pero ahora tambien se mueve.",
    bullets: [
      "Tipografia como estructura y no solo decoracion",
      "Capas que se abren por scroll, toque o hover",
      "Precision grafica sin caer en plantilla"
    ],
    stageLabel: "La rejilla entra en movimiento",
    stageLead: "Codigo que respeta la composicion",
    stageCode: "GRID_RUNTIME",
    matrix: [
      { value: "Tipo", label: "jerarquia con caracter" },
      { value: "Flow", label: "scroll como tempo" },
      { value: "Code", label: "modular sin perder direccion" }
    ]
  },
  {
    id: "touch",
    chapter: "03",
    eyebrow: "Superficie",
    title: "Cada formato cotidiano puede comportarse como una pequena instalacion.",
    description:
      "Un iPad, un kiosko, una pantalla vertical o una mesa tactil pueden convertirse en piezas de marca con logica propia. Lo importante no es el gadget: es la coreografia.",
    bullets: [
      "Micrositios de stand con una narrativa clara",
      "Catalogos 3D que se exploran, no solo se miran",
      "Interfaces pensadas para dedo, no para cursor de oficina"
    ],
    stageLabel: "Coreografia de superficie",
    stageLead: "Pantallas que se comportan como objetos de marca",
    stageCode: "TACTILE_STACK",
    matrix: [
      { value: "iPad", label: "soporte para exploracion guiada" },
      { value: "Kiosk", label: "demo comercial en alto trafico" },
      { value: "Wall", label: "presencia visual de gran escala" }
    ]
  },
  {
    id: "runtime",
    chapter: "04",
    eyebrow: "Runtime",
    title: "La pieza tiene que verse ambiciosa sin romperse en condiciones reales.",
    description:
      "Tomamos recursos del mundo interactivo y del videojuego, pero con criterio: menos ruido, mas rendimiento, mejor control del frame budget y una base modular que luego pueda crecer.",
    bullets: [
      "Arquitectura pensada para evolucionar",
      "Experiencias ligeras para entornos de feria",
      "Preparado para sumar motion, video, 3D o CMS despues"
    ],
    stageLabel: "Rendimiento con criterio",
    stageLead: "Impacto visual que no castiga el hardware",
    stageCode: "FRAME_BUDGET",
    matrix: [
      { value: "Light", label: "assets contenidos y bien orquestados" },
      { value: "Mod", label: "componentes listos para iterar" },
      { value: "Ready", label: "base escalable para demos reales" }
    ]
  }
];

export const sampleWorks = [
  {
    id: "aurora-cafe",
    code: "LAB-01",
    title: "Catálogo Táctil de Especialidad",
    category: "Menú Inmersivo 3D",
    sector: "Gastronomía / Cafetería de Especialidad",
    url: "https://aurora-cafe-carta-npzj-bo068wrcp-alekxander00s-projects.vercel.app/",
    summary: "Transformación de la carta de café tradicional en una experiencia digital inmersiva, superando las limitaciones del formato impreso o PDF.",
    problem: "Las cartas tradicionales en formato impreso o PDF reducen la experiencia del café de especialidad a una simple lista de precios, perdiendo el atractivo visual del producto real.",
    solution: "Transformamos el menú en un entorno de exploración. Desarrollamos una interfaz web que integra modelos 3D interactivos, permitiendo al usuario rotar, acercar y detallar la textura de las bebidas y la pastelería antes de ordenar. El 3D deja de ser un adorno para convertirse en la principal herramienta de venta.",
    image: auroraImg,
    interactions: [
      "Exploración y rotación de modelos 3D",
      "Detalle táctil de texturas de repostería",
      "Filtros de ingredientes interactivos",
      "Transiciones fluidas entre categorías"
    ],
    surfaces: ["iPad en mesa", "Pantalla táctil de pedido", "Menú QR móvil"],
    note: "Optimizado para tablets y pantallas táctiles de alta frecuencia de refresco, mejorando el ticket promedio de compra mediante apetito visual."
  },
  {
    id: "forno-pizzeria",
    code: "LAB-02",
    title: "Exhibición de Producto Reactivo",
    category: "Landing Page / WebGL",
    sector: "Consumo Masivo / Pizzería",
    url: "https://forno-pizzeria.vercel.app/",
    summary: "Exhibición digital hiperrealista que supera la barrera de la fotografía plana para incentivar la compra impulsiva de alimentos.",
    problem: "Vender comida a través de una pantalla exige superar la barrera del 'apetito visual'. Una fotografía plana no transmite la dimensión, los ingredientes ni la textura del producto.",
    solution: "Construimos un catálogo virtual enfocado enteramente en el hiperrealismo. Optimizamos modelos 3D de alta fidelidad para que corrieran de manera fluida en el navegador. El usuario controla la cámara y la rotación de las pizzas, generando un recorrido visual interactivo que provoca una reacción inmediata y acelera la decisión de compra.",
    image: fornoImg,
    interactions: [
      "Rotación interactiva de pizzas 3D WebGL",
      "Visualización por capas de ingredientes",
      "Desplazamiento horizontal tipo carrusel 3D",
      "Zoom con enfoque de cámara cinematográfico"
    ],
    surfaces: ["Web de escritorio", "Móvil reactivo", "Kiosko de autoservicio"],
    note: "Logra 60fps constantes en navegadores móviles estándar mediante optimización de polígonos y mapas de normales."
  },
  {
    id: "nocturno-acoustics",
    code: "LAB-03",
    title: "El Laboratorio de Señal",
    category: "Instalación Táctil con Físicas",
    sector: "Hardware de Audio / Tecnología Musical",
    url: "https://nocturno-acoustics.vercel.app/",
    summary: "Simulación táctil de sintetizadores modulares que elimina el caos de cables físicos en stands y ferias, facilitando la comprensión comercial.",
    problem: "En las ferias de música, exhibir hardware complejo como sintetizadores modulares suele resultar en stands saturados de cables físicos que confunden al visitante. Explicar el 'flujo de la señal' de manera rápida y atractiva es imposible utilizando catálogos técnicos o videos pasivos.",
    solution: "Sustituimos el caos del hardware físico por un laboratorio de sonido digital diseñado para pantallas táctiles. Creamos una interfaz basada en nodos móviles y cables vectoriales que responden a físicas de resorte en tiempo real. El usuario interactúa conectando los módulos para modificar el audio directamente en el navegador, entendiendo el producto a través del tacto y la experimentación en lugar de la lectura.",
    image: nocturnoImg,
    interactions: [
      "Conexión de cables vectoriales interactivos",
      "Físicas de resorte y rebote en tiempo real",
      "Modulación de audio en el navegador",
      "Nodos de control y knobs multitouch"
    ],
    surfaces: ["Pantalla táctil vertical", "Mesa interactiva de feria", "Tablet demo"],
    note: "Una alternativa digital interactiva ideal para ferias comerciales y lanzamientos de productos de alta complejidad tecnológica."
  },
  {
    id: "kinet-space",
    code: "LAB-04",
    title: "Configurador Espacial Inmobiliario",
    category: "Visualizador 3D Multitextura",
    sector: "Arquitectura / Real Estate / Diseño de Interiores",
    url: "https://kinet-space.vercel.app/",
    summary: "Visualizador interactivo 3D para salas de ventas que permite a los compradores experimentar la iluminación, acabados y distribución de inmuebles en construcción.",
    problem: "Vender propiedades sobre planos o renders estáticos obliga al comprador a un gran esfuerzo de imaginación, ralentizando la toma de decisiones y enfriando el proceso comercial.",
    solution: "Desarrollamos un configurador de ambientes 3D en tiempo real. El usuario interactúa modificando materiales (maderas, mármoles, microcemento), simulando la iluminación solar del inmueble según la hora del día y realizando un recorrido interactivo de 360° sin necesidad de cascos de realidad virtual.",
    image: spaceImg,
    interactions: [
      "Intercambio dinámico de texturas y materiales",
      "Simulación de iluminación solar día/tarde/noche",
      "Rotación libre de cámara 360° en baja latencia",
      "Planos de planta interactivos integrados con vista 3D"
    ],
    surfaces: ["Pantalla multitáctil en sala de ventas", "Web de preventa", "Tablet para asesores"],
    note: "Perfecto para proyectos residenciales y de oficinas que buscan acelerar cierres comerciales mostrando el producto terminado."
  }
];

export const closingSignals = [
  "Stand interactivo",
  "Catalogo navegable",
  "Demo comercial",
  "Pantalla tactil"
];
