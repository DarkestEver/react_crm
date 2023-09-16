import "./App.css";

import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import DashboardPage from "./pages/DashboardPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={DashboardPage} />
      </Routes>
    </>
  );
}

export default App;
