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
        <Grid container spacing={12}>
          <Grid item xs paddingLeft={50}>
            <Typography variant={"h4"} marginBottom={4} fontWeight={"bold"}>
              O que devemos reciclar?1
            </Typography>
            <Typography marginBottom={isMobile ? 2 : 0}>
              Lorem Ipsum é simplesmente uma similiar de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
              sobreviveu não só a cinco séculos, como também ao salto para a
              editoração eletrônica, permanecendo essencialmente inalterado. Se
              popularizou na década de 60, quando a Letraset lançou decalques
              contendo passagens de Lorem Ipsum, e mais recentemente
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant={"h4"} marginBottom={4} fontWeight={"bold"} >
              O que devemos reciclar?2
            </Typography>
            <Typography marginBottom={isMobile ? 2 : 0}>
              Lorem Ipsum é simplesmente uma similiar de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
              sobreviveu não só a cinco séculos, como também ao salto para a
              editoração eletrônica, permanecendo essencialmente inalterado. Se
              popularizou na década de 60, quando a Letraset lançou decalques
              contendo passagens de Lorem Ipsum, e mais recentemente
            </Typography>
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
