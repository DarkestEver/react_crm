import "./App.css";

import { Route, Routes } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import LoginAuthPage from "./pages/LoginAuthPage";
import ProductsPage from './pages/ProductsPage';
import SearchPage from "./pages/SearchPage";
import SettingsAccountPage from './components/Settings/account/page';
import SettingsAppearancePage from './components/Settings/appearance/page';
import SettingsCustomersPage from './components/Settings/customers/page';
import SettingsDisplayPage from './components/Settings/display/page';
import SettingsLayoutPage from './pages/SettingsPage';
import SettingsNotificationsPage from './components/Settings/notifications/page';
import SettingsPermissionsPage from './components/Settings/permissions/page';
import SettingsProfilePage from './components/Settings/profile/page';
import SettingsRolesPage from './components/Settings/roles/page';
import SettingsUsersPage from './components/Settings/users/page';
import SignupAuthPage from "./pages/SignupAuthPage";
import TaskPage from './pages/TaskPage';
import WebsiteManagementSystem from './pages/WebsiteManagementSystem';
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
        <Route path="/dashboard/wms" Component={WebsiteManagementSystem} /> 
        <Route path="settings" element={<SettingsLayoutPage />}>
          <Route path="profile" element={<SettingsProfilePage />} />
          <Route path="users" element={<SettingsUsersPage />} />
          <Route path="customers" element={<SettingsCustomersPage />} />
          <Route path="roles" element={<SettingsRolesPage />} />
          <Route path="permissions" element={<SettingsPermissionsPage />} />
          <Route path="forms">
            <Route path="account" element={<SettingsAccountPage />} />
            <Route path="appearance" element={<SettingsAppearancePage />} />
            <Route path="notifications" element={<SettingsNotificationsPage />} />
            <Route path="display" element={<SettingsDisplayPage />} />
        </Route>
      </Route>
      </Routes>
    </>
  );
}

export default App;