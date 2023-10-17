import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

const StyledLink = ({ href, children, style }) => {
  return (
    <Link href={href} style={{ textDecoration: "none", ...style }}>
      {children}
    </Link>
  );
};

const ReciclaMackLabel = () => {
  return (
    <Typography color={"#10B14A"} sx={{ fontWeight: "bold" }}>
      Recicla
      <Typography component="span" sx={{ color: "red", fontWeight: "bold" }}>
        Mack
      </Typography>
    </Typography>
  );
};

const NavBar = () => {
  return (
    <footer style={{ height: 300, width: "100%" }}>
      <Box
        sx={{ flexGrow: 1 }}
        bgcolor={"#202020"}
        width={"100%"}
        height={"100%"}
      >
        <Grid container height={"100%"} width={"100%"} spacing={2}>
          <Grid
            item
            xs={3}
            md={3}
            display={"flex"}
            direction={"column"}
            alignItems={"flex-start"}
            justifyContent={"center"}
          >
            <StyledLink href={"/"}>
              <img
                src="mackenzie.svg"
                style={{ height: 45 }}
                alt="Mackenzie Logo"
              />
            </StyledLink>
            <ReciclaMackLabel />
            <StyledLink href={"/"}>
              <img
                src="atletica.svg"
                style={{ height: 45 }}
                alt="Mackenzie Logo"
              />
            </StyledLink>
          </Grid>
          <Grid
            item
            xs={3}
            md={3}
            display={"flex"}
            direction={"column"}
            justifyContent={"space-evenly"}
            border={"1px solid #f7f7f7"}
            alignItems={"center"}
          >
            <Link
              href="/quem-somos"
              style={{ color: "#f7f7f7", fontSize: "16px" }}
            >
              Sobre nós
            </Link>
            <Link
              href="/quem-somos"
              style={{ color: "#f7f7f7", fontSize: "16px" }}
            >
              O que Reciclar
            </Link>
            <Link
              href="/quem-somos"
              style={{ color: "#f7f7f7", fontSize: "16px" }}
            >
              Como Reciclar
            </Link>
            <Link
              href="/quem-somos"
              style={{ color: "#f7f7f7", fontSize: "16px" }}
            >
              FAQ
            </Link>
            <Link
              href="/quem-somos"
              style={{ color: "#f7f7f7", fontSize: "16px" }}
            >
              Contato
            </Link>
          </Grid>
          <Grid
            item
            xs={3}
            md={3}
            display={"flex"}
            direction={"column"}
            justifyContent={"space-evenly"}
            border={"1px solid #f7f7f7"}
            alignItems={"center"}
          >
            <Link
              href="/quem-somos"
              style={{ color: "#f7f7f7", fontSize: "16px" }}
            >
              Direitos Autorais
            </Link>
            <Link
              href="/quem-somos"
              style={{ color: "#f7f7f7", fontSize: "16px" }}
            >
              Políticas de Privacidade
            </Link>
            <Link
              href="/quem-somos"
              style={{ color: "#f7f7f7", fontSize: "16px" }}
            >
              Cookies
            </Link>
            <Link
              href="/quem-somos"
              style={{ color: "#f7f7f7", fontSize: "16px" }}
            >
              Termos de Uso
            </Link>
          </Grid>
          <Grid item xs={3} md={3} display={"flex"} alignItems={"center"}>
            <Box width={"100%"}>
              <Box display={"flex"} alignItems={"center"} mt={2}>
                <img
                  src="Ativos_Recicla_Mack/icone-telefone.png"
                  style={{ height: 45 }}
                  alt="Icone de telefone"
                />
                <Typography
                  color={"#f7f7f7"}
                  variant="body2"
                  sx={{ ml: 1, textDecoration: "underline" }}
                >
                  (XX) XXXXX-XXXX
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                mt={2}
                sx={{ overflow: "hidden" }}
              >
                <img
                  src="Ativos_Recicla_Mack/icone-email.png"
                  style={{ height: 45 }}
                  alt="Icone de telefone"
                />
                <Typography
                  color={"#f7f7f7"}
                  variant="body2"
                  sx={{ ml: 1, textDecoration: "underline" }}
                >
                  contato@email.com.br
                </Typography>
              </Box>
              <Box display={"flex"} alignItems={"center"} mt={2}>
                <img
                  src="Ativos_Recicla_Mack/icone-local.png"
                  style={{ height: 45 }}
                  alt="Icone de telefone"
                />
                <Typography
                  color={"#f7f7f7"}
                  variant="body2"
                  sx={{ ml: 1, textDecoration: "underline" }}
                >
                  Rua endereço do local, nº 439
                </Typography>
              </Box>
              <Box marginTop={2}>
                <img
                  src="Ativos_Recicla_Mack/icone-logo-whatsapp.png"
                  alt="Icone de Whatsapp"
                  style={{ height: 45, marginRight: 12 }}
                />
                <img
                  src="Ativos_Recicla_Mack/icone-logo-youtube.png"
                  alt="Icone de Whatsapp"
                  style={{ height: 45, marginRight: 12 }}
                />
                <img
                  src="Ativos_Recicla_Mack/icone-logo-facebook.png"
                  alt="Icone de Facebook"
                  style={{ height: 45, marginRight: 12 }}
                />
                <img
                  src="Ativos_Recicla_Mack/icone-logo-instagram.png"
                  alt="Icone de Whatsapp"
                  style={{ height: 45, marginRight: 12 }}
                />
                <img
                  src="Ativos_Recicla_Mack/icone-logo-linkedin.png"
                  alt="Icone de Whatsapp"
                  style={{ height: 45, marginRight: 12 }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        display={"flex"}
        color={"ffffff"}
        bgcolor={"#000000"}
        width={"100%"}
        height={"10vh"}
        justifyContent={"center"}
        alignItems="center"
      >
        <Typography variant="body" color={"white"}>
          © 2023 – ReciclaMack, Faculdade de Computação e Informática, Mackenzie
        </Typography>
      </Box>
    </footer>
  );
};

export default NavBar;
