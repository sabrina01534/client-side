import React from 'react';
import { Link } from 'react-router';

const Card = ({singleCard}) => {
    const{id}=singleCard;

    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 flex gap-5 '>
            <div className="card bg-base-100 w-70 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="mt-3">
    <h2 className="card-title"> Pets (Adoption)</h2>
    <p className='mr-10'>We have four kinds of pets for adoption</p>
    <div className="card-actions justify-end">
      <Link to={`${id}`} className="btn bg-green-500 mt-8">Available</Link>
    </div>
  </div>
</div>
            <div className="card bg-base-100 w-70 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="mt-3">
    <h2 className="card-title">  Pet Food</h2>
    <p className='mr-10'>There are various kinds of food for your pets </p>
    <div className="card-actions justify-end">
      <button className="btn bg-green-500 mt-8">Available</button>
    </div>
  </div>
</div>
            <div className="card bg-base-100 w-70 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="mt-3">
    <h2 className="card-title"> Accessories</h2>
    <p className='mr-10'>We have four kinds of pets for adoption</p>
    <div className="card-actions justify-end">
      <button className="btn bg-green-500 mt-8">Available</button>
    </div>
  </div>
</div>
            <div className="card bg-base-100 w-70 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="mt-3">
    <h2 className="card-title"> Pet Care Products</h2>
    <p className='mr-10'>We have  many tips and care product for your pets</p>
    <div className="card-actions justify-end">
      <button className="btn bg-green-500 mt-8">Available</button>
    </div>
  </div>
</div>
</div>
    );
};

export default Card;