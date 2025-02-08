import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Home from "./components/Home.tsx";
import ChapterOne from "./components/chapters/ChapterOne.tsx";
import ChapterTwo from "./components/chapters/ChapterTwo.tsx";
import ChapterThree from "./components/chapters/ChapterThree.tsx";
import ChapterFour from "./components/chapters/ChapterFour.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="chapter-one" element={<ChapterOne />} />
          <Route path="chapter-two" element={<ChapterTwo />} />
          <Route path="chapter-three" element={<ChapterThree />} />
          <Route path="chapter-four" element={<ChapterFour />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
