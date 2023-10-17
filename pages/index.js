import Head from "next/head";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Image } from "../components/Image";

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
        height={{ md: 400, xs: "100%" }}
        overflow={"hidden"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          src="Ativos_Recicla_Mack/banner1.png"
          alt="Descrição da imagem"
          width={"100%"}
        />
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            color: "#fff",
          }}
        >
          Seu texto aqui
        </Typography>
      </Box>
      <Box
        bgcolor={"white"}
        color={"black"}
        width={"100%"}
        height={{ md: 420, xs: "100%" }}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          sx={{
            width: { md: "100%" },
            alignItems: "center",
            marginLeft: { xs: 0, md: 10 },
            marginTop: { md: 0, xs: 5 },
            marginBottom: { md: 0, xs: 5 },
          }}
          src="Ativos_Recicla_Mack/imagem-circuitos.png"
          alt="Circuitos"
        />
        <Box ml={10} mr={10}>
          <Typography variant={"h4"} marginBottom={2}>
            Quais são os objetivos do projeto?
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
      </Box>
      <Box
        bgcolor={"#00b59f"}
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
            marginTop={isMobile ? 2 : 0}
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

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
