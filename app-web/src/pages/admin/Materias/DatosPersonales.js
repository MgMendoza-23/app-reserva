import React, { useState, useEffect } from "react";
import Axios from "../../../services/Axios";
import { RegistrReserv } from "./reserva";
import "./reserv.css"
export function DatosPersonales({ datos, buscarDatos }) {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    direccion: "",
    correo: "",
    estado: "",
    telefono: "",
  });

  useEffect(() => {
    if (datos) {
      setDatosForm({
        nombre: datos.nombre,
        direccion: datos.direccion,
        correo: datos.correo,
        estado: datos.estado,
        telefono: datos.telefono,
      });
    }
  }, [datos]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setDatosForm({ ...datosForm, [name]: value });
  };

  const guardarDatos = () => {
    if (datos) {
      actualizarDatos(datos._id, datosForm);
      buscarDatos();

    } else {
      crearDatos(datosForm);
    }
  };

  const crearDatos = (newData) => {
    Axios.post("/datos/saveData", newData)
      .then(() => {
        console.log("Datos creados correctamente");

      })
      .catch((error) => {
        console.error("Error al crear datos:", error);
      });
  };

  const actualizarDatos = (id, newData) => {
    Axios.patch(`/datos/actualizar/${id}`, newData)
      .then(() => {
        console.log("Datos actualizados correctamente");
      })
      .catch((error) => {
        console.error("Error al actualizar datos:", error);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    guardarDatos();
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Rellena el formulario</h5>
        <form
          className="row g-3 needs-validation"
          onSubmit={onSubmit}
          noValidate
        >
          <div className="col-md-12">
            <input
              name="nombre"
              type="text"
              className="form-control"
              value={datosForm.nombre}
              onChange={onChange}
              placeholder="Nombre del restaurante"
              required
            />
          </div>
          <div className="col-md-12">
            <input
              name="direccion"
              type="text"
              className="form-control"
              value={datosForm.direccion}
              onChange={onChange}
              placeholder="Direccion"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-12">
            <div className="input-group has-validation">
              <span className="input-group-text">@</span>
              <input
                name="correo"
                type="text"
                className="form-control"
                value={datosForm.correo}
                onChange={onChange}
                placeholder="Correo electronico"
                required
              />
              <div className="invalid-feedback">Por favor, ingresa un correo válido.</div>
            </div>
          </div>
          <div className="col-md-12">
            <input
              name="estado"
              type="text"
              className="form-control"
              value={datosForm.estado}
              onChange={onChange}
              placeholder="Estado"
              required
            />
          </div>
          <div className="col-md-12">
            <input
              name="telefono"
              type="text"
              className="form-control"
              value={datosForm.telefono}
              onChange={onChange}
              placeholder="Teléfono"
              required
            />
          </div>
          
          <div>
          <RegistrReserv/>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="w-100 btn btn-primary btn-lg" type="submit">Continuar con el proceso de pago</button>
          </div>
          </div>
        </form>
      </div>
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