'use client'
import { Box, Typography } from "@mui/material"


export default () =>{
    return (
        <div>
            <Box 
                color={"#FFF"}
                display={"flex"}
                flexDirection={"column"}
                padding={"2rem"}
                bgcolor={"#00844D"}
                width={"100%"}
                height={"90vh"}
                justifyContent={"space-between"}
                >
                <h1>Como separar os materiais de coleta?</h1>
                <Box
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                    paddingBottom={"7rem"}
                >
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        paddingRight={"1rem"}
                    >
                        <Box>
                            <h2>1° Etapa</h2>
                            <Typography
                                fontSize={".8rem"}
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</Typography>
                        </Box>
                        <Box>
                            <h2>2° Etapa</h2>
                            <Typography
                                fontSize={".8rem"}
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</Typography>
                        </Box>
                    </Box>

                    <img src="Ativos_Recicla_Mack/banner1.png" style={{
                        width:"35rem",
                        height:"20rem",
                    }}/>

                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        padding={"1rem"}
                    >
                        <Box>
                            <h2>3° Etapa</h2>
                            <Typography
                                fontSize={".8rem"}
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</Typography>
                        </Box>
                        <Box>
                            <h2>4° Etapa</h2>
                            <Typography
                                fontSize={".8rem"}
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box 
                color={"#FFF"}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                padding={"2rem"}
                bgcolor={"#10B14A"}
                height={"90vh"}
                width={"100%"}
            >
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    width={"50%"}
                >
                    <h1>Onde posso realizar o descarte?</h1>
                    <h2>Pontos de coleta</h2>
                    <Box
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={"space-evenly"}
                    >
                        <Box bgcolor={"#00844D"} width={"5rem"} borderRadius={"10px"} textAlign={"center"}>
                            <p>PDC-1</p>
                        </Box>
                        <Box bgcolor={"#00844D"} width={"5rem"} borderRadius={"10px"} textAlign={"center"}>
                            <p>PDC-2</p>
                        </Box>
                        <Box bgcolor={"#00844D"} width={"5rem"} borderRadius={"10px"} textAlign={"center"}>
                            <p>PDC-3</p>
                        </Box>
                        <Box bgcolor={"#00844D"} width={"5rem"} borderRadius={"10px"} textAlign={"center"}>
                            <p>PDC-4</p>
                        </Box>
                    </Box>
                    <Box>
                        <h3>Locais - ponto de coleta n° 439</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante euismod, bibendum sapien vel, aliquet enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante euismod, bibendum sapien vel, aliquet enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante euismod, bibendum sapien vel, aliquet enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante euismod, bibendum sapien vel, aliquet enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante euismod, bibendum sapien vel, aliquet enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante euismod, bibendum sapien vel, aliquet enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante euismod, bibendum sapien vel, aliquet enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante euismod, bibendum sapien vel, aliquet enim.</p>
                    </Box>
                </Box>
                <Box
                    width={"50%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <img src="Ativos_Recicla_Mack/banner2.png" style={{
                        width:"75%",
                        height:"60%",
                    }}/>
                </Box>
            </Box>
        </div>
    )
}