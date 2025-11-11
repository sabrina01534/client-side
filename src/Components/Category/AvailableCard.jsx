import React from 'react';
import { Link } from 'react-router';

const AvailableCard = ({singleCard}) => {
     const { name, price, image,  category, id,button } =
    singleCard;
    return (
        <div>
            <div className="card bg-base-100 w-80 h-100 shadow-sm border">
        <figure className=" p-3">
          <img className="h-[200px] w-[200px] rounded-xl" src={image} alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center">
          {/* <p className="text-blue-500">Name{name}</p> */}
         
          <h2 className="card-title">{category}</h2>
          <h1>
            Name:
            <span className="text-blue-500 font-bold p-1">{name}</span>
          </h1>
         
          <div className="flex gap-30 text-blue-500">
            <p>Price:{price}</p>
             <p className="text-blue-500">Id:{id}</p>
           
          </div>
          <div className="card-actions mt-5">
            <Link to={`/${id}`} className="btn text-blue-500 bg-green-200">
             {button}
            </Link>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default AvailableCard;