import { useContext } from "react";
import { MarkdownContext } from "../contexts/MarkdownContext";

export function useMarkdown() {
  return useContext(MarkdownContext);
}
