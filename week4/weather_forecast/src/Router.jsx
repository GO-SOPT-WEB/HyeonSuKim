import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Cards from "./components/Cards";
import PageLayout from "./components/PageLayout";
import Day from "./pages/Day";
import Week from "./pages/Week";
import Main from "./pages/Main";

export default function Router() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="day" element={<Day />}>
            <Route path=":cityName" element={<Card />} />
            <Route path="" element={<div>지역을 입력해 주세요!</div>} />
          </Route>
          <Route path="week" element={<Week />}>
            <Route path=":cityName" element={<Cards />} />
            <Route path="" element={<div>지역을 입력해 주세요!</div>} />
          </Route>
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}
