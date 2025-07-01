import { Code, Eye } from "lucide-react";
import { useRef, useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import MarkdowPreview from "./MarkdownPreview";
import ThemeController from "./controllers/ThemeController";

function ReadmeEditor({ markdown, setMarkdown }) {
  const editorRef = useRef(null);
  const [isPreview, setIsPreview] = useState(false);

  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  return (
    <>
      <div className="navbar bg-primary flex justify-between shadow-sm h-15">
        <fieldset className="fieldset">
          <legend className="fieldset-label">
            {isPreview ? "Preview" : "Editor"}
          </legend>
          <label className="toggle toggle-accent text-base-content">
            <input type="checkbox" onClick={togglePreview} />
            <Eye size={16} />
            <Code size={16} />
          </label>
        </fieldset>
        <ThemeController />
        {/* <h1 className="text-xl">{isPreview ? "Preview" : "Editor"}</h1> */}
      </div>
      <div>
        {isPreview ? (
          <MarkdowPreview markdown={markdown} />
        ) : (
          <MarkdownEditor
            editorRef={editorRef}
            markdown={markdown}
            setMarkdown={setMarkdown}
          />
        )}
      </div>
    </>
  );
}

export default ReadmeEditor;
