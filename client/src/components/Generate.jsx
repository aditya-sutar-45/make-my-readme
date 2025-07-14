import { enhanceReadme, generateReadme } from "../api/readme";
import { useState } from "react";
import { useMarkdown } from "../hooks/useMarkdown";

function Generate() {
  const { markdown, setMarkdown } = useMarkdown();
  const [isLoading, setIsLoading] = useState(false);
  const [generatePrompt, setGeneratePrompt] = useState("");
  const [enhancePrompt, setEnhancePrompt] = useState("");

  const handleGenerate = () => {
    setIsLoading(true);
    setMarkdown("");
    generateReadme(generatePrompt, (chunk) => {
      setMarkdown((prevMarkdown) => prevMarkdown + chunk);
    })
      .then(() => setIsLoading(false))
      .catch((err) => {
        setIsLoading(false);
        console.log("streaming error: ", err);
      });
  };

  function handleEnhance() {
    setIsLoading(true);
    const md = markdown;
    setMarkdown("");
    setEnhancePrompt("");
    enhanceReadme(enhancePrompt, md, (chunk) => {
      setMarkdown((prevMarkdown) => prevMarkdown + chunk);
    })
      .then(() => setIsLoading(false))
      .catch((err) => {
        setIsLoading(false);
        console.log("streaming error: ", err);
      });
  }

  return (
    <>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box h-80 mt-5 mx-3">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Generate"
        />
        <div className="tab-content bg-base-100 border-base-300">
          <div className="h-full w-full flex justify-center items-center flex-wrap">
            <textarea
              placeholder="Describe the project you want the README.md file to be generated for and you will get a response!"
              className="textarea text-primary-content font-work-sans h-3/5 resize-none w-[95%]"
              value={generatePrompt}
              onChange={(e) => setGeneratePrompt(e.target.value)}
            ></textarea>
            <button
              className="btn btn-success w-[95%] m-2"
              onClick={handleGenerate}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Generate"
              )}
            </button>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Enhance"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300">
          <div className="h-full w-full flex justify-center items-center flex-wrap">
            <textarea
              placeholder="Describe the part you want to modify in the README!"
              className="textarea text-primary-content font-work-sans h-3/5 resize-none w-[95%]"
              value={enhancePrompt}
              onChange={(e) => setEnhancePrompt(e.target.value)}
            ></textarea>
            <button
              className="btn btn-secondary w-[95%] m-2"
              onClick={handleEnhance}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Enhance"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Generate;
