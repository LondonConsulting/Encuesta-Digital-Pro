import { Model } from "survey-core";

export const questionsone = {
  title: "Madurez Digital",
  description: "Encuesta para evaluar la madurez digital de tu empresa.",
  pages: [
    {
      name: "PersonalDetails",
      elements: [
        {
          type: "text",
          name: "Nombre",
          title: "Nombre Completo:",
          isRequired: true,
        },
        {
          type: "text",
          name: "Empresa",
          title: "Empresa:",
          isRequired: true,
        },
        {
          type: "text",
          name: "Email",
          title: "Email:",
          isRequired: true,
        },
        {
          type: "text",
          name: "Número de Teléfono",
          title: "Número de Teléfono (opcional):",
        },
      ],
    },
  ],
};

// Optional: export model here
export const surveyModel = new Model(questionsone);
