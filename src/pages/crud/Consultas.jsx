import { useEffect, useState } from "react";

import {
  Container,
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

export default function Consultas() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {

    const datos =
      JSON.parse(localStorage.getItem("productos")) || [];

    setProductos(datos);

  }, []);

  return (

    <Container maxWidth="xl" sx={{ mt: 4 }}>

      <Card sx={{ border: "2px solid black" }}>

        <CardContent>

          <Typography variant="h5" gutterBottom>
            Consultas de Productos
          </Typography>

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

          <Button
            variant="outlined"
            component={Link}
            to="/crud"
            sx={{ mt: 3 }}
          >
            Regresar
          </Button>

        </CardContent>

      </Card>

    </Container>
  );
}