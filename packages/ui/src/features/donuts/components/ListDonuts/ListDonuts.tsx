import { Image } from "@ui/lib";
import { useDonuts } from "../../hooks/useDonuts";

export const ListDonuts = () => {
  const { donuts, loading, error } = useDonuts();
  if (loading) <div>loading</div>;
  if (error) <div>error</div>;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          商品一覧
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {donuts.map((donut) => (
            <div className="group relative" key={donut.id}>
              <div className="mx-28 aspect-w-1 aspect-h-1 overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none">
                <Image
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  src={donut.img}
                  alt={donut.name}
                  width={62}
                  height={62}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {donut.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{donut.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {donut.price}円
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
