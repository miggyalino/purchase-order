/*
  Warnings:

  - You are about to drop the column `cost` on the `PurchaseOrderLine` table. All the data in the column will be lost.
  - You are about to drop the column `qty` on the `PurchaseOrderLine` table. All the data in the column will be lost.
  - Added the required column `price` to the `PurchaseOrderLine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `PurchaseOrderLine` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PurchaseOrderLine" DROP COLUMN "cost",
DROP COLUMN "qty",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;
