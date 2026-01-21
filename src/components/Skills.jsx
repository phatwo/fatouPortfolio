import { mirrorEasing, motion } from "framer-motion";
import { Edit2Icon, LucidePanelBottomDashed, MessageCircleHeartIcon } from "lucide-react";

const skills = [
  "Python", "JavaScript", "CSS", "HTML", "PHP", "JAVA", "Docker", "Flask", "Pandas", "MySQL", "Hadoop", "Apache Spark", "SQL", "Git", "Power BI", "Canva", "Figma", "No-code", "Excel"
];

const certifications = [
    {
    title: "AWS Cloud Pratitioner",
    description: "Avantages du Cloud, Serveur virtuel EC2, Serveless Lambda, Reseau VPC, Sécurité IAM, Base de données : RDS DynamoDB, Facturation, Migration, CAF, Well-Architected",
    image: "/AWS.png",
    
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
  },
  {
    title: "Introduction à Power BI - Datacoach - Benjamin Ejzenberg",
    description: "Introduction à Power BI. Cette expérience m’a doté de compétences précieuses en analyse de données.",
    image: "/Power-BI.png",
    link: "https://www.datacoach.ca/diplome?id=ba8fccd3-7b83-4032-9b55-6db4d95f190b",
  },
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
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">{certif.description}</p>
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
