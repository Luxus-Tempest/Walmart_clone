"use client";
import { getCarTotal } from "@/lib/getCardTotal";
import { groupBySku } from "@/lib/groupBySku";
import { useCartStore } from "@/store";
import Image from "next/image";
import AddToCard from "./AddToCard";
import { Button } from "./ui/button";

const Basket = () => {
  const cart = useCartStore((state) => state.cart);
  const grouped = groupBySku(cart);
  const basketTotal = getCarTotal(cart);

  //console.log('cart :', cart)
  //console.log('grouped :', grouped)

  return (
    <div className=" max-w-7xl mx-auto">
      <ul className=" space-y-5 divide-y-2 ">
        {Object.keys(grouped).map((sku) => {
          const item = grouped[sku][0];
          const total = getCarTotal(grouped[sku]);

          return (
            <li
              className="p-5 my-2 flex items-center justify-between"
              key={sku}
            >
              {item.images[0] && (
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              )}

              <div className=" flex space-x-4 pl-3 ">
                <div >
                    <p className="line-clamp-2 font-bold ">{item.title}</p>
                    <div 
                    dangerouslySetInnerHTML={{__html: item.description}} 
                    className=" line-clamp-1 font-light text-sm mt-2 "
                    />
                </div>

                <div className=" flex flex-col border rounded-sm p-3  ">
                    <AddToCard product={item} />
                    <p className=" mt-4 font-bold text-right ">{total}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col justify-end p-5">
        <p className=" font-bold text-right  text-walmartColor mb-5">
          Total : {basketTotal}
        </p>
        <Button className="mt-5 h-16 bg-walmartColor hover:bg-walmartColor "> Checkout </Button>
      </div>
    </div>
  );
};

export default Basket;
