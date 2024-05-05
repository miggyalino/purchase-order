-- AlterTable
CREATE SEQUENCE purchaseorderline_orderlineid_seq;
ALTER TABLE "PurchaseOrderLine" ALTER COLUMN "orderlineid" SET DEFAULT nextval('purchaseorderline_orderlineid_seq');
ALTER SEQUENCE purchaseorderline_orderlineid_seq OWNED BY "PurchaseOrderLine"."orderlineid";
