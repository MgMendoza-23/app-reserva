import React from 'react';
import {Nav} from "react-bootstrap";
import {Link, useLocation,useNavigate} from "react-router-dom";
import {FaHome, FaBook} from "react-icons/fa";
import {useAuth} from "../../../../hooks";
import {FaPowerOff} from "react-icons/fa6";
import {Button} from "react-bootstrap";

export function AdminMenu() {
  const { pathname } = useLocation();
  const { user: { role } } = useAuth();
  const isAdmin = role === "admin";
  const {logout}=useAuth();
  const navigate=useNavigate();
  const {user}=useAuth();
  const cerrarSesion=()=>{
    logout();
    navigate("/admin")
  }
  const isCurrentPath = (path) => {
    return path === pathname;
  }

  return (
    <Nav defaultActiveKey="/home" className='flex-column admin-menu'>
      {
        isAdmin &&(
          <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
      <div className="container-fluid ">
        <h1 className="navbar-brand" href="#">Explora los Restaurantes</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className=" fa d-flex justify-content-center">
              <li className="nav-item">
              <Nav.Link
              as={Link}
              to="/admin/users"
              defaultActiveKey={isCurrentPath("/admin/users")} className="nav-link active" aria-current="page" >Principal</Nav.Link>
              </li>
              <li className="nav-item">
              <Nav.Link
              as={Link}
              to="/admin/materias"
              defaultActiveKey={isCurrentPath("/admin/materias")} className="fa nav-link" >Menú</Nav.Link>
              </li>
            
      
                  <li><Nav.Link 
                  as={Link}
                  to="/admin/datos"
                  defaultActiveKey={isCurrentPath("/admin/datos")}
                  className="fa nav-link justify-content-center" >Agregar usuarios</Nav.Link></li>

                  <li><Nav.Link 
                  as={Link}
                  to="/admin/tabla"
                  defaultActiveKey={isCurrentPath("/admin/tabla")} 
                  className="fa nav-link justify-content-center" >Ver datos del usuario </Nav.Link></li>
                  
                
              
            </div> 
          </ul><li className="nav-item">
                </li>
                <form className="d-flex" role="search">
            <div className="d-flex align-items-center">
            <Button variant='danger' onClick={cerrarSesion} className=" px-3 me-2"> Cerrar sesion</Button>
            <li><Nav.Link 
                  as={Link}
                  to="/admin/perfil"
                  defaultActiveKey={isCurrentPath("/admin/perfil")}
                  className="fa nav-link justify-content-center" >{user.nomusuario}</Nav.Link></li>
            </div>
          </form>
              </div>
      </div>
    </nav>
    </>
  )
    }
    </Nav>
  )
}
