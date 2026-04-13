"use client";

import { useState } from "react";
import { useProducts, useCreateProduct } from "@/hooks/use-products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductsPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // TanStack Query hooks
  const { data: products, isLoading, error } = useProducts();
  const createProduct = useCreateProduct();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    createProduct.mutate(
      { title, description },
      {
        onSuccess: () => {
          setTitle("");
          setDescription("");
        },
      }
    );
  };

  return (
    <div className="container mx-auto max-w-2xl p-8">
      <h1 className="text-2xl font-bold mb-6">Productos — Demo CRUD</h1>

      {/* Formulario para crear producto */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Crear Producto</CardTitle>
          <CardDescription>
            POST /api/products → Axios → useMutation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Titulo</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nombre del producto"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Descripcion</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descripcion del producto"
              />
            </div>
            <Button type="submit" disabled={createProduct.isPending}>
              {createProduct.isPending ? "Creando..." : "Crear Producto"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Lista de productos */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Productos</CardTitle>
          <CardDescription>
            GET /api/products → Axios → useQuery
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading && <p className="text-muted-foreground">Cargando...</p>}
          {error && (
            <p className="text-destructive">Error: {error.message}</p>
          )}
          {products && products.length === 0 && (
            <p className="text-muted-foreground">
              No hay productos. Crea uno arriba.
            </p>
          )}
          <div className="flex flex-col gap-3">
            {products?.map((product) => (
              <div
                key={product.id}
                className="rounded-lg border p-4"
              >
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  ID: {product.id}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
