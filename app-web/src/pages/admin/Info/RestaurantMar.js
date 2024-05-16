import React from 'react';
import { Card, Rate, Badge } from 'antd';

import "./reserv.css"
const RestaurantMar = ({ data }) => {
  return (
    <div className="">
      <Card title={data.name} extra={<Badge count={data.reviewsCount} showZero />}>
        <div className="restaurant-images">
          <img src={data.mainImage} alt="Main Dish" className="main-image" />
          <div className="side-images">
            {data.sideImages.map((image, index) => (
              <img key={index} src={image} alt={`Dish ${index + 1}`} />
            ))}
          </div>
        </div>
        <Rate allowHalf defaultValue={data.rating} />
        <div className="restaurant-details">
          <p><strong>Rango de precios:</strong> {data.priceRange}</p>
          <p><strong>Tipos de comida:</strong> {data.cuisineTypes.join(', ')}</p>
          <p><strong>Detalles especiales:</strong> {data.specialDetails}</p>
        </div>
        <div className="restaurant-location">
          <p>{data.address}</p>
          <p>{data.contact}</p>
        </div>
      </Card>
    </div>
  );
};

export default RestaurantMar;