import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Cards from "./components/Cards";
import PageLayout from "./components/PageLayout";
import Day from "./pages/Day";
import Week from "./pages/Week";

export default function Router() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" />
          <Route path="day" element={<Day />}>
            <Route path=":area" element={<Card />} />
          </Route>
          <Route path="week" element={<Week />}>
            <Route path=":area" element={<Cards />} />
          </Route>
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}
