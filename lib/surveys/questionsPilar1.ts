export const questionsPilar1 = {
    title: "Pilar 1 - Estrategia y Definición de Valor",
    pages: [
      {
        name: "estrategia",
        title: "Estrategia y Definición de Valor",
        elements: [
          {
            type: "panel",
            name: "vision_digital",
            title: "01. Visión digital organizacional",
            elements: [
              {
                type: "radiogroup",
                name: "revision_vision_digital",
                title: "¿Cada cuánto tiempo se revisa y actualiza la visión digital para adaptarse al entorno tecnológico?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No existe una visión digital clara. Cada área opera de forma aislada." },
                  { value: 2, text: "Existe una intención de digitalización, pero sin una visión formal." },
                  { value: 3, text: "Existe una visión digital básica, alineada parcialmente al negocio." },
                  { value: 4, text: "La visión digital está formalizada y alineada a la estrategia organizacional." },
                  { value: 5, text: "La visión digital guía todas las áreas y se actualiza continuamente." }
                ]
              },
              {
                type: "radiogroup",
                name: "vision_digital_definida",
                title: "¿La organización tiene una visión digital claramente definida?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No existe una visión digital clara. Cada área opera de forma aislada." },
                  { value: 2, text: "Existe una intención de digitalización, pero sin una visión formal." },
                  { value: 3, text: "Existe una visión digital básica, alineada parcialmente al negocio." },
                  { value: 4, text: "La visión digital está formalizada y alineada a la estrategia organizacional." },
                  { value: 5, text: "La visión digital guía todas las áreas y se actualiza continuamente." }
                ]
              },
              {
                type: "radiogroup",
                name: "vision_digital_documentada",
                title: "¿La visión digital está formalmente documentada y es conocida por todos los niveles de la organización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No existe una visión digital clara. Cada área opera de forma aislada." },
                  { value: 2, text: "Existe una intención de digitalización, pero sin una visión formal." },
                  { value: 3, text: "Existe una visión digital básica, alineada parcialmente al negocio." },
                  { value: 4, text: "La visión digital está formalizada y alineada a la estrategia organizacional." },
                  { value: 5, text: "La visión digital guía todas las áreas y se actualiza continuamente." }
                ]
              }
            ]
          },
          {
            type: "panel",
            name: "alineacion_estrategica",
            title: "02. Alineación con la estrategia del negocio",
            elements: [
              {
                type: "radiogroup",
                name: "integracion_planeacion",
                title: "¿La estrategia digital está integrada al ciclo de planeación estratégica y operativa del negocio?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No se considera la estrategia digital en el proceso de planeación." },
                  { value: 2, text: "La planeación digital ocurre de forma separada y sin coordinación con el resto del negocio." },
                  { value: 3, text: "La estrategia digital participa parcialmente en el proceso de planeación, pero sin estructuras formales." },
                  { value: 4, text: "El plan digital se formula de forma coordinada y con métodos consistentes dentro del proceso de planeación." },
                  { value: 5, text: "La estrategia digital es parte estructural del planeamiento estratégico y operativo, desde su diseño hasta la ejecución." }
                ]
              },
              {
                type: "radiogroup",
                name: "alineacion_estrategica",
                title: "¿Las iniciativas digitales están alineadas con los objetivos estratégicos del negocio?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No existe relación entre la estrategia digital y la del negocio. Las iniciativas digitales son reactivas y aisladas." },
                  { value: 2, text: "Existe intención de alinearlas, pero no hay mecanismos formales. Algunas iniciativas están parcialmente conectadas." },
                  { value: 3, text: "La estrategia digital está parcialmente integrada a los objetivos del negocio. Hay procesos definidos pero no aplicados consistentemente." },
                  { value: 4, text: "Existe una clara alineación entre ambas estrategias, con mecanismos establecidos y aplicados." },
                  { value: 5, text: "La estrategia digital está completamente integrada y es un habilitador central de la estrategia del negocio." }
                ]
              },
              {
                type: "radiogroup",
                name: "evaluacion_impacto_digital",
                title: "¿Se evalúa el impacto de la estrategia digital en los resultados del negocio?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No se realiza ningún tipo de evaluación del impacto digital." },
                  { value: 2, text: "Se realizan evaluaciones aisladas, sin una metodología clara ni seguimiento." },
                  { value: 3, text: "Existen métricas y evaluaciones básicas que dan visibilidad al desempeño de las iniciativas digitales." },
                  { value: 4, text: "El impacto digital es monitoreado con indicadores clave vinculados a los objetivos del negocio." },
                  { value: 5, text: "La estrategia digital es gestionada con base en KPIs integrados a los tableros estratégicos del negocio." }
                ]
              }
            ]
          },
          {
            type: "panel",
            name: "technology_roadmap",
            title: "03. Technology Roadmap / Taxonomía digital",
            elements: [
              {
                type: "radiogroup",
                name: "roadmap_tecnologico",
                title: "¿La organización cuenta con un roadmap tecnológico formal y vigente?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No existe un roadmap tecnológico ni una clasificación de tecnologías en la organización." },
                  { value: 2, text: "Hay iniciativas tecnológicas dispersas sin un roadmap formal o clasificación estructurada." },
                  { value: 3, text: "Existe un roadmap básico y una clasificación incipiente, pero no se actualizan de forma sistemática." },
                  { value: 4, text: "El roadmap está bien estructurado, alineado con las prioridades de negocio y con una taxonomía funcional." },
                  { value: 5, text: "El roadmap y la taxonomía digital son herramientas estratégicas vivas, usadas para priorizar, innovar y gestionar tecnologías de forma proactiva." }
                ]
              },
              {
                type: "radiogroup",
                name: "actualizacion_roadmap",
                title: "¿Qué tan actualizado y alineado está el roadmap con las necesidades del negocio y las tendencias tecnológicas?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No existe un roadmap tecnológico ni una clasificación de tecnologías en la organización." },
                  { value: 2, text: "Hay iniciativas tecnológicas dispersas sin un roadmap formal o clasificación estructurada." },
                  { value: 3, text: "Existe un roadmap básico y una clasificación incipiente, pero no se actualizan de forma sistemática." },
                  { value: 4, text: "El roadmap está bien estructurado, alineado con las prioridades de negocio y con una taxonomía funcional." },
                  { value: 5, text: "El roadmap y la taxonomía digital son herramientas estratégicas vivas, usadas para priorizar, innovar y gestionar tecnologías de forma proactiva." }
                ]
              },
              {
                type: "radiogroup",
                name: "uso_taxonomia_digital",
                title: "¿Se utiliza una taxonomía digital para clasificar tecnologías y procesos en la organización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No existe un roadmap tecnológico ni una clasificación de tecnologías en la organización." },
                  { value: 2, text: "Hay iniciativas tecnológicas dispersas sin un roadmap formal o clasificación estructurada." },
                  { value: 3, text: "Existe un roadmap básico y una clasificación incipiente, pero no se actualizan de forma sistemática." },
                  { value: 4, text: "El roadmap está bien estructurado, alineado con las prioridades de negocio y con una taxonomía funcional." },
                  { value: 5, text: "El roadmap y la taxonomía digital son herramientas estratégicas vivas, usadas para priorizar, innovar y gestionar tecnologías de forma proactiva." }
                ]
              }
            ]
          },
          {
            type: "panel",
            name: "curva_s_adopcion",
            title: "04. Curva S de adopción tecnológica",
            elements: [
              {
                type: "radiogroup",
                name: "momento_incorporacion_tecnologia",
                title: "¿La organización define el momento adecuado para incorporar nuevas tecnologías?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No se realiza ningún análisis sobre madurez, momento ni ciclo de vida de las tecnologías." },
                  { value: 2, text: "Se hacen análisis informales o reactivos, sin una metodología o criterios establecidos." },
                  { value: 3, text: "Existen criterios básicos para evaluar madurez y momento de adopción, pero no se aplican de forma consistente." },
                  { value: 4, text: "Se cuenta con un enfoque estructurado para analizar la madurez y el impacto de nuevas tecnologías antes de adoptarlas." },
                  { value: 5, text: "Se aplica una metodología avanzada y sistemática basada en curvas de madurez tecnológica y criterios de valor e impacto." }
                ]
              },
              {
                type: "radiogroup",
                name: "ciclo_vida_impacto_tecnologia",
                title: "¿Se consideran el ciclo de vida y el impacto esperado de las tecnologías al momento de su adopción?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No se realiza ningún análisis sobre madurez, momento ni ciclo de vida de las tecnologías." },
                  { value: 2, text: "Se hacen análisis informales o reactivos, sin una metodología o criterios establecidos." },
                  { value: 3, text: "Existen criterios básicos para evaluar madurez y momento de adopción, pero no se aplican de forma consistente." },
                  { value: 4, text: "Se cuenta con un enfoque estructurado para analizar la madurez y el impacto de nuevas tecnologías antes de adoptarlas." },
                  { value: 5, text: "Se aplica una metodología avanzada y sistemática basada en curvas de madurez tecnológica y criterios de valor e impacto." }
                ]
              },
              {
                type: "radiogroup",
                name: "evaluacion_madurez_tecnologia",
                title: "¿Se evalúa la madurez de las tecnologías antes de adoptarlas?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No se realiza ningún análisis sobre madurez, momento ni ciclo de vida de las tecnologías." },
                  { value: 2, text: "Se hacen análisis informales o reactivos, sin una metodología o criterios establecidos." },
                  { value: 3, text: "Existen criterios básicos para evaluar madurez y momento de adopción, pero no se aplican de forma consistente." },
                  { value: 4, text: "Se cuenta con un enfoque estructurado para analizar la madurez y el impacto de nuevas tecnologías antes de adoptarlas." },
                  { value: 5, text: "Se aplica una metodología avanzada y sistemática basada en curvas de madurez tecnológica y criterios de valor e impacto." }
                ]
              }
            ]
          },
          {
            type: "panel",
            name: "propuesta_valor_digital",
            title: "05. Propuesta de valor digital para el cliente (CX)",
            elements: [
              {
                type: "radiogroup",
                name: "experiencia_cliente_estrategia_digital",
                title: "¿La estrategia digital considera la experiencia del cliente como un elemento clave?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No se considera la experiencia ni el valor digital como parte de la propuesta al cliente." },
                  { value: 2, text: "Existen iniciativas digitales aisladas dentro de la propuesta de valor, pero sin una estructura clara." },
                  { value: 3, text: "La propuesta digital está parcialmente integrada en el portafolio de valor, con esfuerzos en algunos canales y productos." },
                  { value: 4, text: "La propuesta digital está bien integrada, con soluciones multicanal, medibles y alineadas a las expectativas del mercado." },
                  { value: 5, text: "La propuesta digital es diferenciadora, altamente automatizada, personalizada y optimizada con base en resultados del mercado." }
                ]
              },
              {
                type: "radiogroup",
                name: "digitalizacion_propuesta_valor",
                title: "¿Qué tan digitalizados están los productos, servicios o canales de la propuesta de valor?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No se considera la experiencia ni el valor digital como parte de la propuesta al cliente." },
                  { value: 2, text: "Existen iniciativas digitales aisladas dentro de la propuesta de valor, pero sin una estructura clara." },
                  { value: 3, text: "La propuesta digital está parcialmente integrada en el portafolio de valor, con esfuerzos en algunos canales y productos." },
                  { value: 4, text: "La propuesta digital está bien integrada, con soluciones multicanal, medibles y alineadas a las expectativas del mercado." },
                  { value: 5, text: "La propuesta digital es diferenciadora, altamente automatizada, personalizada y optimizada con base en resultados del mercado." }
                ]
              },
              {
                type: "radiogroup",
                name: "monitoreo_valor_digital",
                title: "¿Se monitorea el desempeño de la propuesta de valor digital en el mercado?",
                isRequired: true,
                choices: [
                  { value: 1, text: "No se considera la experiencia ni el valor digital como parte de la propuesta al cliente." },
                  { value: 2, text: "Existen iniciativas digitales aisladas dentro de la propuesta de valor, pero sin una estructura clara." },
                  { value: 3, text: "La propuesta digital está parcialmente integrada en el portafolio de valor, con esfuerzos en algunos canales y productos." },
                  { value: 4, text: "La propuesta digital está bien integrada, con soluciones multicanal, medibles y alineadas a las expectativas del mercado." },
                  { value: 5, text: "La propuesta digital es diferenciadora, altamente automatizada, personalizada y optimizada con base en resultados del mercado." }
                ]
              }
            ]
          }
        ]
      }
    ]
  };