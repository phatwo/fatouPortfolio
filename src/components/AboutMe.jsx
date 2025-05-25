import { Mail, Linkedin, Github } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row justify-center py-16 px-16 min-h-screen max-w-6xl mx-auto gap-8">
      {/* Texte à gauche */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">À propos de moi 👩🏽‍💻</h2>
        <div className="text-neutral-800 dark:text-neutral-100 text-base md:text-lg space-y-2">
          <p>Bonjour à tous, je m'appelle <span className="text-purple-500 font-bold">Fatou Touré</span> et je viens du Mali 📍.</p>
          <p>Je suis passionnée par les nouvelles technologies 🚀 et j'aime trouver des solutions créatives 💡 à des problèmes complexes.</p>
          <p>Curieuse 🧠, je cherche constamment à me perfectionner en découvrant de nouveaux outils 🧰 et techniques pour améliorer mes compétences, notamment dans le développement d'applications 📱, la data 📊 et le design créatif 🎨.</p>
          <p>Je suis prête à relever de nouveaux défis professionnels 🛠️ 🤝 !</p>
        </div>
      </div>

      {/* Image à droite */}
      <div className="md:w-1/2">
        <img 
          src="/Aboutme.png" 
          alt="Portrait de moi" 
          className="rounded-lg shadow-lg object-contain w-full h-auto max-h-[500px]"
        />
      </div>
    </section>
  );
}
