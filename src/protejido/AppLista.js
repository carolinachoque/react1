import React, { useEffect, useState } from 'react'
import AppForm from './AppForm';
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from '../conexion/firebase';

const AppLista = (props) => {

   ////// Lectura finRead ///////////
   const [dodBD, setDocBD] = useState([]);
   const fnRead = () => {
     const xColeccionConQuery = query(collection(db, "persona"));
     const unsubcribe = onSnapshot(xColeccionConQuery, (xDatosBD) =>{
       const xDoc = [];
       xDatosBD.forEach((doc) => {
        xDoc.push({id:doc.id, ...doc.data()})
       });
       setDocBD(xDoc);
     });
  }
  //fnRead();
  useEffect(()=>{ fnRead(); }, [props.idActual]);
   //console.log(dodBD);

   ////// Delete ///////////
   const [idActual, setIdActual] = useState("");
   const fnDelet = async (xId) => {
    if(window.confirm("Confirme para eliminar")){
      await deleteDoc(doc(db, "persona", xId));
    }
    alert("se ELIMINO con exito...");
   }
    //style={{background:"greenyellow", padding:"10px"}}
  return (
    <div style={{background:"greenyellow", padding:"10px"}}>
    <h1>Applist.js</h1>
    <AppForm {...{idActual, setIdActual}} />
    <h3>Lista de clientes</h3>
    {
      dodBD.map((row, index)  => 
      <p key={row.id}>
        No. {index + 1}. {row.nombre}
         .....
         <span onClick={() => fnDelet(row.id)}>x</span>
         ......
         <span onClick={() => setIdActual(row.id)}>A</span>
       </p>
      )
    }
    </div>
  )
}

export default AppLista
