import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
} from "lucide-react";

export default function Hero({ onSelect }) {
  return (
     <section className="flex flex-col md:flex-row  items-center justify-center py-16 px-16 text-center md:text-left gap-10">
      
      {/* TEXTE À GAUCHE */}
     <div className="flex flex-col items-center md:items-start justify-center">
 <motion.h1
  className="text-2xl sm:text-3xl md:text-5xl text-neutral-800 dark:text-white text-center md:text-left whitespace-nowrap"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Hello 🖐🏽, je suis <span className="text-purple-500 font-bold">Fatou Touré</span>
</motion.h1>

  <span className="mt-4 text-neutral-800 dark:text-neutral-100 text-base md:text-lg text-center mx-auto">
    Développeuse | Future Data Engineer
  </span>
   <motion.div 
        className="mt-4 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-purple-300 text-center mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/fat.png" // ← Remplace avec ton vrai chemin d'image
          alt="fat"
          className="w-full h-full object-cover"
        />
      </motion.div>
   <motion.button
    onClick={() => onSelect('projects')}
    className="mt-6 inline-block bg-purple-700 mx-auto text-center text-white px-6 py-2 rounded-xl hover:bg-purple-900 transition"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Voir mes projets
  </motion.button>

  {/* Icônes avec tooltip au survol */}
  <div className="mt-6 flex gap-6">
  <span className="text-purple-500">Contacter-moi</span>
  {/* LinkedIn */}
  <div className="relative group flex flex-col items-center">
    <a
      href="https://www.linkedin.com/in/fatoutour%C3%A9-tech/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-800 dark:text-white hover:text-purple-600 transition"
    >
      <Linkedin className="w-6 h-6" />
    </a>
    <span className="absolute top-full mt-2 text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
      Voir mon LinkedIn
    </span>
  </div>

  {/* GitHub */}
  <div className="relative group flex flex-col items-center">
    <a
      href="https://github.com/phatwo"
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-800 dark:text-white hover:text-purple-600 transition"
    >
      <Github className="w-6 h-6" />
    </a>
    <span className="absolute top-full mt-2 text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
      Voir mon GitHub
    </span>
  </div>
</div>

</div>
    </section>
  );
}
