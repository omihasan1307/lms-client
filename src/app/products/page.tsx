import MainLayout from "@/layout/MainLayout";
import envConfig from "@/lib/env.config";
import axios from "axios";

async function getProducts(searchParams: string) {
  try {
    const url = `${envConfig.baseApi}/shop/products/?${searchParams}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return { data: { results: [] } };
  }
}

const ProductList = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  // Replace underscores (_) with spaces only in the 'search' parameter
  const modifiedParams = { ...searchParams };
  if (modifiedParams.search) {
    modifiedParams.search = modifiedParams.search.replace(/_/g, " ");
  }

  const queryString = new URLSearchParams(modifiedParams).toString();
  const products = await getProducts(queryString);
  const hasProducts = products.data.results.length > 0;

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-10 py-10">
        {hasProducts ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products?.data?.results?.map((product: any) => (
              <div
                key={product.id}
                className="bg-white transition duration-300 rounded-lg border hover:shadow-lg"
              >
                <div className="py-4 px-4">
                  <div className="relative">
                    <img
                      className="rounded-lg w-full h-48 object-cover"
                      src={product.image}
                      alt={product.title}
                    />
                    {/* Top-right corner: Heart */}
                    <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-full shadow">
                      <span>{product.is_favorite ? "❤️" : "🤍"}</span>
                    </div>
                  </div>

                  <h1 className="text-[#010A15] font-bold text-lg mb-2 line-clamp-1">
                    {product.title}
                  </h1>
                  <div className="flex gap-2 mt-3 items-center">
                    <p className="text-[#DD2509] text-[14px] font-bold">
                      From{" "}
                      <span className="text-[22px]">
                        €{product.discounted_price}
                      </span>
                    </p>
                    <p className="text-gray-600 text-sm">Per Person</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <img
              src="/images/no-data.svg"
              alt="No Data"
              className="w-52 h-52 mb-6"
            />
            <h2 className="text-2xl font-semibold text-gray-800">
              No Products Found
            </h2>
            <p className="text-gray-600 mt-2">
              Try adjusting your search or check back later.
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ProductList;
