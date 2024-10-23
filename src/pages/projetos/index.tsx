'use client';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Projetos from './components/projetos';
import DetalhesEvento from './components/evento';

function Projects() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'flex-start'}
      justifyContent={'center'}
      height={'100%'}
    >
      <Box paddingX={{ md: '10rem', xs: '1rem' }} height={'100%'}>
        <DetalhesEvento
          titulo={'Gincana'}
          data={'12/12/2022'}
          local={'endereço do local, nº 439'}
          hora={'10:00'}
          descricao={
            'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo'
          }
          imagem={'https://via.placeholder.com/2000x900'}
        />
      </Box>
      <Projetos />
    </Box>
  );
}

export default Projects;
