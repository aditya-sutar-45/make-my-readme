import { useState } from "react";
import { MarkdownContext } from "./MarkdownContext";

export default function MarkdownProvider({ children }) {
  const [markdown, setMarkdown] = useState("# edit your markdown here....");

  return (
    <MarkdownContext.Provider value={{ markdown, setMarkdown }}>
      {children}
    </MarkdownContext.Provider>
  );
}
