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
      <div className="mx-20">
        <div className="grid grid-cols-5 gap-6">
          {products.data.results.map((product: any) => (
            <div
              key={product.id}
              className="bg-white transition duration-500 rounded-lg border"
            >
              <Link
                href={`/details?type=${product?.api?.api_type}&id=${product?.api?.id}`}
              >
                <div className="relative">
                  <img
                    className="rounded-lg w-full h-48 object-cover"
                    src={product.image}
                    alt={product.title}
                  />
                  {/* Top-right corner: Heart */}
                  <div className="absolute top-2 right-2 py-2 px-4">
                    <span>{product.is_favorite ? "❤️" : "🤍"}</span>
                  </div>
                </div>

                <div className="py-6 rounded-lg bg-white p-4">
                  <h1 className="text-[#010A15] font-bold text-xl mb-3">
                    {product.title}
                  </h1>
                  <div className="flex gap-3 mt-5 items-center">
                    <p className="text-[#DD2509] text-[14px] font-bold">
                      From{" "}
                      <span className="text-[22px]">
                        €{product.discounted_price}
                      </span>
                    </p>
                    <p className="text-[#010A15] text-[14px] font-normal">
                      Per Person
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductList;
