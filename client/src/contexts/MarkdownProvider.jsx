import { useEffect, useState } from "react";
import { MarkdownContext } from "./MarkdownContext";

export default function MarkdownProvider({ children }) {
  const [markdown, setMarkdown] = useState(() => {
    return localStorage.getItem("markdown") || "";
  });

  useEffect(() => {
    localStorage.setItem("markdown", markdown);
  }, [markdown]);

  return (
    <MarkdownContext.Provider value={{ markdown, setMarkdown }}>
      {children}
    </MarkdownContext.Provider>
  );
}
