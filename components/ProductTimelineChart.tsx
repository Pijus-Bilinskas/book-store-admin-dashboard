"use client"

import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip, YAxis } from "recharts"
import { format, parseISO } from "date-fns";

interface Product {
    createdAt: string;
}


const ProductTimelineChart = ({products}: {products: Product[] }) => {

    const monthlyCounts: { [key: string]: number } = {}

    products.forEach((product) => {
        const date = parseISO(product.createdAt);
        const key = format(date, "yyyy-MM");
        monthlyCounts[key] = (monthlyCounts[key] || 0) + 1;
    })

    const data = Object.entries(monthlyCounts)
    .map(([date, count]) => ({
        date,
        count,
    }))
    .sort((a, b) => (a.date > b.date ? 1 : -1));

  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Product Launch Timeline</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#2563eb" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ProductTimelineChart;