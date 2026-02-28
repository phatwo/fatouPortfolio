import { mirrorEasing, motion } from "framer-motion";
import { Edit2Icon, LucidePanelBottomDashed, MessageCircleHeartIcon } from "lucide-react";

const skills = [
  "SQL", "Python", "Pandas", "Excel", "PowerBI", "Flask", "Hadoop", "Apache Spark", "Docker", "Java", "React", "Git", "Canva", "Figma", "No-code", 
];

const certifications = [
     {
    title: "Data Engineer Associate - DataCamp",
    description: ["Concevoir et structurer des pipelines de données robustes",
  "Transformer et nettoyer des données à grande échelle",
  "Modéliser des bases de données pour l'analyse",
  "Optimiser des requêtes SQL pour la performance"],
    image: "/DEA.png",
    link: "https://www.datacamp.com/certificate/DEA0014166110047",
    
  },
    {
    title: "AWS Cloud Pratitioner",
    description: ["Avantages du Cloud", 
      "Serveur virtuel EC2, Serveless Lambda", 
      "Reseau VPC, Sécurité IAM", 
      "Base de données : RDS DynamoDB, Facturation, Migration, CAF, Well-Architected"],
    image: "/AWS.png",
    link: "https://www.credly.com/badges/20dfa2d2-f6fc-4b3b-a1eb-5cc3d4fb7798/linked_in_profile"
  },

   {
    title: "SQL - Coursera",
    description:  [
    "Requêtes SELECT avancées et filtrage conditionnel",
    "Jointures multiples (INNER, LEFT, RIGHT, FULL)",
    "Agrégations et fonctions GROUP BY / HAVING",
    "Sous-requêtes et CTE (Common Table Expressions)",
    "Manipulation et nettoyage de données",
    "Création de vues et tables intermédiaires"
  ],
    image: "/SQL.png",
    link: "https://www.coursera.org/account/accomplishments/verify/9J0OHHOJ3C9A",
    
  },
  {
    title: "Data Engineer Intoduction - Coursera",
    description: [
    "Compréhension du rôle et des responsabilités d’un Data Engineer",
    "Concepts fondamentaux des pipelines de données (ETL / ELT)",
    "Différence entre Data Warehouse et Data Lake",
    "Notions de Big Data et traitement distribué",
    "Introduction aux outils de l’écosystème data (SQL, Python, Cloud)",
    "Bonnes pratiques de qualité et gouvernance des données"
  ],
    image: "/IntroDE.png",
    link: "https://www.coursera.org/account/accomplishments/records/BAW7X84F6Q9I",
  },
   {
    title: "Introduction à Power BI - Datacoach - Benjamin Ejzenberg",
    description: "Introduction à Power BI. Cette expérience m’a doté de compétences précieuses en analyse de données.",
    image: "/Power-BI.png",
    link: "https://www.datacoach.ca/diplome?id=ba8fccd3-7b83-4032-9b55-6db4d95f190b",
  },
  

  {
    title: "Les fondamentaux de la data - IBM",
    description: "Connaissance des concepts, des méthodologies et des applications de l'analyse de données en science des données, ainsi que des outils et langages de programmation utilisés dans l'écosystème des données.",
    image: "/Data-Fundamentals.jpg",
    link: "https://www.credly.com/badges/1d3183c4-8e9f-491b-bb0c-6c17d009f838/linked_in_profile",
  },
   {
    title: "Les fondamentaux de l'intélligence artificielle - IBM",
    description: "connaissance des concepts de l'intelligence artificielle (IA), tels que le traitement du langage naturel, la vision par ordinateur, l'apprentissage automatique, l'apprentissage profond, les chatbots et les réseaux neuronaux ; de l'éthique de l'IA ; et de ses applications. Il possède une compréhension conceptuelle de l'exécution d'un modèle d'IA avec IBM Watson Studio. Il connaît les perspectives d'emploi dans les domaines utilisant l'IA et maîtrise les compétences requises pour réussir dans les différents rôles du secteur.",
    image: "/IA.png",
    link: "https://www.credly.com/badges/ff8abb41-6b11-4cfe-ad57-16d3117ac613/linked_in_profile",
  }
];

export default function Skills() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      {/* Titre principal */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-purple-600">Mes Compétences</h2>

      {/* SECTION SKILLS */}
      <div className="mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:scale-105 transition"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION CERTIFICATS */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-purple-600">Certificats de Formation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certif, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
  src={certif.image}
  alt={certif.title}
  className="w-full h-auto max-h-80 object-contain bg-neutral-100 mx-auto"
/>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">{certif.title}</h4>
                {Array.isArray(certif.description) ? (
  <ul className="text-sm text-neutral-600 dark:text-neutral-300 mb-3 list-disc list-inside space-y-1">
    {certif.description.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
) : (
  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
    {certif.description}
  </p>
)}
                {certif.link && (
                  <a
                    href={certif.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-purple-700 underline hover:text-purple-500"
                  >
                    Voir le certificat
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
