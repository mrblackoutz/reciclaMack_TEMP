"use client";
import Head from "next/head";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { Image } from "../../components/Image";

export default function Home() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <Head>
        <title>ReciclaMack - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        bgcolor={"white"}
        color={"black"}
        width={"100%"}
        height={{ md: 1300, xs: "100%" }}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid container spacing={6} direction={"column"}>
          <Grid item xs>
            <Typography
              variant={"h3"}
              ml={12}
              mb={-1}
              fontWeight={"bold"}
            >
              Eventos
            </Typography>
          </Grid>
          <Grid item xs display={"flex"} flexDirection={"row"}>
            <Box ml={12} mr={12}>
              <Typography variant={"h4"} marginBottom={4} fontWeight={"bold"}>
                Túnel sensorial
              </Typography>
              <Typography variant={"body1"} fontWeight={"bold"}>
                Data:{" "}
                <Typography variant={"body1"} component={"span"}>
                  dd/MM/YYYY
                </Typography>
              </Typography>
              <Typography variant={"body1"} fontWeight={"bold"}>
                Local:{" "}
                <Typography variant={"body1"} component={"span"}>
                  endereço do local, nº 439
                </Typography>
              </Typography>
              <Typography variant={"body1"} fontWeight={"bold"}>
                Hora:{" "}
                <Typography variant={"body1"} component={"span"}>
                  00:00
                </Typography>
              </Typography>
              <Typography variant={"body1"} fontWeight={"bold"} mt={2}>
                Descrição:{" "}
                <Typography variant={"body1"} component={"span"}>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria
                  tipográfica e de impressos, e vem sendo
                </Typography>
              </Typography>
            </Box>
            <Image
              sx={{
                height: { md: "100%" },
                alignItems: "center",
                marginRight: { xs: 0, md: 10 },
                marginTop: { md: 0, xs: 5 },
                marginBottom: { md: 0, xs: 5 },
              }}
              src="Ativos_Recicla_Mack/imagem-tunel.png"
              alt="tunel"
            />
          </Grid>
          <Grid item xs display={"flex"} flexDirection={"row"}>
            <Image
              sx={{
                height: { md: "100%" },
                alignItems: "center",
                marginRight: { xs: 0, md: 10 },
                marginLeft: { xs: 0, md: 10 },
                marginTop: { md: 0, xs: 5 },
                marginBottom: { md: 0, xs: 5 },
              }}
              src="Ativos_Recicla_Mack/imagem-gincana.png"
              alt="tunel"
            />
            <Box ml={12} mr={12}>
              <Typography variant={"h4"} marginBottom={4} fontWeight={"bold"}>
                Gincana
              </Typography>
              <Typography variant={"body1"} fontWeight={"bold"}>
                Data:{" "}
                <Typography variant={"body1"} component={"span"}>
                  dd/MM/YYYY
                </Typography>
              </Typography>
              <Typography variant={"body1"} fontWeight={"bold"}>
                Local:{" "}
                <Typography variant={"body1"} component={"span"}>
                  endereço do local, nº 439
                </Typography>
              </Typography>
              <Typography variant={"body1"} fontWeight={"bold"}>
                Hora:{" "}
                <Typography variant={"body1"} component={"span"}>
                  00:00
                </Typography>
              </Typography>
              <Typography variant={"body1"} fontWeight={"bold"} mt={2}>
                Descrição:{" "}
                <Typography variant={"body1"} component={"span"}>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria
                  tipográfica e de impressos, e vem sendo
                </Typography>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs display={"flex"} flexDirection={"row"}>
            <Box ml={12} mr={12}>
              <Typography variant={"h4"} marginBottom={4} fontWeight={"bold"}>
                Exposição do e-lixo
              </Typography>
              <Typography variant={"body1"} fontWeight={"bold"}>
                Data:{" "}
                <Typography variant={"body1"} component={"span"}>
                  dd/MM/YYYY
                </Typography>
              </Typography>
              <Typography variant={"body1"} fontWeight={"bold"}>
                Local:{" "}
                <Typography variant={"body1"} component={"span"}>
                  endereço do local, nº 439
                </Typography>
              </Typography>
              <Typography variant={"body1"} fontWeight={"bold"}>
                Hora:{" "}
                <Typography variant={"body1"} component={"span"}>
                  00:00
                </Typography>
              </Typography>
              <Typography variant={"body1"} fontWeight={"bold"} mt={2}>
                Descrição:{" "}
                <Typography variant={"body1"} component={"span"}>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria
                  tipográfica e de impressos, e vem sendo
                </Typography>
              </Typography>
            </Box>
            <Image
              sx={{
                height: { md: "100%" },
                alignItems: "center",
                marginRight: { xs: 0, md: 10 },
                marginTop: { md: 0, xs: 5 },
                marginBottom: { md: 0, xs: 5 },
              }}
              src="Ativos_Recicla_Mack/imagem-exposicao.png"
              alt="tunel"
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        bgcolor={"primary.main"}
        color={"black"}
        width={"100%"}
        height={{ md: 420, xs: "100%" }}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box ml={10} mr={10} textAlign={"right"} color={"white"}>
          <Typography
            variant={"h4"}
            marginBottom={2}
            marginTop={isMobile ? 5 : 0}
          >
            Porque reciclar e-lixo?
          </Typography>
          <Typography marginBottom={isMobile ? 2 : 0}>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos, como também ao salto para a
            editoração eletrônica, permanecendo essencialmente inalterado. Se
            popularizou na década de 60, quando a Letraset lançou decalques
            contendo passagens de Lorem Ipsum, e mais recentemente quando passou
            a ser integrado a softwares de editoração eletrônica como Aldus
            PageMaker.
          </Typography>
        </Box>
        <Image
          sx={{
            width: { md: "100%" },
            alignItems: "center",
            marginRight: { xs: 0, md: 10 },
            marginTop: { md: 0, xs: 5 },
            marginBottom: { md: 0, xs: 5 },
          }}
          src="Ativos_Recicla_Mack/image_53.png"
          alt="Circuitos"
        />
      </Box>
    </div>
  );
}
