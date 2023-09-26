"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Eye } from "lucide-react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Row } from "@tanstack/react-table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { peopleSchema } from "../data/schema"
import { useState } from "react"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const people = peopleSchema.parse(row.original)
  console.log(people);
  
  return ( <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Make a copy</DropdownMenuItem>
        <DropdownMenuItem>Favorite</DropdownMenuItem>
        <DropdownMenuSeparator />
    
        <DropdownMenuItem>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
</>
  )
}

  
export function SidebarSheet<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const peopleData = peopleSchema.parse(row.original)
  console.log(peopleData);
  const labels = Object.keys(peopleData);

  return (<>
    <Sheet>
      <SheetTrigger asChild>
        <div className="cursor-pointer"><Eye size={16} /></div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>More Details</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-screen w-auto">
          {labels.map((label, index) => (
            <div key={index} className="grid grid-cols-4 items-center gap-4">
              <label htmlFor={label} className="text-right">
                {label}
              </label>
              <div className="col-span-3">
                <input
                  id={label}
                  value={peopleData[label]}
                  disabled
                  className="w-full"
                />
              </div>
            </div>
          ))}
      </ScrollArea>
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              First Name
            </Label>
            <Input id="name" value={people["First Name"]} disabled className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Last Name
            </Label>
            <Input id="username" value={people["Last Name"]} disabled className="col-span-3" />
          </div>
        </div> */}
        
      </SheetContent>
    </Sheet>
  </>)
}