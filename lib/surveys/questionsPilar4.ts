export const questionsPilar4 = {
    title: "Pilar 4 - Gente y Liderazgo para el Cambio",
    pages: [
        {
            name: "gente_liderazgo_cambio",
            title: "Gente y Liderazgo para el Cambio",
            elements: [
                {
                    type: "panel",
                    name: "liderazgo_digital_sponsorship",
                    title: "01. Liderazgo digital y sponsorship",
                    elements: [
                        {
                            type: "radiogroup",
                            name: "compromiso_liderazgo",
                            title: "¿Qué tan comprometidos están los líderes de su organización con impulsar activamente la transformación digital?",
                            isRequired: true,
                            choices: [
                                { value: 1, text: "1. Los líderes no muestran interés en iniciativas digitales." },
                                { value: 2, text: "2. El compromiso del liderazgo es bajo y reactivo." },
                                { value: 3, text: "3. Algunos líderes impulsan iniciativas digitales clave con recursos limitados." },
                                { value: 4, text: "4. El liderazgo está alineado, impulsa activamente la estrategia digital y asigna recursos." },
                                { value: 5, text: "5. El compromiso es total, estratégico y transversal, con liderazgo activo en todas las áreas." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "visibilidad_liderazgo",
                            title: "¿Qué tan visible es la participación del liderazgo en iniciativas de transformación digital?",
                            isRequired: true,
                            choices: [
                                { value: 1, text: "1. No hay evidencia de participación visible del liderazgo en temas digitales." },
                                { value: 2, text: "2. La participación es ocasional y no tiene impacto visible en la organización." },
                                { value: 3, text: "3. El liderazgo se involucra visiblemente en ciertas iniciativas digitales." },
                                { value: 4, text: "4. Hay comunicación constante y participación activa del liderazgo en foros digitales." },
                                { value: 5, text: "5. El liderazgo actúa como embajador digital, inspira e impulsa la transformación a todos los niveles." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "claridad_roles_liderazgo",
                            title: "¿Qué tan claros y definidos están los roles de los líderes respecto a la transformación digital?",
                            isRequired: true,
                            choices: [
                                { value: 1, text: "1. No hay roles definidos para liderar la transformación digital." },
                                { value: 2, text: "2. Algunos líderes tienen funciones relacionadas, pero no están formalmente estructuradas." },
                                { value: 3, text: "3. Los roles están definidos y asignados en algunas áreas." },
                                { value: 4, text: "4. Existen roles claros y alineados a la estrategia digital organizacional." },
                                { value: 5, text: "5. Los roles están bien definidos, integrados a la gobernanza digital y con indicadores asociados." }
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
                            name: "apertura_cambio",
                            title: "¿Qué tan abierta está la organización al cambio y a la incorporación de nuevas soluciones digitales?",
                            isRequired: true,
                            choices: [
                                { value: 1, text: "1. Existe resistencia generalizada al cambio digital en todos los niveles." },
                                { value: 2, text: "2. Hay apertura al cambio en algunos equipos, pero persisten actitudes reactivas." },
                                { value: 3, text: "3. La mayoría del personal muestra disposición a probar nuevas herramientas digitales." },
                                { value: 4, text: "4. El cambio digital es bien recibido y es parte del discurso organizacional." },
                                { value: 5, text: "5. La innovación digital es parte del ADN de la cultura organizacional y se promueve activamente." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "comunicacion_interna",
                            title: "¿Qué tan frecuente y clara es la comunicación interna sobre iniciativas y logros digitales?",
                            isRequired: true,
                            choices: [
                                { value: 1, text: "1. No se comunica internamente sobre temas digitales." },
                                { value: 2, text: "2. La comunicación es esporádica y poco relevante para el personal." },
                                { value: 3, text: "3. Se comunican iniciativas relevantes a ciertos niveles de la organización." },
                                { value: 4, text: "4. Hay canales establecidos para comunicar avances y fomentar el entendimiento digital." },
                                { value: 5, text: "5. La comunicación sobre lo digital es estratégica, continua e inspiradora para toda la organización." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "participacion_personal",
                            title: "¿Qué tan involucrados están los colaboradores en la generación o implementación de iniciativas digitales?",
                            isRequired: true,
                            choices: [
                                { value: 1, text: "1. El personal no participa en iniciativas digitales ni es consultado." },
                                { value: 2, text: "2. Algunos equipos participan de forma puntual en ciertos proyectos." },
                                { value: 3, text: "3. Hay espacios definidos donde el personal puede aportar ideas digitales." },
                                { value: 4, text: "4. Los colaboradores son parte activa de la mejora continua digital." },
                                { value: 5, text: "5. La participación es transversal, continua y parte esencial del proceso de transformación." }
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
                            name: "capacitacion_habilidades",
                            title: "¿Qué tan frecuente y estructurada es la capacitación del personal en competencias digitales clave?",
                            isRequired: true,
                            choices: [
                                { value: 1, text: "1. No se brinda capacitación digital al personal." },
                                { value: 2, text: "2. Hay capacitaciones ocasionales y no estructuradas." },
                                { value: 3, text: "3. Existen programas básicos de capacitación en herramientas digitales." },
                                { value: 4, text: "4. La capacitación está formalizada y se actualiza periódicamente." },
                                { value: 5, text: "5. La capacitación digital es continua, personalizada y alineada a los objetivos estratégicos." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "evaluacion_competencias",
                            title: "¿Qué tan evaluadas están las competencias digitales del personal en los procesos organizacionales?",
                            isRequired: true,
                            choices: [
                                { value: 1, text: "1. No se evalúan competencias digitales en ningún proceso formal." },
                                { value: 2, text: "2. Se consideran informalmente en algunos casos puntuales." },
                                { value: 3, text: "3. Se evalúan de manera básica en procesos de selección o desempeño." },
                                { value: 4, text: "4. La evaluación es sistemática e integrada en procesos de RRHH." },
                                { value: 5, text: "5. La evaluación de competencias digitales es continua, automatizada y clave en la toma de decisiones sobre el talento." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "atraccion_retencion_talento",
                            title: "¿Qué tan preparada está la organización para atraer y retener talento con competencias digitales?",
                            isRequired: true,
                            choices: [
                                { value: 1, text: "1. No se cuenta con estrategias para atraer o retener talento digital." },
                                { value: 2, text: "2. Hay esfuerzos aislados y poco diferenciadores para este tipo de talento." },
                                { value: 3, text: "3. Se promueven vacantes y beneficios enfocados en perfiles digitales." },
                                { value: 4, text: "4. Hay una estrategia activa para atraer, retener y desarrollar talento digital." },
                                { value: 5, text: "5. La organización es reconocida por su propuesta de valor atractiva para talento digital y de innovación." }
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
                            name: "estructuras_gobernanza",
                            title: "¿Qué tan formalizadas están las estructuras responsables de liderar y coordinar la transformación digital?",
                            isRequired: true,
                            choices: [
                                { value: 1, text: "1. No existen estructuras ni responsables definidos para el cambio digital." },
                                { value: 2, text: "2. Hay responsables informales o equipos ad-hoc sin estructura establecida." },
                                { value: 3, text: "3. Existen estructuras formales con roles definidos en algunas áreas." },
                                { value: 4, text: "4. La estructura de gobernanza es transversal, con responsables y procesos claros." },
                                { value: 5, text: "5. La gobernanza digital es estratégica, institucionalizada y con autoridad en toda la organización." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "participacion_interdepartamental",
                            title: "¿Qué tan involucradas están las distintas áreas de la organización en los procesos de cambio digital?",
                            isRequired: true,
                            choices: [
                                { value: 1, text: "1. El cambio digital es gestionado por un área aislada sin colaboración." },
                                { value: 2, text: "2. Algunas áreas participan, pero sin integración ni compromiso real." },
                                { value: 3, text: "3. Hay coordinación entre áreas específicas para ejecutar proyectos digitales." },
                                { value: 4, text: "4. La participación es activa y colaborativa entre departamentos." },
                                { value: 5, text: "5. La transformación digital es un esfuerzo transversal, con corresponsabilidad entre todas las áreas." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "metricas_objetivos_cambio",
                            title: "¿Qué tan claros y medibles son los objetivos de cambio digital definidos por la organización?",
                            isRequired: true,
                            choices: [
                                { value: 1, text: "1. No hay objetivos claros ni métricas para el cambio digital." },
                                { value: 2, text: "2. Se definen algunos objetivos generales, pero sin indicadores específicos." },
                                { value: 3, text: "3. Existen objetivos definidos y algunas métricas para medir avances." },
                                { value: 4, text: "4. Los objetivos son claros, medibles y están alineados con el plan estratégico." },
                                { value: 5, text: "5. Las métricas y objetivos están integrados al modelo de gestión y se monitorean continuamente." }
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
                            name: "aplicacion_metodologias",
                            title: "¿Qué tan formalmente aplica su organización una metodología de gestión del cambio (como ADKAR, Kotter, etc.)?",
                            isRequired: true,
                            choices: [
                                { value: 1, text: "1. No se aplica ninguna metodología de gestión del cambio." },
                                { value: 2, text: "2. Se conoce alguna metodología, pero su aplicación es informal o limitada." },
                                { value: 3, text: "3. Se aplica una metodología en ciertos proyectos digitales." },
                                { value: 4, text: "4. Se aplica una metodología formalmente en toda la organización." },
                                { value: 5, text: "5. Las metodologías están institucionalizadas y adaptadas a las necesidades de cada iniciativa digital." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "comunicacion_acompanamiento",
                            title: "¿Qué tan estructurado es el acompañamiento al personal durante los procesos de transformación digital?",
                            isRequired: true,
                            choices: [
                                { value: 1, text: "1. No existe acompañamiento ni comunicación sobre los cambios digitales." },
                                { value: 2, text: "2. Hay comunicación puntual, pero sin acompañamiento activo al personal." },
                                { value: 3, text: "3. Se comunica el cambio con lineamientos básicos y apoyo limitado." },
                                { value: 4, text: "4. Se cuenta con un plan de comunicación y acompañamiento estructurado." },
                                { value: 5, text: "5. El acompañamiento es continuo, bidireccional y adaptado a cada grupo de interés." }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "medicion_impacto_humano",
                            title: "¿Qué tan medido y gestionado es el impacto del cambio digital sobre las personas en su organización?",
                            isRequired: true,
                            choices: [
                                { value: 1, text: "1. No se mide ni gestiona el impacto en el personal." },
                                { value: 2, text: "2. Se identifican impactos de manera informal." },
                                { value: 3, text: "3. Se evalúan impactos en etapas clave de los proyectos." },
                                { value: 4, text: "4. Hay indicadores definidos para monitorear el impacto humano del cambio." },
                                { value: 5, text: "5. El impacto humano se gestiona proactivamente con datos, seguimiento y ajustes continuos." }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};