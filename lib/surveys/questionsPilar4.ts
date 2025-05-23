export const questionsPilar4 = {
    title: "Pilar 4 - Gente y Liderazgo",
    pages: [
        {
            name: "gente_y_liderazgo",
            title: "Gente y Liderazgo",
            elements: [
                {
                    type: "panel",
                    name: "liderazgo_digital_sponsorship",
                    title: "01. Liderazgo digital y sponsorship",
                    elements: [
                        {
                            type: "radiogroup",
                            name: "roles_lideres_transformacion_digital",
                            title: "¿Qué tan claros y definidos están los roles de los líderes respecto a la transformación digital?",
                            isRequired: true,
                            choices: [
                                { value: 2, text: "Algunos líderes tienen funciones relacionadas, pero no están formalmente estructuradas." },
                                { value: 4, text: "Existen roles claros y alineados a la estrategia digital organizacional." },
                                { value: 5, text: "Los roles están bien definidos, integrados a la gobernanza digital y con indicadores asociados." },
                                { value: 3, text: "Los roles están definidos y asignados en algunas áreas." },
                                { value: 1, text: "No hay roles definidos para liderar la transformación digital." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "compromiso_lideres_transformacion_digital",
                            title: "¿Qué tan comprometidos están los líderes de su organización con impulsar activamente la transformación digital?",
                            isRequired: true,
                            choices: [
                                { value: 3, text: "Algunos líderes impulsan iniciativas digitales clave con recursos limitados." },
                                { value: 2, text: "El compromiso del liderazgo es bajo y reactivo." },
                                { value: 5, text: "El compromiso es total, estratégico y transversal, con liderazgo activo en todas las áreas." },
                                { value: 4, text: "El liderazgo está alineado, impulsa activamente la estrategia digital y asigna recursos." },
                                { value: 1, text: "Los líderes no muestran interés en iniciativas digitales." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "visibilidad_liderazgo_transformacion_digital",
                            title: "¿Qué tan visible es la participación del liderazgo en iniciativas de transformación digital?",
                            isRequired: true,
                            choices: [
                                { value: 5, text: "El liderazgo actúa como embajador digital, inspira e impulsa la transformación a todos los niveles." },
                                { value: 3, text: "El liderazgo se involucra visiblemente en ciertas iniciativas digitales." },
                                { value: 4, text: "Hay comunicación constante y participación activa del liderazgo en foros digitales." },
                                { value: 2, text: "La participación es ocasional y no tiene impacto visible en la organización." },
                                { value: 1, text: "No hay evidencia de participación visible del liderazgo en temas digitales." }
                            ]
                        }
                    ]
                },
                {
                    type: "panel",
                    name: "cultura_mentalidad_digital",
                    title: "02. Cultura y mentalidad digital",
                    elements: [
                        {
                            type: "radiogroup",
                            name: "apertura_cambio_digital",
                            title: "¿Qué tan abierta está la organización al cambio y a la incorporación de nuevas soluciones digitales?",
                            isRequired: true,
                            choices: [
                                { value: 4, text: "El cambio digital es bien recibido y es parte del discurso organizacional." },
                                { value: 1, text: "Existe resistencia generalizada al cambio digital en todos los niveles." },
                                { value: 2, text: "Hay apertura al cambio en algunos equipos, pero persisten actitudes reactivas." },
                                { value: 5, text: "La innovación digital es parte del ADN de la cultura organizacional y se promueve activamente." },
                                { value: 3, text: "La mayoría del personal muestra disposición a probar nuevas herramientas digitales." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "comunicacion_interna_digital",
                            title: "¿Qué tan frecuente y clara es la comunicación interna sobre iniciativas y logros digitales?",
                            isRequired: true,
                            choices: [
                                { value: 4, text: "Hay canales establecidos para comunicar avances y fomentar el entendimiento digital." },
                                { value: 2, text: "La comunicación es esporádica y poco relevante para el personal." },
                                { value: 5, text: "La comunicación sobre lo digital es estratégica, continua e inspiradora para toda la organización." },
                                { value: 1, text: "No se comunica internamente sobre temas digitales." },
                                { value: 3, text: "Se comunican iniciativas relevantes a ciertos niveles de la organización." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "involucramiento_colaboradores_digital",
                            title: "¿Qué tan involucrados están los colaboradores en la generación o implementación de iniciativas digitales?",
                            isRequired: true,
                            choices: [
                                { value: 2, text: "Algunos equipos participan de forma puntual en ciertos proyectos." },
                                { value: 1, text: "El personal no participa en iniciativas digitales ni es consultado." },
                                { value: 3, text: "Hay espacios definidos donde el personal puede aportar ideas digitales." },
                                { value: 5, text: "La participación es transversal, continua y parte esencial del proceso de transformación." },
                                { value: 4, text: "Los colaboradores son parte activa de la mejora continua digital." }
                            ]
                        }
                    ]
                },
                {
                    type: "panel",
                    name: "competencias_gestion_talento",
                    title: "03. Competencias y gestión del talento",
                    elements: [
                        {
                            type: "radiogroup",
                            name: "evaluacion_competencias_digitales",
                            title: "¿Qué tan evaluadas están las competencias digitales del personal en los procesos organizacionales?",
                            isRequired: true,
                            choices: [
                                { value: 5, text: "La evaluación de competencias digitales es continua, automatizada y clave en la toma de decisiones sobre el talento." },
                                { value: 4, text: "La evaluación es sistemática e integrada en procesos de RRHH." },
                                { value: 1, text: "No se evalúan competencias digitales en ningún proceso formal." },
                                { value: 2, text: "Se consideran informalmente en algunos casos puntuales." },
                                { value: 3, text: "Se evalúan de manera básica en procesos de selección o desempeño." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "capacitacion_competencias_digitales",
                            title: "¿Qué tan frecuente y estructurada es la capacitación del personal en competencias digitales clave?",
                            isRequired: true,
                            choices: [
                                { value: 2, text: "Existen programas básicos de capacitación en herramientas digitales." },
                                { value: 3, text: "Hay capacitaciones ocasionales y no estructuradas." },
                                { value: 5, text: "La capacitación digital es continua, personalizada y alineada a los objetivos estratégicos." },
                                { value: 4, text: "La capacitación está formalizada y se actualiza periódicamente." },
                                { value: 1, text: "No se brinda capacitación digital al personal." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "atraccion_talento_digital",
                            title: "¿Qué tan preparada está la organización para atraer y retener talento con competencias digitales?",
                            isRequired: true,
                            choices: [
                                { value: 2, text: "Hay esfuerzos aislados y poco diferenciadores para este tipo de talento." },
                                { value: 4, text: "Hay una estrategia activa para atraer, retener y desarrollar talento digital." },
                                { value: 5, text: "La organización es reconocida por su propuesta de valor atractiva para talento digital y de innovación." },
                                { value: 1, text: "No se cuenta con estrategias para atraer o retener talento digital." },
                                { value: 3, text: "Se promueven vacantes y beneficios enfocados en perfiles digitales." }
                            ]
                        }
                    ]
                },
                {
                    type: "panel",
                    name: "gobernanza_cambio_organizacional",
                    title: "04. Gobernanza del cambio organizacional",
                    elements: [
                        {
                            type: "radiogroup",
                            name: "objetivos_cambio_digital",
                            title: "¿Qué tan claros y medibles son los objetivos de cambio digital definidos por la organización?",
                            isRequired: true,
                            choices: [
                                { value: 3, text: "Existen objetivos definidos y algunas métricas para medir avances." },
                                { value: 5, text: "Las métricas y objetivos están integrados al modelo de gestión y se monitorean continuamente." },
                                { value: 4, text: "Los objetivos son claros, medibles y están alineados con el plan estratégico." },
                                { value: 1, text: "No hay objetivos claros ni métricas para el cambio digital." },
                                { value: 2, text: "Se definen algunos objetivos generales, pero sin indicadores específicos." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "estructuras_responsables_cambio_digital",
                            title: "¿Qué tan formalizadas están las estructuras responsables de liderar y coordinar la transformación digital?",
                            isRequired: true,
                            choices: [
                                { value: 3, text: "Existen estructuras formales con roles definidos en algunas áreas." },
                                { value: 2, text: "Hay responsables informales o equipos ad-hoc sin estructura establecida." },
                                { value: 4, text: "La estructura de gobernanza es transversal, con responsables y procesos claros." },
                                { value: 5, text: "La gobernanza digital es estratégica, institucionalizada y con autoridad en toda la organización." },
                                { value: 1, text: "No existen estructuras ni responsables definidos para el cambio digital." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "involucramiento_areas_cambio_digital",
                            title: "¿Qué tan involucradas están las distintas áreas de la organización en los procesos de cambio digital?",
                            isRequired: true,
                            choices: [
                                { value: 2, text: "Algunas áreas participan, pero sin integración ni compromiso real." },
                                { value: 1, text: "El cambio digital es gestionado por un área aislada sin colaboración." },
                                { value: 3, text: "Hay coordinación entre áreas específicas para ejecutar proyectos digitales." },
                                { value: 4, text: "La participación es activa y colaborativa entre departamentos." },
                                { value: 5, text: "La transformación digital es un esfuerzo transversal, con corresponsabilidad entre todas las áreas." }
                            ]
                        }
                    ]
                },
                {
                    type: "panel",
                    name: "gestion_cambio",
                    title: "05. Gestión del cambio",
                    elements: [
                        {
                            type: "radiogroup",
                            name: "acompanamiento_personal_cambio_digital",
                            title: "¿Qué tan estructurado es el acompañamiento al personal durante los procesos de transformación digital?",
                            isRequired: true,
                            choices: [
                                { value: 5, text: "El acompañamiento es continuo, bidireccional y adaptado a cada grupo de interés." },
                                { value: 2, text: "Hay comunicación puntual, pero sin acompañamiento activo al personal." },
                                { value: 1, text: "No existe acompañamiento ni comunicación sobre los cambios digitales." },
                                { value: 3, text: "Se comunica el cambio con lineamientos básicos y apoyo limitado." },
                                { value: 4, text: "Se cuenta con un plan de comunicación y acompañamiento estructurado." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "metodologia_gestion_cambio",
                            title: "¿Qué tan formalmente aplica su organización una metodología de gestión del cambio (como ADKAR, Kotter, etc.)?",
                            isRequired: true,
                            choices: [
                                { value: 5, text: "Las metodologías están institucionalizadas y adaptadas a las necesidades de cada iniciativa digital." },
                                { value: 1, text: "No se aplica ninguna metodología de gestión del cambio." },
                                { value: 3, text: "Se aplica una metodología en ciertos proyectos digitales." },
                                { value: 4, text: "Se aplica una metodología formalmente en toda la organización." },
                                { value: 2, text: "Se conoce alguna metodología, pero su aplicación es informal o limitada." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "impacto_cambio_digital",
                            title: "¿Qué tan medido y gestionado es el impacto del cambio digital sobre las personas en su organización?",
                            isRequired: true,
                            choices: [
                                { value: 5, text: "El impacto humano se gestiona proactivamente con datos, seguimiento y ajustes continuos." },
                                { value: 4, text: "Hay indicadores definidos para monitorear el impacto humano del cambio." },
                                { value: 1, text: "No se mide ni gestiona el impacto en el personal." },
                                { value: 3, text: "Se evalúan impactos en etapas clave de los proyectos." },
                                { value: 2, text: "Se identifican impactos de manera informal." }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};