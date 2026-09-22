export interface SpecificLanding {
  slug: string;
  label: string;
  title: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  primaryCta: string;
  secondaryCta: string;
  subject: string;
  stats: {
    value: string;
    label: string;
    description: string;
  }[];
  pains: {
    title: string;
    description: string;
  }[];
  solution: {
    title: string;
    description: string;
  }[];
  process: {
    title: string;
    description: string;
  }[];
  fit: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const specificLandings: SpecificLanding[] = [
  {
    slug: "crm-renovaciones",
    label: "CRM de renovaciones",
    title: "CRM de renovaciones para pymes | doscientos",
    description:
      "CRM a medida para controlar contratos, vencimientos, incidencias y seguimiento comercial. Evita renovaciones perdidas con una cola de trabajo clara.",
    eyebrow: "Contratos, vencimientos y seguimiento",
    heroTitle: "Deja de perder renovaciones",
    heroHighlight: "por depender de Excel y memoria",
    heroDescription:
      "Construimos un CRM a medida para que cada comercial vea qué contrato vence, qué cliente requiere acción y cuál es el siguiente paso. Sin ruido, sin funcionalidades que nadie usa.",
    primaryCta: "Diagnosticar mis renovaciones",
    secondaryCta: "Ver cómo funcionaría",
    subject: "CRM de renovaciones",
    stats: [
      {
        value: "60 días",
        label: "de visibilidad previa",
        description: "Una cola automática ordena vencimientos por urgencia y responsable.",
      },
      {
        value: "1 semana",
        label: "para migrar el flujo crítico",
        description: "Empezamos por clientes, contratos, estados y responsables.",
      },
      {
        value: "0 dudas",
        label: "sobre quién actúa",
        description: "Cada renovación tiene responsable, fecha, último contacto y próxima acción.",
      },
    ],
    pains: [
      {
        title: "Los contratos vencen sin avisar",
        description:
          "El equipo detecta oportunidades tarde porque las fechas viven repartidas entre hojas, emails y recordatorios sueltos.",
      },
      {
        title: "No hay una fuente de verdad",
        description:
          "Cada comercial tiene su versión del estado del cliente y cuesta saber qué pasó en el último contacto.",
      },
      {
        title: "El seguimiento comercial depende de insistir",
        description:
          "Las acciones importantes aparecen solo si alguien revisa manualmente el Excel correcto.",
      },
    ],
    solution: [
      {
        title: "Dashboard diario de renovaciones",
        description:
          "Una vista priorizada con contratos que vencen, días restantes, responsable, estado y siguiente acción.",
      },
      {
        title: "Ficha de cliente operativa",
        description:
          "Contratos, incidencias, documentos, histórico de contactos y notas en una misma pantalla.",
      },
      {
        title: "Automatizaciones de aviso",
        description:
          "Recordatorios internos, tareas y alertas cuando un contrato entra en ventana crítica.",
      },
    ],
    process: [
      {
        title: "Mapeamos el flujo real",
        description:
          "Revisamos cómo gestionáis renovaciones hoy: datos, responsables, herramientas y puntos donde se escapan oportunidades.",
      },
      {
        title: "Construimos el módulo mínimo",
        description:
          "Primera versión enfocada solo en contratos, clientes, estados y cola de acción.",
      },
      {
        title: "Migramos y ajustamos con el equipo",
        description:
          "Importamos datos, probamos con usuarios reales y afinamos la vista diaria hasta que sea útil.",
      },
    ],
    fit: [
      "Asesorías energéticas con contratos recurrentes",
      "Empresas B2B con renovaciones anuales",
      "Equipos comerciales que trabajan con Excel y WhatsApp",
      "Pymes que necesitan controlar vencimientos sin implantar un ERP enorme",
    ],
    faqs: [
      {
        question: "¿Se puede conectar con nuestro Excel actual?",
        answer:
          "Sí. Normalmente empezamos importando el Excel actual y definiendo qué columnas pasan a ser datos estructurados dentro del CRM.",
      },
      {
        question: "¿Hace falta cambiar todo el proceso comercial?",
        answer:
          "No. La primera versión debe resolver el cuello de botella principal: saber qué renovaciones requieren acción y quién las lleva.",
      },
      {
        question: "¿Cuánto tarda una primera versión?",
        answer:
          "Si el alcance está claro, solemos plantear un primer módulo funcional en 4-6 semanas, con demos semanales.",
      },
    ],
  },
  {
    slug: "automatizar-excel",
    label: "Automatizar Excel",
    title: "Automatizar procesos en Excel para pymes | doscientos",
    description:
      "Convertimos hojas de cálculo críticas en sistemas internos, automatizaciones y paneles de control para que tu equipo deje de copiar datos a mano.",
    eyebrow: "Excel infinito, menos trabajo manual",
    heroTitle: "Tu empresa ya no debería",
    heroHighlight: "operar desde el Excel bueno",
    heroDescription:
      "Si una hoja decide ventas, operaciones, cobros o seguimiento, no necesitas otro parche. Necesitas convertir ese proceso en un sistema fiable, con responsables, avisos y datos claros.",
    primaryCta: "Revisar mi Excel",
    secondaryCta: "Calcular coste manual",
    subject: "Automatizar Excel",
    stats: [
      {
        value: "5 min",
        label: "para una tarea repetida",
        description:
          "Cuando ocurre muchas veces por semana, deja de ser pequeña y empieza a costar dinero.",
      },
      {
        value: "1 fuente",
        label: "de verdad",
        description: "Datos centralizados para que nadie pregunte cuál era el archivo actualizado.",
      },
      {
        value: "24/7",
        label: "procesos activos",
        description: "Avisos, informes y controles funcionando aunque nadie abra la hoja.",
      },
    ],
    pains: [
      {
        title: "Solo una persona entiende la hoja",
        description:
          "El negocio depende de fórmulas, pestañas y reglas que no están documentadas en ningún sitio.",
      },
      {
        title: "Copiais datos entre herramientas",
        description:
          "Email, Excel, facturación, CRM y WhatsApp se conectan a mano, con errores y retrasos.",
      },
      {
        title: "Los informes siempre se rehacen",
        description: "Cada semana alguien repite el mismo informe copiando datos y capturas.",
      },
    ],
    solution: [
      {
        title: "Sistema interno a partir de tu hoja",
        description:
          "Respetamos la lógica que ya funciona y la convertimos en pantallas, permisos y flujos claros.",
      },
      {
        title: "Automatizaciones donde hay reglas",
        description:
          "Emails, avisos, cambios de estado, documentos e informes se ejecutan sin perseguir a nadie.",
      },
      {
        title: "Paneles para decidir rápido",
        description:
          "Indicadores, vencimientos, tareas pendientes y excepciones visibles desde el primer minuto.",
      },
    ],
    process: [
      {
        title: "Auditamos la hoja",
        description:
          "Detectamos qué datos son críticos, qué fórmulas importan y qué pasos se repiten.",
      },
      {
        title: "Priorizamos por ROI",
        description:
          "No automatizamos todo. Elegimos el flujo que más horas, errores u oportunidades está costando.",
      },
      {
        title: "Lanzamos una versión usable",
        description:
          "El equipo prueba una primera versión con datos reales y ajustamos antes de ampliar alcance.",
      },
    ],
    fit: [
      "Empresas con hojas maestras que nadie se atreve a tocar",
      "Equipos que copian datos de email a Excel cada semana",
      "Negocios que generan informes manuales recurrentes",
      "Pymes que ya pagan SaaS pero siguen operando fuera",
    ],
    faqs: [
      {
        question: "¿Siempre hay que reemplazar Excel?",
        answer:
          "No. A veces Excel sigue siendo útil como entrada o exportación. Lo importante es sacar de ahí los procesos que ya son críticos.",
      },
      {
        question: "¿Podéis trabajar con nuestra hoja actual?",
        answer:
          "Sí. Revisamos la hoja actual, preservamos la lógica que funciona y limpiamos lo que genera errores o dependencia.",
      },
      {
        question: "¿Cómo se calcula si compensa?",
        answer:
          "Medimos frecuencia, personas implicadas, tiempo por repetición, coste de error y valor de las oportunidades que se escapan.",
      },
    ],
  },
  {
    slug: "software-administradores-fincas",
    label: "Administradores de fincas",
    title: "Software para administradores de fincas | doscientos",
    description:
      "Sistemas internos para administradores de fincas: incidencias, propietarios, proveedores, documentos, avisos y seguimiento en una fuente de verdad.",
    eyebrow: "Fincas, incidencias y documentación",
    heroTitle: "Menos WhatsApp perdido",
    heroHighlight: "más control de cada finca",
    heroDescription:
      "Creamos software interno para que el equipo vea incidencias, documentos, proveedores, propietarios y tareas pendientes sin depender de hilos infinitos.",
    primaryCta: "Diagnosticar mi operativa",
    secondaryCta: "Ver flujo recomendado",
    subject: "Software administradores de fincas",
    stats: [
      {
        value: "1 panel",
        label: "por finca",
        description: "Incidencias, documentos, proveedores y tareas en una misma vista.",
      },
      {
        value: "menos",
        label: "persecución interna",
        description: "Cada incidencia tiene estado, responsable y próxima acción clara.",
      },
      {
        value: "rápido",
        label: "para responder",
        description: "El equipo encuentra contexto sin revisar correos, carpetas y chats.",
      },
    ],
    pains: [
      {
        title: "Las incidencias se dispersan",
        description:
          "Una avería empieza en WhatsApp, sigue por email y acaba en una nota que nadie ve.",
      },
      {
        title: "Los documentos cuestan de encontrar",
        description:
          "Actas, presupuestos, contratos, fotos y facturas viven en carpetas sin contexto operativo.",
      },
      {
        title: "El propietario pregunta antes de que haya respuesta",
        description: "Sin trazabilidad clara, el equipo pierde tiempo reconstruyendo qué pasó.",
      },
    ],
    solution: [
      {
        title: "Gestión de incidencias por finca",
        description:
          "Alta, estado, proveedor, fotos, presupuesto, seguimiento y cierre desde una vista simple.",
      },
      {
        title: "Archivo operativo de documentos",
        description:
          "Documentos vinculados a finca, proveedor, incidencia o propietario para encontrarlos cuando importan.",
      },
      {
        title: "Avisos y tareas internas",
        description:
          "Recordatorios para presupuestos pendientes, proveedores sin respuesta y acciones bloqueadas.",
      },
    ],
    process: [
      {
        title: "Elegimos una finca piloto",
        description: "Probamos el flujo con un caso real para no diseñar desde teoría.",
      },
      {
        title: "Definimos estados y responsables",
        description:
          "Cada incidencia debe tener un siguiente paso visible, no solo una descripción.",
      },
      {
        title: "Extendemos al resto de fincas",
        description: "Cuando el flujo funciona, importamos datos y lo abrimos al equipo completo.",
      },
    ],
    fit: [
      "Administradores con muchas incidencias abiertas",
      "Equipos que gestionan proveedores y propietarios por WhatsApp",
      "Despachos con documentación repartida en carpetas",
      "Administraciones que quieren trazabilidad sin un ERP pesado",
    ],
    faqs: [
      {
        question: "¿Incluye portal para propietarios?",
        answer:
          "Puede incluirlo, pero normalmente empezamos por el panel interno. Primero hay que ordenar la operativa antes de exponerla fuera.",
      },
      {
        question: "¿Se puede conectar con email o formularios?",
        answer:
          "Sí. Podemos crear entradas desde formularios, emails o cargas manuales según cómo trabaje vuestro equipo.",
      },
      {
        question: "¿Sirve si ya tenemos otro programa?",
        answer:
          "Si el programa actual no cubre incidencias o seguimiento como necesitáis, podemos construir una capa operativa conectada o independiente.",
      },
    ],
  },
  {
    slug: "crm-asesoria-energetica",
    label: "CRM asesoría energética",
    title: "CRM para asesorías energéticas | doscientos",
    description:
      "CRM a medida para asesorías energéticas: clientes, CUPS, contratos, renovaciones, incidencias, documentos y seguimiento comercial.",
    eyebrow: "Energía, contratos y renovaciones",
    heroTitle: "Un CRM para asesorías energéticas",
    heroHighlight: "que viven entre contratos y vencimientos",
    heroDescription:
      "Centralizamos clientes, contratos, CUPS, renovaciones, incidencias y documentos para que cada comercial sepa qué toca hacer hoy.",
    primaryCta: "Revisar mi CRM actual",
    secondaryCta: "Diagnosticar renovaciones",
    subject: "CRM asesoría energética",
    stats: [
      {
        value: "CUPS",
        label: "y contratos conectados",
        description: "Cada suministro vive dentro del contexto del cliente y su estado comercial.",
      },
      {
        value: "60 días",
        label: "de seguimiento previo",
        description: "Renovaciones visibles antes de que sea tarde para actuar.",
      },
      {
        value: "menos",
        label: "trabajo administrativo",
        description: "Documentos, estados y tareas dejan de depender de copiar datos.",
      },
    ],
    pains: [
      {
        title: "Clientes y contratos no están conectados",
        description:
          "El equipo consulta varias hojas para saber qué CUPS, contrato o comercial corresponde.",
      },
      {
        title: "Las renovaciones se revisan tarde",
        description: "Sin cola automática, las oportunidades aparecen cuando ya hay poco margen.",
      },
      {
        title: "Las incidencias bloquean ventas",
        description: "Documentación, cambios y reclamaciones se mezclan con tareas comerciales.",
      },
    ],
    solution: [
      {
        title: "CRM con modelo energético",
        description:
          "Clientes, CUPS, contratos, comercial responsable, fechas, documentos e incidencias conectadas.",
      },
      {
        title: "Cola de renovaciones",
        description:
          "Vista diaria para priorizar contratos por urgencia, valor, responsable y último contacto.",
      },
      {
        title: "Documentación controlada",
        description:
          "Contratos, facturas, autorizaciones y anexos vinculados al cliente y al contrato correcto.",
      },
    ],
    process: [
      {
        title: "Revisamos el Excel o CRM actual",
        description:
          "Identificamos cómo registras clientes, contratos, CUPS, incidencias y estados.",
      },
      {
        title: "Construimos el flujo comercial crítico",
        description:
          "Priorizamos renovaciones y seguimiento antes de ampliar a módulos secundarios.",
      },
      {
        title: "Migramos con control",
        description:
          "Importamos datos, validamos campos y dejamos al equipo trabajando sobre una fuente única.",
      },
    ],
    fit: [
      "Asesorías energéticas que han crecido con Excel",
      "Equipos comerciales con cartera recurrente",
      "Empresas que gestionan incidencias y renovaciones",
      "Negocios que necesitan conectar contratos, CUPS y documentos",
    ],
    faqs: [
      {
        question: "¿Podéis adaptar campos específicos del sector energético?",
        answer:
          "Sí. Ese es el motivo de hacerlo a medida: CUPS, potencia, comercializadora, vencimiento, estado documental y reglas propias.",
      },
      {
        question: "¿Se puede empezar solo con renovaciones?",
        answer:
          "Sí. Es lo recomendable cuando el dolor principal es no saber qué contratos requieren acción.",
      },
      {
        question: "¿Incluye roles comerciales?",
        answer:
          "Sí. Podemos separar permisos, carteras y vistas por comercial, responsable o dirección.",
      },
    ],
  },
  {
    slug: "automatizacion-empresas-servicios",
    label: "Empresas de servicios",
    title: "Automatización para empresas de servicios | doscientos",
    description:
      "Automatizamos presupuestos, partes de trabajo, avisos, documentos, seguimiento y reporting para empresas de servicios que operan a mano.",
    eyebrow: "Servicios, operaciones y seguimiento",
    heroTitle: "Automatiza el trabajo repetido",
    heroHighlight: "sin cambiar cómo vendes",
    heroDescription:
      "Construimos sistemas internos y automatizaciones para empresas de servicios que gestionan clientes, presupuestos, partes, documentos y seguimiento entre varias herramientas.",
    primaryCta: "Detectar automatizaciones",
    secondaryCta: "Calcular ahorro",
    subject: "Automatización empresas de servicios",
    stats: [
      {
        value: "3 pasos",
        label: "menos por operación",
        description: "Reducimos tareas repetidas en presupuestos, avisos, documentos y reporting.",
      },
      {
        value: "1 vista",
        label: "para saber qué toca",
        description: "Clientes, tareas, estados y bloqueos visibles para el equipo.",
      },
      {
        value: "24-48h",
        label: "para recoger comentarios",
        description: "Trabajamos con demos frecuentes para ajustar con operativa real.",
      },
    ],
    pains: [
      {
        title: "Cada servicio genera trabajo administrativo",
        description:
          "Presupuestos, partes, fotos, facturas y avisos se gestionan a mano después del trabajo real.",
      },
      {
        title: "El estado del cliente no está claro",
        description:
          "Ventas, operaciones y administración usan fuentes distintas para saber qué pasa.",
      },
      {
        title: "Los informes llegan tarde",
        description:
          "La dirección no ve márgenes, carga de trabajo o tareas bloqueadas hasta que alguien prepara el informe.",
      },
    ],
    solution: [
      {
        title: "Flujos de trabajo por estado",
        description:
          "Cada servicio avanza por etapas claras: solicitud, presupuesto, ejecución, documentación, facturación y seguimiento.",
      },
      {
        title: "Automatización de documentos y avisos",
        description:
          "Generamos tareas, emails, recordatorios y documentos cuando se cumple una condición.",
      },
      {
        title: "Panel operativo",
        description:
          "Vista para controlar servicios activos, bloqueos, responsables, fechas y prioridades.",
      },
    ],
    process: [
      {
        title: "Seguimos un servicio de punta a punta",
        description:
          "Mapeamos qué pasa desde que entra una solicitud hasta que se cobra o se cierra.",
      },
      {
        title: "Elegimos el cuello de botella",
        description:
          "Priorizamos la automatización que elimina más trabajo repetido o reduce más errores.",
      },
      {
        title: "Construimos por módulos",
        description:
          "Primero el flujo crítico; después, documentos, integraciones, informes o un portal de cliente.",
      },
    ],
    fit: [
      "Empresas de mantenimiento, instalación o servicios técnicos",
      "Equipos que gestionan presupuestos y partes de trabajo",
      "Negocios con mucha documentación repetida",
      "Pymes que necesitan visibilidad operativa sin cambiar todas sus herramientas",
    ],
    faqs: [
      {
        question: "¿Qué automatización se debería hacer primero?",
        answer:
          "La que tenga frecuencia alta, pasos claros, coste de error y responsables definidos. Lo detectamos en el diagnóstico inicial.",
      },
      {
        question: "¿Se puede conectar con herramientas existentes?",
        answer:
          "Sí. Podemos conectar formularios, email, CRM, facturación o herramientas internas cuando tenga sentido técnico y económico.",
      },
      {
        question: "¿Y si no merece la pena automatizar?",
        answer:
          "Lo decimos. A veces basta con ordenar el proceso o usar mejor una herramienta existente antes de construir software.",
      },
    ],
  },
  {
    slug: "crm-a-medida",
    label: "CRM a medida",
    title: "CRM a medida para empresas con procesos propios | doscientos",
    description: "CRM a medida para ordenar clientes, oportunidades, tareas, expedientes y documentos cuando un CRM estándar ya no encaja con la forma de trabajar del equipo.",
    eyebrow: "Clientes, operaciones y siguiente acción",
    heroTitle: "Un CRM que entiende",
    heroHighlight: "cómo trabaja tu empresa",
    heroDescription: "Construimos el espacio de trabajo que falta entre el Excel, el email y las herramientas que el equipo ya utiliza. Con contexto, responsables y una siguiente acción clara.",
    primaryCta: "Revisar mi proceso comercial",
    secondaryCta: "Ver casos reales",
    subject: "CRM a medida",
    stats: [
      { value: "1", label: "fuente de verdad", description: "Clientes, oportunidades, tareas y documentos conectados en el mismo contexto." },
      { value: "0", label: "cambios de herramienta", description: "Diseñamos alrededor del proceso real antes de decidir qué merece automatizarse." },
      { value: "6 sem.", label: "para una primera versión", description: "Planteamos un módulo útil y lo probamos con el equipo desde las primeras demos." },
    ],
    pains: [
      { title: "El estado del cliente está repartido", description: "La información vive entre CRM, hojas, emails y conversaciones, y cada persona reconstruye la historia por su cuenta." },
      { title: "Nadie sabe cuál es el siguiente paso", description: "Hay contactos y oportunidades, pero no siempre queda claro quién actúa, cuándo ni con qué información." },
      { title: "El CRM estándar obliga a trabajar distinto", description: "Si para encajar el proceso hay que duplicar datos o crear excepciones continuamente, el coste aparece cada semana." },
    ],
    solution: [
      { title: "Vista diaria de trabajo", description: "Cada persona ve qué requiere atención, qué está bloqueado y cuál es la siguiente acción." },
      { title: "Fichas con contexto", description: "Clientes, oportunidades, expedientes, comunicaciones y documentos quedan relacionados sin navegar por varias herramientas." },
      { title: "Automatizaciones pequeñas y útiles", description: "Avisos, tareas, documentos y cambios de estado se disparan cuando aportan valor, no por llenar el sistema de reglas." },
    ],
    process: [
      { title: "Entendemos el proceso", description: "Hablamos con las personas que venden y operan para ver qué información necesitan de verdad." },
      { title: "Construimos el núcleo", description: "Empezamos por clientes, oportunidades y tareas; no por una lista infinita de funcionalidades." },
      { title: "Probamos con trabajo real", description: "El equipo usa la primera versión, detectamos fricciones y ajustamos antes de ampliar el alcance." },
    ],
    fit: ["Equipos B2B con procesos comerciales propios", "Despachos y empresas de servicios profesionales", "Empresas que han superado Excel o un CRM genérico", "Equipos que necesitan conectar ventas y operación"],
    faqs: [
      { question: "¿Cuándo compensa un CRM a medida?", answer: "Cuando el proceso diferencial es importante para el negocio y las herramientas estándar obligan a duplicar información, renunciar a contexto o trabajar con demasiadas excepciones." },
      { question: "¿Es mejor que HubSpot o Salesforce?", answer: "No siempre. Si el proceso encaja en un CRM estándar, normalmente conviene configurarlo. El desarrollo a medida tiene sentido cuando el flujo propio pesa más que la amplitud del producto." },
      { question: "¿Podemos empezar solo por una parte?", answer: "Sí. Lo más sensato suele ser empezar por el cuello de botella que más trabajo o pérdida de contexto genera y dejar el resto para después." },
    ],
  },
  {
    slug: "software-a-medida-para-empresas",
    label: "Software a medida para empresas",
    title: "Software a medida para empresas | doscientos",
    description: "Construimos herramientas internas y productos digitales para empresas que necesitan resolver una operación concreta sin imponer un software genérico a todo el equipo.",
    eyebrow: "Producto digital y operación interna",
    heroTitle: "Software que encaja",
    heroHighlight: "en tu forma de trabajar",
    heroDescription: "Desde un backoffice hasta un portal de clientes: convertimos procesos complejos en herramientas claras, con una primera versión útil y margen para crecer.",
    primaryCta: "Revisar mi proceso",
    secondaryCta: "Conocer nuestro enfoque",
    subject: "Software a medida para empresas",
    stats: [
      { value: "30+", label: "proyectos entregados", description: "Productos, herramientas internas y experiencias digitales para equipos distintos." },
      { value: "6 sem.", label: "plazo habitual de MVP", description: "Una primera versión acotada para validar el flujo con usuarios reales." },
      { value: "1", label: "equipo responsable", description: "Diseño, desarrollo y puesta en marcha sin pasar el proyecto entre proveedores." },
    ],
    pains: [
      { title: "El software no refleja la operación", description: "El equipo acaba manteniendo hojas paralelas, notas y procesos manuales para cubrir lo que la herramienta no contempla." },
      { title: "La información no sigue el trabajo", description: "Clientes, rutas, documentos, pagos o tareas se actualizan en lugares distintos y pierden continuidad." },
      { title: "Construir parece demasiado arriesgado", description: "Sin una primera versión acotada, es difícil saber qué merece la pena hacer y cuánto tardará." },
    ],
    solution: [
      { title: "Herramientas alrededor del proceso", description: "Diseñamos la interfaz y los estados según las decisiones que el equipo toma cada día." },
      { title: "Primero lo que desbloquea", description: "Priorizamos el flujo crítico antes de añadir paneles, permisos o funciones secundarias." },
      { title: "Base para seguir mejorando", description: "El sistema queda preparado para añadir integraciones, automatizaciones y nuevas áreas cuando exista una necesidad real." },
    ],
    process: [
      { title: "Aterrizamos el problema", description: "Definimos qué ocurre hoy, quién interviene, qué datos se necesitan y dónde se atasca el trabajo." },
      { title: "Diseñamos antes de programar", description: "Probamos el recorrido y las pantallas principales para reducir decisiones caras durante el desarrollo." },
      { title: "Entregamos por etapas", description: "Cada etapa tiene una utilidad concreta y se revisa con el equipo antes de seguir construyendo." },
    ],
    fit: ["Empresas con una operación difícil de encajar en SaaS genérico", "Equipos que necesitan un backoffice propio", "Negocios que quieren lanzar un producto B2B", "Empresas que necesitan un portal conectado a su operación"],
    faqs: [
      { question: "¿Qué diferencia hay entre un MVP y un proyecto incompleto?", answer: "Un MVP tiene un alcance deliberadamente pequeño, pero resuelve un flujo completo y se puede usar. No es dejar funciones a medias: es decidir qué problema merece resolverse primero." },
      { question: "¿Podemos mantener nuestras herramientas actuales?", answer: "Sí. Antes de sustituir nada revisamos qué merece mantenerse y qué conviene conectar o migrar progresivamente." },
      { question: "¿Qué ejemplos tenéis?", answer: "Hemos trabajado en plataformas operativas como Kache Envíos, CRMs como LEX y herramientas de gestión y facturación para otros equipos." },
    ],
  },
  {
    slug: "migracion-excel-access",
    label: "Migración de Excel y Access",
    title: "Migrar Excel o Access a una herramienta web sin parar la empresa",
    description: "Modernizamos procesos críticos que dependen de Excel, Access o herramientas antiguas con una migración progresiva y orientada a la continuidad operativa.",
    eyebrow: "Modernización sin apagar la operación",
    heroTitle: "Deja atrás el Excel crítico",
    heroHighlight: "sin detener tu empresa",
    heroDescription: "No se trata de copiar una hoja en una aplicación. Se trata de entender qué decisiones dependen de ella, ordenar los datos y pasar el trabajo a una herramienta que el equipo pueda mantener.",
    primaryCta: "Revisar mi sistema actual",
    secondaryCta: "Ver cómo lo abordamos",
    subject: "Migración de Excel o Access",
    stats: [
      { value: "1", label: "proceso a la vez", description: "Empezamos por la hoja o base de datos que más riesgo y trabajo concentra." },
      { value: "0", label: "paradas innecesarias", description: "Planteamos la transición para que el equipo pueda seguir trabajando mientras se construye." },
      { value: "100%", label: "de contexto documentado", description: "Convertimos reglas informales, columnas y excepciones en un flujo entendible." },
    ],
    pains: [
      { title: "Solo una persona entiende el archivo", description: "Cuando falta esa persona, el equipo pierde tiempo intentando interpretar columnas, fórmulas y excepciones." },
      { title: "El archivo se rompe al crecer", description: "Más usuarios, más versiones y más datos convierten una solución útil en un punto de fallo." },
      { title: "Migrar da miedo", description: "El sistema antiguo sigue sosteniendo la operación y no se puede apagar de un día para otro." },
    ],
    solution: [
      { title: "Mapa del proceso actual", description: "Identificamos datos, reglas, responsables, entradas y salidas antes de decidir la tecnología." },
      { title: "Nueva herramienta por fases", description: "Pasamos primero el flujo crítico y mantenemos una transición controlada para el resto." },
      { title: "Datos limpios y trazables", description: "Definimos qué se conserva, qué se transforma y cómo se valida antes de usarlo en producción." },
    ],
    process: [
      { title: "Auditamos el archivo", description: "Revisamos fórmulas, pestañas, permisos, dependencias y el trabajo que ocurre fuera del documento." },
      { title: "Construimos una primera pieza", description: "Convertimos el proceso más importante en una herramienta usable y comprobable." },
      { title: "Migramos con control", description: "Probamos con datos reales, formamos al equipo y ampliamos cuando la primera fase está estable." },
    ],
    fit: ["Empresas que dependen de un Excel crítico", "Equipos con bases de datos Access antiguas", "Procesos donde varias personas editan versiones distintas", "Organizaciones que no pueden permitirse una migración a ciegas"],
    faqs: [
      { question: "¿Hay que migrarlo todo de golpe?", answer: "No. Una migración progresiva suele ser más segura: se empieza por el proceso que más valor aporta y se mantiene el sistema antiguo mientras se valida la nueva pieza." },
      { question: "¿Se conservan los datos históricos?", answer: "Depende de su calidad y utilidad. Los revisamos, definimos qué debe migrarse y dejamos claro qué queda fuera antes de ejecutar la importación." },
      { question: "¿Qué pasa si el proceso está lleno de excepciones?", answer: "Las hacemos visibles durante el diagnóstico. Algunas deben convertirse en reglas; otras pueden requerir que el equipo simplifique primero el proceso." },
    ],
  },
];

export function getSpecificLanding(slug: string) {
  return specificLandings.find((landing) => landing.slug === slug);
}
