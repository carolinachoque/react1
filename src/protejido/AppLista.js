import React from 'react'
import AppForm from './AppForm';

const AppLista = (props) => {

    //style={{background:"greenyellow", padding:"10px"}}
  return (
    <div style={{background:"greenyellow", padding:"10px"}}>
    <h1>Applist.js</h1>
    <AppForm />
    <h3>Lista de clientes</h3>
    <p>No. 1. Rosa Choque Quispe      .....x.....A</p>
    <p>No. 2. Rosa Maria Luque Conde  .....x.....A</p>
    <p>No. 3. Jose Ricardo lopez Moral.....x.....A</p>
    </div>
  )
}

export default AppLista
