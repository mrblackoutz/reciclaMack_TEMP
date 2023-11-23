"use client";
import { Box, useMediaQuery } from "@mui/material";
import Evento from "./evento";
import Outros from "./outrosItens";
import Projetos from "./projetos";
import DetalhesEvento from "./evento";

export default function () {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      justifyContent={"center"}
      height={"100%"}
    >
      <Box paddingX={{ md: "10rem", xs: "1rem" }} height={"100%"}>
        <DetalhesEvento
          titulo={"Gincana"}
          data={"12/12/2022"}
          local={"endereço do local, nº 439"}
          hora={"10:00"}
          descricao={
            "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo"
          }
          imagem={"https://via.placeholder.com/2000x900"}
        />
      </Box>
      <Projetos />
    </Box>
  );
}
