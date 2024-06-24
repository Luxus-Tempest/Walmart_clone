"use client";
import { useCartStore } from "@/store";
import { Product } from "@/types/productTypes";

import React from "react";
import { Button } from "./ui/button";
import RemoveFromCart from "./RemoveDromCart";
type Props = {
  product: Product;
};

//const AddToCard = ({product}: Props)
const AddToCard = ({ product }: { product: Product }) => {
  const [cart, addToCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
  ]);

  console.log(cart);
  const howManyInCart = cart.filter(
    (item) => item.meta.sku === product.meta.sku
  ).length;

  console.log("how Many In Cart: " + howManyInCart);

  const handleAdd = () => {
    console.log('Adding to cart', product)
    addToCart(product);
  }

  if (howManyInCart > 0) {
    return (
      <div className="flex items-center space-x-5">
        <RemoveFromCart product={product} />
        <span>{howManyInCart}</span>
        <Button
          className=" bg-walmartColor hover:bg-walmartColor/50 mb-4"
          onClick={handleAdd}
        >
          +
        </Button>
      </div>
    );
  } else {
  }

  return <Button onClick={handleAdd} className=" bg-walmartColor hover:bg-walmartColor/50 mb-4">Add To Card</Button>;
};

export default AddToCard;
