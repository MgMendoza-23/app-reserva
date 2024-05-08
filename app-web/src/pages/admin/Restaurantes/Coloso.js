import React from 'react';
import RestaurantColosso from './RestaurantColosso';

const Coloso = () => {
  // Asegúrate de que este objeto contenga todas las propiedades necesarias
  const restaurantData = {
    name: 'Colosso',
    reviewsCount: 4,
    mainImage: 'https://media-cdn.tripadvisor.com/media/photo-o/19/d1/33/ca/picana-de-res-sellada.jpg',
    sideImages: ['https://media-cdn.tripadvisor.com/media/photo-m/1280/19/e2/49/9d/deliciosa-laminas-de.jpg', 'https://media-cdn.tripadvisor.com/media/photo-m/1280/19/e2/4c/d9/nos-encanta-tener-la.jpg','https://media-cdn.tripadvisor.com/media/photo-m/1280/19/e2/4a/37/este-platillo-fue-una.jpg' ,'https://media-cdn.tripadvisor.com/media/photo-m/1280/19/e2/4d/7c/disfruta-de-diferentes.jpg'],
    rating: 4.5,
    priceRange: '$8 - $20',
    cuisineTypes: ['Italiana', 'Pizzería', 'Fusión'],
    specialDetails: 'Apto para vegetarianos',
    address: 'Av. Paseo la Choca Col. Tabasco 2000, Villahermosa 86035 México',
    contact: '+52 993 310 3180'
  };

  return (
    <div className="App">
      <RestaurantColosso data={restaurantData} />
    </div>
  );
};

export default Coloso;