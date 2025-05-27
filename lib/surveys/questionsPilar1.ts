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
                name: "vision_digital_definida",
                title: "¿La organización tiene una visión digital claramente definida?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No existe una visión digital clara. Cada área opera de forma aislada." },
                  { value: 2, text: "2. Existe una intención de digitalización, pero sin una visión formal." },
                  { value: 3, text: "3. Existe una visión digital básica, alineada parcialmente al negocio." },
                  { value: 4, text: "4. La visión digital está formalizada y alineada a la estrategia organizacional." },
                  { value: 5, text: "5. La visión digital guía todas las áreas y se actualiza continuamente." }
                ]
              },
              {
                type: "radiogroup",
                name: "vision_digital_documentada",
                title: "¿La visión digital está formalmente documentada y es conocida por todos los niveles de la organización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. La visión digital no está documentada ni es conocida por el equipo." },
                  { value: 2, text: "2. La visión digital existe como un borrador, pero no ha sido validada ni compartida ampliamente." },
                  { value: 3, text: "3. La visión digital está documentada, pero solo la conocen los líderes o niveles directivos." },
                  { value: 4, text: "4. La visión digital está documentada y ha sido comunicada a la mayoría de las áreas." },
                  { value: 5, text: "5. La visión digital está bien documentada, actualizada y es conocida por todos los niveles." }
                ]
              },
              {
                type: "radiogroup",
                name: "revision_vision_digital",
                title: "¿Cada cuánto tiempo se revisa y actualiza la visión digital para adaptarse al entorno tecnológico?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. La visión digital no se revisa ni se ha actualizado desde su creación." },
                  { value: 2, text: "2. La visión digital se revisa esporádicamente, sin una periodicidad clara." },
                  { value: 3, text: "3. La visión digital se revisa de forma periódica, aunque no siempre se actualiza." },
                  { value: 4, text: "4. La visión digital se revisa y actualiza con regularidad, según cambios del entorno." },
                  { value: 5, text: "5. La visión digital se revisa continuamente y se adapta de forma ágil." }
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
                name: "alineacion_estrategica",
                title: "¿Las iniciativas digitales están alineadas con los objetivos estratégicos del negocio?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No existe relación entre la estrategia digital y la del negocio. Las iniciativas digitales son reactivas y aisladas." },
                  { value: 2, text: "2. Existe intención de alinearlas, pero no hay mecanismos formales. Algunas iniciativas están parcialmente conectadas." },
                  { value: 3, text: "3. La estrategia digital está parcialmente integrada a los objetivos del negocio. Hay procesos definidos pero no aplicados consistentemente." },
                  { value: 4, text: "4. Existe una clara alineación entre ambas estrategias, con mecanismos establecidos y aplicados." },
                  { value: 5, text: "5. La estrategia digital está completamente integrada y es un habilitador central de la estrategia del negocio." }
                ]
              },
              {
                type: "radiogroup",
                name: "evaluacion_impacto_digital",
                title: "¿Se evalúa el impacto de la estrategia digital en los resultados del negocio?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No se realiza ningún tipo de evaluación del impacto digital." },
                  { value: 2, text: "2. Se realizan evaluaciones aisladas, sin una metodología clara ni seguimiento." },
                  { value: 3, text: "3. Existen métricas y evaluaciones básicas que dan visibilidad al desempeño de las iniciativas digitales." },
                  { value: 4, text: "4. El impacto digital es monitoreado con indicadores clave vinculados a los objetivos del negocio." },
                  { value: 5, text: "5. La estrategia digital es gestionada con base en KPIs integrados a los tableros estratégicos del negocio." }
                ]
              },
              {
                type: "radiogroup",
                name: "integracion_planeacion",
                title: "¿La estrategia digital está integrada al ciclo de planeación estratégica y operativa del negocio?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No se considera la estrategia digital en el proceso de planeación." },
                  { value: 2, text: "2. La planeación digital ocurre de forma separada y sin coordinación con el resto del negocio." },
                  { value: 3, text: "3. La estrategia digital participa parcialmente en el proceso de planeación, pero sin estructuras formales." },
                  { value: 4, text: "4. El plan digital se formula de forma coordinada y con métodos consistentes dentro del proceso de planeación." },
                  { value: 5, text: "5. La estrategia digital es parte estructural del planeamiento estratégico y operativo, desde su diseño hasta la ejecución." }
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
                  { value: 1, text: "1. La organización no cuenta con un roadmap tecnológico." },
                  { value: 2, text: "2. Existe un borrador de roadmap, pero no está vigente ni validado." },
                  { value: 3, text: "3. La organización tiene un roadmap definido, pero no está integrado a la estrategia global." },
                  { value: 4, text: "4. Existe un roadmap formal y vigente, alineado parcialmente con la estrategia." },
                  { value: 5, text: "5. El roadmap tecnológico es formal, vigente y está completamente integrado a la estrategia organizacional." }
                ]
              },
              {
                type: "radiogroup",
                name: "actualizacion_roadmap",
                title: "¿Qué tan actualizado y alineado está el roadmap con las necesidades del negocio y las tendencias tecnológicas?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. El roadmap no está actualizado ni responde a las necesidades actuales del negocio." },
                  { value: 2, text: "2. El roadmap se actualiza ocasionalmente, pero sin un enfoque claro hacia el negocio o la tecnología." },
                  { value: 3, text: "3. El roadmap está relativamente actualizado y considera en parte las necesidades del negocio." },
                  { value: 4, text: "4. El roadmap se actualiza con regularidad y está alineado con el negocio y tendencias clave." },
                  { value: 5, text: "5. El roadmap está completamente alineado y evoluciona de forma continua con el negocio y el entorno." }
                ]
              },
              {
                type: "radiogroup",
                name: "uso_taxonomia_digital",
                title: "¿Se utiliza una taxonomía digital para clasificar tecnologías y procesos en la organización?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No se utiliza ninguna taxonomía digital en la organización." },
                  { value: 2, text: "2. Existe una clasificación básica, pero no está estandarizada ni es conocida." },
                  { value: 3, text: "3. Se cuenta con una taxonomía definida, pero su uso es parcial o limitado." },
                  { value: 4, text: "4. La taxonomía está estandarizada y se utiliza de forma transversal." },
                  { value: 5, text: "5. La taxonomía digital está integrada, actualizada y guía la gestión tecnológica." }
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
                name: "evaluacion_madurez_tecnologia",
                title: "¿Se evalúa la madurez de las tecnologías antes de adoptarlas?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No se evalúa la madurez de las tecnologías antes de implementarlas." },
                  { value: 2, text: "2. La evaluación tecnológica es informal y no sigue un proceso definido." },
                  { value: 3, text: "3. Se realiza una evaluación básica antes de adoptar nuevas tecnologías." },
                  { value: 4, text: "4. La evaluación de madurez es parte del proceso de selección tecnológica." },
                  { value: 5, text: "5. La evaluación de madurez tecnológica es sistemática, estructurada y estratégica." }
                ]
              },
              {
                type: "radiogroup",
                name: "momento_incorporacion_tecnologia",
                title: "¿La organización define el momento adecuado para incorporar nuevas tecnologías?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. La organización no define ni analiza el momento para adoptar nuevas tecnologías." },
                  { value: 2, text: "2. A veces se considera el momento, pero sin un proceso o criterio claro." },
                  { value: 3, text: "3. El momento de adopción se considera, aunque de forma limitada o poco consistente." },
                  { value: 4, text: "4. La organización define estratégicamente el momento adecuado de adopción." },
                  { value: 5, text: "5. El momento de adopción es gestionado de forma proactiva y adaptable." }
                ]
              },
              {
                type: "radiogroup",
                name: "ciclo_vida_impacto_tecnologia",
                title: "¿Se consideran el ciclo de vida y el impacto esperado de las tecnologías al momento de su adopción?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No se considera el ciclo de vida ni el impacto esperado al adoptar tecnologías." },
                  { value: 2, text: "2. Se consideran de forma parcial o intuitiva, sin metodología clara." },
                  { value: 3, text: "3. Se considera el ciclo de vida tecnológico, pero no siempre el impacto integral." },
                  { value: 4, text: "4. Se evalúan tanto el ciclo de vida como el impacto esperado antes de adoptar." },
                  { value: 5, text: "5. La evaluación del ciclo de vida y del impacto es parte esencial de la gestión tecnológica." }
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
                  { value: 1, text: "1. La experiencia del cliente no forma parte de la estrategia digital." },
                  { value: 2, text: "2. La experiencia del cliente se menciona, pero no se prioriza ni se gestiona." },
                  { value: 3, text: "3. La experiencia del cliente es considerada en algunas iniciativas digitales." },
                  { value: 4, text: "4. La estrategia digital integra la experiencia del cliente como eje relevante." },
                  { value: 5, text: "5. La experiencia del cliente guía toda la estrategia digital de forma integral." }
                ]
              },
              {
                type: "radiogroup",
                name: "digitalizacion_propuesta_valor",
                title: "¿Qué tan digitalizados están los productos, servicios o canales de la propuesta de valor?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No hay digitalización en productos, servicios o canales." },
                  { value: 2, text: "2. La digitalización es limitada y aplicada a casos aislados." },
                  { value: 3, text: "3. Algunos productos, servicios o canales están digitalizados de forma funcional." },
                  { value: 4, text: "4. La digitalización está bien integrada en la propuesta de valor." },
                  { value: 5, text: "5. La propuesta de valor es principalmente digital y evoluciona constantemente." }
                ]
              },
              {
                type: "radiogroup",
                name: "monitoreo_valor_digital",
                title: "¿Se monitorea el desempeño de la propuesta de valor digital en el mercado?",
                isRequired: true,
                choices: [
                  { value: 1, text: "1. No se monitorea el desempeño digital en el mercado." },
                  { value: 2, text: "2. El monitoreo es ocasional, sin indicadores definidos ni consistencia." },
                  { value: 3, text: "3. Hay monitoreo parcial con algunos indicadores básicos." },
                  { value: 4, text: "4. El desempeño digital se monitorea con indicadores estratégicos definidos." },
                  { value: 5, text: "5. El monitoreo es continuo, profundo y alimenta decisiones estratégicas." }
                ]
              }
            ]
          }
        ]
      }
    ]
  };