"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Credits = {
  id: number;
  status: String;
  amount: number;
  nom: String;
  date: String;
};

// export type Payment = {
//   id: number;
//   article: string;
//   marque: string;
//   prix1: number;
//   prix2: number;
//   prix3: number;
// };

export const columns: ColumnDef<Credits>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nom",
    header: () => <div className="text-center">Nom</div>,
    cell: ({ row }) => <div className="capitalize">{row.getValue("nom")}</div>,
  },
  {
    accessorKey: "date",
    header: () => <div className="text-center ">Date</div>,
    cell: ({ row }) => (
      <div className="capitalize ">{row.getValue("date")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-center text-red-600">sommes</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("de-DE", {}).format(amount);

      return (
        <div className="text-center font-medium text-red-600">{formatted}</div>
      );
    },
  },
];
