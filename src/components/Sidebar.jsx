import {
  Home,
  User,
  Code,
  FolderKanban,
  Pen,
  Moon,
  Sun,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Sidebar({ onSelect }) {
  const [isDark, setIsDark] = useState(true); // sombre par défaut
  const [activeKey, setActiveKey] = useState("home");

  useEffect(() => {
    // Forcer le mode sombre à chaque lancement
    document.documentElement.classList.add("dark");
    setIsDark(true);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  const primaryItems = [
    { icon: <Home />, label: "Accueil", key: "home" },
    { icon: <User />, label: "A propos", key: "aboutme" },
    { icon: <Code />, label: "Compétences", key: "skills" },
    { icon: <FolderKanban />, label: "Projets", key: "projects" },
    { icon: <Pen />, label: "Contact", key: "contact" },
  ];

  const renderItem = (item) => (
    <div
      key={item.key}
      onClick={() => {
        setActiveKey(item.key);
        onSelect(item.key);
      }}
      className={`group relative flex items-center space-x-3 p-2 rounded-md cursor-pointer transition-all duration-300
        ${
          activeKey === item.key
            ? "font-bold bg-gray-200 dark:bg-neutral-800"
            : "hover:bg-gray-200 dark:hover:bg-neutral-800"
        }`}
    >
      <span>{item.icon}</span>
      <span className="hidden sm:inline">{item.label}</span>
      <span className="sm:hidden absolute left-full ml-2 w-max bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {item.label}
      </span>
    </div>
  );

  return (
    <aside className="w-20 sm:w-60 bg-white text-black dark:bg-black dark:text-white h-screen p-4 flex flex-col justify-between fixed top-0 left-0 transition-colors duration-300">
      <div className="space-y-6">
        {primaryItems.map(renderItem)}

        <div className="border-t border-neutral-300 dark:border-neutral-700 pt-4">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 hover:bg-gray-200 dark:hover:bg-neutral-800 p-2 rounded-md w-full"
          >
            {isDark ? <Sun /> : <Moon />}
            <span className="hidden sm:inline">
              {isDark ? "Mode clair" : "Mode sombre"}
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
