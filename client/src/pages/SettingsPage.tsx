import { MainNav } from "@/components/Dashboard/main-nav"
import { Search } from "@/components/Dashboard/search"
import SettingsAccountPage from "@/components/Settings/account/page"
import SettingsAppearancePage from "@/components/Settings/appearance/page"
import SettingsCustomersPage from "@/components/Settings/customers/page"
import SettingsDisplayPage from "@/components/Settings/display/page"
import SettingsLayout from "@/components/Settings/layout"
import SettingsNotificationsPage from "@/components/Settings/notifications/page"
import SettingsPermissionsPage from "@/components/Settings/permissions/page"
import SettingsRolesPage from "@/components/Settings/roles/page"
import SettingsUsersPage from "@/components/Settings/users/page"
import TeamSwitcher from "@/components/Dashboard/team-switcher"
import { UserNav } from "@/components/Dashboard/user-nav"

export default function SettingsPage() {
  return (
    <>
      <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
      </div>
      <SettingsLayout>
        <SettingsUsersPage />
        <SettingsCustomersPage />
        <SettingsPermissionsPage />
        <SettingsRolesPage />
        <SettingsUsersPage />
        <SettingsAccountPage />
        <SettingsAppearancePage />
        <SettingsDisplayPage />
        <SettingsNotificationsPage />
      </SettingsLayout>
      
    </>
  )
}
