import React, { useEffect, useState } from 'react'
import { allCategories } from './ApiRequests';
import Products from './Products';
import axios from 'axios';
const Feed = () => {
    const [categories, setCategories] = useState([])
    const [selectedCat, setSelectedCat] = useState()

    const changeHandler = (e) => {
        setSelectedCat(e.target.value)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesResponse = await axios.get(allCategories);
                setCategories(categoriesResponse.data)

            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className=' mt-[2rem] ' >
            <div className=' ml-[7.9rem] ' >
                <select className='border rounded cursor-pointer border-black outline-none p-2' onChange={changeHandler}>
                    <option disabled selected hidden>Select an option</option>
                    {
                        categories.map((cat, i) => {
                            return (
                                <option key={i} value={cat} >{cat}</option>)
                        })
                    }
                </select>
            </div>

            <h1 className='flex w-full justify-center items-center text-[45px] font-semibold ' >
                {selectedCat ? `${selectedCat}` : "Our popular Products"}
            </h1>

            <div className=' mt-2 ' >
                <Products selectedCat={selectedCat} />
            </div>
        </div>

    )
}

export default Feed
