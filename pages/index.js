'use client'
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
            A prática da economia circular e a reciclagem são fundamentais 
              para prolongar a vida útil dos materiais eletrônicos. A reciclagem possibilita 
                a reutilização de recursos valiosos, reduzindo a necessidade de extrair novas 
                  matérias-primas e diminuindo a poluição associada à fabricação de novos dispositivos. 
            Organizações dedicadas, como a COPERMITI, desempenham um papel fundamental nesse processo, 
                    promovendo e facilitando a reciclagem responsável de equipamentos eletrônicos. O 
                    descarte consciente e a reciclagem do lixo eletrônico não apenas preservam o ambiente, 
                      mas também fomentam um consumo mais sustentável, contribuindo para uma sociedade mais 
                      responsável e comprometida com a preservação do planeta. 
            Cada indivíduo tem um papel crucial nessa jornada em direção a um futuro mais sustentável.
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
    </div>
  );
}
