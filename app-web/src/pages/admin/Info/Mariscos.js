import React from 'react';
import RestaurantColosso from './RestaurantMar';

const Mariscos = () => {
  // Asegúrate de que este objeto contenga todas las propiedades necesarias
  const restaurantData = {
    name: 'MARISCOS LA LUPITA',
    reviewsCount: 4,
    mainImage: 'https://media-cdn.tripadvisor.com/media/photo-w/18/a9/9e/47/caldo-de-mariscos.jpg',
    sideImages: ['https://media-cdn.tripadvisor.com/media/photo-o/19/6b/f6/75/taco-de-pescado-al-pastor.jpg', 'https://media-cdn.tripadvisor.com/media/photo-m/1280/16/ea/7f/e2/pulpo-a-las-brasas-con.jpg','https://media-cdn.tripadvisor.com/media/photo-o/0f/57/8b/75/pejelagarto-realidaddelicioso.jpg' ,'https://media-cdn.tripadvisor.com/media/photo-o/16/ea/7f/17/pruebalo-en-nuestro-festival.jpg'],
    rating: 4.5,
    priceRange: '$8 - $20',
    cuisineTypes: ['Mariscos, Mexicana'],
    specialDetails: 'Apto para vegetarianos',
    address: 'Buenavista Number 202 Colonia Atasta, Villahermosa 86100 México',
    contact: '+52 993 310 3180'
  };

  return (
    <div className="App">
      <RestaurantColosso data={restaurantData} />
    </div>
  );
};

export default Mariscos;