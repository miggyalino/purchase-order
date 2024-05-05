type ProductLine = {
  productid: string;
  name: string;
  quantity: number;
  price: number;
};

type Product = {
  productid: string;
  name: string;
  price: number;
};

type ProductsCartProps = {
  cart: ProductLine[];
  setCart: React.Dispatch<React.SetStateAction<ProductLine[]>>;
};

type ProductsTableProps = {
  cart: ProductLine[];
  setCart: React.Dispatch<React.SetStateAction<ProductLine[]>>;
};

type AddtoCartProps = {
  product: Product;
  cart: ProductLine[];
  setCart: React.Dispatch<React.SetStateAction<ProductLine[]>>;
};

type SetCartFunction = (prevState: ProductLine[]) => ProductLine[];

type Vendor = {
  vendorid: number;
  name: string;
  contactnumber: string;
  email: string;
  address: string;
  PurchaseOrder: PurchaseOrder[];
};

type PurchaseOrderLine = {
  orderlineid: number;
  orderid: string;
  productid: string;
  quantity: number;
  price: number;
  Product: Product;
  PurchaseOrder: PurchaseOrder;
};

type PurchaseOrder = {
  orderid: string;
  name: string;
  dateordered: Date;
  vendorid: number;
  Vendor: Vendor;
  PurchaseOrderLine: PurchaseOrderLine[];
};
