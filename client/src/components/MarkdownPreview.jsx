import Markdown from "react-markdown";
import { useMarkdown } from "../hooks/useMarkdown";

function MarkdowPreview() {
  const { markdown } = useMarkdown();
  return (
    <div
      className="prose prose-stone max-w-none overflow-scroll rounded-box p-5 m-2"
      style={{ height: "90vh" }}
    >
      <Markdown>{markdown}</Markdown>
    </div>
  );
}

export default MarkdowPreview;
