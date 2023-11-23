'use client'
import Head from "next/head";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Image } from "../components/Image";

export default function Home() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Head>
        <title>ReciclaMack - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        bgcolor={"black"}
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
          sx={{ opacity: 0.6 }}
        />
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            color: "#fff",
          }}
          fontSize={{ md: 40, xs: 25 }}
          p={3}
        >
          Revitalizando a Tecnologia, Reenergizando o Planeta!
        </Typography>
      </Box>
      <Box
        bgcolor={"white"}
        color={"black"}
        width={"100%"}
        height={"auto"}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          src="Ativos_Recicla_Mack/imagem-circuitos.png"
          alt="Circuitos"
          maxWidth="100%" // Garantia de responsividade
          sx={{
            maxHeight: { md: 400 },
            mx: 5,
            my: 10,
          }}
        />
        <Box px={6} pt={{ xs: 0, md: 10 }} pb={10}>
          <Typography variant={"h4"} gutterBottom>
            Quais são os objetivos do projeto?
          </Typography>
          <Typography>
            Nosso projeto visa moldar práticas sustentáveis na gestão do lixo
            eletrônico: conscientizar a comunidade da FCI sobre a reciclagem,
            instruir sobre a separação correta de resíduos, e indicar os pontos
            de descarte adequado. Junte-se a nós nessa jornada verde!
          </Typography>
        </Box>
      </Box>
      <Box
        bgcolor={"#00b59f"}
        color={"white"}
        textAlign={"right"}
        width={"100%"}
        height={"auto"}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box px={6} py={{ xs: 2, md: 10 }} pt={{ xs: 10, md: 10 }}>
          <Typography variant={"h4"} gutterBottom>
            Porque reciclar e-lixo?
          </Typography>
          <Typography>
            A reciclagem de e-lixo é essencial não apenas para conservar
            recursos naturais valiosos, mas também para prevenir a contaminação
            ambiental. Dispositivos eletrônicos descartados incorretamente podem
            liberar substâncias perigosas, contribuindo para a poluição do solo
            e da água. Ao reciclar, reduzimos o consumo de energia, minimizamos
            a emissão de gases de efeito estufa e apoiamos uma economia
            circular, garantindo que materiais valiosos possam ser reutilizados
            em novos produtos.
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
          src="Ativos_Recicla_Mack/imagem-aparelhos-simbolo.png"
          alt="Circuitos"
        />
      </Box>
    </>
  );
}
