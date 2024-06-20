import React from 'react';
import { Box } from '@mui/material';
import CustomTypography from '@/components/CustomTypography';

interface DetalhesEventoProps {
  titulo: string;
  data: string;
  local: string;
  hora: string;
  descricao: string;
  imagem: string;
}

const DetalhesEvento: React.FC<DetalhesEventoProps> = (props) => {
  const { titulo, data, local, hora, descricao, imagem } = props;
  return (
    <Box sx={{ width: '100%', height: 580, position: 'relative' }}>
      <img
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Imagem absoluta
        src={imagem}
        alt="Event Background"
      />
      <Box
        sx={{
          maxWidth: 476, // Ajustado para corresponder ao valor anterior do seu código
          height: 437, // Ajustado para corresponder ao valor anterior do seu código
          position: 'absolute', // Box absolutamente posicionado
          top: 78, // Posição do topo ajustada como no código anterior, ou adjuste conforme necessário.
          left: 82, // Left position ajustado como no código anterior, ou ajuste conforme necessário.
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          bgcolor: 'rgba(0, 0, 0, 0.27)',
          borderRadius: 2,
          p: 2,
        }}
      >
        <CustomTypography
          variant="h4"
          component="div"
          gutterBottom
          sx={{ color: 'white', fontWeight: 700 }}
        >
          {titulo}
        </CustomTypography>
        <CustomTypography
          variant="subtitle1"
          sx={{ color: 'white', fontSize: 26, fontWeight: 500 }}
        >
          Data: {data}
          <br />
          Local: {local}
          <br />
          Hora: {hora}
        </CustomTypography>
        <CustomTypography
          variant="body1"
          sx={{ color: 'white', fontSize: 26, fontWeight: 500 }}
        >
          Descrição: {descricao}
        </CustomTypography>
      </Box>
    </Box>
  );
};

export default DetalhesEvento;
