import React from 'react';
import { useLoaderData } from 'react-router';
import Products from '../Category/Products';

const PetSupplies = () => {
    const card =useLoaderData();
    console.log(card)
    return (
        <div >
            <Products card={card}></Products>
        </div>
    );
};

export default PetSupplies;