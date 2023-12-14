import HomeTabs from "@/components/WMS/components/home-tabs";
import { MainNav } from "@/components/Dashboard/main-nav";
import { Search } from "@/components/Dashboard/search";
import { Sidebar } from "@/components/WMS/components/sidebar";
import TeamSwitcher from "@/components/Dashboard/team-switcher";
import { UserNav } from "@/components/Dashboard/user-nav";
import { playlists } from "@/components/WMS/data/playlists";

type Props = {};

const WebsiteManagementSystem = (props: Props) => {
  return (
    <>
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

        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
                <Sidebar playlists={playlists} className="hidden lg:block" />

                <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <HomeTabs />
                </div>
              </div>
              
            </div>
          </div>
        </div>
        

        
    </div>
    </>
  );
};

export default WebsiteManagementSystem;
