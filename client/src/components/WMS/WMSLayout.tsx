import React from "react";
import { Sidebar } from "./components/sidebar";
import { playlists } from "./data/playlists"

type Props = {};


const WMSLayout = (props: Props) => {
  return (
    <>
        
    </>
  );
};

export default WMSLayout;



// import React from "react";
// import { Separator } from "@/components/ui/separator"
// import SettingsProfilePage from "./profile/page";
// import { SidebarNav } from "./components/sidebar-nav"
// import { useLocation } from "react-router-dom";

// const sidebarNavItems = [
//   {
//     title: "Profile",
//     href: "/settings/profile",
//   }
// ]
// interface SettingsLayoutProps {
//   children: React.ReactNode
// }
// export default function WMSLayout({ children }: SettingsLayoutProps) {
//   const { pathname } = useLocation();

//   const tabComponentMap: {
//     [key: string]: () => JSX.Element | null; 
//   } = {
//     '/settings/profile': SettingsProfilePage,
//   };
//   const currentTabComponent = tabComponentMap[pathname];
//   return (
//     <> 
//       <div className="hidden space-y-6 p-10 pb-16 md:block">
//         <div className="space-y-0.5">
//           <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
//           <p className="text-muted-foreground">
//             Manage your account settings and set e-mail preferences.
//           </p>
//         </div>
//         <Separator className="my-6" />
//         <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
//           <aside className="-mx-4 lg:w-1/5">
//             <SidebarNav items={sidebarNavItems} />
//           </aside>
//           {/* <div className="flex-1 lg:max-w-2xl">{children}</div> */}
//           <div className="flex-1 lg:max-w-2xl">
//             {currentTabComponent && React.createElement(currentTabComponent)}
//           </div>
//         </div>
//       </div>
      
//     </>
//   )
// }