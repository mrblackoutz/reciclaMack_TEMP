import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const NavBar = () => {
  return (
    <div style={{ height: 80, width: "100%" }}>
      <AppBar position="static" sx={{ backgroundColor: "#202020", height: 80 }}>
        <Toolbar>
          <div style={{ height: 54, width: 57, marginRight: 2 }}>
            <img src="vector.svg" alt="Vector" />
          </div>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#f7f7f7" }}>
            Minha NavBar
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#f7f7f7", marginRight: 2 }}>
            Quem somos
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#f7f7f7", marginRight: 2 }}>
            Lixo Eletrônico
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#f7f7f7", marginRight: 2 }}>
            Pontos de coleta
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#f7f7f7", marginRight: 2 }}>
            Projetos
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#f7f7f7", marginRight: 2 }}>
            Contato
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
