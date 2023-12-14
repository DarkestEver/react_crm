import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SettingsRolesPage() {
    return (
      <div className="flex gap-4 items-center space-y-6">
        <div>
          <h3 className="text-lg font-medium">Roles</h3>
          <p className="text-sm text-muted-foreground">
            Turn items on or off to control what&apos;s displayed in the app.
          </p>
        </div>
        <div>
          <AddRole />
        </div>
      </div>
    )
  }
  
function AddRole(){
  return (
    <>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Add Role</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Role Name
            </Label>
            <Input id="name" placeholder="Employee" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input id="username" placeholder="This role is created for the employees of the company" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  )
}