export const questionsPilar2 = {
    title: "Pilar 2 - Tecnología y Automatización",
    pages: [
      {
        name: "tecnologia_automatizacion",
        title: "Tecnología y Automatización",
        elements: [
          {
            type: "panel",
            name: "infraestructura_tecnologica",
            title: "01. Infraestructura tecnológica y conectividad",
            elements: [
              {
                type: "radiogroup",
                name: "estado_infraestructura",
                title: "¿Cuál es el estado actual de la infraestructura tecnológica de la organización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. La infraestructura es local, aislada y sin integración; no hay una visión clara de digitalización." },
                  { value: 2, text: "2. Se han iniciado migraciones básicas hacia herramientas digitales, aunque aún predominan sistemas locales." },
                  { value: 3, text: "3. La infraestructura está parcialmente en la nube, con conectividad y operaciones digitales integradas." },
                  { value: 4, text: "4. La infraestructura está completamente en la nube, con tecnologías avanzadas como IoT y analítica predictiva." },
                  { value: 5, text: "5. La infraestructura es altamente automatizada, inteligente y soportada por machine learning y gemelos digitales." }
                ]
              },
              {
                type: "radiogroup",
                name: "conectividad_redes",
                title: "¿La conectividad y redes actuales permiten operaciones digitales eficientes?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. La conectividad es limitada, con redes locales desconectadas que no soportan operaciones digitales." },
                  { value: 2, text: "2. Existen redes básicas que permiten conexión parcial, pero no garantizan eficiencia ni estabilidad." },
                  { value: 3, text: "3. Las redes permiten operaciones conectadas, con infraestructura digital consolidada y estable." },
                  { value: 4, text: "4. La conectividad es robusta, soportada en la nube y permite gestión digital integrada y eficiente." },
                  { value: 5, text: "5. La infraestructura de red es inteligente y autónoma, optimizada con analítica predictiva y machine learning." }
                ]
              },
              {
                type: "radiogroup",
                name: "plataformas_hardware",
                title: "¿Qué tan adecuadas son las plataformas y el hardware para soportar operaciones digitales?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. Las plataformas y el hardware son obsoletos o insuficientes para soportar procesos digitales." },
                  { value: 2, text: "2. Se cuenta con hardware funcional y algunas plataformas digitales básicas, pero con limitaciones de desempeño." },
                  { value: 3, text: "3. Las plataformas y equipos están actualizados, permiten integración y soportan operaciones conectadas." },
                  { value: 4, text: "4. El hardware y las plataformas están optimizados para trabajar en la nube con alta eficiencia operativa." },
                  { value: 5, text: "5. Se cuenta con plataformas inteligentes, escalables y hardware avanzado con capacidades de automatización y análisis." }
                ]
              }
            ]
          },
          {
            type: "panel",
            name: "uso_metodologias_digitales",
            title: "02. Uso de metodologías digitales",
            elements: [
              {
                type: "radiogroup",
                name: "presencia_metodologias_innovacion",
                title: "¿La organización utiliza metodologías como Agile, Design Sprint o Lean para implementar soluciones digitales?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No se utilizan metodologías estructuradas para implementar soluciones digitales." },
                  { value: 2, text: "2. Se ha explorado alguna metodología como Agile o Lean, pero su aplicación es esporádica o experimental." },
                  { value: 3, text: "3. Se aplican metodologías digitales en algunos proyectos, con equipos parcialmente capacitados." },
                  { value: 4, text: "4. Las metodologías como Agile y Design Sprint están institucionalizadas y se aplican de forma consistente." },
                  { value: 5, text: "5. La organización opera con metodologías ágiles avanzadas, integradas a procesos automatizados y de mejora continua." }
                ]
              },
              {
                type: "radiogroup",
                name: "estandarizacion_enfoque_metodologico",
                title: "¿Qué tan estandarizado es el uso de metodologías digitales en los proyectos?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No existe un uso definido de metodologías digitales en los proyectos." },
                  { value: 2, text: "2. Algunos equipos utilizan metodologías digitales, pero no hay una estandarización organizacional." },
                  { value: 3, text: "3. El uso de metodologías digitales está parcialmente estandarizado en proyectos clave." },
                  { value: 4, text: "4. Las metodologías digitales están estandarizadas en la mayoría de los proyectos y procesos." },
                  { value: 5, text: "5. El uso de metodologías digitales está completamente estandarizado y optimizado a través de automatización y mejora continua." }
                ]
              },
              {
                type: "radiogroup",
                name: "aplicacion_practica_metodologias",
                title: "¿Qué tan frecuente es la aplicación práctica de metodologías digitales en proyectos tecnológicos?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No se aplican metodologías digitales en los proyectos tecnológicos." },
                  { value: 2, text: "2. Se han aplicado metodologías digitales en algunos casos, pero de manera aislada." },
                  { value: 3, text: "3. Se aplican metodologías digitales de forma recurrente en proyectos relevantes." },
                  { value: 4, text: "4. Las metodologías digitales se aplican de forma consistente y estructurada en la mayoría de los proyectos." },
                  { value: 5, text: "5. La aplicación de metodologías digitales es sistemática, continua y respaldada por herramientas automatizadas." }
                ]
              }
            ]
          },
          {
            type: "panel",
            name: "automatizacion_procesos_operativos",
            title: "03. Automatización de procesos operativos",
            elements: [
              {
                type: "radiogroup",
                name: "impacto_automatizacion",
                title: "¿Cuál es el impacto observable de la automatización en la eficiencia operativa?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No se observa impacto en la eficiencia operativa, los procesos siguen siendo manuales y lentos." },
                  { value: 2, text: "2. El impacto es limitado y puntual, con mejoras en tareas específicas pero sin efecto generalizado." },
                  { value: 3, text: "3. Se observan mejoras claras en la eficiencia de procesos clave gracias a la automatización." },
                  { value: 4, text: "4. La automatización ha generado una optimización operativa significativa y medible en diversas áreas." },
                  { value: 5, text: "5. La eficiencia operativa se ha transformado con procesos predictivos, adaptativos y altamente automatizados." }
                ]
              },
              {
                type: "radiogroup",
                name: "mineria_procesos",
                title: "¿La organización utiliza minería de procesos (process mining) para identificar cuellos de botella y oportunidades de automatización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No se conoce ni utiliza minería de procesos." },
                  { value: 2, text: "2. Se conoce el concepto, pero su uso es esporádico o exploratorio." },
                  { value: 3, text: "3. Se han realizado ejercicios de minería en procesos clave, pero sin institucionalización." },
                  { value: 4, text: "4. Se aplican herramientas de minería de procesos en áreas relevantes para mapear flujos y priorizar automatización." },
                  { value: 5, text: "5. La minería de procesos es parte del ciclo de mejora continua, integrada al monitoreo en tiempo real y ligada a decisiones estratégicas." }
                ]
              },
              {
                type: "radiogroup",
                name: "porcentaje_procesos_automatizados",
                title: "¿Qué tan automatizados están los procesos clave?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. Los procesos clave son completamente manuales y dependen de la intervención humana." },
                  { value: 2, text: "2. Algunos procesos han sido parcialmente automatizados con herramientas básicas." },
                  { value: 3, text: "3. La mayoría de los procesos clave están automatizados y operan de manera integrada." },
                  { value: 4, text: "4. Los procesos clave están altamente automatizados, con integración en plataformas digitales y en la nube." },
                  { value: 5, text: "5. Los procesos son totalmente automatizados, adaptativos e inteligentes, con apoyo de machine learning y análisis predictivo." }
                ]
              },
              {
                type: "radiogroup",
                name: "herramientas_bajo_costo",
                title: "¿Qué tan común es el uso de herramientas de bajo costo (como RPA sin código, Excel avanzado, Power Automate, etc.) para automatizar tareas operativas?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No se utilizan herramientas accesibles o de bajo costo para automatizar tareas." },
                  { value: 2, text: "2. Se han probado herramientas como macros o flujos, pero de forma individual y sin soporte." },
                  { value: 3, text: "3. Algunas áreas han adoptado herramientas low-code/no-code para automatizar flujos específicos." },
                  { value: 4, text: "4. Existen lineamientos y soporte para el uso de estas herramientas, con resultados medibles." },
                  { value: 5, text: "5. La automatización con herramientas de bajo costo está extendida, con gobierno, comunidad activa y resultados integrados al performance operativo." }
                ]
              },
              {
                type: "radiogroup",
                name: "robustez_herramientas",
                title: "¿Qué tan robustas y modernas son las herramientas utilizadas para la automatización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No se utilizan herramientas de automatización o son obsoletas." },
                  { value: 2, text: "2. Se usan herramientas básicas con capacidades limitadas para tareas repetitivas." },
                  { value: 3, text: "3. Las herramientas de automatización son modernas, confiables y están integradas a procesos clave." },
                  { value: 4, text: "4. Se utilizan plataformas avanzadas en la nube para la automatización integral de operaciones." },
                  { value: 5, text: "5. Las herramientas de automatización son inteligentes, escalables y habilitadas con machine learning y analítica avanzada." }
                ]
              },
              {
                type: "radiogroup",
                name: "herramientas_especializadas",
                title: "¿Se utilizan herramientas tecnológicas especializadas según las necesidades particulares de la industria (SCADA, MES, ERPs verticales, etc.) para automatizar procesos?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No se utilizan herramientas específicas de la industria para automatización." },
                  { value: 2, text: "2. Se utilizan parcialmente, pero sin integración ni alineación operativa." },
                  { value: 3, text: "3. Se aplican soluciones especializadas en ciertas operaciones clave." },
                  { value: 4, text: "4. Las herramientas específicas están integradas a los procesos operativos y de toma de decisiones." },
                  { value: 5, text: "5. Las soluciones industriales se usan estratégicamente, conectadas con el ecosistema digital, y se actualizan de forma continua." }
                ]
              }
            ]
          },
          {
            type: "panel",
            name: "integracion_sistemas",
            title: "04. Integración de sistemas y arquitectura digital",
            elements: [
              {
                type: "radiogroup",
                name: "nivel_integracion_sistemas",
                title: "¿Qué nivel de integración existe entre los principales sistemas de la organización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. Los sistemas operan de forma aislada, sin integración entre áreas o procesos." },
                  { value: 2, text: "2. Existe una integración parcial entre algunos sistemas, pero persisten silos de información." },
                  { value: 3, text: "3. Los sistemas principales están integrados, permitiendo una operación conectada entre áreas clave." },
                  { value: 4, text: "4. La integración entre sistemas es amplia, con intercambio fluido de datos en tiempo real a través de plataformas digitales." },
                  { value: 5, text: "5. Los sistemas están completamente integrados y sincronizados mediante soluciones inteligentes y automatizadas." }
                ]
              },
              {
                type: "radiogroup",
                name: "flexibilidad_arquitectura",
                title: "¿Qué tan flexible y escalable es la arquitectura digital actual?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. La arquitectura digital es rígida, limitada y no permite adaptarse a nuevas necesidades." },
                  { value: 2, text: "2. Se cuenta con una arquitectura básica que permite cierta flexibilidad, pero con limitaciones de escalabilidad." },
                  { value: 3, text: "3. La arquitectura digital es moderadamente flexible y puede escalar con esfuerzos técnicos adicionales." },
                  { value: 4, text: "4. La arquitectura es flexible, escalable y está diseñada para adaptarse rápidamente a nuevas demandas del negocio." },
                  { value: 5, text: "5. La arquitectura digital es altamente flexible, escalable e inteligente, permitiendo crecimiento continuo y automatizado." }
                ]
              },
              {
                type: "radiogroup",
                name: "fluidez_datos",
                title: "¿Qué tan fluido es el flujo de datos entre plataformas o sistemas conectados?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No existe un flujo de datos entre plataformas; la información se gestiona de forma manual y aislada." },
                  { value: 2, text: "2. El flujo de datos entre algunos sistemas es posible, pero requiere intervención manual frecuente." },
                  { value: 3, text: "3. El flujo de datos es mayormente automático entre plataformas clave, aunque con limitaciones técnicas." },
                  { value: 4, text: "4. El flujo de datos es fluido, automatizado y permite decisiones operativas en tiempo real." },
                  { value: 5, text: "5. El flujo de datos es totalmente automatizado, continuo y enriquecido con analítica avanzada e inteligencia artificial." }
                ]
              }
            ]
          },
          {
            type: "panel",
            name: "tecnologias_emergentes",
            title: "05. Adopción de tecnologías emergentes",
            elements: [
              {
                type: "radiogroup",
                name: "exploracion_tecnologias",
                title: "¿La organización explora activamente nuevas tecnologías (IA, IoT, blockchain, etc.)?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. La organización no explora nuevas tecnologías ni tiene iniciativas relacionadas." },
                  { value: 2, text: "2. Se ha mostrado interés inicial en nuevas tecnologías, pero sin acciones concretas." },
                  { value: 3, text: "3. Existen algunas iniciativas piloto para explorar tecnologías emergentes como IA o IoT." },
                  { value: 4, text: "4. La organización evalúa e implementa activamente nuevas tecnologías en procesos estratégicos." },
                  { value: 5, text: "5. La exploración y adopción de nuevas tecnologías es continua, sistemática y parte central de la estrategia digital." }
                ]
              },
              {
                type: "radiogroup",
                name: "pilotos_tecnologias",
                title: "¿Se implementan pilotos o pruebas controladas antes de adoptar nuevas tecnologías?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No se realizan pilotos ni pruebas antes de adoptar nuevas tecnologías." },
                  { value: 2, text: "2. Ocasionalmente se realizan pruebas informales, sin una metodología definida." },
                  { value: 3, text: "3. Se implementan pilotos en algunos casos específicos, con seguimiento parcial." },
                  { value: 4, text: "4. Los pilotos son una práctica común, con evaluación estructurada antes de escalar nuevas tecnologías." },
                  { value: 5, text: "5. Existe un proceso formal, sistemático y ágil para ejecutar pilotos, con análisis de impacto y escalamiento automatizado." }
                ]
              },
              {
                type: "radiogroup",
                name: "escalamiento_tecnologias",
                title: "¿Qué tan frecuente y estructurado es el escalamiento de tecnologías emergentes dentro de la organización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No se escalan tecnologías emergentes dentro de la organización." },
                  { value: 2, text: "2. El escalamiento ocurre de manera ocasional y sin un proceso claro o documentado." },
                  { value: 3, text: "3. Se han escalado algunas tecnologías emergentes con procesos parciales y resultados mixtos." },
                  { value: 4, text: "4. El escalamiento de tecnologías emergentes es frecuente y se realiza bajo un marco metodológico definido." },
                  { value: 5, text: "5. Existe un proceso estructurado, continuo y ágil para escalar tecnologías emergentes con base en datos y resultados." }
                ]
              }
            ]
          }
        ]
      }
    ]
  };