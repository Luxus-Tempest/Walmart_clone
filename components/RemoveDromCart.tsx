"use client"

import { useCartStore } from "@/store"
import { Product } from "@/types/productTypes"
import { stat } from "fs"
import { Button } from "./ui/button"

const RemoveFromCart = ({product} : {product: Product}) => {
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    const handleRemove = () => {
        console.log('removing from cart : ', product.meta.sku)
        removeFromCart(product);
    }
  return (
    <Button className="bg-walmartColor hover:bg-walmartColor/50 mb-4" onClick={handleRemove}>-</Button>
  )
}

export default RemoveFromCart