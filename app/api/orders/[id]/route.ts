import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const orders = await prisma.purchaseOrder.findUnique({
    where: {
      orderid: id,
    },
    include: {
      Vendor: true,
      PurchaseOrderLine: {
        include: {
          Product: true,
        },
      },
    },
  });
  return NextResponse.json(orders);
}
