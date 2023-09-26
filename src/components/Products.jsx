import React, { useState, useEffect } from 'react'
import { allProducts } from './ApiRequests'
import axios from 'axios'
const Products = ({ selectedCat }) => {
    const [products, setProducts] = useState([])
    const [selecteditem, setSelecteditem] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsResponse = await axios.get(allProducts);
                setProducts(productsResponse.data.products)
                const singleCategoriesResponse = await axios.get(`https://dummyjson.com/products/category/${selectedCat}`);
                setSelecteditem(singleCategoriesResponse.data.products)
                console.log(selecteditem)
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, [selectedCat]);
    return (
        
        <div className=' flex w-full space-y-[2rem]  flex-wrap space-x-[4rem]  justify-center ' >  
            {
                selectedCat ? (
                    selecteditem.map((product) => {
                        return (
                            <div className='border rounded border-black hover:scale-150 bg-white hover:transition duration-75 ease-out cursor-pointer ' >
                                <div className='p-2' >
                                    <img className=' h-52 w-52 object-contain' src={product.images[0]} alt='img' />
                                    <div className='w-full ' >
                                        <h3> <span className=' font-bold ' >Title</span> :{product.title}</h3>
                                        <h3> <span className=' font-bold '>Price</span> :{product.price}$</h3>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                ) :
                    (
                        products.map((product) => {
                            return (
                                <div className='border rounded border-black hover:scale-150 bg-white hover:transition duration-75 ease-out cursor-pointer ' >
                                    <div className=' p-2 ' >
                                        <img className=' h-52 w-52 object-contain' src={product.images[0]} alt='img' />
                                        <div className='w-full ' >
                                            <h3> <span className=' font-bold ' >Title</span> :{product.title}</h3>
                                            <h3> <span className=' font-bold '>Price</span> :{product.price}$</h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )
            }
        </div>
    )
}

export default Products
