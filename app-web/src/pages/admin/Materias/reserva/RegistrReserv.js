import React from 'react';
import './reserv.css'
export function RegistrReserv() {
  return (
    <div className="container  text-center">
      <main>
        <div className="py-5 text-center">
          <img className="d-block mx-auto mb-4" src="https://s3.amazonaws.com/sample-login/companies/avatars/000/002/317/original/Logo_-_Reserva.jpg?1498681147" alt="" width="72" height="57"/>
          <h2>Datos personales </h2>
          </div>

        <div className="row g-5  text-center">
          <div className="col-md-7 col-lg-8  t-center">
            <h4 className="mb-3  text-center">Rellena el formulario</h4>
            <form className="needs-validation" noValidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Apellidos</label>
                  <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="username" className="form-label">Direccion del correo electronico</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" id="username" placeholder="Username" required/>
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="address" className="form-label">No. Telefono</label>
                  <input type="text" className="form-control" id="address" placeholder="+53 " required/>
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

               
              </div>

              <hr className="my-4"/>

              <div class="col-md-7 col-sm-12 p-0 box  text-center">
                <div class="card rounded-0 border-0 card2" id="paypage">
                  <div class="form-card">
                              <h2 id="heading2" class="text-danger">Metodos de Pago</h2>
                              <div class="radio-group">
                                  <div class='radio' data-value="credit"><img src="https://i.imgur.com/28akQFX.jpg" width="200px" height="60px"/></div>
                                  <div class='radio' data-value="paypal"><img src="https://i.imgur.com/5QFsx7K.jpg" width="200px" height="60px"/></div>
                                  <br/>
                              </div>
                              <label class="pay">Nombre tutilar de la targeta</label>
                              <input type="text" name="holdername" placeholder="John Smith"/>
                              <div class="row">
                                  <div class="col-8 col-md-6">
                                      <label class="pay">Numero de la Targeta</label>
                                      <input type="text" name="cardno" id="cr_no" placeholder="0000-0000-0000-0000" minlength="19" maxlength="19"/>
                                  </div>
                                  <div class="col-4 col-md-6">
                                      <label class="pay">CVV</label>
                                      <input type="password" name="cvcpwd" placeholder="&#9679;&#9679;&#9679;" class="placeicon" minlength="3" maxlength="3"/>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-md-12">
                                      <label class="pay">Fecha de Expiracion</label>
                                  </div>
                                  <div class="col-md-12">
                                      <input type="text" name="exp" id="exp" placeholder="MM/YY" minlength="5" maxlength="5"/>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-md-6">
                                      <input type="submit" value="MAKE A PAYMENT &nbsp; &#xf178;" class="btn btn-info placeicon"/>
                                  </div>
                              </div>
                          </div>
                </div>
					</div>
              <hr className="my-4"/>

              <button className="w-100 btn btn-primary btn-lg" type="submit">Continuar con el proceso de pago</button>
            </form>
          </div>
        </div>
      </main>

      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">&copy; 2017–2022 Company Name</p>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#">Privacy</a></li>
          <li className="list-inline-item"><a href="#">Terms</a></li>
          <li className="list-inline-item"><a href="#">Support</a></li>
        </ul>
      </footer>
    </div>
  );
}
