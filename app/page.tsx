
import { databases } from "@/lib/appwrite";
import Dashboard from "@/components/Dashboard";

const databaseId = "682c9c5400383c052780";
const productsCollectionId = "682c9cd50003ba1e44ef";

export default async function Home() {
  const productsRes = await databases.listDocuments(databaseId, productsCollectionId);
  const products = productsRes.documents;

  return (
    <div className="p-5 ">
      <Dashboard products={products} />
    </div>
  );
}