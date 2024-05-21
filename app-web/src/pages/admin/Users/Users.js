import React, { useState } from 'react';
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./users.css";
import Coloso from '../Restaurantes/Coloso';
import { NavLink } from 'react-bootstrap';

export function Users() {
  const [date, setDate] = useState('2024-03-22');
  const [time, setTime] = useState('19:00');
  const [people, setPeople] = useState('2');
  const [location, setLocation] = useState('');
  const [showForm, setShowForm] = useState(false);
  const { pathname } = useLocation();

  const isCurrentPath = (path) => {
    return path === pathname;
  }

  const handleReservationClick = (e) => {
    e.stopPropagation();
    setShowForm(true);
  };

  const handleOrderOnlineClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <header>
        <section>
          <div id="intro" className="bg-image" style={{
            backgroundImage: "url('https://mdbootstrap.com/img/Photos/new-templates/craftsman/img(1).jpg')",
          }}>
            <div className="container d-flex align-items-center justify-content-center h-100">
              <div className="text-white text-center">
                <h1>RESTAURANTES EN MÉXICO</h1>
                <p>Haz una reservación gratuita</p>
                <div className="reservation-form">
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                  <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                  <select value={people} onChange={(e) => setPeople(e.target.value)}>
                    <option>1 persona</option>
                    <option>2 personas</option>
                    <option>3 personas</option>
                    <option>4 personas</option>
                    <option>5 personas</option>
                    <option>6 personas</option>
                  </select>
                  <input type="text" placeholder="Ubicación, restaurante o comida" value={location} onChange={(e) => setLocation(e.target.value)} />
                  <button>
                    <Nav.Link as={Link} to="/admin/datos" defaultActiveKey={isCurrentPath("/admin/datos")}>
                      ¡RESERVAR!
                    </Nav.Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        <div className="container my-5 py-5">
          <div className="carousel-container">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://media-cdn.tripadvisor.com/media/photo-o/19/d1/33/df/nuestras-promociones.jpg" width={400} height={600} className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                  <img src="https://media-cdn.tripadvisor.com/media/photo-o/12/86/c8/62/el-corte-favorito-de.jpg"  className="d-block w-100" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                  <img src="https://media-cdn.tripadvisor.com/media/photo-o/16/ea/7f/17/pruebalo-en-nuestro-festival.jpg"  className="d-block w-100" alt="Slide 3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <Coloso />
        </div>
      </main>
    </div>
  )
}
