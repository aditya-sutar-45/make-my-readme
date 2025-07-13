import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReadmeGenerator from "./pages/ReadmeGenerator.jsx";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "./contexts/ThemeProvider.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/readme", element: <ReadmeGenerator /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Toaster />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
