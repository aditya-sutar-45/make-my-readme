import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMarkdown } from "../hooks/useMarkdown";

function MarkdowPreview() {
  const { markdown } = useMarkdown();
  return (
    <div
      className="prose max-w-none overflow-scroll rounded-box p-5 m-2"
      style={{ height: "90vh" }}
    >
      <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </div>
  );
}

export default MarkdowPreview;
