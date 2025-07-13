import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

function ThemeController() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "nord" ? "black" : "nord";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="mx-2 btn btn-ghost btn-circle">
      {theme === "black" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

export default ThemeController;
