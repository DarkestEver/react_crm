import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import { Playlist } from "../data/playlists"
import { cn } from "@/lib/utils"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[]
}

export function Sidebar({ className, playlists }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          {/* <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            HomePage
          </h2> */}
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start gap-2">
                <Home size={16} />
              Company Info 
            </Button>
            
            <Button variant="ghost" className="w-full justify-start gap-2">
                <Home size={16} />
              Menus
            </Button>

            <Button variant="ghost" className="w-full justify-start gap-2">
                <Home size={16} />
              Destinaitons
            </Button>

            
            <Button variant="ghost" className="w-full justify-start gap-2">
                <Home size={16} />
              About Section
            </Button>

            
            <Button variant="ghost" className="w-full justify-start gap-2">
                <Home size={16} />
              Blogs
            </Button>

            
            <Button variant="ghost" className="w-full justify-start gap-2">
                <Home size={16} />
              Seo
            </Button>


            <Button variant="ghost" className="w-full justify-start gap-2">
                <Home size={16} />
              Testimonials
            </Button>

            
            <Button variant="ghost" className="w-full justify-start gap-2">
                <Home size={16} />
              Footer
            </Button>


            <Button variant="ghost" className="w-full justify-start gap-2">
                <Home size={16} />
              Settings
            </Button>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}
