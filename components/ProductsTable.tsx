"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { use, useEffect, useState } from "react";
import { fetchProducts } from "@/app/_fetchUtils";
import { AddtoCart } from "./AddtoCart";

const ProductsTable = ({ cart, setCart }: ProductsTableProps) => {
  const [products, setProducts] = useState<any[]>([]);
  const getProducts = async () => {
    const data = await fetchProducts();
    await setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Products</CardTitle>
      </CardHeader>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Cost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {products &&
            products.map((product: Product) => (
              <TableRow key={product.productid} className="">
                <TableCell>{product.productid}</TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>PHP {product.price}</TableCell>
                <TableCell>
                  <AddtoCart
                    product={product}
                    cart={cart}
                    setCart={setCart} // Update the type of setCart prop
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ProductsTable;
