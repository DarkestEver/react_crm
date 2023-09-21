import "./App.css";

import { Route, Routes } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import LoginAuthPage from "./pages/LoginAuthPage";
import ProductsPage from './pages/ProductsPage';
import SearchPage from "./pages/SearchPage";
import SettingsAccountPage from './components/Settings/account/page';
import SettingsAppearancePage from './components/Settings/appearance/page';
import SettingsDisplayPage from './components/Settings/display/page';
import SettingsNotificationsPage from './components/Settings/notifications/page';
import SettingsPage from './pages/SettingsPage';
import SettingsProfilePage from './components/Settings/page';
import SignupAuthPage from "./pages/SignupAuthPage";
import TaskPage from './pages/TaskPage';
import axios from "axios";

axios.defaults.baseURL= import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/signup" Component={SignupAuthPage} />
        <Route path="/auth/login" Component={LoginAuthPage} />
        <Route exact path="/dashboard" Component={DashboardPage} />
        <Route path="/dashboard/search" Component={SearchPage} />
        <Route path="/dashboard/tasks" Component={TaskPage} />
        <Route path="/dashboard/products" Component={ProductsPage} /> 
        <Route path="/settings" Component={SettingsPage} />     
        <Route path="/settings/forms" Component={SettingsProfilePage} />      
        <Route path="/settings/forms/account" Component={SettingsAccountPage} />      
        <Route path="/settings/forms/appearance" Component={SettingsAppearancePage} />      
        <Route path="/settings/forms/notifications" Component={SettingsNotificationsPage} />      
        <Route path="/settings/forms/display" Component={SettingsDisplayPage} />      
      </Routes>
    </>
  );
}

export default App;