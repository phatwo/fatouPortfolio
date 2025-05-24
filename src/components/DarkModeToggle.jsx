import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => 
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center space-x-2 px-3 py-2 border border-gray-600 rounded-md hover:bg-neutral-800 transition"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      <span className="hidden sm:inline">
        {darkMode ? "Clair" : "Sombre"}
      </span>
    </button>
  );
}
