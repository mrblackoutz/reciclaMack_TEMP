import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Grid, useMediaQuery } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { Image } from "../../Image";

const StyledLink = ({ href, children, style }) => {
  return (
    <Link href={href} style={{ textDecoration: "none", ...style }}>
      {children}
    </Link>
  );
};

const ReciclaMackLabel = (fontSize) => {
  return (
    <Typography
      color={"#10B14A"}
      sx={{ fontWeight: "bold", fontSize: fontSize }}
    >
      Recicla
      <Typography
        component="span"
        sx={{ color: "red", fontWeight: "bold", fontSize: fontSize }}
      >
        Mack
      </Typography>
    </Typography>
  );
};

const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const iconSize = isMobile ? 30 : 45;

  return (
    <footer style={{ height: isMobile ? 400 : 300, width: "100%" }}>
      <Box bgcolor={"#202020"} width={"100%"} height={"100%"}>
        <Grid container height={"100%"} width={"100%"}>
          <Grid item xs={6} md={3}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
              height={"100%"}
            >
              <StyledLink href={"/"}>
                <Image
                  src="mackenzie.svg"
                  style={{ height: isMobile ? 45 : 80, margin: 10 }}
                  alt="Mackenzie Logo"
                />
              </StyledLink>
              <ReciclaMackLabel fontSize={isMobile ? "18px" : "22px"} />
              <StyledLink href={"/"}>
                <Image
                  src="atletica.svg"
                  style={{ height: isMobile ? 45 : 80, margin: 10 }}
                  alt="Mackenzie Logo"
                />
              </StyledLink>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box
              display={"flex"}
              width={"100%"}
              height={"100%"}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              fontSize={{ md: "16px", xs: "14px" }}
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
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box
              width={"100%"}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
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
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            display={"flex"}
            alignItems={"center"}
          >
            <Box width={"100%"} m={1}>
              <Box display={"flex"} alignItems={"center"} mt={1}>
                <img
                  src="Ativos_Recicla_Mack/icone-telefone.png"
                  style={{ height: iconSize }}
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
              <Box display={"flex"} alignItems={"center"} mt={1}>
                <img
                  src="Ativos_Recicla_Mack/icone-email.png"
                  style={{ height: iconSize }}
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
              <Box display={"flex"} alignItems={"center"} mt={1}>
                <img
                  src="Ativos_Recicla_Mack/icone-local.png"
                  style={{ height: iconSize }}
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
                  style={{ height: iconSize, marginRight: 12 }}
                />
                <img
                  src="Ativos_Recicla_Mack/icone-logo-youtube.png"
                  alt="Icone de Whatsapp"
                  style={{ height: iconSize, marginRight: 12 }}
                />
                <img
                  src="Ativos_Recicla_Mack/icone-logo-facebook.png"
                  alt="Icone de Facebook"
                  style={{ height: iconSize, marginRight: 12 }}
                />
                <img
                  src="Ativos_Recicla_Mack/icone-logo-instagram.png"
                  alt="Icone de Whatsapp"
                  style={{ height: iconSize, marginRight: 12 }}
                />
                <img
                  src="Ativos_Recicla_Mack/icone-logo-linkedin.png"
                  alt="Icone de Whatsapp"
                  style={{ height: iconSize, marginRight: 12 }}
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
        <Typography variant="body" color={"white"} ml={2} mr={2}>
          © 2023 – ReciclaMack, Faculdade de Computação e Informática, Mackenzie
        </Typography>
      </Box>
    </footer>
  );
};

export default NavBar;
