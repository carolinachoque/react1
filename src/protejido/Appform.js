import React, { useEffect, useState } from 'react';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../conexion/firebase';

const AppForm = (props) => {

  /////////////// MANEJAR INGRESO DE DATOS ////////////
  const handleStatusChange = (e) => {
    const {name, value} = e.target;       //Lectura a <input>
    setObjeto({...objeto, [name]:value}); //Pasando name y value
    //console.log({name, value});
    //console.log(objeto); 
  } 

  //////////////// GUARDAR-ACTUALIZAR ///////////////
  const camposRegistro = { nombre:"", edad:"",genero:""};
  const [objeto, setObjeto] = useState(camposRegistro);
  const handleSubmit = async (e) => {                // Manejador de submit
    e.preventDefault();                              // Evitar accion por defecto
    try {
      if(props.idActual == ""){
        if(validarform()){                           // Validacion de form
          addDoc(collection(db,  "persona"), objeto);// Guardar en BD
          alert("Se registro con exito...");
        }else{
          console.log("NO se guardo...");
      }
      setObjeto(camposRegistro);                    // Borrar objeto
    }else{
      await updateDoc(doc(collection(db, "persona"), props.idActual), objeto);
      props.setIdactual("");                        // Borrar id
      alert("se ACTUALIZO el REGISTRO...");
    }  
  } catch (error) {
    console.log("Error en Crear o actualizar", error);
    }
  }

  const validarform = () => {
     if (objeto.nombre === "" || /^\s+$/.test(objeto.nombre)){
         alert("Escriba nombre...");
         return false;
     }
     return true;
  };

  /////////////// Obtener registro por id ///////////////////
  useEffect(()=>{
    if(props.idActual === ""){
      setObjeto({...camposRegistro});
    }else{
      obtenerDatosPorId(props.idActual)
    }
  }, [props.idActual]);


  const obtenerDatosPorId = async (xId) => {
    const objPorId = doc(db, "persona", xId);   //Objeto por id
    const docPorId = await getDoc(objPorId);    //Documento por Id
    if(docPorId.exists()){
      setObjeto(docPorId.data());               //Pasar
    }else{
      console.log("No hay doc")
    }
  }
  //style={{background:"orange", padding:"10px"}} 
  return (
    <div style={{background:"orange", padding:"10px"}}>
      <form onSubmit={handleSubmit}>
        <button>Cerrar aplicacion</button>

        <h2>Registrar (AppForm.js)</h2>

        <input onChange={handleStatusChange} value={objeto.nombre}
          name='nombre' type='text' placeholder='Nombres...' /> <br/>

        <input onChange={handleStatusChange} value={objeto.edad}
          name='edad' type='text' placeholder='edad...' /> <br/>

        <select onChange={handleStatusChange} value={objeto.genero} name='genero'>
          <option value="">Seleccione genero...</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select> <br/>

        <button>
          {props.idActual=="" ? "Guardar" : "actualizar" }
          </button>
      </form>
    </div>
  )
}

export default AppForm;
