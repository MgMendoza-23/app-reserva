import React from 'react';
import './reserv.css';

export function RegistrReserv() {
  return (
    <div className="container text-center">
      <main>
        <form className="needs-validation form-container" noValidate>
          <hr className="my-4" />
          <div className="form-card">
            <h2 id="heading2" className="text-danger">Métodos de Pago</h2>
            <div className="radio-group">
              <div className="radio" data-value="credit">
                <img src="https://i.imgur.com/28akQFX.jpg" width="200px" height="60px" alt="Credit Card" />
              </div>
              <div className="radio" data-value="paypal">
                <img src="https://i.imgur.com/5QFsx7K.jpg" width="200px" height="60px" alt="Paypal" />
              </div>
              <br />
            </div>
            <label className="pay">Nombre titular de la tarjeta</label>
            <input type="text" name="holdername" placeholder="John Smith" className="form-control" />
            <div className="row">
              <div className="col-8 col-md-6">
                <label className="pay">Número de la Tarjeta</label>
                <input type="text" name="cardno" id="cr_no" placeholder="0000-0000-0000-0000" minLength="19" maxLength="19" className="form-control" />
              </div>
              <div className="col-4 col-md-6">
                <label className="pay">CVV</label>
                <input type="password" name="cvcpwd" placeholder="&#9679;&#9679;&#9679;" className="placeicon form-control" minLength="3" maxLength="3" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label className="pay">Fecha de Expiración</label>
              </div>
              <div className="col-md-12">
                <input type="text" name="exp" id="exp" placeholder="MM/YY" minLength="5" maxLength="5" className="form-control" />
              </div>
            </div>
            
          </div>
          <hr className="my-4" />
          
        </form>
      </main>
      
    </div>
  );
}
