import React from 'react'
import React, {useState} from 'react';
import { dato } from './RestDatos';
import Restaurante from './Restaurante';

export default function ListRestaur() {


const [datos, setDatos]=useState(dato)
return (
  <div>
      {
          datos.map(
              (restaurantes)=>
              <Restaurante
              key={restaurantes.id}
               nombre={restaurantes.nombre} 
              reseniaCuenta={restaurantes.reseniaCuenta} 
              imagenPrincipal={restaurantes.imagenPrincipal}
              imagenLateral={restaurantes.imagenLateral}
              calificacion={restaurantes.calificacion}
              rangoPrecio={restaurantes.rangoPrecio}
              tipoComida={restaurantes.tipoComida}
              detallesEspeciales={restaurantes.detallesEspeciales}
              direccion={restaurantes.direccion}
              contacto={restaurantes.contacto}
              />)
      }
      </div>
)
}