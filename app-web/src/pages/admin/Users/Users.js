import React,{ useState } from 'react';
import "./users.css";
import Coloso from '../Restaurantes/Coloso';
export function Users() {
  const [date, setDate] = useState('2024-03-22');
  const [time, setTime] = useState('19:00');
  const [people, setPeople] = useState('2');
  const [location, setLocation] = useState('');
  const [showForm, setShowForm] = useState(false);
  

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
                    <button onClick={handleReservationClick}>¡Hazlo!</button>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </header>

      <main>
        <div className="container my-5 py-5">
        <Coloso/>
        </div>
      </main>
    </div>
  )
}
