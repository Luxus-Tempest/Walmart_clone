import GridOption from "@/components/GridOption";

export default function Home() {
  return (
    <main className=" flex-1 ">
      <div className=" grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-4 m-6">
        <GridOption
          title="Sweet gift for less"
          image="https://links.papareact.com/1dy"
          className="bg-pink-200 h-full md:h-32"
        />
        <GridOption
          title="Electronics"
          image="https://links.papareact.com/1dy"
          className="bg-blue-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Shoes"
          image="https://links.papareact.com/8ko"
          className="bg-pink-200 row-span-2"
        />
        <GridOption
          title="Clothes"
          image="https://links.papareact.com/szu"
          className="bg-yellow-100 h-64"
        />
        <GridOption
          title="Adidas"
          image="https://links.papareact.com/n7r"
          className="bg-green-100 h-64 row-span-2"
        />
        <GridOption
          title="Watch"
          image="https://links.papareact.com/pj2"
          className="bg-orange-100 h-64"
        />
        <GridOption
          title="Baskets"
          image="https://links.papareact.com/1dy"
          className="bg-blue-100 h-64"
        />
        <GridOption
          title="Bags"
          image="https://links.papareact.com/1dy"
          className="bg-rose-100 h-64"
        />
      </div>
    </main>
  );
}
