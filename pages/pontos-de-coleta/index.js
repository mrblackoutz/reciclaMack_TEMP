"use client";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { Image } from "../../components/Image";
import { height } from "@mui/system";

const PontosDeColeta = () => {
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <Box
          bgcolor={"#00844D"}
          width={"5rem"}
          height={"3rem"}
          borderRadius={"10px"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>PDC-1</Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box
          bgcolor={"#00844D"}
          width={"5rem"}
          height={"3rem"}
          borderRadius={"10px"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>PDC-2</Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box
          bgcolor={"#00844D"}
          width={"5rem"}
          height={"3rem"}
          borderRadius={"10px"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>PDC-3</Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box
          bgcolor={"#00844D"}
          width={"5rem"}
          height={"3rem"}
          borderRadius={"10px"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>PDC-4</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default () => {
  const isMobile = useMediaQuery("(max-width:700px)");
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
              <Image
                src="Ativos_Recicla_Mack/imagem-ponto-coleta.png"
                //  style={{ width: "75%", height: "60%",}}
                style={{ width: "70vw", height: "60vh" }}
              />
            </Box>
          ) : null}
          {isMobile ? null : <PontosDeColeta />}
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
          {isMobile ? <PontosDeColeta /> : null}
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
            <Image
              src="Ativos_Recicla_Mack/imagem-ponto-coleta.png"
              //  style={{ width: "75%", height: "60%",}}
              style={{ width: "40vw", height: "60vh" }}
            />
          </Box>
        )}
      </Box>
    </div>
  );
};
