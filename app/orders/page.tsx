import React, { use } from "react";
import { fetchOrders } from "../_fetchUtils";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const OrdersPage = () => {
  const orders = use(fetchOrders());
  return (
    <Table>
      <TableCaption>A list of your recent purchase orders.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Date Ordered</TableHead>
          <TableHead>Vendor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders &&
          orders.map((order: PurchaseOrder) => (
            <TableRow key={order.orderid}>
              <TableCell className="font-medium">{order.orderid}</TableCell>
              <TableCell>{order.name}</TableCell>
              <TableCell>
                {new Date(order.dateordered).toLocaleDateString()}
              </TableCell>
              <TableCell>{order.Vendor.name}</TableCell>
              <TableCell>
                <Button asChild>
                  <Link href={`/orders/${order.orderid}`}>View Details</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default OrdersPage;
