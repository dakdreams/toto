import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Home() {
  return (
    <Card className="my-2 mx-2">
      <CardHeader>
        <CardTitle>EDAF</CardTitle>
        <CardDescription>Etablisement Drabo Aly et Frere</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <Link href={`articles`}>
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-80 rounded-full my-8">
              prix
            </Button>
          </Link>
          <br />
          <Link href={`entres`}>
            <Button className="bg-green-500 hover:bg-green-700 text-white font-bold w-80 rounded-full my-8">
              vente
            </Button>
          </Link>
          <br />
          <Link href={`entres`}>
            <Button className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold w-80 rounded-full my-8">
              stock
            </Button>
          </Link>
          <br />

          <Link href={`credits`}>
            <Button className="bg-red-500 hover:bg-red-700 text-white font-bold w-80 rounded-full my-8">
              credits
            </Button>
          </Link>
          <br />

          <Link href={`credits`}>
            <Button className="bg-slate-500 hover:bg-slate-700 text-white font-bold w-80 rounded-full my-8">
              debiteur
            </Button>
          </Link>
        </div>
      </CardContent>
      <CardFooter>
        <p>Adjame Inspection Du Travail</p>
      </CardFooter>
    </Card>
  );
}
