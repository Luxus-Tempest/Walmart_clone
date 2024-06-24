"use client";

import { getCarTotal } from "@/lib/getCardTotal";
import { useCartStore } from "@/store";
import { Grid2X2, Heart, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const total = getCarTotal(cart);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget.input.value;
    router.push(`/search?q=${input}`);
  };

  return (
    <header className=" flex flex-col md:flex-row items-center bg-walmartColor px-10 py-5 space-x-5 ">
      <Link href="/" className="mb-5 md:mb-0">
        <Image src="/logowalmart.png" alt="logo" height={150} width={150} />
      </Link>

      <form
        onSubmit={handleSubmit}
        action=""
        className=" flex  items-center bg-white rounded-full w-full flex-1  "
      >
        <input
          type="text"
          name="input"
          placeholder="Search evryThing ..."
          id=""
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm text-black "
        />
        <button type="submit">
          <Search className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer " />
        </button>
      </form>

      <div className="flex gap-5 mt-5 md:mt-0">
        <Link
          href={"/"}
          className="
          hidden xl:flex text-white font-bold items-center  space-x-2 text-sm
          "
        >
          <Grid2X2 size={20} />
          <p>Departement</p>
        </Link>
        <Link
          href={"/"}
          className="
          hidden xl:flex text-white font-bold items-center  space-x-2 text-sm
          "
        >
          <Grid2X2 size={20} />
          <p>Services</p>
        </Link>

        <Link
          href={"/"}
          className="
          flex text-white font-bold items-center  space-x-2 text-sm
          "
        >
          <Heart size={20} />
          <div>
            <p className="text-white font-extralight space-x-2 text-sm">
              Recoder
            </p>
            <p>My items</p>
          </div>
        </Link>
        <Link
          href={"/"}
          className="
          flex text-white font-bold items-center  gap-2 text-sm
          "
        >
          <User size={20} />
          <div>
            <p className="text-white font-extralight space-x-2 text-sm">
              Sign In
            </p>
            <p>Account</p>
          </div>
        </Link>

        <Link
          href={"/basket"}
          className="
          flex text-white font-bold items-center  gap-2 text-sm
          "
        >
          <ShoppingCart size={20} />
          <div>
            <p className="text-white font-extralight space-x-2 text-sm">
              {cart.length > 0 ? `${cart.length} items` : 'No Items' }
            </p>
            <p>{total}</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
