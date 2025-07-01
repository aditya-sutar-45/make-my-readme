import { useState } from "react";
import ReadmeEditor from "../components/ReadmeEditor";
import ReadmeTemplate from "../components/ReadmeTemplates";

function ReadmeGenerator() {
  const [markdown, setMarkdown] = useState("# edit your markdown here....");

  return (
    <div className="h-screen w-screen grid grid-rows-1 grid-cols-3 gap-2 rounded-field">
      <div className="h-full border-1 overflow-hidden rounded-field">
        <ReadmeTemplate setMarkdown={setMarkdown} />
      </div>
      <div className="h-full col-span-2 border-1 overflow-hidden rounded-field">
        <ReadmeEditor markdown={markdown} setMarkdown={setMarkdown} />
      </div>
    </div>
  );
}

export default ReadmeGenerator;
