import React, { useState, useEffect } from "react";
import Axios from "../../../components/Admin/Auth/services/Axios";

export default function DatosPersonales({ datos, buscarDatos }) {
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
        <h5 className="card-title">Datos Personales</h5>
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
              placeholder="Nombre"
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
              placeholder="Dirección"
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
                placeholder="Dirección de correo"
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
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}