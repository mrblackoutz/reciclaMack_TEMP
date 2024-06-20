import CustomTypography from '@/components/CustomTypography';
import { Box } from '@mui/material';
import Image from '@/components/Image';

// Componente para renderizar testemunhos
const Testemunhos = () => {
  return (
    <Box
      bgcolor={'white'}
      width={{ md: '380px', xs: '300px' }}
      height={'180px'}
      borderRadius={2}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'row'}
    >
      <Image
        sx={{
          maxWidth: '30%',
          pl: 2,
        }}
        src="Ativos_Recicla_Mack/imagem-lixo.png"
        alt="Circuitos"
      />
      <Box>
        <CustomTypography variant={'body1'} fontWeight={'bold'}>
          Nomes:{' '}
          <CustomTypography variant={'body1'} component={'span'}>
            Fulano de tal
          </CustomTypography>
        </CustomTypography>
        <CustomTypography variant={'body1'} fontWeight={'bold'}>
          Data:{' '}
          <CustomTypography variant={'body1'} component={'span'}>
            dd/MM/YYYY
          </CustomTypography>
        </CustomTypography>
        <CustomTypography variant={'body1'} fontWeight={'bold'} mt={2}>
          Comentário:{' '}
          <CustomTypography variant={'body1'} component={'span'}>
            Gosto muito do trabalho de vocês
          </CustomTypography>
        </CustomTypography>
      </Box>
    </Box>
  );
};

export default Testemunhos;
