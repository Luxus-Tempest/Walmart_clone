import { Product } from "@/types/productTypes";

export function getCarTotal(products: Product[]): string {
  const total = products.reduce(
    (accumulator: number, currentPoduct: Product) => {
      return accumulator + currentPoduct.price;
    },
    0
  );

  return `${
    products[0]?.currency ? products[0]?.currency : "$ "
  }  ${total.toFixed(2)}`;
}
