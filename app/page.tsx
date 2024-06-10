import GridOption from "@/components/GridOption";

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-col-1 gap-3 p-3 grid-flow-row-dense md:grid-cols-4">
        <GridOption
          title="Sweet gifts for your loved ones"
          image="/1dy.webp"
          className="bg-pink-200 h-full md:h-32"
        />
        {/* https://links.papareact.com/ */}
        <GridOption
          title="Shop Wardrobe Essentials"
          image="/8ko.webp"
          className="bg-blue-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Home"
          image="/8ko.webp"
          className="bg-pink-200 row-span-2"
        />
        <GridOption
          title="Shop Electronics"
          image="/8ko.webp"
          className="bg-yellow-100 h-64"
        />
        <GridOption
          title="Shop Toys"
          image="/8ko.webp"
          className="bg-green-100 h-64 col-span-2"
        />
        <GridOption
          title="All you need to match your style"
          image="/8ko.webp"
          className="bg-red-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Gadgets"
          image="/8ko.webp"
          className="bg-orange-100 h-64"
        />
        <GridOption
          title="Shop Beauty"
          image="/8ko.webp"
          className="bg-blue-100 h-64"
        />
        <GridOption
          title="Shop Sports"
          image="/8ko.webp"
          className="bg-blue-100 h-64"
        />
        <GridOption
          title="Enjow Free Shipping"
          image="/8ko.webp"
          className="bg-rose-100 h-64"
        />
        <GridOption
          title="Flash Deals"
          image="/8ko.webp"
          className="bg-orange-100 h-64 col-span-2"
        />
      </div>
    </main>
  );
}
