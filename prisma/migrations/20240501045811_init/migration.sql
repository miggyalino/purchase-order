-- CreateTable
CREATE TABLE "Product" (
    "productid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("productid")
);

-- CreateTable
CREATE TABLE "Vendor" (
    "vendorid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "contactnumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("vendorid")
);

-- CreateTable
CREATE TABLE "PurchaseOrder" (
    "orderid" INTEGER NOT NULL,
    "dateordered" TIMESTAMP(3) NOT NULL,
    "vendorid" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PurchaseOrder_pkey" PRIMARY KEY ("orderid")
);

-- CreateTable
CREATE TABLE "PurchaseOrderLine" (
    "orderlineid" INTEGER NOT NULL,
    "orderid" INTEGER NOT NULL,
    "productid" INTEGER NOT NULL,
    "qty" INTEGER NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PurchaseOrderLine_pkey" PRIMARY KEY ("orderlineid")
);

-- AddForeignKey
ALTER TABLE "PurchaseOrder" ADD CONSTRAINT "PurchaseOrder_vendorid_fkey" FOREIGN KEY ("vendorid") REFERENCES "Vendor"("vendorid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseOrderLine" ADD CONSTRAINT "PurchaseOrderLine_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product"("productid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseOrderLine" ADD CONSTRAINT "PurchaseOrderLine_orderid_fkey" FOREIGN KEY ("orderid") REFERENCES "PurchaseOrder"("orderid") ON DELETE RESTRICT ON UPDATE CASCADE;
