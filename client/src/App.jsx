import { useNavigate, Link } from "react-router-dom";
import ThemeController from "./components/controllers/ThemeController";
import { ArrowRight } from "lucide-react";
import website_dark from "./assets/readme-dark.png";
import website_light from "./assets/readme-light.png";

function App() {
  const navigate = useNavigate();

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
            <div className="mockup-browser border-base-300 border w-full aspect-video py-3">
              <div className="mockup-browser-toolbar">
                <div className="input">{window.location.href}</div>
              </div>
              {/* <img className="grid place-content-center border-t border-base-300 h-80">
                Hello!
              </img> */}
              <img src={website_dark} alt="dark_mode_photo" />
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
    </>
  );
}

export default App;
