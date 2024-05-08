import React, { useState, useEffect } from 'react';
import Axios from "../../../services/Axios";
import {DatosPersonales} from './DatosPersonales'; // Asegúrate de importar el componente DatosPersonales desde su ubicación correcta

export function Tabla() {
    const [listaDatos, setListaDatos] = useState([]);
    const [datosSeleccionados, setDatosSeleccionados] = useState(null); // Estado para almacenar los datos seleccionados para editar

    const buscarDatos = async () => {
        const buscar = await Axios.get("/datos/buscar");
        setListaDatos(buscar.data);
    }

    const actualizarDatos = (datos) => {
        setDatosSeleccionados(datos);
        buscarDatos();
    }

    const eliminarDatos = async (id) => {
        const eliminar = await Axios.delete(`/datos/delete/${id}`);
        alert("Datos eliminados");
        buscarDatos(); // Actualizar la lista después de eliminar
    }

    useEffect(() => {
        buscarDatos();
    }, [])

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Modificar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaDatos.map((datos, index) => (
                        <tr key={datos._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{datos.nombre}</td>
                            <td>{datos.telefono}</td>
                            <td>{datos.direccion}</td>
                            <td>
                                <button type="button" className="btn btn-info" onClick={() => actualizarDatos(datos)}>Modificar</button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger" onClick={() => eliminarDatos(datos._id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {datosSeleccionados && <DatosPersonales datos={datosSeleccionados} buscarDatos={buscarDatos} />}
        </div>
    )
}

