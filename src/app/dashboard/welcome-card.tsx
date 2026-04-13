"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  ShoppingCart,
  TrendingUp,
  Package,
  ArrowUpRight,
  DollarSign,
  Users,
} from "lucide-react";

export function WelcomeCard() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Stats Overview Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Ventas Totales</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$12,450</div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
            <TrendingUp className="h-3 w-3 text-primary" />
            <span className="text-primary font-medium">+12.5%</span> vs mes
            anterior
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Meta mensual</span>
              <span className="font-medium">78%</span>
            </div>
            <Progress value={78} />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full">
            Ver reportes
            <ArrowUpRight className="ml-1 h-3 w-3" />
          </Button>
        </CardFooter>
      </Card>

      {/* Orders Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Pedidos</CardTitle>
          <ShoppingCart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">384</div>
          <p className="text-xs text-muted-foreground mt-1">
            24 pedidos nuevos hoy
          </p>
          <Separator className="my-4" />
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm">Completados</span>
              </div>
              <Badge variant="secondary">256</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-chart-2" />
                <span className="text-sm">En proceso</span>
              </div>
              <Badge variant="secondary">89</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-destructive" />
                <span className="text-sm">Cancelados</span>
              </div>
              <Badge variant="destructive">39</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button size="sm" className="flex-1">
            Nuevo pedido
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Ver todos
          </Button>
        </CardFooter>
      </Card>

      {/* Products Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Productos</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,234</div>
          <p className="text-xs text-muted-foreground mt-1">
            productos activos en el catalogo
          </p>
          <Separator className="my-4" />
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Stock bajo</span>
              <Badge variant="outline" className="text-destructive">
                18 items
              </Badge>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Usuarios activos</span>
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3 text-primary" />
                <span className="font-medium">2,847</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Rating promedio</span>
              <span className="font-medium">4.8 / 5.0</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full">
            Gestionar catalogo
            <ArrowUpRight className="ml-1 h-3 w-3" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
