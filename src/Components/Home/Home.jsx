import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../Category/Card';

const Home = () => {
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