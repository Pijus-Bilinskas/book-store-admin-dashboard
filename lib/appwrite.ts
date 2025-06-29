import { ProductType } from "@/types/product";
import {Client, Databases} from "appwrite";

const client = new Client();
client
      .setEndpoint('https://fra.cloud.appwrite.io/v1')
      .setProject('682c80a000041d068fb1')

const databases = new Databases(client);

export const fetchProducts = async (queries : string[]) => {
      const response = await databases.listDocuments(
            `${process.env.NEXT_PUBLIC_DATABASE_ID}`,
            `${process.env.NEXT_PUBLIC_COLLECTION_ID}`,
            queries
      );

      const products: ProductType[] = response.documents.map((product) => ({
            $id: product.$id,
            title: product.title,
            price: product.price,
            category: product.category,
            stock: product.stock,
            sales: product.sales,
            createdAt: product.createdAt
      }))


      return products;
}



export { databases };