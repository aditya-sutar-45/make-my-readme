import { Code, Eye } from "lucide-react";
import { useRef, useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import MarkdowPreview from "./MarkdownPreview";

function ReadmeEditor() {
  const editorRef = useRef(null);
  const [markdown, setMarkdown] = useState("# edit your markdown here....");
  const [isPreview, setIsPreview] = useState(false);

  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  return (
    <>
      <div className="navbar bg-base-100 flex justify-between shadow-sm">
        <h1 className="text-xl">{isPreview ? "Preview" : "Editor"}</h1>
        <label className="toggle text-base-content">
          <input type="checkbox" onClick={togglePreview} />
          <Code size={16} />
          <Eye size={16} />
        </label>
      </div>
      <div className="h-full">
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
