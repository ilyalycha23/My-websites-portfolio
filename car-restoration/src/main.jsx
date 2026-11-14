import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import App from "./App.jsx";
import "./index.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

ScrollTrigger.config({
  ignoreMobileResize: true,
});

window.addEventListener("load", () => ScrollTrigger.refresh());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
