"use client";

import { ProductDialog } from "@/components/ProductDialog";
import ProductsCart from "@/components/ProductsCart";
import ProductsTable from "@/components/ProductsTable";
import { VendorDialog } from "@/components/VendorDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { use, useEffect, useState } from "react";
import { fetchVendors } from "./_fetchUtils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Home() {
  const [cart, setCart] = useState<ProductLine[]>([]);
  const [vendors, setVendors] = useState<any[]>([]);
  const router = useRouter();

  const getVendors = async () => {
    const data = await fetchVendors();
    await setVendors(data);
  };

  useEffect(() => {
    getVendors();
  }, []);

  const createPurchaseOrder = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newPurchaseOrder = Object.fromEntries(formData);
    const postPurchaseOrder = {
      ...newPurchaseOrder,
      vendor: parseInt(newPurchaseOrder.vendor as string, 10),
    };

    try {
      event.preventDefault();
      console.log(cart);
      await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...postPurchaseOrder,
          PurchaseOrderLine: cart,
        }),
      });
      toast("Purchase Order created successfully");
      router.push("/orders");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="max-container padding-container flex flex-col pt-8">
      <form onSubmit={createPurchaseOrder}>
        <div className="flex gap-16">
          <div className="flex flex-col gap-6">
            {/* Purchase Order Details */}
            <p className="text-2xl font-bold">Purchase Order Details</p>
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="vendor">Vendor</Label>
              <Select name="vendor">
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Select Vendor" />
                </SelectTrigger>
                <SelectContent>
                  {vendors.map((vendor: any) => (
                    <SelectItem
                      key={vendor.vendorid}
                      value={vendor.vendorid.toString()}
                    >
                      {vendor.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            {/* Purchase Order Product Cart */}
            <ProductsCart cart={cart} setCart={setCart} />
          </div>
        </div>
        <div className="mt-16">
          {/* Products Table */}
          <ProductsTable cart={cart} setCart={setCart} />
        </div>
        <div className="mt-8 flex gap-4 justify-end">
          <VendorDialog />
          <ProductDialog />
          <Button type="submit">Add Purchase Order</Button>
        </div>
      </form>
    </main>
  );
}
