import { DataTableRowActions, SidebarSheet } from "./data-table-row-actions"

import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "./data-table-coumn-header"
import { People } from '@/components/Search/table/data/schema';

export const columns: ColumnDef<People>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => {
    return (<div className="flex items-center gap-2">
      <DataTableRowActions row={row} />
      <SidebarSheet row={row} />
    </div>
    )
    },
  },
  // {
  //   accessorKey: "id",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Id" />
  //   ),
  //   cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "name",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      const firstName = row.original["First Name"];
      const lastName = row.original["Last Name"];
      let name = `${firstName} ${lastName}`;

      return (
        <div className="flex w-[100px] items-center">
          <span>{name}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader className="w-[200px]" column={column} title="Title" />
    ),
    cell: ({ row }) => {
      const title = row.original["Title"];
      return (
        <div className="flex w-auto items-center">
          <span>{title}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "company",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company" />
    ),
    cell: ({ row }) => {
      const company = row.original.Company;
      return (
        <div className="flex w-[100px] items-center">
          <span>{company}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "contact-location",
    header: ({ column }) => (
      <DataTableColumnHeader className="w-[200px]" column={column} title="Contact Location" />
    ),
    cell: ({ row }) => {
      const location = row.original["Company Address"];
      return (
        <div className="flex w-auto items-center">
          <span>{location}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
      cell: ({ row }) => {
        const email = row.original.Email;
        return (
          <div className="flex w-auto items-center">
            <span>{email}</span>
          </div>
        )
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      },
  },
  {
    accessorKey: "employees",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Employees" />
    ),
      cell: ({ row }) => {
        const employees = row.original["# Employees"];
        return (
          <div className="flex w-auto items-center">
            <span>{employees}</span>
          </div>
        )
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      },
  },
  {
    accessorKey: "industry",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Industry" />
    ),
      cell: ({ row }) => {
        const industry = row.original.Industry;
        return (
          <div className="flex w-auto items-center">
            <span>{industry}</span>
          </div>
        )
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      },
  },
  // {
  //   accessorKey: "keywords",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Keywords" />
  //   ),
  //     cell: ({ row }) => {
  //       const keywords = row.original.Keywords;
  //       return (
  //         <div className="flex w-auto items-center">
  //           <span>{keywords}</span>
  //         </div>
  //       )
  //     },
  //     filterFn: (row, id, value) => {
  //       return value.includes(row.getValue(id))
  //     },
  // },
  
]
