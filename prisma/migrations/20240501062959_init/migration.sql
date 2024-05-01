/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PurchaseOrder` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "PurchaseOrderLine" DROP CONSTRAINT "PurchaseOrderLine_orderid_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseOrderLine" DROP CONSTRAINT "PurchaseOrderLine_productid_fkey";

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
ALTER COLUMN "productid" DROP DEFAULT,
ALTER COLUMN "productid" SET DATA TYPE TEXT,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("productid");
DROP SEQUENCE "product_productid_seq";

-- AlterTable
ALTER TABLE "PurchaseOrder" DROP CONSTRAINT "PurchaseOrder_pkey",
ALTER COLUMN "orderid" SET DATA TYPE TEXT,
ADD CONSTRAINT "PurchaseOrder_pkey" PRIMARY KEY ("orderid");

-- AlterTable
ALTER TABLE "PurchaseOrderLine" ALTER COLUMN "orderid" SET DATA TYPE TEXT,
ALTER COLUMN "productid" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "PurchaseOrderLine" ADD CONSTRAINT "PurchaseOrderLine_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product"("productid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseOrderLine" ADD CONSTRAINT "PurchaseOrderLine_orderid_fkey" FOREIGN KEY ("orderid") REFERENCES "PurchaseOrder"("orderid") ON DELETE RESTRICT ON UPDATE CASCADE;
