import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const product = await prisma.product.findMany();
  return NextResponse.json(product);
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const createdProduct = await prisma.product.create({
      data: json,
    });

    return NextResponse.json(createdProduct, { status: 201 });
  } catch (error) {
    console.error("Error creating department:", error);
    return NextResponse.json(error, { status: 500 });
  }
}
