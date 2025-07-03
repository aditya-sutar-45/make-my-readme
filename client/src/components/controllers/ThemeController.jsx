import { Moon, Sun } from "lucide-react";

function ThemeController() {
  return (
    <label className="swap swap-rotate mx-2">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" className="theme-controller" value="nord" />

      {/* sun icon */}
      <Sun size={20} className="swap-off" />

      {/* moon icon */}
      <Moon size={20} className="swap-on" />
    </label>
  );
}

export default ThemeController;
