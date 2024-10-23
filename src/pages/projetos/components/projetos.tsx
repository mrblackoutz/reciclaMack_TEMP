import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import CustomTypography from '@/components/CustomTypography';
import { messages } from '@/messages';

const items = [
  {
    titulo: 'Nosso Canal',
    imagem: 'https://via.placeholder.com/214x142',
    altText: 'Nosso Canal Imagem',
    corBotao: 'success' as const,
  },
  {
    titulo: 'Nossos Jogos',
    imagem: 'https://via.placeholder.com/214x142',
    altText: 'Nossos Jogos Imagem',
    corBotao: 'secondary' as const,
  },
  {
    titulo: 'Nossos Apps',
    imagem: 'https://via.placeholder.com/214x142',
    altText: 'Nossos Apps Imagem',
    corBotao: 'primary' as const,
  },
];

const ItemProjetos = ({
  titulo,
  imagem,
  altText,
  corBotao,
}: {
  titulo: string;
  imagem: string;
  altText: string;
  corBotao:
    | 'success'
    | 'secondary'
    | 'primary'
    | 'inherit'
    | 'error'
    | 'info'
    | 'warning';
}) => {
  const theme = useTheme();

  return (
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
      <Button
        variant="contained"
        color={corBotao}
        sx={{ borderRadius: 1, fontFamily: theme.typography.fontFamily }}
      >
        {messages.projetosPage.meLeveAteLa}
      </Button>
    </Box>
  );
};

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
        {messages.projetosPage.nossosProjetos}
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
