import React from "react";
import { Separator } from "@/components/ui/separator"
import SettingsAccountPage from "./account/page";
import SettingsAppearancePage from "./appearance/page";
import SettingsCustomersPage from "./customers/page";
import SettingsDisplayPage from "./display/page";
import SettingsNotificationsPage from "./notifications/page";
import SettingsPermissionsPage from "./permissions/page";
import SettingsProfilePage from "./profile/page";
import SettingsRolesPage from "./roles/page";
import SettingsUsersPage from "./users/page";
import { SidebarNav } from "./components/sidebar-nav"
import { useLocation } from "react-router-dom";

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/settings/profile",
  },
  {
    title: "Users",
    href: "/settings/users",
  },
  {
    title: "Customers",
    href: "/settings/customers",
  },
  {
    title: "Roles",
    href: "/settings/roles",
  },
  // {
  //   title: "Role Permissions",
  //   href: "/settings/rolePermissions",
  // },
  {
    title: "Permissions",
    href: "/settings/permissions",
  },
  {
    title: "Account",
    href: "/settings/forms/account",
  },
  {
    title: "Appearance",
    href: "/settings/forms/appearance",
  },
  {
    title: "Notifications",
    href: "/settings/forms/notifications",
  },
  {
    title: "Display",
    href: "/settings/forms/display",
  },
]
interface SettingsLayoutProps {
  children: React.ReactNode
}
export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const { pathname } = useLocation();

  const tabComponentMap: {
    [key: string]: () => JSX.Element | null; 
  } = {
    '/settings/profile': SettingsProfilePage,
    '/settings/users': SettingsUsersPage,
    '/settings/customers': SettingsCustomersPage,
    '/settings/roles': SettingsRolesPage,
    '/settings/permissions': SettingsPermissionsPage,
    // '/settings/rolePermissions': SettingsRolePermissionsPage,
    '/settings/forms/account': SettingsAccountPage,
    '/settings/forms/appearance': SettingsAppearancePage,
    '/settings/forms/notifications': SettingsNotificationsPage,
    '/settings/forms/display': SettingsDisplayPage,
    
  };
  const currentTabComponent = tabComponentMap[pathname];
  return (
    <> 
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          {/* <div className="flex-1 lg:max-w-2xl">{children}</div> */}
          <div className="flex-1 lg:max-w-2xl">
            {currentTabComponent && React.createElement(currentTabComponent)}
          </div>
        </div>
      </div>
      
    </>
  )
}