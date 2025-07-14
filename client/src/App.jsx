import { useNavigate, Link } from "react-router-dom";
import ThemeController from "./components/controllers/ThemeController";
import { ArrowRight } from "lucide-react";
import website_dark from "./assets/readme-dark.png";
import website_light from "./assets/readme-light.png";
import { useTheme } from "./hooks/useTheme";

function App() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <>
      <div className="navbar bg-secondary flex justify-between shadow-sm h-15 fixed">
        <Link to={"/"} className="text-2xl font-space-mono font-normal">
          MakeMy<span className="font-bold">README</span>
        </Link>
        <ThemeController />
      </div>
      <div className="hero bg-base-200 min-h-screen pt-[5rem]">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold font-work-sans">
              Create Professional{" "}
              <span className="font-space-mono font-light text-primary">
                README.md
              </span>{" "}
              in seconds
            </h1>
            <p className="py-3 text-secondary text-xl font-space-mono font-medium">
              A fast, customizable README generator that helps you document your
              projects with ease. Clean design, live preview, one-click
              download.
            </p>
            <div className="mockup-browser border border-secondary-content w-full aspect-video py-3">
              <div className="mockup-browser-toolbar">
                <div className="input">{window.location.href}</div>
              </div>
              {/* <img className="grid place-content-center border-t border-base-300 h-80">
                Hello!
              </img> */}
              <img
                src={theme == "black" ? website_dark : website_light}
                alt="dark_mode_photo"
              />
            </div>
            <button
              className="btn btn-primary font-work-sans my-3"
              onClick={() => navigate("/readme")}
            >
              Get Started <ArrowRight />
            </button>
          </div>
        </div>
      </div>
      <footer className="footer sm:footer-horizontal bg-primary text-primary-content items-center py-2 px-3">
        <aside className="grid-flow-col items-center">
          <img src="/code-icon.svg" alt="icon" />
          <p>Made by Aditya Sutar</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://github.com/aditya-sutar-45"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>
        </nav>
      </footer>
    </>
  );
}

export default App;
