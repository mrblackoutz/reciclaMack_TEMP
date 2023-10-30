import { Box } from "@mui/material";

export default function Evento(props) {
    let lado = "row";
    props.id % 2 == 1 ? lado = "row" : lado = "row-reverse";
    return (
        <Box
            id={props.id}
            display={"flex"}
            flexDirection={lado}
            alignItems={"center"}
            height={"50vh"}

        >
            <Box
                width={"50%"}
                display={"flex"}
                flexDirection={"column"}
            >
                <h1>{props.titulo}</h1>
                <p style={{margin: "0"}}><b>data:</b> {props.data}</p>
                <p style={{margin: "0"}}><b>hora:</b> {props.hora}</p>
                <p style={{margin: "0"}}><b>local:</b> {props.local}</p>
                <p><b>descrição:</b> {props.descricao}</p>
            </Box>
            <Box width={"10%"}></Box>
            <img src={props.imagem} alt={props.titulo} style={{
                width: "50%",
                height: "40vh",
                objectFit: "cover",
                borderRadius: "1rem"
            }}/>
        </Box>

    )
}