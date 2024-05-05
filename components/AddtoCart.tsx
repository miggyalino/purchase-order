"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AddtoCart({ product, setCart, cart }: AddtoCartProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const quantity = new FormData(e.currentTarget).get("quantity") as string;
    setCart((prev: ProductLine[]) => [
      ...prev,
      {
        productid: product.productid,
        name: product.name,
        quantity: parseInt(quantity),
        price: product.price * parseInt(quantity),
      },
    ]);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add to Cart</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Cart</DialogTitle>
          <DialogDescription>Add a new product to the cart.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Quantity
              </Label>
              <Input
                id="quanitity"
                placeholder="5"
                className="col-span-3"
                name="quantity"
                type="number"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add to Cart</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
