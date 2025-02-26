import MainLayout from "@/layout/MainLayout";
import envConfig from "@/lib/env.config";
import axios from "axios";
import Link from "next/link";

async function getProducts() {
  try {
    const res = await axios.get(`${envConfig.baseApi}/shop/products/`);
    return res.data;
  } catch (error) {
    return { data: { results: [] } };
  }
}

const ProductList = async () => {
  const products = await getProducts();

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.data.results.map((product: any) => (
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

                <Link
                  href={`/details?type=${product?.api?.api_type}&id=${product?.api?.id}`}
                  
                >
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
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductList;
