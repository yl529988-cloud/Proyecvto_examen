import {
  Box,
  Toolbar,
  useTheme,
  useMediaQuery,
  Typography
} from "@mui/material"

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import { drawerWidth, collapsedWidth } from "./constants"
import { useState } from "react"

export default function MainLayout({ children }) {

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const [open, setOpen] = useState(true)
  const [collapsed, setCollapsed] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }

  const sidebarWidth = collapsed ? collapsedWidth : drawerWidth

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh"
      }}
    >

      {/* NAVBAR */}
      <Navbar
        toggleDrawer={toggleDrawer}
        toggleCollapse={toggleCollapse}
      />

      {/* SIDEBAR */}
      <Sidebar
        open={open}
        collapsed={collapsed}
        isMobile={isMobile}
        onClose={toggleDrawer}
      />

      {/* CONTENIDO */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          p: { xs: 2, md: 3, lg: 4 },
          transition: "all 0.3s"
        }}
      >

        <Toolbar />

        {/* CONTENIDO DE LAS PÁGINAS */}
        <Box sx={{ flexGrow: 1 }}>
          {children}
        </Box>

        {/* FOOTER */}
        <Box
          component="footer"
          sx={{
            mt: 4,
            py: 3,
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            backgroundColor: "#020617",
            color: "white",
            borderRadius: 3
          }}
        >
          <Typography variant="body2">
            © 2026 Sistema Computacionales 
          </Typography>

          <Typography variant="caption">
            Desarrollado por Yahir LopezS
          </Typography>
        </Box>

      </Box>

    </Box>
  )
}