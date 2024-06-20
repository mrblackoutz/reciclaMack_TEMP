'use client';
import { Box } from '@mui/material';
import Image from '../components/Image';
import CustomTypography from '../components/CustomTypography';

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
          alt="Descrição da imagem"
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
          Revitalizando a Tecnologia, Reenergizando o Planeta!
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
            Quais são os objetivos do projeto?
          </CustomTypography>
          <CustomTypography>
            Nosso projeto visa moldar práticas sustentáveis na gestão do lixo
            eletrônico: conscientizar a comunidade da FCI sobre a reciclagem,
            instruir sobre a separação correta de resíduos, e indicar os pontos
            de descarte adequado. Junte-se a nós nessa jornada verde!
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
            Porque reciclar e-lixo?
          </CustomTypography>
          <CustomTypography>
            A prática da economia circular e a reciclagem são fundamentais para
            prolongar a vida útil dos materiais eletrônicos. A reciclagem
            possibilita a reutilização de recursos valiosos, reduzindo a
            necessidade de extrair novas matérias-primas e diminuindo a poluição
            associada à fabricação de novos dispositivos. Organizações
            dedicadas, como a COPERMITI, desempenham um papel fundamental nesse
            processo, promovendo e facilitando a reciclagem responsável de
            equipamentos eletrônicos. O descarte consciente e a reciclagem do
            lixo eletrônico não apenas preservam o ambiente, mas também fomentam
            um consumo mais sustentável, contribuindo para uma sociedade mais
            responsável e comprometida com a preservação do planeta. Cada
            indivíduo tem um papel crucial nessa jornada em direção a um futuro
            mais sustentável.
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
