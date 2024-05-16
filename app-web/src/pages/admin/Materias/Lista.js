import React from 'react'
import './lista.css';
import {Nav} from "react-bootstrap";
import {Link, useLocation,useNavigate} from "react-router-dom";
import Mariscos from '../Info/Mariscos';
export function Lista(props) {
  const { nombre, telefono, direccion, imagenes } = props;
  const { pathname } = useLocation();
  const isCurrentPath = (path) => {
    return path === pathname;
  }
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
                <Nav.Link
              as={Link}
              to="/admin/marisco"
               className="nav-link active" aria-current="page" >Leer más..</Nav.Link>
                </p></small>
            </div>
          </div>
        </div>
        
    </>
    
  );
}
