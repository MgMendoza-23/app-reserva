import React, {useState} from 'react';
import { dato } from './RestDatos';
import { useParams } from 'react-router-dom';

function Restaurante() {
    const { id } = useParams();
    const restaurante = dato.find(rest => rest.id === id);
   return (
    <div className="restaurant-review">

      <Card 
      id={dato.id}
      title={dato.nombre} 
      extra={<Badge 
      count={dato.reseniaCuenta} showZero 
      />}>
        
        <div className="restaurant-images">
          <img src={dato.imagenPrincipal} alt="Main Dish" className="main-image" />
          <div className="side-images">
            {dato.imagenLateral.map((image, index) => (
              <img key={index} src={image} alt={`Dish ${index + 1}`} />
            ))}
          </div>
        </div>
        <Rate allowHalf defaultValue={dato.calificacion} />
        <div className="restaurant-details">
          <p><strong>Rango de precios:</strong> {dato.rangoPrecio}</p>
          <p><strong>Tipos de comida:</strong> {dato.tipoComida.join(', ')}</p>
          <p><strong>Detalles especiales:</strong> {dato.detallesEpeciales}</p>
        </div>
        <div className="restaurant-location">
          <p>{dato.direccion}</p>
          <p>{dato.contacto}</p>
        </div>
      </Card>
    </div>
   
  );
}
export default Restaurante;