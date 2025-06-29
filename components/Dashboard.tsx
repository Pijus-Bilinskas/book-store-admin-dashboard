import React from 'react'
import KPISummary from './KPISummary'
import TopProducts from './TopProducts';
import ProductTimelineChart from './ProductTimelineChart';
import { ProductType } from '@/types/product';



const Dashboard = ({products}: {products: ProductType[]}) => {
    const totalProducts = products.length;
    const totalStock = products.reduce((sum, p) => sum + (p.stock || 0), 0);
    const totalSales = products.reduce((sum, p) => sum + (p.sales || 0) * (p.price || 0), 0).toFixed(2);

    const kpis = [
        { label: "Total Products", value: totalProducts },
        { label: "Total Stock", value: totalStock },
        { label: "Total Sales", value: `$${totalSales}` },
    ]



  return (
    <div className='space-y-2'>
        <KPISummary kpis={kpis} />
        <TopProducts products={products} />
        <ProductTimelineChart products={products} />
    </div>
  )
}

export default Dashboard