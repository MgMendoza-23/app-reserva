import React from 'react'
import {Route, Routes} from "react-router-dom"
import {AdminLayouts} from "../layouts";
import {Auth, Users, Materias} from "../pages/admin";
import  {useAuth} from "../hooks";
import {Registro} from "../components/Admin/Auth/Register"
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
           </>
          )
        }
        
        
    </Routes>
  )
}
