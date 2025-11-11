import React, { Suspense } from 'react';
import AvailableCard from './AvailableCard';

const Products = ({card}) => {
    return (
        <div>
            <h1 className='text-green-500 font-bold text-3xl text-center mb-10 mt-10'>Available Pets & Supplies</h1> 
            
           <Suspense fallback ={<span>loading....</span>}>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-4 justify-items-center'> 
                {
            card.map((singleCard)=>
            <AvailableCard key={singleCard.id} singleCard={singleCard}></AvailableCard>)
           }
            </div>
           </Suspense>
        </div>
    );
};

export default Products;