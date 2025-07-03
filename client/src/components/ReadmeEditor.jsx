import { Code, Copy, Download, Eye } from "lucide-react";
import { useRef, useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import MarkdowPreview from "./MarkdownPreview";
import ThemeController from "./controllers/ThemeController";
import { useMarkdown } from "../hooks/useMarkdown";

function ReadmeEditor() {
  const { markdown } = useMarkdown();
  const editorRef = useRef(null);
  const [isPreview, setIsPreview] = useState(false);

  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  const copyToClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(markdown)
        .then(() => alert("copied to clipboard!"))
        .catch(() => alert("failed to copy!"));
    } else {
      alert("clipboard api not supported by your browser :(");
    }
  };

  const downloadReadme = () => {
    const blob = new Blob([markdown]);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className="navbar bg-secondary flex justify-between shadow-sm h-15">
        <fieldset className="fieldset">
          <legend className="fieldset-label text-base text-white font-work-sans">
            {isPreview ? "Preview" : "Editor"}
          </legend>
          <label className="toggle toggle-accent text-base-content">
            <input type="checkbox" onClick={togglePreview} />
            <Eye size={16} />
            <Code size={16} />
          </label>
        </fieldset>
        <div className="join">
          <button
            className="join-item btn btn-square"
            onClick={copyToClipboard}
          >
            <Copy size={16} />
          </button>
          <button
            className="join-item btn btn-accent font-work-sans rounded-r-field"
            onClick={downloadReadme}
          >
            <Download size={16} /> Download
          </button>
          <ThemeController />
        </div>
        {/* <h1 className="text-xl">{isPreview ? "Preview" : "Editor"}</h1> */}
      </div>
      <div className="w-[90%] mx-auto">
        {isPreview ? (
          <MarkdowPreview />
        ) : (
          <MarkdownEditor editorRef={editorRef} />
        )}
      </div>
    </>
  );
}

export default ReadmeEditor;
