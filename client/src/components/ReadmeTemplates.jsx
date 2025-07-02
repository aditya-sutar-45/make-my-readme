import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { readmeSections, readmeTags } from "../utils/readmeTemplates";
import Generate from "./Generate";
import { useMarkdown } from "../hooks/useMarkdown";

const ITEMS_PER_PAGE = 6;

function ReadmeTemplate() {
  const { setMarkdown } = useMarkdown();

  const [page, setPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState([]);
  const [search, setSearch] = useState("");

  const filterSectionTags =
    selectedTags.length === 0
      ? readmeSections
      : readmeSections.filter((sec) => selectedTags.includes(sec.tag));

  const filteredSections = useMemo(() => {
    return filterSectionTags.filter((sec) => {
      return sec.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });
  }, [filterSectionTags, search]);

  const totalPages = Math.ceil(filteredSections.length / ITEMS_PER_PAGE);
  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const visibleSections = filteredSections.slice(startIdx, endIdx);

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

  const toggleTag = (tag) => {
    // if (selectedTags.includes(tag)) return;
    setPage(1);
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <>
      <div className="navbar bg-primary flex justify-between shadow-sm h-15">
        <h1 className="text-xl">Templates</h1>
      </div>
      <div className="m-2 h-[50vh]">
        <div className="w-full flex justify-around">
          {readmeTags.map((tag, index) => (
            <button
              key={index}
              className={`btn btn-soft btn-sm my-1 ${
                selectedTags.includes(tag) ? "btn-primary" : ""
              }`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="h-4/5">
          <label className="input input-ghost w-full my-2 flex items-center">
            <Search size={16} />
            <input
              type="search"
              className="grow"
              placeholder="Search"
              onChange={(e) => {
                setPage(1);
                setSearch(e.target.value);
              }}
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
      <Generate />
    </>
  );
}

export default ReadmeTemplate;
