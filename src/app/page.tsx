import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Marketplace</CardTitle>
          <CardDescription>
            Plataforma de compra-venta entre usuarios
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Link href="/sign-in" className={buttonVariants({ size: "lg", className: "w-full" })}>
            Iniciar Sesion
          </Link>
          <Link href="/sign-up" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full" })}>
            Crear Cuenta
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
