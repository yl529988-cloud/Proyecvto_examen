import { useState, useEffect } from "react";

import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

import { Link } from "react-router-dom";

export default function Eliminacion() {

  const [id, setId] = useState("");

  const [productos, setProductos] = useState([]);

  useEffect(() => {

    const datos =
      JSON.parse(localStorage.getItem("productos")) || [];

    setProductos(datos);

  }, []);

  const eliminarProducto = () => {

    const nuevosProductos =
      productos.filter((p) => p.id !== Number(id));

    localStorage.setItem(
      "productos",
      JSON.stringify(nuevosProductos)
    );

    setProductos(nuevosProductos);

    setId("");

    alert("Producto eliminado");
  };

  return (

    <Container maxWidth="md" sx={{ mt: 4 }}>

      <Card sx={{ border: "2px solid black" }}>

        <CardContent>

          <Typography
            variant="h5"
            gutterBottom
            color="error"
          >
            Eliminación de Productos
          </Typography>

          <Grid container spacing={2}>

            <Grid item xs={12}>

              <TextField
                fullWidth
                label="ID del Producto"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />

            </Grid>

            <Grid item xs={12}>

              <Button
                variant="contained"
                color="error"
                onClick={eliminarProducto}
              >
                Eliminar
              </Button>

              <Button
                variant="outlined"
                component={Link}
                to="/crud"
                sx={{ ml: 2 }}
              >
                Regresar
              </Button>

            </Grid>

          </Grid>

        </CardContent>

      </Card>

    </Container>
  );
}