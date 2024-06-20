import CustomTypography from '@/components/CustomTypography';
import { Box } from '@mui/material';
import Image from '@/components/Image';

// Componente para renderizar informações sobre os estudantes
const Estudantes = () => {
  return (
    <Box ml={4} mr={4}>
      {/* Box superior com imagem */}
      <Box
        borderRadius={'10px 10px 0px 0px'}
        height={'150px'}
        width={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignContent={'center'}
        alignItems={'center'}
        bgcolor={'#00844D'}
      >
        <Image
          sx={{
            width: { md: 'auto' },
            height: { md: 70 },
          }}
          src="Ativos_Recicla_Mack/icone-imagem-duas-peassoas.png"
          alt="Circuitos"
        />
      </Box>
      {/* Box inferior com informações do estudante */}
      <Box
        height={'200px'}
        width={'100%'}
        bgcolor={'primary.main'}
        borderRadius={'0px 0px 10px 10px'}
        pt={4}
        pl={2}
        pr={2}
        color={'white'}
      >
        <CustomTypography variant={'body1'} fontWeight={'bold'}>
          Nomes:{' '}
          <CustomTypography variant={'body1'} component={'span'}>
            Fulano de tal
          </CustomTypography>
        </CustomTypography>
        <CustomTypography variant={'body1'} fontWeight={'bold'}>
          Curso:{' '}
          <CustomTypography variant={'body1'} component={'span'}>
            Ciências da computação
          </CustomTypography>
        </CustomTypography>
        <CustomTypography variant={'body1'} fontWeight={'bold'}>
          Região:{' '}
          <CustomTypography variant={'body1'} component={'span'}>
            Fulano de tal
          </CustomTypography>
        </CustomTypography>
      </Box>
    </Box>
  );
};

export default Estudantes;
