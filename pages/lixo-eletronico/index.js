"use client";
import Head from "next/head";
import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
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
        bgcolor={"primary.main"}
        color={"black"}
        width={"100%"}
        height={{ xl: 500, md: 400, xs: "100%" }}
        overflow={"hidden"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          src="Ativos_Recicla_Mack/banner2.png"
          alt="Descrição da imagem"
          width={"100%"}
          //sx={{ opacity: 0.6 }}
        />
      </Box>
      <Box
        bgcolor={"primary.main"}
        color={"white"}
        width={"100%"}
        height={{ md: 420, xs: "100%" }}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box ml={10} mr={10} pt={{ md: 0, xs: 5 }} pb={{ md: 0, xs: 5 }}>
          <Typography
            variant={"h4"}
            marginBottom={4}
            sx={{ fontWeight: "bold" }}
          >
            O que devemos reciclar?
          </Typography>
          <Grid container>
            <Grid item xs>
              <Typography variant={"h5"} fontWeight={"bold"} marginBottom={2}>
                Quais materiais podem ser reciclados?
              </Typography>
              <Typography marginBottom={isMobile ? 2 : 0}>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                e os embaralhou para fazer um livro de modelos de tipos. Lorem
                Ipsum sobreviveu não só a cinco séculos, como também ao salto
                para a editoração eletrônica, permanecendo essencialmente
                inalterado. Se popularizou na década de 60, quando a Letraset
                lançou decalques contendo passagens de Lorem Ipsum, e mais
                recentemente quando passou a ser integrado a softwares de
                editoração eletrônica como Aldus PageMaker.
              </Typography>
            </Grid>
            <Divider
              orientation="vertical"
              variant="middle"
              color="white"
              flexItem
              sx={{ ml: 2, mr: 2, width: 3 }}
            />
            <Grid item xs>
              <Typography variant={"h5"} fontWeight={"bold"} marginBottom={2}>
                Como descartar os não recicláveis?
              </Typography>
              <Typography marginBottom={isMobile ? 2 : 0}>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                e os embaralhou para fazer um livro de modelos de tipos. Lorem
                Ipsum sobreviveu não só a cinco séculos, como também ao salto
                para a editoração eletrônica, permanecendo essencialmente
                inalterado. Se popularizou na década de 60, quando a Letraset
                lançou decalques contendo passagens de Lorem Ipsum, e mais
                recentemente quando passou a ser integrado a softwares de
                editoração eletrônica como Aldus PageMaker.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        bgcolor={"white"}
        color={"black"}
        width={"100%"}
        height={"100%"}
        pt={6}
        pb={6}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        alignItems={"center"} // centraliza no eixo Y
        justifyContent={"center"} // centraliza no eixo X
      >
        <Box ml={10} mr={10}>
          <Typography variant={"h4"} marginBottom={4}>
            Como devemos reciclar
          </Typography>
          <Typography variant={"h5"} fontWeight={"bold"} marginBottom={4}>
            Como se dá o processo de reciclagem?
          </Typography>
          <Grid container>
            <Grid item xs>
              <Typography variant={"h5"} marginBottom={2}>
                1° Fase do processo
              </Typography>
              <Typography marginBottom={isMobile ? 2 : 0} ml={isMobile ? 2 : 8}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                a efficitur est. Cras nec consectetur orci, at aliquet urna.
                Aliquam malesuada
              </Typography>
              <Typography variant={"h5"} marginBottom={2}>
                2° Fase do processo
              </Typography>
              <Typography marginBottom={isMobile ? 2 : 0} ml={isMobile ? 2 : 8}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                a efficitur est. Cras nec consectetur orci, at aliquet urna.
                Aliquam malesuada
              </Typography>
            </Grid>
            <Divider
              orientation="vertical"
              variant="middle"
              color="black"
              flexItem
              sx={{ ml: 5, mr: 6, width: 2 }}
            />
            <Grid
              item
              xs
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src="Ativos_Recicla_Mack/banner2.png"
                alt="Descrição da imagem"
                width={"100%"}
                borderRadius={3}
                //sx={{ opacity: 0.6 }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              xs
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src="Ativos_Recicla_Mack/banner2.png"
                alt="Descrição da imagem"
                width={"100%"}
                borderRadius={3}
                //sx={{ opacity: 0.6 }}
              />
            </Grid>
            <Divider
              orientation="vertical"
              variant="middle"
              color="black"
              flexItem
              sx={{ ml: 2, mr: 8, width: 2 }}
            />
            <Grid item xs>
              <Typography variant={"h5"} marginBottom={2}>
                3° Fase do processo
              </Typography>
              <Typography marginBottom={isMobile ? 2 : 0} ml={isMobile ? 2 : 8}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                a efficitur est. Cras nec consectetur orci, at aliquet urna.
                Aliquam malesuada
              </Typography>
              <Typography variant={"h5"} marginBottom={2}>
                4° Fase do processo
              </Typography>
              <Typography marginBottom={isMobile ? 2 : 0} ml={isMobile ? 2 : 8}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                a efficitur est. Cras nec consectetur orci, at aliquet urna.
                Aliquam malesuada
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
