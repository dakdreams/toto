import { Credits, columns } from "./columns";
import { DataTable } from "./data-table";
import prisma from "@/lib/db";

async function getData(): Promise<Credits[]> {
  // Fetch data from your API here.
  const Data = await prisma.credits.findMany();

  return Data;
}

export default async function DemoPage() {
  const data = await getData();
  console.log(data);

  return (
    <div className="text-center my-8 mx-8">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
