import { Grid, Card, CardContent, Typography, Avatar } from "@mui/material";
import PageContainer from "../../componets/commons/PageContairner";


import yahirFoto from "../../assets/yahir.jfif";
import cassandarFoto from "../../assets/cassandra.jfif";

export default function Equipo() {
  return (
    <PageContainer title="Integrantes del equipo de trabajo">
      <Grid container spacing={3}>

        {/* TARJETA YAHIR */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Avatar
                src={yahirFoto}
                alt="Yahir"
                sx={{
                  width: 120,
                  height: 120,
                  mb: 2,
                }}
              />

              <Typography variant="h6"> Yahir Lopez Gonzalez</Typography>
              <Typography>No.Control: 2022150480597</Typography>
              <Typography>Carrera: Ing. Sistemas Computacionales</Typography>
              <Typography> Correo: 2022150480597@tesjo.edu.mx</Typography>
              <Typography> Rol: Desarrollador Backen</Typography>
              <Typography sx={{ mt: 1 }}>Biografía:</Typography>
              <Typography variant="body2">
                Estudiante de Ingeniería en Sistemas Computacionales
                enfocado en el desarrollo backend y administración
                de redes.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* TARJETA CASSANDAR */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Avatar
                src={cassandarFoto}
                alt="Cassandar"
                sx={{
                  width: 120,
                  height: 120,
                  mb: 2,
                }}
              />
              <Typography variant="h6">  Cassandar Osornio Sanchez</Typography>
              <Typography>No.Control: 2022150480870</Typography>
              <Typography>Carrera: Ing. Sistemas Computacionales</Typography>
              <Typography> Correo: 2022150480870@tesjo.edu.mx</Typography>
              <Typography>Rol: Desarrollador Frontend</Typography>
              <Typography sx={{ mt: 1 }}> Biografía:</Typography>
              <Typography variant="body2">
                Estudiante enfocada en el desarrollo frontend,
                diseño de interfaces y experiencia de usuario.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </PageContainer>
  );
}