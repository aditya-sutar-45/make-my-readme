import ReadmeEditor from "../components/ReadmeEditor";

function ReadmeGenerator() {
  return (
    <div className="h-screen w-screen grid grid-rows-1 grid-cols-3 gap-2">
      <div className="h-full border-1 border-accent">
        <h1>Template</h1>
      </div>
      <div className="h-full col-span-2 border-1 border-accent overflow-scroll">
        <ReadmeEditor />
      </div>
    </div>
  );
}

export default ReadmeGenerator;
