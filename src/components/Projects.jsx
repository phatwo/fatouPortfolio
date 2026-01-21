import { motion } from "framer-motion";

const projects = [
  {
    image: "/dag_success.png",
    title: "ETL Industrialisé",
    description: `Implémentation d'un pipeline ETL (Extract, Transform, Load) automatisé de collecte de données
    de livres à partir de sources multiples à l'aide d'Airflow, Spark et MinIO.`,
    technos: ["Python", "Airflow", "Spark", "Docker", "ETL", "Data Engineer", "Minio"],
    demo: "",
    github: "https://github.com/phatwo/etl-airflow-spark",
    online: "",
    offline: ""
  },
  {
    image: "/projet-BigData.png",
    title: "Application de Gestion de la Qualité des données dans un environnement Big Data (Cas de l'exhaustivité)",
    description: `J’ai conçu cette application dans le cadre de mon mémoire en Master MIAGE.
Fonctionnalités principales :
- Stockage des données sur HDFS Hadoop.
- Détermination de l’exhaustivité.
- Création de table Hive.
- Importation dans Hive.`,
    technos: ["BigData", "HDFS Hadoop", "Pyspark", "Flask Python", "HTML", "CSS", "Hive"],
    demo: "",
    github: "",
    online: "",
    offline: "#"
  },
  {
    title: "Rapport de vente sur Power BI",
    description: "Projet realisé lors de ma formation sur Power BI. Cette expérience m’a doté de compétences précieuses en analyse de données.Importation,Visualisation,Analyse de données interactives avec Power BI (graphiques, KPIs, filtres).",
    image: "/Rapport-vente-BI.png",
    technos: ["Power BI", "Profilage", "Analyse", "Data Viz"],
    demo: "",
    github: "",
    online: "",
    offline: "#"
  },
  {
    title: "Mon portfolio",
    description: "Portfolio personnel développé avec React, illustrant mes projets, compétences.",
    image: "/portfolioProjet.png",
    technos: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    demo: "",
    github: "",
    online: "",
    offline: ""
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <motion.h2 
        className="text-3xl md:text-4xl text-purple-500 font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Mes Projets
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="w-full h-48 bg-neutral-100 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Contenu */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">{project.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4 whitespace-pre-line">{project.description}</p>

              {/* Tech badges */}
              {project.technos && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technos.map((tech, i) => (
                    <span key={i} className="bg-purple-500 text-white text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Boutons */}
              <div className="mt-auto flex flex-wrap gap-2">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
                  >
                    ▶️ Démo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-purple-600 text-purple-600 px-4 py-2 rounded text-sm"
                  >
                    GitHub
                  </a>
                )}
                 {project.offline && (
                  <p
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-purple-600 text-purple-600 px-4 py-2 rounded text-sm"
                  >
                    Hors-ligne, en local
                  </p>
                )}
                {project.online && (
                  <a
                    href={project.online}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm"
                  >
                    🌐 En ligne
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
