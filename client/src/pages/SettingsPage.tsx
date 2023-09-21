import { MainNav } from "@/components/Dashboard/main-nav"
import { Search } from "@/components/Dashboard/search"
import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/components/Settings/components/sidebar-nav"
import TeamSwitcher from "@/components/Dashboard/team-switcher"
import { UserNav } from "@/components/Dashboard/user-nav"

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/settings/forms",
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

export default function SettingsPage({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="md:hidden">
        <img
          src=""
          width={1280}
          height={791}
          alt="Forms"
          className="block dark:hidden"
        />
        <img
          src=""
          width={1280}
          height={791}
          alt="Forms"
          className="hidden dark:block"
        />
      </div>
      <div className="h-screen hidden flex-col md:flex">
          {/* User navbar  */}
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
            <SidebarNav
             items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
      </div>
    </>
  )
}
