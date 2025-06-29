"use client"

import { fetchProducts } from '@/lib/appwrite';
import { ProductType } from '@/types/product';
import { Query } from 'appwrite';
import React, { useEffect, useState } from 'react'

const ProductFiltering = () => {
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [stock, setStock] = useState("");

    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedSearch(search)
      }, 500);
      return () => {
        clearTimeout(handler)
      }
    }, [search])

    useEffect(() => {
        const run = async () => {
            const queries = [];

            if(debouncedSearch) queries.push(Query.search("title", debouncedSearch));

            if(stock === "low") queries.push(Query.lessThan("stock", 10));
            if(stock === "in") queries.push(Query.greaterThan("stock", 0));
            if(stock === "out") queries.push(Query.equal("stock", 0));


            try{
                const data = await fetchProducts(queries);
                setProducts(data)
            }catch (err){
                console.error("Failed to fetch products:", err)
            }

        }
        run()
    }, [debouncedSearch, stock]);

  return (
    <div>
        <div className='space-y-2'>
         <div>
            <div className='flex flex-row justify-around'>
                <h1 className='text-2xl font-semibold'>Products</h1>
                <button className='text-2xl font-semibold'>+ Add New</button>
            </div>
            <div className='flex flex-row justify-center gap-5'>
                <input type="text"
                placeholder='Search by title...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='px-4 py-1 rounded-lg bg-gray-300 text-black'
                />
                <select value={stock} onChange={(e) => setStock(e.target.value)}>
                    <option value="">All stock</option>
                    <option value="low">Low stock</option>
                    <option value="in">In stock</option>
                    <option value="out">Out of stock</option>
                </select>
            </div>
         </div>
         <table className="w-full border text-base">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-left">Category</th>
            <th className="p-2 text-left">Stock</th>
            <th className="p-2 text-left">Sales</th>
            <th className="p-2 text-left">Created</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: ProductType) => (
            <tr key={product.$id} className="border-t">
              <td className="p-2">{product.title}</td>
              <td className="p-2">${product.price}</td>
              <td className="p-2">{product.category}</td>
              <td className="p-2">{product.stock}</td>
              <td className="p-2">{product.sales}</td>
              <td className="p-2">{new Date(product.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    </div>
  )
}

export default ProductFiltering;