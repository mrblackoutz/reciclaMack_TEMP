import { Box, Button } from '@mui/material';
import Image from 'next/image';

export interface OutrosProps {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  buttonbg: string;
}

export default function Outros(props: OutrosProps) {
  const { id, titulo, descricao, imagem, buttonbg } = props;

  return (
    <Box
      id={`${id}`}
      display={'flex'}
      flexDirection={id % 2 === 1 ? 'row' : 'row-reverse'}
      alignItems={'center'}
      color={'#fff'}
    >
      <Box width={'50%'} display={'flex'} flexDirection={'column'}>
        <h1>{titulo}</h1>
        <p>
          <b>descrição:</b> {descricao}
        </p>
        <Button
          style={{
            height: '3rem',
            width: '12rem',
            backgroundColor: buttonbg,
            color: '#FFF',
            border: 'none',
            borderRadius: '1rem',
            fontSize: '1rem',
          }}
        >
          Me leve até lá
        </Button>
      </Box>
      <Box width={'10%'}></Box>
      <Image
        src={imagem}
        alt={titulo}
        style={{
          width: '50%',
          height: '50vh',
          objectFit: 'cover',
          borderRadius: '1rem',
        }}
      />
    </Box>
  );
}
