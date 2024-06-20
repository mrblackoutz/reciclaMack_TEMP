'use client';
import { Box, Button, Grid, useMediaQuery } from '@mui/material';
import Image from '../../components/Image';
import CustomTypography from '../../components/CustomTypography';
import React from 'react';

const PontosDeColeta = ({
  setpontoColetaAtual,
}: {
  setpontoColetaAtual: (url: string) => void;
}) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {['PDC-1', 'PDC-2', 'PDC-3', 'PDC-4'].map((pdc) => (
        <Grid item key={pdc}>
          <Button
            sx={{
              backgroundColor: '#00844D',
              width: '5rem',
              height: '3rem',
              borderRadius: '10px',
              color: 'white',
              ':hover': {
                backgroundColor: '#00844D',
                opacity: 0.6,
              },
            }}
            onClick={() => {
              setpontoColetaAtual(
                `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1828.7791633713982!2d-46.652534!3d-23.548383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5837c9fcac33%3A0xa7a2e79ac002d158!2sAudit%C3%B3rio%20Ruy%20Barbosa!5e0!3m2!1spt-BR!2sbr!4v1698864412792!5m2!1spt-BR!2sbr`
              );
            }}
          >
            <CustomTypography>{pdc}</CustomTypography>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

const CollectionPoints = () => {
  const isMobile = useMediaQuery('(max-width:700px)');
  const [pontoColetaAtual, setpontoColetaAtual] = React.useState(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.3925302350499!2d-46.65248373357559!3d-23.547959064832384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58364045cacb%3A0x596f44a4faaae3ab!2sPr%C3%A9dio%2049!5e0!3m2!1spt-BR!2sbr!4v1698864015826!5m2!1spt-BR!2sbr'
  );

  return (
    <Grid container direction="column">
      <Grid item>
        <Box
          color={'#FFF'}
          bgcolor={'#00844D'}
          width={'100%'}
          height={{ md: '90vh', xs: '210vh' }}
          paddingX={{ xs: '1rem', md: '2rem' }}
        >
          <Grid container direction="column">
            <Grid item>
              <h1>Como separar os materiais de coleta?</h1>
            </Grid>
            <Grid
              item
              container
              justifyContent="space-evenly"
              alignItems="center"
              spacing={4}
            >
              <Grid item xs={12} md={4}>
                <Grid
                  container
                  direction={{ xs: 'row', md: 'column' }}
                  spacing={2}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <h2>1° Etapa</h2>
                    <CustomTypography
                      fontSize={'.8rem'}
                      style={{ width: '25vw' }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium.
                    </CustomTypography>
                  </Grid>
                  <Grid item>
                    <h2>2° Etapa</h2>
                    <CustomTypography
                      fontSize={'.8rem'}
                      style={{ width: '25vw' }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium.
                    </CustomTypography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src="Ativos_Recicla_Mack/imagem-aparelhos-impilhados.png"
                  alt="Aparelhos empilhados"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid
                  container
                  direction={{ xs: 'row', md: 'column' }}
                  spacing={2}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <h2>3° Etapa</h2>
                    <CustomTypography
                      fontSize={'.8rem'}
                      style={{ width: '25vw' }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium.
                    </CustomTypography>
                  </Grid>
                  <Grid item>
                    <h2>4° Etapa</h2>
                    <CustomTypography
                      fontSize={'.8rem'}
                      style={{ width: '25vw' }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium.
                    </CustomTypography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item>
        <Box
          color={'#FFF'}
          bgcolor={'#10B14A'}
          height={{ md: '90vh', xs: '100%' }}
          width={'100%'}
          padding={'2rem'}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <h1>Onde posso realizar o descarte?</h1>
                </Grid>
                <Grid item>
                  <h2>Pontos de coleta</h2>
                </Grid>
                {isMobile && (
                  <Grid item>
                    <Box display="flex" justifyContent="center">
                      <iframe
                        src={pontoColetaAtual}
                        style={{ border: 0, width: '70vw', height: '60vh' }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </Box>
                  </Grid>
                )}
                {!isMobile && (
                  <PontosDeColeta setpontoColetaAtual={setpontoColetaAtual} />
                )}
                <Grid item>
                  <h3>Locais - ponto de coleta n° 439</h3>
                  <p>
                    Lorem Ipsum é simplesmente uma simulação de texto da
                    indústria tipográfica e de impressos, e vem sendo utilizado
                    desde o século XVI, quando um impressor desconhecido pegou
                    uma bandeja de tipos e os embaralhou para fazer um livro de
                    modelos de tipos. Lorem Ipsum sobreviveu não só a cinco
                    séculos, como também ao salto para a editoração eletrônica.
                  </p>
                </Grid>
                {isMobile && (
                  <PontosDeColeta setpontoColetaAtual={setpontoColetaAtual} />
                )}
              </Grid>
            </Grid>
            {!isMobile && (
              <Grid item xs={12} md={6}>
                <Box display="flex" justifyContent="center">
                  <iframe
                    src={pontoColetaAtual}
                    style={{ border: 0, width: '40vw', height: '60vh' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CollectionPoints;
