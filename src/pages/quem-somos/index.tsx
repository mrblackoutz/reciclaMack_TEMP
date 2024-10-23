'use client';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from '@/components/Image';
import CustomTypography from '@/components/CustomTypography';
import Carousel from './components/Carousel';
import Objetivo from './components/Objetivos';
import Estudantes from './components/Estudantes';
import Testemunhos from './components/Testemunhos';
import Usuarios from './components/Usuarios';
import { messages } from '@/messages';

// Componente principal WhoWeAre
const WhoWeAre = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div>
      {/* Seção de Apoio Institucional */}
      <Box
        bgcolor={'primary.main'}
        color={'black'}
        width={'100%'}
        height={{ md: 400, xs: '100%' }}
        display={'flex'}
        flexDirection={{ xs: 'column' }}
        justifyContent={'center'}
      >
        <Box ml={10} mb={5}>
          <CustomTypography
            variant={'h4'}
            margin={2}
            fontWeight={'bold'}
            textAlign={'left'}
          >
            {messages.sobreNosPage.apoiadores}
          </CustomTypography>
        </Box>
        <Box ml={10} mr={10} pb={2}>
          <Image
            sx={{
              width: { md: 80, xs: 100 },
              alignItems: 'center',
              m: 0.5,
            }}
            src="Ativos_Recicla_Mack/logo-coopermiti-2.svg"
            alt="Circuitos"
          />
          <Image
            sx={{
              width: { md: 80, xs: 100 },
              alignItems: 'center',
              m: 0.5,
            }}
            src="mackenzie.svg"
            alt="Circuitos"
          />
        </Box>
      </Box>

      {/* Seção de Objetivos e Metas */}
      <Grid
        container
        direction={'column'}
        justifyContent={'center'}
        bgcolor={'white'}
        color={'black'}
        width={'100%'}
        height={'100%'}
        pt={7}
        pb={8}
      >
        <Grid item ml={12} mb={5}>
          <CustomTypography variant={'h4'} fontWeight={'bold'} align={'left'}>
            {messages.sobreNosPage.objetivos}
          </CustomTypography>
        </Grid>
        <Grid
          container
          item
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          spacing={4}
          xs={12}
          height={'100%'}
        >
          <Grid
            item
            xs={12}
            md={4}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Objetivo
              src="Ativos_Recicla_Mack/imagem-lixo.png"
              alt="Circuitos"
              desc="(vazio)"
              title="Reduzir o impacto ambiental"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Objetivo />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Objetivo />
          </Grid>
        </Grid>
      </Grid>

      {/* Seção de Estudantes Parceiros */}
      <Grid
        container
        style={{ backgroundColor: '#10B14A' }}
        pb={8}
        justifyContent={'center'}
      >
        <Grid item xs={12} container>
          <Grid item xs={12} md={12}>
            <CustomTypography
              variant={'h4'}
              ml={10}
              mr={10}
              mt={7}
              mb={5}
              sx={{
                fontWeight: 'bold',
                color: 'white',
              }}
              textAlign={'left'}
            >
              {messages.sobreNosPage.estudantesParceiros}
            </CustomTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} container spacing={4} justifyContent={'center'}>
          <Grid item xs={12} sm={6} md={4}>
            <Estudantes />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Estudantes />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Estudantes />
          </Grid>
        </Grid>
      </Grid>

      {/* Seção de Testemunhos */}
      <Box
        bgcolor={'#00844D'}
        color={'black'}
        width={'100%'}
        height={'100%'}
        display={'flex'}
        flexDirection={{ xs: 'column' }}
        justifyContent={'center'}
      >
        <CustomTypography
          variant={'h4'}
          margin={2}
          ml={12}
          mt={7}
          mb={2}
          fontWeight={'bold'}
          textAlign={'left'}
          color={'white'}
        >
          {messages.sobreNosPage.testemunhos}
        </CustomTypography>
        <CustomTypography
          variant={'h5'}
          fontWeight={'bold'}
          textAlign={'left'}
          color={'white'}
          ml={12}
          mb={5}
        >
          {messages.sobreNosPage.colaboradores}
        </CustomTypography>
        <Box
          display={'flex'}
          flexDirection={'row'}
          width={'100%'}
          justifyContent={'center'}
          pb={8}
          sx={{ overflowX: 'hidden' }}
        >
          <Carousel>
            <Testemunhos />
            <Testemunhos />
            <Testemunhos />
            <Testemunhos />
          </Carousel>
        </Box>
      </Box>

      {/* Seção de Usuários */}
      <Box
        bgcolor={'white'}
        color={'black'}
        width={'100%'}
        height={'100%'}
        display={'flex'}
        flexDirection={{ xs: 'column' }}
        justifyContent={'center'}
      >
        <Box ml={10} mr={10} mt={7} mb={1}>
          <CustomTypography
            variant={'h4'}
            margin={2}
            fontWeight={'bold'}
            textAlign={'left'}
          >
            {messages.sobreNosPage.usuarios}
          </CustomTypography>
        </Box>
        <Box
          ml={10}
          mr={10}
          display={'flex'}
          flexDirection={'row'}
          height={'100%'}
          justifyContent={'center'}
          pb={8}
          sx={{ overflowX: 'hidden' }}
        >
          <Carousel>
            <Usuarios />
            <Usuarios />
            <Usuarios />
          </Carousel>
        </Box>
      </Box>
    </div>
  );
};

export default WhoWeAre;
