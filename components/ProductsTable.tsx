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
import { use } from "react";
import { fetchProducts } from "@/app/_fetchUtils";

const ProductsTable = () => {
  const products = use(fetchProducts());
  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Products</CardTitle>
      </CardHeader>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Cost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="mx-auto">
          {products &&
            products.map((product: any) => (
              <TableRow key={product.productId} className="">
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>PHP {product.price}</TableCell>
                <TableCell>
                  <Button>Add to Cart</Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ProductsTable;
