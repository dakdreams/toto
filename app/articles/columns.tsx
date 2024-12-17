"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

export type Payment = {
  id: number;
  article: string;
  marque: string;
  prix1: number;
  prix2: number;
  prix3: number;
};

export const columns: ColumnDef<Payment>[] = [
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
    accessorKey: "article",
    header: () => <div className="text-center">Article</div>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("article")}</div>
    ),
  },
  {
    accessorKey: "marque",
    header: () => <div className="text-center ">marque</div>,
    cell: ({ row }) => (
      <div className="capitalize ">{row.getValue("marque")}</div>
    ),
  },
  {
    accessorKey: "prix1",
    header: () => (
      <div className="text-center text-red-600">Prix de revient</div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("prix1"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("de-DE", {}).format(amount);

      return (
        <div className="text-center font-medium text-red-600">{formatted}</div>
      );
    },
  },
  {
    accessorKey: "prix2",
    header: () => (
      <div className="text-center text-green-600">Prix grossite</div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("prix2"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("de-DE", {}).format(amount);

      return (
        <div className="text-center font-medium text-green-600">
          {formatted}
        </div>
      );
    },
  },
  {
    accessorKey: "prix3",
    header: () => <div className="text-center">Demi-gros</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("prix3"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("de-DE", {}).format(amount);

      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
];
