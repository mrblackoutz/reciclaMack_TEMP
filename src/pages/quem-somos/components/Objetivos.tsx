import CustomTypography from '@/components/CustomTypography';
import Box from '@mui/material/Box';
import Image from '@/components/Image';

// Componente para renderizar um objetivo
interface ObjetivoProps {
  src?: string;
  title?: string;
  desc?: string;
  alt?: string;
}

const Objetivo: React.FC<ObjetivoProps> = (props) => {
  const { src, title, desc, alt } = props;
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      width={'30%'}
      justifyContent={'center'}
    >
      <Image
        sx={{
          width: { md: '80%', xs: '60%' },
        }}
        src={src}
        alt={alt}
      />
      <CustomTypography variant={'h5'}>{title}</CustomTypography>
      <CustomTypography variant={'body1'} textAlign={'center'} mt={4}>
        {desc}
      </CustomTypography>
    </Box>
  );
};

export default Objetivo;
