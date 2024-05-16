import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import {Axios} from "../services";
export const Registro = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState('2024-03-22');
    const [error, setError] = useState('');
    const [errorNombre, setErrorNombre] = useState('');
    const [errorApellidos, setErrorApellidos] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorContraseña, setErrorContraseña] = useState('');


    const [formData, setFormData] = useState({
      nomusuario: '',
      apellidos: '',
      email: '',
      password: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
    
  
  /*  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await Axios.post('/auth/registro', formData);
        console.log(response.data);
        onRegister(formData);
        updateProfile(formData);
        navigate('/admin')
      } catch (error) {
        console.error('Error al registrar:', error);
      }
    }; */
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await Axios.post('/auth/registro', formData);
        console.log(response.data);
        navigate('/admin');
      } catch (error) {
        if (error.response && error.response.status === 409) {
          setError('El correo ya está registrado');
        } else {
          console.error("Error al registrar", error);
        }
      }
    };

    const handleBlur = (e) => {
      const { name, value } = e.target;
      switch (name) {
        case 'nomusuario':
          setErrorNombre(value.trim() ? '' : `El campo es obligatorio`);
          break;
        case 'apellidos':
          setErrorApellidos(value.trim() ? '' : `El campo es obligatorio`);
          break;
        case 'email':
          setErrorEmail(value.trim() ? '' : `El campo es obligatorio`);
          break;
        case 'password':
          setErrorContraseña(value.trim() ? '' : `El campo es obligatorio`);
          break;
        default:
          break;
      }
    };
    return (
      <div className="bg-color">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-sm card-registration">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Regístrate gratis</h3>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-group">
                        <label htmlFor="firstName" className="form-label">Nombre</label>
                        <input 
                          type="text"  
                          className="form-control form-control-lg" 
                          name="nomusuario"
                          value={formData.nomusuario}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Nombre de usuario"
                          required
                        />
                        {errorNombre && <div className="invalid-feedback" style={{display: 'block'}}>{errorNombre}</div>}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-group">
                        <label htmlFor="lastName" className="form-label">Apellidos</label>
                        <input 
                          type="text"  
                          className="form-control form-control-lg" 
                          name="apellidos"
                          value={formData.apellidos}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Apellidos"
                          required
                        />
                        {errorApellidos && <div className="invalid-feedback" style={{display: 'block'}}>{errorApellidos}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 d-flex align-items-center">
                      <div className="form-group w-100">
                        <label htmlFor="birthdayDate" className="form-label">Fecha de nacimiento</label>
                        <input type="date" className="form-control form-control-lg"  dateFormat="dd-MM-yyyy"value={date} onChange={(e) => setDate(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h6 className="mb-2 pb-1">Género:</h6>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" value="option1" checked />
                        <label className="form-check-label" htmlFor="femaleGender">Hombre</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" value="option2" />
                        <label className="form-check-label" htmlFor="maleGender">Mujer</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" value="option3" />
                        <label className="form-check-label" htmlFor="otherGender">Otros</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-group">
                        <label htmlFor="emailAddress" className="form-label">Email</label>
                        <input 
                          type="email"  
                          className="form-control form-control-lg" 
                          name="email"
                          value={formData.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          required
                        />
                        {errorEmail && <div className="invalid-feedback" style={{display: 'block'}}>{errorEmail}</div>}
                         {error && <div className="invalid-feedback" style={{display: 'block'}}>{error}</div>}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-group">
                        <label htmlFor="phoneNumber" className="form-label">Número de teléfono</label>
                        <input type="tel" id="phoneNumber" className="form-control form-control-lg" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-group">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input 
                          className="form-control form-control-lg" 
                          type="password"
                          onBlur={handleBlur}
                          required 
                        />
                        {errorContraseña && <div className="invalid-feedback" style={{display: 'block'}}>{errorContraseña}</div>}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-group">
                        <label htmlFor="repeatPassword" className="form-label">Repite la contraseña</label>
                        <input 
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control form-control-lg" 
                        required />
                        {errorContraseña && <div className="invalid-feedback" style={{display: 'block'}}>{errorContraseña}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-2">
                    <input className="btn btn-primary btn-lg" type="submit" value="Registrarse" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };

  export default Registro;