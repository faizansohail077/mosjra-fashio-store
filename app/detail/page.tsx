import { Pagination, Wrapper } from '@/components'
import React from 'react'
import { RelatedProducts } from './(pagecomponents)'

const Detail = () => {
    return (
        <Wrapper>Detail


           
            <div className='my-10' >
                <h1 className='text-2xl text-center py-10' >Related Products</h1>
                <Pagination itemsPerPage={12} data={RelatedProducts} />
            </div>
        </Wrapper>
    )
}

export default Detail