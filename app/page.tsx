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
import { use, useState } from "react";
import { fetchVendors } from "./_fetchUtils";

export default function Home() {
  const vendors = use(fetchVendors());
  return (
    <main className="max-container padding-container flex flex-col pt-8">
      <div className="flex gap-16">
        <div className="flex flex-col gap-6">
          {/* Purchase Order Details */}
          <p className="text-2xl font-bold">Purchase Order Details</p>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="vendor">Vendor</Label>
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select Vendor" />
              </SelectTrigger>
              <SelectContent>
                {vendors.map((vendor: any) => (
                  <SelectItem key={vendor.vendorId} value={vendor.name}>
                    {vendor.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          {/* Purchase Order Product Cart */}
          <ProductsCart />
        </div>
      </div>
      <div className="mt-16">
        {/* Products Table */}
        <ProductsTable />
      </div>
      <div className="mt-8 flex gap-4 justify-end">
        <VendorDialog />
        <ProductDialog />
        <Button>Add Purchase Order</Button>
      </div>
    </main>
  );
}
