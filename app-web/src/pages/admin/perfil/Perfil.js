import React from "react";
import "./perfil.css";
import { useAuth } from "../../../hooks/useAuth";
export function Perfil({ userInfo }) {
  const {user}=useAuth();
  return (
      <section className="h-100 gradient-custom-2">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-lg-9 col-xl-7">
          <div className="card">
            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
              <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                  style={{ width: '150px', zIndex: 1 }} />
                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-dark" data-mdb-ripple-color="dark"
                  style={{ zIndex: 1 }}>
                  Editar perfil
                </button>
              </div>
              <div className="ms-3" style={{ marginTop: '130px' }}>
                <h5>{user.nomusuario} {user.apellidos}</h5>
                <p>{user.email}</p>
              </div>
            </div>
            <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="d-flex justify-content-end text-center py-1">
                <div>
                  <p className="mb-1 h5">253</p>
                  <p className="small text-muted mb-0">Fotos</p>
                </div>
                <div className="px-3">
                  <p className="mb-1 h5">1026</p>
                  <p className="small text-muted mb-0">Seguidores</p>
                </div>
                <div>
                  <p className="mb-1 h5">478</p>
                  <p className="small text-muted mb-0">Siguiente</p>
                </div>
              </div>
            </div>
            <div className="card-body p-4 text-black">
              <div className="mb-5">
                <p className="lead fw-normal mb-1">Acerca de mi</p>
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <p className="font-italic mb-1">Desarrollador web</p>
                  <p className="font-italic mb-1">Vive en Mexico</p>
                  <p className="font-italic mb-0">Fotografo</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <p className="lead fw-normal mb-0">Fotos Recientes</p>
                <p className="mb-0"><a href="#!" className="text-muted">Mostrar todas</a></p>
              </div>
              <div className="row g-2">
                <div className="col mb-2">
                  <img src="https://media-cdn.tripadvisor.com/media/photo-o/06/1c/84/b8/la-lupita.jpg"
                    alt="image 1" className="w-100 rounded-3" />
                </div>
                <div className="col mb-2">
                  <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/16/ea/7f/e2/pulpo-a-las-brasas-con.jpg"
                    alt="image 1" className="w-100 rounded-3" />
                </div>
              </div>
              <div className="row g-2">
                <div className="col">
                  <img src="https://media-cdn.tripadvisor.com/media/photo-w/19/f0/4f/c6/taco-michoacano.jpg"
                    alt="image 1" className="w-100 rounded-3" />
                </div>
                <div className="col">
                  <img src="https://media-cdn.tripadvisor.com/media/photo-o/16/c1/2c/08/20190310-173703-largejpg.jpg"
                    alt="image 1" className="w-100 rounded-3" />
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

