import Image from '../components/Image';
import CustomTypography from '../components/CustomTypography';
import { messages } from '@/messages';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <>
      <Box
        bgcolor={'black'}
        color={'black'}
        width={'100%'}
        height={{ md: 400, xs: '100%' }}
        overflow={'hidden'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Image
          src="Ativos_Recicla_Mack/banner1.png"
          alt={messages.homePage.bannerAlt}
          width={'100%'}
          sx={{ opacity: 0.6 }}
        />
        <CustomTypography
          variant="h4"
          sx={{
            position: 'absolute',
            color: '#fff',
          }}
          fontSize={{ md: 40, xs: 25 }}
          p={3}
        >
          {messages.homePage.revitalizando}
        </CustomTypography>
      </Box>
      <Box
        bgcolor={'white'}
        color={'black'}
        width={'100%'}
        height={'auto'}
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row' }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Image
          src="Ativos_Recicla_Mack/imagem-circuitos.png"
          alt="Circuitos"
          sx={{
            maxHeight: { xs: '100%', md: 400 },
            mx: 5,
            my: 10,
          }}
        />
        <Box px={6} pt={{ xs: 0, md: 10 }} pb={10}>
          <CustomTypography variant={'h4'} gutterBottom>
            {messages.homePage.objetivos}
          </CustomTypography>
          <CustomTypography>
            {messages.homePage.objetivosTexto}
          </CustomTypography>
        </Box>
      </Box>
      <Box
        bgcolor={'#00b59f'}
        color={'white'}
        textAlign={'right'}
        width={'100%'}
        height={'auto'}
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row' }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Box px={6} py={{ xs: 2, md: 10 }} pt={{ xs: 10, md: 10 }}>
          <CustomTypography variant={'h4'} gutterBottom>
            {messages.homePage.porqueReciclar}
          </CustomTypography>
          <CustomTypography>
            {messages.homePage.porqueReciclarTexto}
          </CustomTypography>
        </Box>
        <Image
          sx={{
            width: { md: '100%' },
            alignItems: 'center',
            marginRight: { xs: 0, md: 10 },
            marginTop: { md: 0, xs: 5 },
            marginBottom: { md: 0, xs: 5 },
          }}
          src="Ativos_Recicla_Mack/imagem-aparelhos-simbolo.png"
          alt="Circuitos"
        />
      </Box>
    </>
  );
}
