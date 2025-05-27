export const questionsPilar3 = {
    title: "Pilar 3 - Gestión y Analítica de Datos",
    pages: [
      {
        name: "gestion_analitica_datos",
        title: "Gestión y Analítica de Datos",
        elements: [
          {
            type: "panel",
            name: "gobierno_calidad_datos",
            title: "01. Gobierno y calidad de datos",
            elements: [
              {
                type: "radiogroup",
                name: "politicas_gestion_datos",
                title: "¿Qué tan definidas y aplicadas están las políticas de gestión de datos y los roles responsables en su organización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No existen políticas formales ni responsables definidos para la gestión de datos." },
                  { value: 2, text: "2. Hay políticas básicas y responsables informales sin seguimiento." },
                  { value: 3, text: "3. Las políticas están documentadas y los responsables son reconocidos por las áreas clave." },
                  { value: 4, text: "4. Existe una política institucional con responsables activos y medición de cumplimiento." },
                  { value: 5, text: "5. Las políticas son dinámicas, automatizadas y con responsables empoderados en toda la organización." }
                ]
              },
              {
                type: "radiogroup",
                name: "calidad_datos",
                title: "¿Qué tan estandarizada y controlada es la calidad de los datos que se utilizan en su organización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No hay control ni estándares sobre la calidad de los datos." },
                  { value: 2, text: "2. Se aplican controles manuales y limitados en algunos procesos." },
                  { value: 3, text: "3. La calidad se valida regularmente en sistemas clave." },
                  { value: 4, text: "4. Hay procesos automatizados de validación y limpieza en toda la organización." },
                  { value: 5, text: "5. La calidad de los datos se controla en tiempo real y se ajusta automáticamente." }
                ]
              },
              {
                type: "radiogroup",
                name: "control_acceso_datos",
                title: "¿Qué tan controlado y estructurado es el acceso a los datos según roles o niveles jerárquicos?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No hay control sobre el acceso, cualquiera puede consultar o modificar datos." },
                  { value: 2, text: "2. Se restringe el acceso en algunos casos, pero sin estructura clara." },
                  { value: 3, text: "3. El acceso está definido por roles y documentado para sistemas clave." },
                  { value: 4, text: "4. Los permisos se gestionan centralizadamente y se actualizan con frecuencia." },
                  { value: 5, text: "5. El acceso es dinámico, automatizado y basado en inteligencia contextual." }
                ]
              }
            ]
          },
          {
            type: "panel",
            name: "analitica_inteligencia_negocio",
            title: "02. Analítica e inteligencia de negocio",
            elements: [
              {
                type: "radiogroup",
                name: "nivel_herramientas_analitica",
                title: "¿Qué nivel de herramientas de analítica (BI, dashboards, inteligencia predictiva) se utiliza en su organización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No se utilizan herramientas de analítica; se trabaja con datos en hojas de cálculo." },
                  { value: 2, text: "2. Se usan herramientas básicas para visualizar datos históricos en algunas áreas." },
                  { value: 3, text: "3. Se utilizan plataformas BI para monitoreo operativo y reportes periódicos." },
                  { value: 4, text: "4. Existen dashboards interactivos con analítica avanzada en áreas clave." },
                  { value: 5, text: "5. Se aplica analítica predictiva y prescriptiva integrada a los procesos de negocio." }
                ]
              },
              {
                type: "radiogroup",
                name: "estructura_proceso_insights",
                title: "¿Qué tan estructurado es el proceso de generación y uso de insights a partir de los datos en su organización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No se generan insights formales a partir de los datos." },
                  { value: 2, text: "2. Se generan insights esporádicos por iniciativa individual o de algunas áreas." },
                  { value: 3, text: "3. Hay un proceso definido para extraer y comunicar insights clave." },
                  { value: 4, text: "4. Los insights se generan regularmente, se documentan y alimentan decisiones tácticas." },
                  { value: 5, text: "5. Los insights son generados automáticamente, contextualizados y accionables en tiempo real." }
                ]
              },
              {
                type: "radiogroup",
                name: "accesibilidad_comprension_datos",
                title: "¿Qué tan accesibles y comprensibles son los datos y análisis para los diferentes niveles de la organización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. Solo áreas técnicas tienen acceso y entendimiento de los datos." },
                  { value: 2, text: "2. Algunos reportes están disponibles, pero sin contexto claro para usuarios no técnicos." },
                  { value: 3, text: "3. Los datos y dashboards están disponibles para líderes clave con capacitación básica." },
                  { value: 4, text: "4. La mayoría de los colaboradores acceden y entienden reportes analíticos según su rol." },
                  { value: 5, text: "5. Toda la organización puede consultar insights relevantes con visualizaciones intuitivas y adaptadas." }
                ]
              }
            ]
          },
          {
            type: "panel",
            name: "toma_decisiones_datos",
            title: "03. Toma de decisiones basada en datos",
            elements: [
              {
                type: "radiogroup",
                name: "integracion_analisis_decisiones",
                title: "¿Qué tan integrado está el análisis de datos en el proceso de toma de decisiones estratégicas de la organización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. Las decisiones estratégicas se basan en experiencia o intuición, sin respaldo de datos." },
                  { value: 2, text: "2. Se consultan algunos datos históricos, pero no son determinantes en las decisiones." },
                  { value: 3, text: "3. Los datos forman parte del análisis estratégico en juntas o reportes clave." },
                  { value: 4, text: "4. Las decisiones estratégicas se sustentan en análisis profundos y modelados de datos." },
                  { value: 5, text: "5. Las decisiones estratégicas se automatizan o simulan con modelos predictivos y escenarios de negocio." }
                ]
              },
              {
                type: "radiogroup",
                name: "confianza_datos",
                title: "¿Qué nivel de confianza tienen los líderes y equipos en la calidad y exactitud de los datos utilizados?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. Hay desconfianza generalizada en los datos disponibles." },
                  { value: 2, text: "2. Se duda de los datos en muchos procesos, lo que frena su uso." },
                  { value: 3, text: "3. Hay confianza parcial en los datos utilizados en reportes y decisiones clave." },
                  { value: 4, text: "4. Se confía plenamente en la mayoría de los datos validados internamente." },
                  { value: 5, text: "5. La confianza en los datos es alta gracias a procesos automatizados de validación y trazabilidad." }
                ]
              },
              {
                type: "radiogroup",
                name: "estructura_proceso_decisiones",
                title: "¿Qué tan estructurado está el proceso organizacional para tomar decisiones soportadas por análisis de datos?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No hay un proceso definido para tomar decisiones basadas en datos." },
                  { value: 2, text: "2. Algunas decisiones incluyen datos, pero sin metodología o criterios consistentes." },
                  { value: 3, text: "3. Existen lineamientos básicos para incorporar análisis de datos en decisiones." },
                  { value: 4, text: "4. El proceso está documentado, es parte de la cultura y se aplica transversalmente." },
                  { value: 5, text: "5. Las decisiones se rigen por procesos automatizados de recomendación basados en datos." }
                ]
              }
            ]
          },
          {
            type: "panel",
            name: "flujo_arquitectura_datos",
            title: "04. Flujo y arquitectura de datos",
            elements: [
              {
                type: "radiogroup",
                name: "conectividad_sistemas",
                title: "¿Qué tan conectados están los sistemas de su organización para compartir datos de forma automatizada?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. Los sistemas están totalmente aislados; no comparten información." },
                  { value: 2, text: "2. Hay integraciones limitadas con traspasos manuales de información." },
                  { value: 3, text: "3. Existen conexiones entre sistemas clave con automatización parcial." },
                  { value: 4, text: "4. La mayoría de los sistemas están integrados con flujos automatizados y estandarizados." },
                  { value: 5, text: "5. Todos los sistemas comparten datos de forma fluida, en tiempo real y con trazabilidad completa." }
                ]
              },
              {
                type: "radiogroup",
                name: "formalidad_arquitectura_datos",
                title: "¿Qué tan formal y actualizada está la arquitectura de datos de su organización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No existe una arquitectura de datos definida ni documentada." },
                  { value: 2, text: "2. Hay documentación parcial, sin actualización ni uso activo." },
                  { value: 3, text: "3. Existe un diseño general de arquitectura que se mantiene con cierta regularidad." },
                  { value: 4, text: "4. La arquitectura está formalmente definida, alineada a los procesos y bien gestionada." },
                  { value: 5, text: "5. La arquitectura es dinámica, escalable y gestionada mediante herramientas automatizadas." }
                ]
              },
              {
                type: "radiogroup",
                name: "fluidez_intercambio_datos",
                title: "¿Qué tan fluido y confiable es el intercambio de datos entre diferentes áreas de la organización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. Cada área trabaja con sus propios datos sin compartir información." },
                  { value: 2, text: "2. Hay intercambio informal o manual entre algunas áreas." },
                  { value: 3, text: "3. Se comparten datos regularmente, aunque con procesos semi manuales." },
                  { value: 4, text: "4. El intercambio es automático, confiable y soporta la colaboración entre áreas." },
                  { value: 5, text: "5. Los datos fluyen de manera transparente y en tiempo real entre todas las áreas, alineados a objetivos comunes." }
                ]
              }
            ]
          },
          {
            type: "panel",
            name: "transaccionalidad_datos",
            title: "05. Transaccionalidad de datos",
            elements: [
              {
                type: "radiogroup",
                name: "accesibilidad_trazabilidad_transacciones",
                title: "¿Qué tan accesible y trazable es el historial de transacciones digitales en su organización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No se registran transacciones digitalmente o el acceso es muy limitado." },
                  { value: 2, text: "2. Se registran algunas transacciones, pero sin trazabilidad estructurada." },
                  { value: 3, text: "3. La mayoría de las transacciones son digitales y accesibles bajo solicitud." },
                  { value: 4, text: "4. Todas las transacciones están registradas con trazabilidad clara y centralizada." },
                  { value: 5, text: "5. El historial de transacciones es accesible en tiempo real, con trazabilidad automatizada y auditable." }
                ]
              },
              {
                type: "radiogroup",
                name: "integracion_plataformas_transaccionales",
                title: "¿Qué tan integradas están las plataformas transaccionales con las soluciones de análisis y reporte?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. Las plataformas no están conectadas; se requiere exportar datos manualmente." },
                  { value: 2, text: "2. Se integra la información de forma ocasional mediante procesos manuales." },
                  { value: 3, text: "3. Existe una integración básica que permite análisis periódicos." },
                  { value: 4, text: "4. Las plataformas transaccionales alimentan los sistemas analíticos en tiempo casi real." },
                  { value: 5, text: "5. Los datos transaccionales y analíticos están completamente integrados y sincronizados automáticamente." }
                ]
              },
              {
                type: "radiogroup",
                name: "frecuencia_actualizacion_datos",
                title: "¿Con qué frecuencia se actualizan los datos transaccionales en los sistemas utilizados por la organización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. Los datos se actualizan de forma manual y esporádica." },
                  { value: 2, text: "2. Hay actualizaciones regulares, pero con demoras o intervención humana." },
                  { value: 3, text: "3. Los datos se actualizan periódicamente a través de procesos automatizados básicos." },
                  { value: 4, text: "4. La actualización es frecuente y automatizada para la mayoría de los sistemas." },
                  { value: 5, text: "5. La actualización de datos es continua, en tiempo real y sin intervención humana." }
                ]
              }
            ]
          }
        ]
      }
    ]
  };