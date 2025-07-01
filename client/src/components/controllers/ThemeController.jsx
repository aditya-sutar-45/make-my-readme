import { Moon, Sun } from "lucide-react";

function ThemeController() {
  return (
    <label className="swap swap-rotate m-1">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" className="theme-controller" value="nord" />

      {/* sun icon */}
      <Sun className="swap-off" />

      {/* moon icon */}
      <Moon className="swap-on" />
    </label>
  );
}

export default ThemeController;
