import Head from "next/head";
import { Box, Typography, useMediaQuery } from "@mui/material";
import {Image} from "../components/Image";

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
        height={{ md: 450, xs: 300 }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          src="Ativos_Recicla_Mack/imagem-circuitos.png"
          alt="Descrição da imagem"
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
        height={420}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          sx={{ width: "100%", marginLeft: 10 }}
          src="Ativos_Recicla_Mack/imagem-circuitos.png"
          alt="Circuitos"
        />
        <Box ml={10}>
          <Typography variant={isMobile ? "body2" : "h4"}>
            Quais são os objetivos do projeto?
          </Typography>
          <Typography>
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
        height={420}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box ml={10}>
          <Typography variant={isMobile ? "body2" : "h4"}>
            Quais são os objetivos do projeto?
          </Typography>
          <Typography>
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
          sx={{ width: "100%", marginRight: 10 }}
          src="Ativos_Recicla_Mack/imagem-circuitos.png"
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
