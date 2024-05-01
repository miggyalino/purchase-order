type ProductLine = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type ProductsCartProps = {
  cart: ProductLine[];
  removeFromCart: (productId: string) => void;
};

type ProductsTableProps = {
  addToCart: (product: ProductLine) => void;
};
