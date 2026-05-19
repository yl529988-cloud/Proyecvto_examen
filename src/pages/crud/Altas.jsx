import { useState } from "react";

import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
} from "@mui/material";

import { Link } from "react-router-dom";

export default function Altas() {

  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    categoria: "",
  });

  const [productos, setProductos] = useState(
    JSON.parse(localStorage.getItem("productos")) || []
  );

  const handleChange = (e) => {

    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const guardarProducto = () => {

    const nuevoProducto = {
      id:
        productos.length > 0
          ? productos[productos.length - 1].id + 1
          : 1,

      ...producto,
    };

    const nuevosProductos = [
      ...productos,
      nuevoProducto,
    ];

    setProductos(nuevosProductos);

    localStorage.setItem(
      "productos",
      JSON.stringify(nuevosProductos)
    );

    alert("Producto guardado");

    setProducto({
      nombre: "",
      precio: "",
      categoria: "",
    });
  };

  return (

    <Container maxWidth="xl" sx={{ mt: 4 }}>

      <Grid container spacing={3}>

        <Grid item xs={12} md={5}>

          <Card sx={{ border: "2px solid black" }}>

            <CardContent>

              <Typography variant="h5" gutterBottom>
                Alta de Producto
              </Typography>

              <TextField
                fullWidth
                label="Nombre"
                name="nombre"
                value={producto.nombre}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Precio"
                name="precio"
                value={producto.precio}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Categoría"
                name="categoria"
                value={producto.categoria}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />

              <Button
                variant="contained"
                onClick={guardarProducto}
              >
                Guardar
              </Button>

              <Button
                variant="outlined"
                component={Link}
                to="/crud"
                sx={{ ml: 2 }}
              >
                Regresar
              </Button>

            </CardContent>

          </Card>

        </Grid>

        <Grid item xs={12} md={7}>

          <Card sx={{ border: "2px solid black" }}>

            <CardContent>

              <TableContainer component={Paper}>

                <Table>

                  <TableHead>

                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Nombre</TableCell>
                      <TableCell>Precio</TableCell>
                      <TableCell>Categoría</TableCell>
                    </TableRow>

                  </TableHead>

                  <TableBody>

                    {productos.map((item) => (

                      <TableRow key={item.id}>

                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.nombre}</TableCell>
                        <TableCell>{item.precio}</TableCell>
                        <TableCell>{item.categoria}</TableCell>

                      </TableRow>

                    ))}

                  </TableBody>

                </Table>

              </TableContainer>

            </CardContent>

          </Card>

        </Grid>

      </Grid>

    </Container>
  );
}