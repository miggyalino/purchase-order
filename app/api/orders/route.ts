import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const vendor = await prisma.vendor.findMany();
  return NextResponse.json(vendor);
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const createdVendor = await prisma.vendor.create({
      data: json,
    });

    return NextResponse.json(createdVendor, { status: 201 });
  } catch (error) {
    console.error("Error creating department:", error);
    return NextResponse.json(error, { status: 500 });
  }
}
