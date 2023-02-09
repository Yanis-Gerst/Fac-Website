import { IPageDbJson } from "../src/@types/global";

let i = 0;
const mockPageObject: IPageDbJson = {
  portailDescartes: {
    title: "Portail Descartes",
    domainSection: [
      {
        title: "Math",
        teachingUnitsS1: [
          {
            title: "Outils Mathématique",
            chapters: [
              {
                title: "Globalité",
                revionSheets: [
                  {
                    title: "Résumé Formule",
                    descriptions:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate lectus orci",
                    userName: "Yanis Gerst",
                    like: 0,
                    yearOfPublication: 2023,
                    pdfUrl: "",
                    id: String(i++),
                  },
                  {
                    title: "Résumé Démonstration",
                    descriptions:
                      "Condensée de toutes les démonstratoin de L'UE",
                    userName: "Yanis Gerst",
                    like: 24,
                    yearOfPublication: 2023,
                    pdfUrl: "",
                    id: String(i++),
                  },
                  {
                    title: "Résumé Démonstration 2",
                    descriptions:
                      "Condensée de toutes les démonstratoin de L'UE",
                    userName: "Yanis Gerst",
                    like: 24,
                    yearOfPublication: 2023,
                    pdfUrl: "",
                    id: String(i++),
                  },
                  {
                    title: "Résumé Démonstration 3",
                    descriptions:
                      "Condensée de toutes les démonstratoin de L'UE",
                    userName: "Yanis Gerst",
                    like: 24,
                    yearOfPublication: 2023,
                    pdfUrl: "",
                    id: String(i++),
                  },
                ],
                exercicesSheets: [
                  {
                    title: "Exam 2020",
                    descriptions:
                      "Condensée de toutes les démonstratoin de L'UE",
                    userName: "Yanis Gerst",
                    like: 24,
                    yearOfPublication: 2023,
                    pdfUrl: "",
                    id: String(i++),
                  },
                  {
                    title: "Exam 2021",
                    descriptions:
                      "Condensée de toutes les démonstratoin de L'UE",
                    userName: "Yanis Gerst",
                    like: 24,
                    yearOfPublication: 2023,
                    pdfUrl: "",
                    id: String(i++),
                  },
                  {
                    title: "Exam 2022",
                    descriptions:
                      "Condensée de toutes les démonstratoin de L'UE",
                    userName: "Yanis Gerst",
                    like: 24,
                    yearOfPublication: 2023,
                    pdfUrl: "",
                    id: String(i++),
                  },
                  {
                    title: "Exam 2023",
                    descriptions:
                      "Condensée de toutes les démonstratoin de L'UE",
                    userName: "Yanis Gerst",
                    like: 24,
                    yearOfPublication: 2023,
                    pdfUrl: "",
                    id: String(i++),
                  },
                ],
              },
              {
                title: "Calcul Vectoriel et Géométrie analytique",
                revionSheets: [
                  {
                    title: "Formule Géométrique",
                    descriptions:
                      "Condensée de toutes les démonstratoin de L'UE",
                    userName: "Yanis Gerst",
                    like: 24,
                    yearOfPublication: 2023,
                    pdfUrl: "",
                    id: String(i++),
                  },
                  {
                    title: "Résumée spécial Partiel",
                    descriptions:
                      "Condensée de toutes les démonstratoin de L'UE",
                    userName: "Yanis Gerst",
                    like: 24,
                    yearOfPublication: 2023,
                    pdfUrl: "",
                    id: String(i++),
                  },
                  {
                    title: "Savoir quand utiliser les bonnes formules",
                    descriptions:
                      "Condensée de toutes les démonstratoin de L'UE",
                    userName: "Yanis Gerst",
                    like: 24,
                    yearOfPublication: 2023,
                    pdfUrl: "",
                    id: String(i++),
                  },
                ],
                exercicesSheets: [
                  {
                    title: "Partiel 2021",
                    descriptions:
                      "Condensée de toutes les démonstratoin de L'UE",
                    userName: "Yanis Gerst",
                    like: 24,
                    yearOfPublication: 2023,
                    pdfUrl: "",
                    id: String(i++),
                  },
                  {
                    title: "Partiel 2022",
                    descriptions:
                      "Condensée de toutes les démonstratoin de L'UE",
                    userName: "Yanis Gerst",
                    like: 24,
                    yearOfPublication: 2023,
                    pdfUrl: "",
                    id: String(i++),
                  },
                  {
                    title: "Planche 1",
                    descriptions:
                      "Condensée de toutes les démonstratoin de L'UE",
                    userName: "Yanis Gerst",
                    like: 24,
                    yearOfPublication: 2023,
                    pdfUrl: "",
                    id: String(i++),
                  },
                ],
              },
              {
                title: "Nombre Complexe",
                revionSheets: [],
                exercicesSheets: [],
              },
              {
                title: "Élément d'analyse",
                revionSheets: [],
                exercicesSheets: [],
              },
              {
                title: "Équations différentielles",
                revionSheets: [],
                exercicesSheets: [],
              },
            ],
          },
          {
            title: "Language Mathématique",
            chapters: [
              {
                title: "Notion de base et raisonnement mathématique",
                revionSheets: [],
                exercicesSheets: [],
              },
              {
                title: "Théorie des ensembles",
                revionSheets: [],
                exercicesSheets: [],
              },
            ],
          },
        ],
        teachingUnitsS2: [
          {
            title: "Algèbre Linéaire",
            chapters: [],
          },
          {
            title: "Analyse",
            chapters: [],
          },
        ],
      },
      {
        title: "Informatique",
        teachingUnitsS1: [
          {
            title: "Mise En Oeuvre Informatique",
            chapters: [],
          },
          {
            title: "Introduction à l'informatique",
            chapters: [],
          },
          {
            title: "Science Informatique",
            chapters: [],
          },
          {
            title: "Projet Informatique",
            chapters: [],
          },
        ],
        teachingUnitsS2: [
          {
            title: "Fonctionnement des ordinateurs",
            chapters: [],
          },
          {
            title: "Programmation",
            chapters: [],
          },
        ],
      },
      {
        title: "Physique",
        teachingUnitsS1: [],
        teachingUnitsS2: [],
      },
      {
        title: "Méca",
        teachingUnitsS1: [],
        teachingUnitsS2: [],
      },
      {
        title: "Divers",
        teachingUnitsS1: [],
        teachingUnitsS2: [],
      },
    ],
  },
  l2: {
    informatique: {
      title: "L2 Info",
      domainSection: [
        {
          title: "Web",
          teachingUnitsS1: [
            {
              title: "Php",
              chapters: [],
            },
          ],
          teachingUnitsS2: [
            {
              title: "Laravel",
              chapters: [],
            },
          ],
        },
      ],
    },
  },
};

export default mockPageObject;
