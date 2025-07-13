import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("black");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
