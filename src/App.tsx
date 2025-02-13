import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import routes from "tempo-routes";

export function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}
