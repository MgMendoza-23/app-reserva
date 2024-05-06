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
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Más
                </a>
                <ul className="dropdown-menu">
                  <li>
                  <Nav.Link
              as={Link}
              to="/admin/materias"
              defaultActiveKey={isCurrentPath("/admin/materias")} className="dropdown-item">Notificaciones
                    </Nav.Link></li>
                  <li><Link class="dropdown-item" to='/datos'>Registrar Datos</Link></li>
                  <li><Link className="dropdown-item" to="/Tabla">Ver informacion </Link></li>
                  <li><Link className="dropdown-item" to="/Perfil">Perfil</Link></li>
                </ul>
              </li>
            </div> 
          </ul><li className="nav-item">
                </li>
                <form className="d-flex" role="search">
            <div className="d-flex align-items-center">
            <Button variant='danger' onClick={cerrarSesion} className=" px-3 me-2"> Cerrar sesion</Button>
              <Link to="/perfil">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" alt="avatar"
                  class="img-fluid rounded-circle me-3" width="35"/>
              </Link>
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
