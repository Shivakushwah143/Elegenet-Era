import React from 'react'
import { ProductCard } from '../pages/ProductCard'
const Sample = () => {
    return (
        <>
            <ProductCard
                imageUrl="https://plus.unsplash.com/premium_photo-1683140453193-f70bf97b67ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                discountText="SUMMER SALE 60% OFF"
                buttonText="Shop Now"

            />

            <ProductCard
                imageUrl="https://plus.unsplash.com/premium_photo-1669446008075-ef763c28d75b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
                discountText="SUMMER SALE 60% OFF"

                buttonText="explore more"
            />
            <ProductCard
                imageUrl="https://plus.unsplash.com/premium_photo-1683140453193-f70bf97b67ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                discountText="SUMMER SALE 60% OFF"
                buttonText="Shop Now"

            />

            <ProductCard
                imageUrl="https://plus.unsplash.com/premium_photo-1669446008075-ef763c28d75b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
                discountText="SUMMER SALE 60% OFF"

                buttonText="explore more"
            />
        </>
    )
}

export default Sample



//  whenever i need to see this semple so use this in app.jsx
// import Sample from './pages/Sample'
//  <div className='flex gap-2 p-4'>
// <Sample />
//   </div>