import { Box } from "@mui/material";

export default function Outros(props) {
    let lado = "row";
    props.id % 2 == 1 ? lado = "row" : lado = "row-reverse";
    return (
        <Box
            id={props.id}
            display={"flex"}
            flexDirection={lado}
            alignItems={"center"}
            color={"#fff"}
        >
            <Box
                width={"50%"}
                display={"flex"}
                flexDirection={"column"}
            >
                <h1>{props.titulo}</h1>
                <p><b>descrição:</b> {props.descricao}</p>
                <button style={{
                    height: "3rem",
                    width: "12rem",
                    backgroundColor: props.buttonbg,
                    color: "#FFF",
                    border: "none",
                    borderRadius: "1rem",
                    fontSize: "1rem",
                }}>Me leve até lá</button>
            </Box>
            <Box width={"10%"}></Box>
            <img src={props.imagem} alt={props.titulo} style={{
                width: "50%",
                height: "50vh",
                objectFit: "cover",
                borderRadius: "1rem"
            }}/>
        </Box>

    )
}