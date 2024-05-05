import { fetchOrderDetail } from "@/app/_fetchUtils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import React, { use } from "react";

const PurchaseOrderDetail = ({ params }: { params: { id: string } }) => {
  const detail = use(fetchOrderDetail(params.id));
  const totalPrice = detail.PurchaseOrderLine.reduce(
    (total: number, order: PurchaseOrderLine) => total + order.price,
    0
  );
  return (
    <main className="padding-container max-container mt-10">
      <Card className="py-8">
        <CardContent>
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold">{detail.name}</p>
            <p>
              <span className="font-bold">Order ID: </span>
              {detail.orderid}
            </p>
            <p>
              <span className="font-bold">Date Ordered:</span>{" "}
              {new Date(detail.dateordered).toLocaleDateString()}
            </p>
            <p>
              <span className="font-bold">Vendor: </span>
              {detail.Vendor.name}
            </p>
            <p>
              <span className="font-bold">Vendor Contact: </span>
              {detail.Vendor.contactnumber}
            </p>
            <p>
              <span className="font-bold">Vendor Email: </span>
              {detail.Vendor.email}
            </p>
            <p>
              <span className="font-bold">Vendor Address: </span>
              {detail.Vendor.address}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="mt-10">
        <CardContent>
          <Table>
            <TableCaption>
              A list of products in this purchase order.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Total Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {detail.PurchaseOrderLine.map((order: PurchaseOrderLine) => (
                <TableRow key={order.orderlineid}>
                  <TableCell className="font-medium">
                    {order.productid}
                  </TableCell>
                  <TableCell>{order.Product.name}</TableCell>
                  <TableCell>{order.quantity} pcs</TableCell>
                  <TableCell>PHP {order.price}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className="font-bold text-lg">Total Price</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>PHP {totalPrice}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="flex justify-end mt-6">
        <Button>
          <Link href={"/orders"}>Back to Orders Page</Link>
        </Button>
      </div>
    </main>
  );
};

export default PurchaseOrderDetail;
