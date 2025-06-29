import {Client, Databases} from "appwrite";

const client = new Client();
client
      .setEndpoint('https://fra.cloud.appwrite.io/v1')
      .setProject('682c80a000041d068fb1')

const databases = new Databases(client);

export const fetchProducts = async (queries = []) => {
      const response = await databases.listDocuments(
            `${process.env.NEXT_PUBLIC_DATABASE_ID}`,
            `${process.env.NEXT_PUBLIC_COLLECTION_ID}`,
            queries
      );
      return response.documents;
}



export { databases };