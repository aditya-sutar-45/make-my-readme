import { BrushCleaning, Code, Copy, Download, Eye, X } from "lucide-react";
import { useRef, useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import MarkdowPreview from "./MarkdownPreview";
import ThemeController from "./controllers/ThemeController";
import { useMarkdown } from "../hooks/useMarkdown";
import toast from "react-hot-toast";

function ReadmeEditor() {
  const { markdown, setMarkdown } = useMarkdown();
  const editorRef = useRef(null);
  const [isPreview, setIsPreview] = useState(false);

  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  const copyToClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(markdown)
        .then(() => toast.success("copied to clipboard!"))
        .catch(() => toast.error("failed to copy!"));
    } else {
      toast.error("clipboard api not supported by your browser :(");
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

  const clearMarkdown = () => {
    setMarkdown("");
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
            className="join-item btn btn-accent font-work-sans"
            onClick={downloadReadme}
          >
            <Download size={16} /> Download
          </button>
          <button
            className="btn btn-accent rounded-r-field"
            onClick={() =>
              document.getElementById("clearMarkdownModal").showModal()
            }
          >
            <BrushCleaning size={16} /> Clear
          </button>
          <dialog id="clearMarkdownModal" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Are you sure?</h3>
              <p className="py-4">This will clear all your markdown!</p>
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  <X />
                </button>
                <button className="btn btn-warning" onClick={clearMarkdown}>
                  Clear
                </button>
              </form>
            </div>
          </dialog>
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
