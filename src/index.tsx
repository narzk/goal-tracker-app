import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageRegister from "./pages/PageRegister";
import PageCategory from "./pages/PageCategory";
import PageEducation from "./pages/categoryPages/PageEducation";
import PageSport from "./pages/categoryPages/PageSport";
import PageWork from "./pages/categoryPages/PageWork";
import PageFamily from "./pages/categoryPages/PageFamily";
import { TaskProvider } from "./contexts/TaskProvider";

ReactDOM.render(
  <TaskProvider>
    <BrowserRouter basename={"/goal-tracker-app"}>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<PageRegister />} />
          <Route path="/home" element={<PageCategory />} />
          <Route path="/education" element={<PageEducation />} />
          <Route path="/sport" element={<PageSport />} />
          <Route path="/work" element={<PageWork />} />
          <Route path="/family" element={<PageFamily />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </TaskProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
