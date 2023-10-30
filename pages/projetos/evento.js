import { Box, Typography } from "@mui/material";

export default function Evento(props) {
    const {id, date, local, hora, imagem, descricao, titulo} = props;
    
    return (
      <Box
        id={props.id}
        display={"flex"}
        flexDirection={id % 2 == 1 ? "row" : "row-reverse"}
        alignItems={"center"}
        height={"50vh"}
      >
        <Box width={"50%"} display={"flex"} flexDirection={"column"}>
          <h1>{titulo}</h1>
          <Typography variant={"body1"} fontWeight={"bold"}>
            Data:{" "}
            <Typography variant={"body1"} component={"span"}>
              {date || "dd/MM/YYYY"}
            </Typography>
          </Typography>
          <Typography variant={"body1"} fontWeight={"bold"}>
            local:{" "}
            <Typography variant={"body1"} component={"span"}>
              {local || "Rua "}
            </Typography>
          </Typography>
          <Typography variant={"body1"} fontWeight={"bold"} paragraph>
            Hora:{" "}
            <Typography variant={"body1"} component={"span"}>
              {hora || "12:00"}
            </Typography>
          </Typography>
          <Typography variant={"body1"} fontWeight={"bold"} paragraph>
            Descrição:{" "}
            <Typography variant={"body1"} component={"span"}>
              {descricao || "descricao"}
            </Typography>
          </Typography>
        </Box>
        <Box width={"10%"}></Box>
        <img
          src={imagem}
          alt={titulo}
          style={{
            width: "50%",
            height: "40vh",
            objectFit: "cover",
            borderRadius: "1rem",
          }}
        />
      </Box>
    );
}