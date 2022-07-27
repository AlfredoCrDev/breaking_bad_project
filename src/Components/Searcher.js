// import React from 'react'
import React, {useEffect, useState} from "react";
import Axios from "axios"; 

const Searcher = () => {
 // ESTADOS
// DATOS DE FORMA DINAMICA
const [usuarios, setUsuarios] = useState([]);
// DATOS DE FORMA ESTATICA
const [tablaUsuarios, setTablaUsuarios] = useState([]);
// CONTROLAR LA BUSQUEDA
const [busqueda, setBusqueda] = useState("");
  
  const peticionGet = async() => {
      await Axios.get('https://www.breakingbadapi.com/api/characters')
      .then(response =>{
        setUsuarios(response.data);
        setTablaUsuarios(response.data);
      }).catch(error =>{
        console.error(error);
      }) 
  }

  // CAPTURAR LO QUE SE ESCRIBE EN LA BARRA
  const handleChange=e=>{
    setBusqueda(e.target.value);
    console.log("Busqueda: "+e.target.value);
    filtrar(e.target.value);
  }

  // FILTRADO DE LOS ELEMENTOS
  const filtrar = (terminoBusqueda) =>{
    var resultadosBusqueda = tablaUsuarios.filter((elemento)=>{
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.nickname.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    setUsuarios(resultadosBusqueda);
  }
  
  useEffect(() => {
  peticionGet(); 
},[]); 

  return (
    <div className='App'>
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por Nombre o Nickname"
          onChange={handleChange}
          />
        <button className="btn btn-success">
        </button>
      </div>

      <div className='table-responsive'>
        <table className='table table-sm table-bordered'>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>ID</th>
              <th>Nombre</th>
              <th>Nickname</th>
            </tr>
          </thead>
          <tbody>
            {usuarios && 
            usuarios.map((usuario) =>(
              <tr key={usuario.char_id}>
                <td>{usuario.img}</td>
                <td>{usuario.char_id}</td>
                <td>{usuario.name}</td>
                <td>{usuario.nickname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Searcher