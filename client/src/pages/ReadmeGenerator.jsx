import ReadmeEditor from "../components/ReadmeEditor";
import ReadmeTemplate from "../components/ReadmeTemplates";
import MarkdownProvider from "../contexts/MarkdownProvider";

function ReadmeGenerator() {
  return (
    <MarkdownProvider>
      <div className="h-screen w-screen grid grid-rows-1 grid-cols-3 gap-2">
        <div className="h-full bg-primary overflow-hidden">
          <ReadmeTemplate />
        </div>
        <div className="h-full col-span-2 bg-primary overflow-hidden">
          <ReadmeEditor />
        </div>
      </div>
    </MarkdownProvider>
  );
}

export default ReadmeGenerator;
