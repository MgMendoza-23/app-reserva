import React from 'react';
import { AdminMenu, Logout } from "../../components/Admin/AdminLayout";

export function AdminLayouts({ children }) {
  return (
    <div className='container-fluid'>
      <div className='section'>
          <AdminMenu />
        </div>
        <div className='section'>
          <div>
            {children}
          </div>
        </div>
    </div>
  )
}
