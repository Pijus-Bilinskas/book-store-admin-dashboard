
import Dashboard from "@/components/Dashboard";
import { fetchProducts } from "@/lib/appwrite";


export default async function Home() {
  const products = await fetchProducts([])

  return (
    <div className="p-5 ">
      <Dashboard products={products} />
    </div>
  );
}