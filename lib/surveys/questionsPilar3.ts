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
                name: "control_acceso_datos",
                title: "¿Qué tan controlado y estructurado es el acceso a los datos según roles o niveles jerárquicos?",
                isRequired: true,
                choices: [
                  { value: 5, text: "El acceso es dinámico, automatizado y basado en inteligencia contextual." },
                  { value: 4, text: "El acceso está definido por roles y documentado para sistemas clave." },
                  { value: 3, text: "Los permisos se gestionan centralizadamente y se actualizan con frecuencia." },
                  { value: 1, text: "No hay control sobre el acceso; cualquiera puede consultar o modificar datos." },
                  { value: 2, text: "Se restringe el acceso en algunos casos, pero sin estructura clara." }
                ]
              },
              {
                type: "radiogroup",
                name: "politicas_gestion_datos",
                title: "¿Qué tan definidas y aplicadas están las políticas de gestión de datos y los roles responsables en su organización?",
                isRequired: true,
                choices: [
                  { value: 5, text: "Existe una política institucional con responsables activos y medición de cumplimiento." },
                  { value: 2, text: "Hay políticas básicas y responsables informales sin seguimiento." },
                  { value: 3, text: "Las políticas están documentadas y los responsables son reconocidos por las áreas clave." },
                  { value: 4, text: "Las políticas son dinámicas, automatizadas y con responsables empoderados en toda la organización." },
                  { value: 1, text: "No existen políticas formales ni responsables definidos para la gestión de datos." }
                ]
              },
              {
                type: "radiogroup",
                name: "calidad_datos",
                title: "¿Qué tan estandarizada y controlada es la calidad de los datos que se utilizan en su organización?",
                isRequired: true,
                choices: [
                  { value: 4, text: "Hay procesos automatizados de validación y limpieza en toda la organización." },
                  { value: 5, text: "La calidad de los datos se controla en tiempo real y se ajusta automáticamente." },
                  { value: 3, text: "La calidad se valida regularmente en sistemas clave." },
                  { value: 1, text: "No hay control ni estándares sobre la calidad de los datos." },
                  { value: 2, text: "Se aplican controles manuales y limitados en algunos procesos." }
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
                  { value: 4, text: "Existen dashboards interactivos con analítica avanzada en áreas clave." },
                  { value: 1, text: "No se utilizan herramientas de analítica; se trabaja con datos en hojas de cálculo." },
                  { value: 5, text: "Se aplica analítica predictiva y prescriptiva integrada a los procesos de negocio." },
                  { value: 2, text: "Se usan herramientas básicas para visualizar datos históricos en algunas áreas." },
                  { value: 3, text: "Se utilizan plataformas BI para monitoreo operativo y reportes periódicos." }
                ]
              },
              {
                type: "radiogroup",
                name: "accesibilidad_comprension_datos",
                title: "¿Qué tan accesibles y comprensibles son los datos y análisis para los diferentes niveles de la organización?",
                isRequired: true,
                choices: [
                  { value: 2, text: "Algunos reportes están disponibles, pero sin contexto claro para usuarios no técnicos." },
                  { value: 4, text: "La mayoría de los colaboradores acceden y entienden reportes analíticos según su rol." },
                  { value: 3, text: "Los datos y dashboards están disponibles para líderes clave con capacitación básica." },
                  { value: 1, text: "Solo áreas técnicas tienen acceso y entendimiento de los datos." },
                  { value: 5, text: "Toda la organización puede consultar insights relevantes con visualizaciones intuitivas y adaptadas." }
                ]
              },
              {
                type: "radiogroup",
                name: "estructura_proceso_insights",
                title: "¿Qué tan estructurado es el proceso de generación y uso de insights a partir de los datos en su organización?",
                isRequired: true,
                choices: [
                  { value: 3, text: "Hay un proceso definido para extraer y comunicar insights clave." },
                  { value: 4, text: "Los insights se generan regularmente, se documentan y alimentan decisiones tácticas." },
                  { value: 5, text: "Los insights son generados automáticamente, contextualizados y accionables en tiempo real." },
                  { value: 1, text: "No se generan insights formales a partir de los datos." },
                  { value: 2, text: "Se generan insights esporádicos por iniciativa individual o de algunas áreas." }
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
                name: "confianza_datos",
                title: "¿Qué nivel de confianza tienen los líderes y equipos en la calidad y exactitud de los datos utilizados?",
                isRequired: true,
                choices: [
                  { value: 3, text: "Hay confianza parcial en los datos utilizados en reportes y decisiones clave." },
                  { value: 1, text: "Hay desconfianza generalizada en los datos disponibles." },
                  { value: 5, text: "La confianza en los datos es alta gracias a procesos automatizados de validación y trazabilidad." },
                  { value: 4, text: "Se confía plenamente en la mayoría de los datos validados internamente." },
                  { value: 2, text: "Se duda de los datos en muchos procesos, lo que frena su uso." }
                ]
              },
              {
                type: "radiogroup",
                name: "estructura_proceso_decisiones",
                title: "¿Qué tan estructurado está el proceso organizacional para tomar decisiones soportadas por análisis de datos?",
                isRequired: true,
                choices: [
                  { value: 2, text: "Algunas decisiones incluyen datos, pero sin metodología o criterios consistentes." },
                  { value: 5, text: "El proceso está documentado, es parte de la cultura y se aplica transversalmente." },
                  { value: 3, text: "Existen lineamientos básicos para incorporar análisis de datos en decisiones." },
                  { value: 4, text: "Las decisiones se rigen por procesos automatizados de recomendación basados en datos." },
                  { value: 1, text: "No hay un proceso definido para tomar decisiones basadas en datos." }
                ]
              },
              {
                type: "radiogroup",
                name: "integracion_analisis_decisiones",
                title: "¿Qué tan integrado está el análisis de datos en el proceso de toma de decisiones estratégicas de la organización?",
                isRequired: true,
                choices: [
                  { value: 5, text: "Las decisiones estratégicas se automatizan o simulan con modelos predictivos y escenarios de negocio." },
                  { value: 1, text: "Las decisiones estratégicas se basan en experiencia o intuición, sin respaldo de datos." },
                  { value: 4, text: "Las decisiones estratégicas se sustentan en análisis profundos y modelados de datos." },
                  { value: 3, text: "Los datos forman parte del análisis estratégico en juntas o reportes clave." },
                  { value: 2, text: "Se consultan algunos datos históricos, pero no son determinantes en las decisiones." }
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
                  { value: 3, text: "Existen conexiones entre sistemas clave con automatización parcial." },
                  { value: 2, text: "Hay integraciones limitadas con traspasos manuales de información." },
                  { value: 4, text: "La mayoría de los sistemas están integrados con flujos automatizados y estandarizados." },
                  { value: 1, text: "Los sistemas están totalmente aislados; no comparten información." },
                  { value: 5, text: "Todos los sistemas comparten datos de forma fluida, en tiempo real y con trazabilidad completa." }
                ]
              },
              {
                type: "radiogroup",
                name: "fluidez_intercambio_datos",
                title: "¿Qué tan fluido y confiable es el intercambio de datos entre diferentes áreas de la organización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "Cada área trabaja con sus propios datos sin compartir información." },
                  { value: 5, text: "El intercambio es automático, confiable y soporta la colaboración entre áreas." },
                  { value: 2, text: "Hay intercambio informal o manual entre algunas áreas." },
                  { value: 4, text: "Los datos fluyen de manera transparente y en tiempo real entre todas las áreas, alineados a objetivos comunes." },
                  { value: 3, text: "Se comparten datos regularmente, aunque con procesos semi manuales." }
                ]
              },
              {
                type: "radiogroup",
                name: "formalidad_arquitectura_datos",
                title: "¿Qué tan formal y actualizada está la arquitectura de datos de su organización?",
                isRequired: true,
                choices: [
                  { value: 3, text: "Existe un diseño general de arquitectura que se mantiene con cierta regularidad." },
                  { value: 2, text: "Hay documentación parcial, sin actualización ni uso activo." },
                  { value: 5, text: "La arquitectura es dinámica, escalable y gestionada mediante herramientas automatizadas." },
                  { value: 4, text: "La arquitectura está formalmente definida, alineada a los procesos y bien gestionada." },
                  { value: 1, text: "No existe una arquitectura de datos definida ni documentada." }
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
                name: "frecuencia_actualizacion_datos",
                title: "¿Con qué frecuencia se actualizan los datos transaccionales en los sistemas utilizados por la organización?",
                isRequired: true,
                choices: [
                  { value: 2, text: "Hay actualizaciones regulares, pero con demoras o intervención humana." },
                  { value: 5, text: "La actualización de datos es continua, en tiempo real y sin intervención humana." },
                  { value: 4, text: "La actualización es frecuente y automatizada para la mayoría de los sistemas." },
                  { value: 1, text: "Los datos se actualizan de forma manual y esporádica." },
                  { value: 3, text: "Los datos se actualizan periódicamente a través de procesos automatizados básicos." }
                ]
              },
              {
                type: "radiogroup",
                name: "accesibilidad_trazabilidad_transacciones",
                title: "¿Qué tan accesible y trazable es el historial de transacciones digitales en su organización?",
                isRequired: true,
                choices: [
                  { value: 5, text: "El historial de transacciones es accesible en tiempo real, con trazabilidad automatizada y auditable." },
                  { value: 4, text: "La mayoría de las transacciones son digitales y accesibles bajo solicitud." },
                  { value: 1, text: "No se registran transacciones digitalmente o el acceso es muy limitado." },
                  { value: 2, text: "Se registran algunas transacciones, pero sin trazabilidad estructurada." },
                  { value: 3, text: "Todas las transacciones están registradas con trazabilidad clara y centralizada." }
                ]
              },
              {
                type: "radiogroup",
                name: "integracion_plataformas_transaccionales",
                title: "¿Qué tan integradas están las plataformas transaccionales con las soluciones de análisis y reporte?",
                isRequired: true,
                choices: [
                  { value: 2, text: "Existe una integración básica que permite análisis periódicos." },
                  { value: 1, text: "Las plataformas no están conectadas; se requiere exportar datos manualmente." },
                  { value: 4, text: "Las plataformas transaccionales alimentan los sistemas analíticos en tiempo casi real." },
                  { value: 5, text: "Los datos transaccionales y analíticos están completamente integrados y sincronizados automáticamente." },
                  { value: 3, text: "Se integra la información de forma ocasional mediante procesos manuales." }
                ]
              }
            ]
          }
        ]
      }
    ]
  };