import { DemoCookieSettings } from "@/components/Cards/components/cookie-settings"
import { DemoCreateAccount } from "@/components/Cards/components/create-account"
import { DemoDatePicker } from "@/components/Cards/components/date-picker"
import { DemoGithub } from "@/components/Cards/components/github-card"
import { DemoNotifications } from "@/components/Cards/components/notifications"
import { DemoPaymentMethod } from "@/components/Cards/components/payment-method"
import { DemoReportAnIssue } from "@/components/Cards/components/report-an-issue"
import { DemoShareDocument } from "@/components/Cards/components/share-document"
import { DemoTeamMembers } from "@/components/Cards/components/team-members"
import { MainNav } from "@/components/Dashboard/main-nav"
import { Search } from "@/components/Dashboard/search"
import TeamSwitcher from "@/components/Dashboard/team-switcher"
import { UserNav } from "@/components/Dashboard/user-nav"
import { cn } from "@/lib/utils"

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  )
}

export default function ProductsPage() {
  return (
    <> 
      <div className="md:hidden">
        <img
          src=""
          width={1280}
          height={1214}
          alt="Cards"
          className="block dark:hidden"
        />
        <img
          src=""
          width={1280}
          height={1214}
          alt="Cards"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
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

      <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <DemoContainer>
            <DemoCreateAccount />
          </DemoContainer>
          <DemoContainer>
            <DemoPaymentMethod />
          </DemoContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <DemoContainer>
            <DemoTeamMembers />
          </DemoContainer>
          <DemoContainer>
            <DemoShareDocument />
          </DemoContainer>
          <DemoContainer>
            <DemoDatePicker />
          </DemoContainer>
          <DemoContainer>
            <DemoNotifications />
          </DemoContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
          <DemoContainer>
            <DemoReportAnIssue />
          </DemoContainer>
          <DemoContainer>
            <DemoGithub />
          </DemoContainer>
          <DemoContainer>
            <DemoCookieSettings />
          </DemoContainer>
        </div>
      </div>
      </div>
    </>
  )
}
