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
                  { value: 1, text: "No existe capacidad tecnológica suficiente ni conectividad para soportar operaciones digitales." },
                  { value: 2, text: "Existen esfuerzos limitados con tecnologías básicas, conectividad parcial o no estandarizada." },
                  { value: 3, text: "Las capacidades tecnológicas son funcionales, con conectividad y herramientas en proceso de consolidación." },
                  { value: 4, text: "La infraestructura, metodologías y herramientas digitales son modernas, estandarizadas y eficientes." },
                  { value: 5, text: "La organización opera con tecnología de punta, automatización avanzada e integración total entre sistemas." }
                ]
              },
              {
                type: "radiogroup",
                name: "conectividad_redes",
                title: "¿La conectividad y redes actuales permiten operaciones digitales eficientes?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No existe capacidad tecnológica suficiente ni conectividad para soportar operaciones digitales." },
                  { value: 2, text: "Existen esfuerzos limitados con tecnologías básicas, conectividad parcial o no estandarizada." },
                  { value: 3, text: "Las capacidades tecnológicas son funcionales, con conectividad y herramientas en proceso de consolidación." },
                  { value: 4, text: "La infraestructura, metodologías y herramientas digitales son modernas, estandarizadas y eficientes." },
                  { value: 5, text: "La organización opera con tecnología de punta, automatización avanzada e integración total entre sistemas." }
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
          { value: 1, text: "No existe capacidad tecnológica suficiente ni conectividad para soportar operaciones digitales." },
          { value: 2, text: "Existen esfuerzos limitados con tecnologías básicas, conectividad parcial o no estandarizada." },
          { value: 3, text: "Las capacidades tecnológicas son funcionales, con conectividad y herramientas en proceso de consolidación." },
          { value: 4, text: "La infraestructura, metodologías y herramientas digitales son modernas, estandarizadas y eficientes." },
          { value: 5, text: "La organización opera con tecnología de punta, automatización avanzada e integración total entre sistemas." }
        ]
      },
      {
        type: "radiogroup",
        name: "estandarizacion_enfoque_metodologico",
        title: "¿Qué tan estandarizado es el uso de metodologías digitales en los proyectos?",
        isRequired: true,
        choices: [
          { value: 1, text: "No existe capacidad tecnológica suficiente ni conectividad para soportar operaciones digitales." },
          { value: 2, text: "Existen esfuerzos limitados con tecnologías básicas, conectividad parcial o no estandarizada." },
          { value: 3, text: "Las capacidades tecnológicas son funcionales, con conectividad y herramientas en proceso de consolidación." },
          { value: 4, text: "La infraestructura, metodologías y herramientas digitales son modernas, estandarizadas y eficientes." },
          { value: 5, text: "La organización opera con tecnología de punta, automatización avanzada e integración total entre sistemas." }
        ]
      },
      {
        type: "radiogroup",
        name: "aplicacion_practica_metodologias",
        title: "¿Qué tan frecuente es la aplicación práctica de metodologías digitales en proyectos tecnológicos?",
        isRequired: true,
        choices: [
          { value: 1, text: "No existe capacidad tecnológica suficiente ni conectividad para soportar operaciones digitales." },
          { value: 2, text: "Existen esfuerzos limitados con tecnologías básicas, conectividad parcial o no estandarizada." },
          { value: 3, text: "Las capacidades tecnológicas son funcionales, con conectividad y herramientas en proceso de consolidación." },
          { value: 4, text: "La infraestructura, metodologías y herramientas digitales son modernas, estandarizadas y eficientes." },
          { value: 5, text: "La organización opera con tecnología de punta, automatización avanzada e integración total entre sistemas." }
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
                  { value: 1, text: "No existe capacidad tecnológica suficiente ni conectividad para soportar operaciones digitales." },
                  { value: 2, text: "Existen esfuerzos limitados con tecnologías básicas, conectividad parcial o no estandarizada." },
                  { value: 3, text: "Las capacidades tecnológicas son funcionales, con conectividad y herramientas en proceso de consolidación." },
                  { value: 4, text: "La infraestructura, metodologías y herramientas digitales son modernas, estandarizadas y eficientes." },
                  { value: 5, text: "La organización opera con tecnología de punta, automatización avanzada e integración total entre sistemas." }
                ]
              },
              {
                type: "radiogroup",
                name: "mineria_procesos",
                title: "¿La organización utiliza minería de procesos (process mining) para identificar cuellos de botella y oportunidades de automatización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No se conoce ni utiliza minería de procesos." },
                  { value: 2, text: "Se conoce el concepto, pero su uso es esporádico o exploratorio." },
                  { value: 3, text: "Se han realizado ejercicios de minería en procesos clave, pero sin institucionalización." },
                  { value: 4, text: "Se aplican herramientas de minería de procesos en áreas relevantes para mapear flujos y priorizar automatización." },
                  { value: 5, text: "La minería de procesos es parte del ciclo de mejora continua, integrada al monitoreo en tiempo real y ligada a decisiones estratégicas." }
                ]
              },
              {
                type: "radiogroup",
                name: "porcentaje_procesos_automatizados",
                title: "¿Qué porcentaje de los procesos clave están automatizados?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No existe capacidad tecnológica suficiente ni conectividad para soportar operaciones digitales." },
                  { value: 2, text: "Existen esfuerzos limitados con tecnologías básicas, conectividad parcial o no estandarizada." },
                  { value: 3, text: "Las capacidades tecnológicas son funcionales, con conectividad y herramientas en proceso de consolidación." },
                  { value: 4, text: "La infraestructura, metodologías y herramientas digitales son modernas, estandarizadas y eficientes." },
                  { value: 5, text: "La organización opera con tecnología de punta, automatización avanzada e integración total entre sistemas." }
                ]
              },
              {
                type: "radiogroup",
                name: "herramientas_bajo_costo",
                title: "¿Qué tan común es el uso de herramientas de bajo costo (como RPA sin código, Excel avanzado, Power Automate, etc.) para automatizar tareas operativas?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No se utilizan herramientas accesibles o de bajo costo para automatizar tareas." },
                  { value: 2, text: "Se han probado herramientas como macros o flujos, pero de forma individual y sin soporte." },
                  { value: 3, text: "Algunas áreas han adoptado herramientas low-code/no-code para automatizar flujos específicos." },
                  { value: 4, text: "Existen lineamientos y soporte para el uso de estas herramientas, con resultados medibles." },
                  { value: 5, text: "La automatización con herramientas de bajo costo está extendida, con gobierno, comunidad activa y resultados integrados al performance operativo." }
                ]
              },
              {
                type: "radiogroup",
                name: "robustez_herramientas",
                title: "¿Qué tan robustas y modernas son las herramientas utilizadas para la automatización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No existe capacidad tecnológica suficiente ni conectividad para soportar operaciones digitales." },
                  { value: 2, text: "Existen esfuerzos limitados con tecnologías básicas, conectividad parcial o no estandarizada." },
                  { value: 3, text: "Las capacidades tecnológicas son funcionales, con conectividad y herramientas en proceso de consolidación." },
                  { value: 4, text: "La infraestructura, metodologías y herramientas digitales son modernas, estandarizadas y eficientes." },
                  { value: 5, text: "La organización opera con tecnología de punta, automatización avanzada e integración total entre sistemas." }
                ]
              },
              {
                type: "radiogroup",
                name: "herramientas_especializadas",
                title: "¿Se utilizan herramientas tecnológicas especializadas según las necesidades particulares de la industria (SCADA, MES, ERPs verticales, etc.) para automatizar procesos?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No se utilizan herramientas especializadas en la industria para automatizar tareas." },
                  { value: 2, text: "Se utilizan parcialmente, pero sin integración ni alineación operativa." },
                  { value: 3, text: "Se utilizan soluciones especializadas en áreas críticas." },
                  { value: 4, text: "Las soluciones están específicamente integradas a los procesos operativos y de toma de decisiones." },
                  { value: 5, text: "Las soluciones industriales se usan estratégicamente, conectadas con el ecosistema digital, y se actualizan de forma continua." }
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
                  { value: 1, text: "No existe capacidad tecnológica suficiente ni conectividad para soportar operaciones digitales." },
                  { value: 2, text: "Existen esfuerzos limitados con tecnologías básicas, conectividad parcial o no estandarizada." },
                  { value: 3, text: "Las capacidades tecnológicas son funcionales, con conectividad y herramientas en proceso de consolidación." },
                  { value: 4, text: "La infraestructura, metodologías y herramientas digitales son modernas, estandarizadas y eficientes." },
                  { value: 5, text: "La organización opera con tecnología de punta, automatización avanzada e integración total entre sistemas." }
                ]
              },
              {
                type: "radiogroup",
                name: "flexibilidad_arquitectura",
                title: "¿Qué tan flexible y escalable es la arquitectura digital actual?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No existe capacidad tecnológica suficiente ni conectividad para soportar operaciones digitales." },
                  { value: 2, text: "Existen esfuerzos limitados con tecnologías básicas, conectividad parcial o no estandarizada." },
                  { value: 3, text: "Las capacidades tecnológicas son funcionales, con conectividad y herramientas en proceso de consolidación." },
                  { value: 4, text: "La infraestructura, metodologías y herramientas digitales son modernas, estandarizadas y eficientes." },
                  { value: 5, text: "La organización opera con tecnología de punta, automatización avanzada e integración total entre sistemas." }
                ]
              },
              {
                type: "radiogroup",
                name: "fluidez_datos",
                title: "¿Qué tan fluido es el flujo de datos entre plataformas o sistemas conectados?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No existe capacidad tecnológica suficiente ni conectividad para soportar operaciones digitales." },
                  { value: 2, text: "Existen esfuerzos limitados con tecnologías básicas, conectividad parcial o no estandarizada." },
                  { value: 3, text: "Las capacidades tecnológicas son funcionales, con conectividad y herramientas en proceso de consolidación." },
                  { value: 4, text: "La infraestructura, metodologías y herramientas digitales son modernas, estandarizadas y eficientes." },
                  { value: 5, text: "La organización opera con tecnología de punta, automatización avanzada e integración total entre sistemas." }
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
                  { value: 1, text: "No existe capacidad tecnológica suficiente ni conectividad para soportar operaciones digitales." },
                  { value: 2, text: "Existen esfuerzos limitados con tecnologías básicas, conectividad parcial o no estandarizada." },
                  { value: 3, text: "Las capacidades tecnológicas son funcionales, con conectividad y herramientas en proceso de consolidación." },
                  { value: 4, text: "La infraestructura, metodologías y herramientas digitales son modernas, estandarizadas y eficientes." },
                  { value: 5, text: "La organización opera con tecnología de punta, automatización avanzada e integración total entre sistemas." }
                ]
              },
              {
                type: "radiogroup",
                name: "escalamiento_tecnologias",
                title: "¿Qué tan frecuente y estructurado es el escalamiento de tecnologías emergentes dentro de la organización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No existe capacidad tecnológica suficiente ni conectividad para soportar operaciones digitales." },
                  { value: 2, text: "Existen esfuerzos limitados con tecnologías básicas, conectividad parcial o no estandarizada." },
                  { value: 3, text: "Las capacidades tecnológicas son funcionales, con conectividad y herramientas en proceso de consolidación." },
                  { value: 4, text: "La infraestructura, metodologías y herramientas digitales son modernas, estandarizadas y eficientes." },
                  { value: 5, text: "La organización opera con tecnología de punta, automatización avanzada e integración total entre sistemas." }
                ]
              },
              {
                type: "radiogroup",
                name: "pilotos_tecnologias",
                title: "¿Se implementan pilotos o pruebas controladas antes de adoptar nuevas tecnologías?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No existe capacidad tecnológica suficiente ni conectividad para soportar operaciones digitales." },
                  { value: 2, text: "Existen esfuerzos limitados con tecnologías básicas, conectividad parcial o no estandarizada." },
                  { value: 3, text: "Las capacidades tecnológicas son funcionales, con conectividad y herramientas en proceso de consolidación." },
                  { value: 4, text: "La infraestructura, metodologías y herramientas digitales son modernas, estandarizadas y eficientes." },
                  { value: 5, text: "La organización opera con tecnología de punta, automatización avanzada e integración total entre sistemas." }
                ]
              }
            ]
          }
        ]
      }
    ]
  };