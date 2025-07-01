import { useState } from "react";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { readmeSections } from "../utils/readmeTemplates";

const ITEMS_PER_PAGE = 6;

function ReadmeTemplate({ setMarkdown }) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(readmeSections.length / ITEMS_PER_PAGE);
  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const visibleSections = readmeSections.slice(startIdx, endIdx);

  const addPage = () => {
    if (page == totalPages) return;
    setPage((p) => p + 1);
  };

  const subPage = () => {
    if (page == 1) return;
    setPage((p) => p - 1);
  };

  const addTemplate = (template) => {
    setMarkdown((prevMarkdown) => prevMarkdown + "\n" + template);
  };

  return (
    <>
      <div className="navbar bg-primary flex justify-between shadow-sm h-15">
        <h1 className="text-xl">Templates</h1>
      </div>
      <div className="m-2 h-[50vh]">
        <div className="h-4/5">
          <label className="input input-ghost w-full my-2 flex items-center">
            <Search size={16} />
            <input
              type="search"
              className="grow"
              placeholder="Search"
              style={{ width: "100%" }}
            />
          </label>
          {visibleSections.map((sec, index) => (
            <button
              key={index}
              className="btn my-1 w-full btn-dash"
              onClick={() => addTemplate(sec.content)}
            >
              {sec.name}
            </button>
          ))}
        </div>
        <div className="join flex justify-center mt-2">
          <button
            onClick={subPage}
            className="join-item btn"
            disabled={page === 1}
          >
            <ArrowLeft />
          </button>
          <button className="join-item btn">Page {page}</button>
          <button
            onClick={addPage}
            className="join-item btn"
            disabled={page === totalPages}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default ReadmeTemplate;
