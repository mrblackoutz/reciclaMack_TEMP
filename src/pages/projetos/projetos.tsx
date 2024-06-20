import React from 'react';
import { Box, Grid, Button } from '@mui/material';
import CustomTypography from '../../components/CustomTypography';

const items = [
  {
    titulo: 'Nosso Canal',
    imagem: 'https://via.placeholder.com/214x142',
    altText: 'Nosso Canal Imagem',
    corBotao: 'success',
  },
  {
    titulo: 'Nossos Jogos',
    imagem: 'https://via.placeholder.com/214x142',
    altText: 'Nossos Jogos Imagem',
    corBotao: 'secondary',
  },
  {
    titulo: 'Nossos Apps',
    imagem: 'https://via.placeholder.com/214x142',
    altText: 'Nossos Apps Imagem',
    corBotao: 'primary',
  },
];

const ItemProjetos = ({ titulo, imagem, altText, corBotao }) => (
  <Box
    sx={{
      bgcolor: '#202020',
      borderRadius: 2,
      p: 2,
      width: 300,
      height: 330.07,
    }}
  >
    <CustomTypography variant="h6" color="white" fontWeight="700" mb={2}>
      {titulo}
    </CustomTypography>
    <Box
      component="img"
      src={imagem}
      alt={altText}
      sx={{ borderRadius: 2, mb: 2, width: '100%', height: 'auto' }}
    />
    <Button variant="contained" color={corBotao} sx={{ borderRadius: 1 }}>
      Acesse
    </Button>
  </Box>
);

const Projetos = () => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: 616,
        bgcolor: 'white',
      }}
    >
      <CustomTypography
        variant="h4"
        fontWeight="600"
        sx={{
          my: 4,
          textAlign: 'center',
        }}
      >
        Nossos Projetos
      </CustomTypography>
      <Grid
        container
        spacing={6}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ p: 2 }}
      >
        {items.map((item, index) => (
          <Grid key={index} item>
            <ItemProjetos {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projetos;
