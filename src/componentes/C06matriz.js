import React, { Fragment, useState } from 'react'

const C06matriz = () => {
    const [lista, setLista] = useState([1,2,3,4,5]);
  return (
    <Fragment>
        <h1 style={{background:"green"}}>lectura sin index y con html</h1>
        {lista.map((item) => <span> {item} </span>)}
        <br/>
      
    </Fragment>
  );
}

export default C06matriz
