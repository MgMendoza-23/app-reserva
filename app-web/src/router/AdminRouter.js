import React from 'react'
import {Route, Routes} from "react-router-dom"
import {AdminLayouts} from "../layouts";
import {Auth, Users, Materias} from "../pages/admin";
import  {useAuth} from "../hooks";
import {Registro} from "../components/Admin/Auth/Register";
import { Perfil } from '../pages/admin';
import { Tabla } from '../pages/admin/Materias';
import { DatosPersonales } from '../pages/admin/Materias';
import { RegistrReserv } from '../pages/admin/Materias/reserva';
import Mariscos from '../pages/admin/Info/Mariscos';
import Ejemplo from '../components/Admin/AdminLayout/AdminMenu/Ejemplo';

//const user={username:"dany"};
//const user=null;
export function AdminRouter() {

    const {user}=useAuth();

    const loadLayout=(Layout, Page)=>{
        return(
            <Layout>
                <Page/>
            </Layout>
        )
    }
  return (
    <Routes>
        {!user ? (
          <>
            <Route exact path='/admin/*' element={<Auth/>}/>
            <Route exact path='/registro' element={<Registro/>}/>
            </>
          ):(
           <>
           {["/admin", "/admin/users"].map((path)=>( 
             <Route key={path} exact path={path} element={loadLayout(AdminLayouts,Users)}/>
           ))}
          <Route exact path="/admin/materias" element={loadLayout(AdminLayouts,Materias)}/>
          <Route exact path="/admin/perfil" element={loadLayout(AdminLayouts, Perfil)}/>
          <Route exact path="/admin/tabla" element={loadLayout(AdminLayouts, Tabla)}/>
          <Route exact path="/admin/datos" element={loadLayout(AdminLayouts, DatosPersonales)}/>
          <Route exact path="/admin/reserva" element={loadLayout(AdminLayouts, RegistrReserv)}/>
          <Route exact path="/admin/marisco" element={loadLayout(AdminLayouts, Mariscos)}/>
          <Route exact path="/admin/ejemplo" element={loadLayout(AdminLayouts, Ejemplo)}/>
           </>
          )
        }
        
        
    </Routes>
  )
}
