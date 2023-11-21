"use client";
import { Box, Stack, Grid, Typography, useMediaQuery } from "@mui/material";
import { Image } from "../../components/Image";
import { height } from "@mui/system";
import CustomizedButtons from "./customButton";
import { Email } from "@mui/icons-material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import FAQ from "./faq";

const Card = ({ title, description, textButton }) => {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 10,
        overflow: "hidden",
        background: "linear-gradient(44deg, #01D1B8 0%, #10B14A 100%)",
        display: "flex",
        p: { md: 6, xs: 3 },
      }}
    >
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          md={8}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography variant="h4" color="#FFF" mb={3}>
            {title}
          </Typography>
          <Typography variant="body1" color="#FFF" mb={3}>
            {description}
          </Typography>
          <CustomizedButtons
            variant="contained"
            color="primary"
            sx={{ fontWeight: "bold", width: "auto" }}
            size="large"
          >
            {textButton}
          </CustomizedButtons>
        </Grid>

        <Grid item xs={12} md={4} display="flex" justifyContent="center">
          <Box
            component="img"
            src="Ativos_Recicla_Mack/icone-imagem-aleatoria.png"
            alt="Descrição da imagem"
            sx={{
              height: { md: "100%", xs: "auto" },
              maxHeight: { md: "100%", xs: "200px" },
              maxWidth: "100%",
              borderRadius: 3,
            }}
          />
        </Grid>
      </Grid>
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
        padding={"2rem"}
        bgcolor={"#202020"}
        width={"100%"}
        height={{ md: "90vh", sm: "155vh" }}
        justifyContent={"space-between"}
      >
        <Grid item xs={12}>
          <h1>Sugestões / Perguntas</h1>
        </Grid>
        <Grid item xs={12} container spacing={5}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            paddingBottom={"7rem"}
          >
            <Card
              title={"Alguma pergunta?"}
              description={
                "Você tem alguma dúvida sobre o nosso site, os nossos serviços ou os nossos produtos? Nós estamos aqui para te ajudar. Clique no botão abaixo e envie a sua pergunta. Nós responderemos o mais rápido possível."
              }
              textButton={"Perguntas"}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            paddingBottom={"7rem"}
          >
            <Card
              title={"Alguma sugestão?"}
              description={
                "Você tem alguma ideia de como podemos melhorar o nosso site, os nossos serviços ou os nossos produtos? Nós adoraríamos ouvir a sua opinião. Clique no botão abaixo e envie a sua sugestão. Nós agradecemos a sua colaboração."
              }
              textButton={"Sugestões"}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          color: "white",
          bgcolor: "#10B14A",
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 6, md: 3 },
          height: { xs: "auto", md: "80vh" },
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            textAlign: { xs: "center", sm: "left" },
            mb: { sm: 6, xs: 6, md: 2 },
            ml: 2,
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Divulgação de Redes Sociais
          </Typography>
        </Grid>

        <Grid
          item
          container
          spacing={{ md: 20, sm: 10, xs: 5 }}
          justifyContent="center"
        >
          {[
            { IconComponent: EmailIcon, text: "contato@email.com.br" },
            { IconComponent: YouTubeIcon, text: "ReciclaMackFCI" },
            { IconComponent: InstagramIcon, text: "@ReciclaMack_FCI" },
            { IconComponent: RoomIcon, text: "Rua das Avenidas, nº 123" },
            { IconComponent: LinkedInIcon, text: "recicla_mack_FCI" },
            { IconComponent: LocalPhoneIcon, text: "(XX) XXXXX-XXXX" },
          ].map(({ IconComponent, text }, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", minWidth: 250 }}
              >
                <IconComponent
                  sx={{
                    height: 45,
                    width: "auto",
                    p: 0.7,
                    borderRadius: 1.5,
                    bgcolor: "#ffffff",
                    color: "#00995C",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    ml: 1,
                    textDecoration: "underline",
                    whiteSpace: "nowrap",
                  }}
                >
                  {text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <FAQ />
    </div>
  );
};
