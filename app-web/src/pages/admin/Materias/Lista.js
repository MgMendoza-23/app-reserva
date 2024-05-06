import React from 'react'
import './lista.css';

export function Lista(props) {
  const { nombre, telefono, direccion, imagenes } = props;


  return (
    
    <>
      
        <div class="col">
          <div class="card h-100">
          
            <div class="card-body">
            <h3 class="card-title">{nombre}</h3>
            <img src={imagenes} 
            class="card-img-top" alt="..." 
            width={80}
            height={200}
            />
            <p class="card-text">
               <strong>Tipos de comidas:</strong> {telefono}
              </p>
              <p class="card-text">
              <strong>Direccion:</strong>{direccion}
              </p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary"><p type="button"
               class="btn btn-info"
               to="#">
                
                Leer más..</p></small>
            </div>
          </div>
        </div>
     
    </>
  );
}
