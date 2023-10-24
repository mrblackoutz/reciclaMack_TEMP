import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";

const StyledLink = ({ href, children, style }) => {
  return (
    <Link href={href} style={{ textDecoration: "none", ...style }}>
      {children}
    </Link>
  );
};

const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div style={{ height: 80, width: "100%" }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#202020", height: 80 }}>
        <Toolbar
          style={{
            "fontFamily?": "Poppins-Regular, Helvetica",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              height: 54,
              width: 57,
              marginLeft: isMobile ? 0 : 100,
              display: "flex",
              alignItems: "center",
            }}
          >
            <StyledLink href={"/"}>
              <img
                src="mackenzie.svg"
                style={{ height: isMobile ? 60 : 80 }}
                alt="Mackenzie Logo"
              />
            </StyledLink>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: isMobile ? 9 : 16,
              marginRight: isMobile ? 0 : 100,
            }}
          >
            <StyledLink
              href="/quem-somos"
              style={{
                color: "#f7f7f7",
                marginRight: isMobile ? 4 : 16,
              }}
            >
              Quem somos
            </StyledLink>
            <StyledLink
              href="/"
              style={{
                color: "#f7f7f7",
                marginRight: isMobile ? 4 : 16,
              }}
            >
              Lixo Eletrônico
            </StyledLink>
            <StyledLink
              href="/pontos-de-coleta"
              style={{
                color: "#f7f7f7",
                marginRight: isMobile ? 4 : 16,
              }}
            >
              Pontos de coleta
            </StyledLink>
            <StyledLink
              href="/pontos-de-coleta"
              style={{
                color: "#f7f7f7",
                marginRight: isMobile ? 4 : 16,
              }}
            >
              Projetos
            </StyledLink>
            <StyledLink href="/contato" style={{ color: "#f7f7f7" }}>
              Contato
            </StyledLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
