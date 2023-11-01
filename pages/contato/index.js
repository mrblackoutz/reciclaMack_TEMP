"use client";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { Image } from "../../components/Image";
import { height } from "@mui/system";
import CustomizedButtons from "./customButton";
import { Email } from "@mui/icons-material";

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

const Card = (props) => {
  const {title, description, textButton} = props
  return (
    <Box
      width={"100%"}
      height={300}
      sx={{ background: "linear-gradient(44deg, #01D1B8 0%, #10B14A 100%)" }}
      borderRadius={10}
      p={5}
      ml={5}
    >
      <Typography variant={"h4"} color={"#FFF"}>
        {title}
      </Typography>
      <Typography variant={"body1"} color={"#FFF"}>
        {description}
      </Typography>
      <CustomizedButtons variant={"contained"} color={"primary"} sx={{ fontWeight: 'bold'}} size={"large"}>
        {textButton}
      </CustomizedButtons>
    </Box>
  );
};

export default () => {
  const isMobile = useMediaQuery("(max-width:700px)");
  return (
    <div>
      <Grid
        container
        color={"white"}
        display={"flex"}
        flexDirection={"column"}
        padding={"2rem"}
        bgcolor={"#202020"}
        width={"100%"}
        height={{ md: "90vh", xs: "110vh" }}
        justifyContent={"space-between"}
      >
        <h1>Sugestões / Perguntas</h1>
        <Grid item>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            paddingBottom={"7rem"}
          >
            <Card
              title={"Alguma pergunta?"}
              description={"Descrição da pergunta 1"}
              textButton={"Perguntas"}
            />
            <Card
              title={"Alguma sugestão?"}
              description={"Descrição da sugestão 1"}
              textButton={"Sugestões"}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        color={"white"}
        style={{
          backgroundColor: "#10B14A",
          padding: "2rem",
          height: "90vh",
          width: "100%",
        }}
        direction="row"
        justify="space-evenly"
      >
        <Grid
          item
          xs={12}
          md={12}
          container
          direction="column"
          alignItems="left"
        >
          <Typography variant={"h4"} fontWeight={"bold"}>
            Divulgação de Redes Sociais
          </Typography>
        </Grid>

        <Grid item xs={12} container direction="row" alignItems="center">
          <Grid item>
            <Email />
          </Grid>
          <Grid item>
            <Email />
          </Grid>
          <Grid item>
            <Email />
          </Grid>
          <Grid item>
            <Email />
          </Grid>
          <Grid item>
            <Email />
          </Grid>
          <Grid item>
            <Email />
          </Grid>
        </Grid>
      </Grid>
      <Box bgcolor={"white"} height={{ md: 400, xs: "100%" }}></Box>
    </div>
  );
};
