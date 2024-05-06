import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { ClientLayout } from '../layouts';
import {Home} from "../pages/Web";

export function WebRouter() {
    const LoadLayout=(Layout, Page)=>{
        return(
            <Layout>
                <Page/>
            </Layout>
        )
    }
    return(
        <Routes>
        <Route exact path='/' element={LoadLayout(ClientLayout,Home)}/> 
    </Routes>
    )
}