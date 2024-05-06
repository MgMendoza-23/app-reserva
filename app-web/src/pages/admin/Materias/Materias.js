
import React, {useState} from 'react';
import {Lista} from "./Lista";
import { lista } from './datos/ListDatos';

export function Materias() {
  const [datos, setDatos]=useState(lista);
  return (
    <div>
      <div className='row row-cols-1 row-cols-md-3 g-4 p-4'>
        {datos.map(persona => (
          <Lista
            key={persona.id}
            id={persona.id}
            nombre={persona.nombre}
            telefono={persona.tel}
            direccion={persona.direccion}
            imagenes={persona.imag}
          />
        ))}
      </div>
    </div>
  );
}