import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../Category/Card';
// import { useLoaderData } from 'react-router';
import Products from '../Category/Products';

const Home = () => {
    // const card=useLoaderData();
    // console.log(card)
    return (
        <div>
           <Banner></Banner> 
          <div className='mt-15'>
            <Card></Card>
          </div>
        </div>
    );
};

export default Home;