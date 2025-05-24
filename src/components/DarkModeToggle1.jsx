import { useEffect, useState } from "react";
import { Moon } from "lucide-react"; // Installe avec: npm i lucide-react

export default function DarkModeMenu() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleDark = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <div className="w-64 bg-neutral-800 text-white rounded-xl shadow-lg p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neutral-600 pb-2">
        <h2 className="font-semibold">Changer l’apparence</h2>
        <Moon size={18} />
      </div>

      {/* Toggle */}
      <div className="flex items-center justify-between">
        <span>Mode sombre</span>
        <button
          onClick={toggleDark}
          className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
            isDark ? "bg-white" : "bg-gray-500"
          }`}
        >
          <div
            className={`bg-black w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
              isDark ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </button>
      </div>
    </div>
  );
}
