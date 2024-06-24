import { Product } from "@/types/productTypes";

export function groupBySku(products: Product[]): Record<string, Product[]> {
  return products?.reduce(
    (accumulator: Record<string, Product[]>, currentProduct: Product) => {
      const sku = currentProduct.meta.sku;
      if (!accumulator[sku]) {
        accumulator[sku] = [];
      }
      accumulator[sku].push(currentProduct);
      return accumulator;
    },
    {}
  );
}
