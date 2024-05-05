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

const ProductsCart = ({ cart, setCart }: ProductsCartProps) => {
  const handleRemove = (productIndex: number) => {
    setCart((prev: ProductLine[]) => {
      const newCart = [...prev];
      newCart.splice(productIndex, 1);
      return newCart;
    });
  };
  return (
    <Card className="w-[50rem]">
      <CardHeader>
        <CardTitle>Product Cart</CardTitle>
      </CardHeader>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total Cost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.map((product: ProductLine, index: number) => (
            <TableRow key={product.productid}>
              <TableCell>{product.productid}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>PHP {product.price}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ProductsCart;
