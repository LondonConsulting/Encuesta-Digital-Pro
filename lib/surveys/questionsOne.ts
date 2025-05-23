import { Model } from "survey-core";

export const questionsone = {
    "title": "Madurez Digital",
    "description": "Encuesta para evaluar la madurez digital de tu empresa.",
    pages: [
    {
      name: "PersonalDetails",
      elements: [
        {
          type: "text",
          name: "Nombre",
          title: "Nombre Completo:",
        },
        {
          type: "text",
          name: "Empresa",
          title: "Empresa:",
        },
        {
          type: "panel",
          name: "Contacts",
          state: "collapsed",
          title: "Contacto (opcional)",
          elements: [
            {
              type: "text",
              name: "Email",
              title: "Email:",
            },
            {
              type: "text",
              name: "Número de Teléfono",
              title: "Número de Teléfono:",

            },
          ],
        },
      ],
    },
  ],
};

// Optional: export model here
export const surveyModel = new Model(questionsone);
