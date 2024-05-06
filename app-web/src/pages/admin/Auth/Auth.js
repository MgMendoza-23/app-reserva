import React from 'react';
import {Login} from "../../../components/Admin/Auth"
import {Card} from "react-bootstrap";
import "./Auth.scss";

export function Auth() {

  const TargetPrincipal=()=>{
    return(
    <section className="vh-100 bg-image" 
      style={{
      backgroundImage: `url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')`}}>

      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" >
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="https://www.decorfacil.com/wp-content/uploads/2016/08/Imagem-18-4.jpg"
                    alt="login form" class="img-fluid"/>
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center ">
                  <div class="card-body p-4 p-lg-5 text-black container-fluid">
                 
                    <div class="d-flex align-items-center mb-3 pb-1">
                      <i class="fas fa-cubes fa-2x me-3"></i>
                      <span class="h1 fw-bold mb-0  "><img src='https://s3.amazonaws.com/sample-login/companies/avatars/000/002/317/original/Logo_-_Reserva.jpg?1498681147' class="img-fluid" width={400} height={100}></img></span>
                    </div>
                    <div class="d-flex align-items-center mb-3 pb-1">
                      <i class="fas fa-cubes fa-2x me-3"></i>
                      <Card className='auth__forms'>
                        <Card.Header>Inicio de sesion</Card.Header>
                        <Card.Body>
                          <Card.Title>Ingrese los datos</Card.Title>
                          <Card.Text>
                            <Login/>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
  return (
    <div className='auth'>
      <TargetPrincipal/>  
    </div>                  
  )
}

 