import React from 'react'
import { useGetProductsQuery } from '../../store/api'
import ProductCard from '../../components/ProductCard'
import { Loader } from '../../components/Loader'

const Home = () => {
    const { data, error, isLoading } = useGetProductsQuery()
    if (isLoading) {
        return <Loader/>
    }
    const crops = data.data;
    return (
        <>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-5">
                    {
                        crops.map(item=><ProductCard key={item._id} product={item} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Home