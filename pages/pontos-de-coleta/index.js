"use client";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { Image } from "../../components/Image";
import React from "react";
import { height } from "@mui/system";

const PontosDeColeta = ({setpontoColetaAtual}) => {
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <Button
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00844D",
            width: "5rem",
            height: "3rem",
            borderRadius: "10px",
            color: "white",
            ":hover": {
              backgroundColor: "#00844D",
              opacity: 0.6,
            },
          }}
          onClick={() => {
            setpontoColetaAtual(
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1828.7791633713982!2d-46.652534!3d-23.548383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5837c9fcac33%3A0xa7a2e79ac002d158!2sAudit%C3%B3rio%20Ruy%20Barbosa!5e0!3m2!1spt-BR!2sbr!4v1698864412792!5m2!1spt-BR!2sbr"
            );
          }}
        >
          <Typography>PDC-1</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00844D",
            width: "5rem",
            height: "3rem",
            borderRadius: "10px",
            color: "white",
            ":hover": {
              backgroundColor: "#00844D",
              opacity: 0.6,
            },
          }}
          onClick={() => {
            setpontoColetaAtual(
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1828.7952529683507!2d-46.65260622978968!3d-23.547226321706653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5837ece0d6e5%3A0x1aadd54144228832!2sCentro%20Hist%C3%B3rico%20Mackenzie!5e0!3m2!1spt-BR!2sbr!4v1698864450198!5m2!1spt-BR!2sbr"
            );
          }}
        >
          <Typography>PDC-2</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00844D",
            width: "5rem",
            height: "3rem",
            borderRadius: "10px",
            color: "white",
            ":hover": {
              backgroundColor: "#00844D",
              opacity: 0.6,
            },
          }}
          onClick={() => {
            setpontoColetaAtual(
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1828.7952529683507!2d-46.65260622978968!3d-23.547226321706653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce584992d1355b%3A0x2619a4227c175a85!2sUniversidade%20Presbiteriana%20Mackenzie!5e0!3m2!1spt-BR!2sbr!4v1698864518502!5m2!1spt-BR!2sbr"
            );
          }}
        >
          <Typography>PDC-3</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00844D",
            width: "5rem",
            height: "3rem",
            borderRadius: "10px",
            color: "white",
            ":hover": {
              backgroundColor: "#00844D",
              opacity: 0.6,
            },
          }}
          onClick={() => {
            setpontoColetaAtual(
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d768.913453981587!2d-46.65218850563264!3d-23.547266032801762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c07b1db653%3A0x2aebaf44d8653a8b!2sPr%C3%A9dio%2031%20-%20Ed.%20Paulo%20Breda%20Filho%20-%20FCI%20Mackenzie!5e0!3m2!1spt-BR!2sbr!4v1698864554804!5m2!1spt-BR!2sbr"
            );
          }}
        >
          <Typography>PDC-4</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default () => {
  const isMobile = useMediaQuery("(max-width:700px)");
  const [pontoColetaAtual, setpontoColetaAtual] = React.useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.3925302350499!2d-46.65248373357559!3d-23.547959064832384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58364045cacb%3A0x596f44a4faaae3ab!2sPr%C3%A9dio%2049!5e0!3m2!1spt-BR!2sbr!4v1698864015826!5m2!1spt-BR!2sbr"
  );
  return (
    <div>
      <Box
        color={"#FFF"}
        display={"flex"}
        flexDirection={"column"}
        padding={"2rem"}
        bgcolor={"#00844D"}
        width={"100%"}
        height={{ md: "90vh", xs: "110vh" }}
        justifyContent={"space-between"}
      >
        <h1>Como separar os materiais de coleta?</h1>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          paddingBottom={"7rem"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            paddingRight={"1rem"}
            paddingLeft={"1rem"}
          >
            <Box>
              <h2>1° Etapa</h2>
              <Typography fontSize={".8rem"} style={{ width: "25vw" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </Typography>
            </Box>
            <Box>
              <h2>2° Etapa</h2>
              <Typography fontSize={".8rem"} style={{ width: "25vw" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </Typography>
            </Box>
          </Box>

          <Image
            src="Ativos_Recicla_Mack/imagem-aparelhos-impilhados.png"
            style={{
              width: "30vw",
              height: "55vh",
            }}
          />

          <Box display={"flex"} flexDirection={"column"} padding={"1rem"}>
            <Box>
              <h2>3° Etapa</h2>
              <Typography fontSize={".8rem"} style={{ width: "25vw" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </Typography>
            </Box>
            <Box>
              <h2>4° Etapa</h2>
              <Typography fontSize={".8rem"} style={{ width: "25vw" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        color={"#FFF"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        padding={"2rem"}
        bgcolor={"#10B14A"}
        height={{ md: "90vh", xs: "100%" }}
        width={"100%"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={{ md: "40vw", xs: "90vw" }}
        >
          <h1>Onde posso realizar o descarte?</h1>
          <h2>Pontos de coleta</h2>
          {isMobile ? (
            <Box
              // width={"50%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              pl={2}
              pr={2}
            >
              <iframe
                src={pontoColetaAtual}
                style={{ border: 0, width: "70vw", height: "60vh" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </Box>
          ) : null}
          {isMobile ? null : (
            <PontosDeColeta setpontoColetaAtual={setpontoColetaAtual} />
          )}
          <Box>
            <h3>Locais - ponto de coleta n° 439</h3>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
              sobreviveu não só a cinco séculos, como também ao salto para a
              editoração eletrônica.
            </p>
          </Box>
          {isMobile ? (
            <PontosDeColeta setpontoColetaAtual={setpontoColetaAtual} />
          ) : null}
        </Box>
        {isMobile ? null : (
          <Box
            // width={"50%"}
            // display={"flex"}
            // alignItems={"center"}
            // justifyContent={"center"}
            pl={2}
            pr={2}
          >
            <iframe
              src={pontoColetaAtual}
              style={{ border: 0, width: "40vw", height: "60vh" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </Box>
        )}
      </Box>
    </div>
  );
};
