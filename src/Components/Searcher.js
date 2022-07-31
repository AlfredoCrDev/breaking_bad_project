import React, { useEffect, useState } from "react";
import Axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../styles/style.scss";

const Searcher = () => {
  // ESTADOS
  // DATOS DE FORMA DINAMICA
  const [usuarios, setUsuarios] = useState([]);
  // DATOS DE FORMA ESTATICA
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  // CONTROLAR LA BUSQUEDA
  const [busqueda, setBusqueda] = useState("");

  const peticionGet = async () => {
    await Axios.get("https://www.breakingbadapi.com/api/characters")
      .then((response) => {
        setUsuarios(response.data);
        setTablaUsuarios(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // CAPTURAR LO QUE SE ESCRIBE EN LA BARRA
  const handleChange = (e) => {
    setBusqueda(e.target.value);
    console.log("Busqueda: " + e.target.value);
    filtrar(e.target.value);
  };

  // FILTRADO DE LOS ELEMENTOS
  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.nickname
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setUsuarios(resultadosBusqueda);
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <>
      <div className="containerInput">
        <input
          className="inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por Nombre o Nickname"
          onChange={handleChange}
        />
      </div>
      <div className="App">
        {usuarios &&
          usuarios.map((usuario) => (
            <div key={usuario.char_id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="450"
                    width="100"
                    image={usuario.img}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {usuario.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {usuario.nickname}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
      </div>
    </>
  );
};

export default Searcher;