import {
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";

import { Link } from "react-router-dom";

export default function CrudProductos() {

  return (

    <Container maxWidth="lg" sx={{ mt: 5 }}>

      <Card
        sx={{
          border: "3px solid black",
          borderRadius: 0,
          p: 3,
        }}
      >

        <CardContent>

          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 4,
            }}
          >
            CRUD - Productos
          </Typography>

          <Grid container spacing={3}>

            {/* ALTAS */}

            <Grid item xs={12} md={3}>

              <Button
                fullWidth
                variant="contained"
                component={Link}
                to="/crud/altas"
              >
                Altas
              </Button>

            </Grid>

            {/* CONSULTAS */}

            <Grid item xs={12} md={3}>

              <Button
                fullWidth
                variant="contained"
                color="success"
                component={Link}
                to="/crud/consultas"
              >
                Consultas
              </Button>

            </Grid>

            {/* ACTUALIZACIONES */}

            <Grid item xs={12} md={3}>

              <Button
                fullWidth
                variant="contained"
                color="warning"
                component={Link}
                to="/crud/actualizaciones"
              >
                Actualizaciones
              </Button>

            </Grid>

            {/* ELIMINACION */}

            <Grid item xs={12} md={3}>

              <Button
                fullWidth
                variant="contained"
                color="error"
                component={Link}
                to="/crud/eliminacion"
              >
                Eliminación
              </Button>

            </Grid>

            {/* BOTON REGRESO */}

            <Grid item xs={12}>

              <Button
                variant="outlined"
                component={Link}
                to="/"
              >
                Regresar al Inicio
              </Button>

            </Grid>

          </Grid>

        </CardContent>

      </Card>

    </Container>
  );
}