import { useState } from "react";

import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

export default function Actualizaciones() {

  const [id, setId] = useState("");

  const [producto, setProducto] = useState(null);

  const buscarProducto = () => {

    const productos =
      JSON.parse(localStorage.getItem("productos")) || [];

    const encontrado =
      productos.find((p) => p.id === Number(id));

    setProducto(encontrado);
  };

  const handleChange = (e) => {

    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const actualizarProducto = () => {

    const productos =
      JSON.parse(localStorage.getItem("productos")) || [];

    const nuevosProductos = productos.map((p) =>
      p.id === producto.id ? producto : p
    );

    localStorage.setItem(
      "productos",
      JSON.stringify(nuevosProductos)
    );

    alert("Producto actualizado");
  };

  return (

    <Container maxWidth="md" sx={{ mt: 4 }}>

      <Card sx={{ border: "2px solid black" }}>

        <CardContent>

          <Typography variant="h5" gutterBottom>
            Actualización de Productos
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
                onClick={buscarProducto}
              >
                Buscar
              </Button>

            </Grid>

            {producto && (
              <>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Nombre"
                    name="nombre"
                    value={producto.nombre}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Precio"
                    name="precio"
                    value={producto.precio}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Categoría"
                    name="categoria"
                    value={producto.categoria}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>

                  <Button
                    variant="contained"
                    color="warning"
                    onClick={actualizarProducto}
                  >
                    Actualizar
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

              </>
            )}

          </Grid>

        </CardContent>

      </Card>

    </Container>
  );
}