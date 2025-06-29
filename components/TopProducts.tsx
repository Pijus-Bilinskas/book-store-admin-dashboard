import { ProductType } from "@/types/product";


const TopProducts = ({products}: {products: ProductType[]}) => {
    const topProducts = [...products]
    .sort((a, b) => (b.sales ?? 0) - (a.sales ?? 0))
    .slice(0, 5);



  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Top 5 Selling Products</h2>
      <ul className="space-y-3">
        {topProducts.map((product, index) => (
          <li
            key={product.title}
            className="flex items-center justify-between border-b pb-2"
          >
            <span className="font-medium">
              #{index + 1} {product.title}
            </span>
            <span className="text-md text-gray-600">
              {product.sales} sold • ${product.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TopProducts;