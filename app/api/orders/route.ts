import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const orders = await prisma.purchaseOrder.findMany({
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

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const { PurchaseOrderLine, vendor, ...purchaseOrderData } = json;

    const newPurchaseOrder = await prisma.purchaseOrder.create({
      data: {
        ...purchaseOrderData,
        Vendor: {
          connect: {
            vendorid: vendor,
          },
        },
        PurchaseOrderLine: {
          create: PurchaseOrderLine.map((item: any) => {
            const { name, productid, ...itemWithoutName } = item; // remove the name field
            return {
              ...itemWithoutName,
              Product: {
                connect: {
                  productid: productid,
                },
              },
            };
          }),
        },
      },
    });

    return NextResponse.json(newPurchaseOrder, { status: 201 });
  } catch (error) {
    console.error("Error creating Purchase Order:", error);
    return NextResponse.json(error, { status: 500 });
  }
}
