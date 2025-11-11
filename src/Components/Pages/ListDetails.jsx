import React from 'react';
import { useLoaderData } from 'react-router';

const ListDetails = () => {
    const data =useLoaderData();
    console.log(data);
    const {name, category, owner_email, description, price, location, image}=data;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>

    <p>{description}</p>
    <p>{category}</p>
    <p>{owner_email}</p>
    <p>{location}</p>
    <p>{price}</p>

    <div className="card-actions justify-end">
      {/* <button className="btn btn-primary"></button> */}
    </div>
  </div>
</div>
        </div>
    );
};

export default ListDetails;