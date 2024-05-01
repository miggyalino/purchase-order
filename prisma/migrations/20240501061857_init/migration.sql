/*
  Warnings:

  - You are about to drop the column `createdAt` on the `PurchaseOrder` table. All the data in the column will be lost.
  - Added the required column `name` to the `PurchaseOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE product_productid_seq;
ALTER TABLE "Product" ALTER COLUMN "productid" SET DEFAULT nextval('product_productid_seq');
ALTER SEQUENCE product_productid_seq OWNED BY "Product"."productid";

-- AlterTable
ALTER TABLE "PurchaseOrder" DROP COLUMN "createdAt",
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "dateordered" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
CREATE SEQUENCE vendor_vendorid_seq;
ALTER TABLE "Vendor" ALTER COLUMN "vendorid" SET DEFAULT nextval('vendor_vendorid_seq');
ALTER SEQUENCE vendor_vendorid_seq OWNED BY "Vendor"."vendorid";
