'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomTypography from '../../components/CustomTypography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import RecyclingIcon from '@mui/icons-material/Recycling';

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Box
        bgcolor={'primary.main'}
        color={'white'}
        width={'100%'}
        height={'auto'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        py={8}
        px={{ xs: 2, md: 10 }}
      >
        <CustomTypography variant={'h3'} align={'center'} gutterBottom>
          Revitalizando a Tecnologia, Reenergizando o Planeta!
        </CustomTypography>
        <CustomTypography
          variant={'h6'}
          textAlign={'center'}
          sx={{ mx: '20vw' }}
        >
          Nosso projeto promove práticas sustentáveis na gestão de resíduos
          eletrônicos, buscando transformar a forma como lidamos com o lixo
          tecnológico.
        </CustomTypography>
      </Box>

      <Container maxWidth="lg">
        <Box py={8} my={4}>
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={5}>
              <Card elevation={3}>
                <CardMedia
                  component="img"
                  height="300"
                  image="Ativos_Recicla_Mack/eletronicos-espalhados.jpg"
                  alt="Lixo eletrônico"
                />
                <Box position="relative">
                  <CardContent>
                    <CustomTypography variant="h5" component="div" gutterBottom>
                      O que devemos reciclar?
                    </CustomTypography>
                    <CustomTypography variant="body1" color="text.secondary">
                      Uma ampla variedade de equipamentos que um dia foram
                      alimentados por energia elétrica, pilhas ou baterias pode
                      ser reciclada. Isso inclui aparelhos eletrônicos,
                      ferramentas elétricas e todas as suas partes associadas.
                    </CustomTypography>
                  </CardContent>
                  <CardContent>
                    <IconButton onClick={handleExpandClick}>
                      <ExpandMore />
                    </IconButton>
                  </CardContent>
                </Box>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <CustomTypography paragraph>
                      Faça parte do movimento sustentável, contribuindo para o
                      descarte responsável desses itens e promovendo um ambiente
                      mais limpo e saudável para todos.
                    </CustomTypography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card elevation={3}>
                <CardMedia
                  component="img"
                  height="300"
                  image="Ativos_Recicla_Mack/alunos-reciclando-bancada.jpg"
                  alt="Alunos reciclando"
                />
                <CardContent>
                  <CustomTypography variant="h5" component="div" gutterBottom>
                    Como devemos reciclar
                  </CustomTypography>
                  <CustomTypography variant="body1" color="text.secondary">
                    O processo de reciclagem envolve várias etapas, desde a
                    coleta e triagem até a desmontagem, recuperação de
                    componentes valiosos e tratamento de substâncias tóxicas.
                    Quando possível, alguns dispositivos podem ser
                    recondicionados e reutilizados.
                  </CustomTypography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box bgcolor={'primary.main'} color={'white'} py={8} my={4}>
          <CustomTypography variant="h4" align="center" gutterBottom>
            Por que reciclar lixo eletrônico?
          </CustomTypography>
          <CustomTypography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            gutterBottom
          >
            Entenda os benefícios da reciclagem de lixo eletrônico.
          </CustomTypography>
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={3}>
              <Card style={{ backgroundColor: 'secondary.main' }}>
                <CardContent>
                  <RecyclingIcon fontSize="large" color="primary" />
                  <CustomTypography variant="h6" component="div" gutterBottom>
                    Economia Circular
                  </CustomTypography>
                  <CustomTypography variant="body1" color="text.secondary">
                    A reciclagem prolonga a vida útil dos materiais eletrônicos,
                    reduzindo a extração de novas matérias-primas e a poluição
                    na fabricação de novos dispositivos.
                  </CustomTypography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card style={{ backgroundColor: 'secondary.main' }}>
                <CardContent>
                  <RecyclingIcon fontSize="large" color="primary" />
                  <CustomTypography variant="h6" component="div" gutterBottom>
                    Proteção Ambiental
                  </CustomTypography>
                  <CustomTypography variant="body1" color="text.secondary">
                    Descartar e reciclar lixo eletrônico adequadamente protege o
                    meio ambiente e incentiva um consumo mais sustentável.
                  </CustomTypography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card style={{ backgroundColor: 'secondary.main' }}>
                <CardContent>
                  <RecyclingIcon fontSize="large" color="primary" />
                  <CustomTypography variant="h6" component="div" gutterBottom>
                    Responsabilidade Individual
                  </CustomTypography>
                  <CustomTypography variant="body1" color="text.secondary">
                    Cada pessoa tem um papel importante na construção de um
                    futuro mais sustentável, ao adotar práticas de descarte e
                    reciclagem conscientes.
                  </CustomTypography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
