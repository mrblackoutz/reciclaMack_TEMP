'use client';
import Head from 'next/head';
import { Box, Divider, Grid, useMediaQuery } from '@mui/material';
import Image from '../../components/Image';
import CustomTypography from '../../components/CustomTypography';

export default function Home() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div>
      <Head>
        <title>ReciclaMack - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        bgcolor={'primary.main'}
        color={'black'}
        width={'100%'}
        height={{ xl: 500, md: 400, xs: '100%' }}
        overflow={'hidden'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Image
          src="Ativos_Recicla_Mack/eletronicos-espalhados.jpg"
          alt="Descrição da imagem"
          width={'100%'}
          //sx={{ opacity: 0.6 }}
        />
      </Box>
      <Box
        bgcolor={'primary.main'}
        color={'white'}
        width={'100%'}
        height={'auto'}
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row' }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        alignItems={'center'}
        justifyContent={'center'}
        px={{ xs: 5, md: 10 }} // Padding horizontal responsivo
      >
        <Box py={8}>
          <CustomTypography variant={'h4'} pb={6} sx={{ fontWeight: 'bold' }}>
            O que devemos reciclar?
          </CustomTypography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5.5}>
              <CustomTypography
                variant={'h5'}
                fontWeight={'bold'}
                marginBottom={4}
              >
                Quais materiais podem ser reciclados?
              </CustomTypography>
              <CustomTypography marginBottom={isMobile ? 2 : 0}>
                Uma ampla variedade de equipamentos que um dia foram alimentados
                por energia elétrica, pilhas ou baterias. Isso inclui não apenas
                os dispositivos principais, mas também os fios, acessórios e
                todas as suas partes associadas. Desde aparelhos eletrônicos até
                ferramentas elétricas, do menor fio ao componente mais
                específico, estamos prontos para receber tudo o que já
                desempenhou seu papel na produção de energia ou entretenimento.
                Faça parte do movimento sustentável, contribuindo para o
                descarte responsável desses itens e promovendo um ambiente mais
                limpo e saudável para todos.
              </CustomTypography>
            </Grid>
            {!isMobile && (
              <Divider
                orientation="vertical"
                variant="middle"
                color="white"
                flexItem
                sx={{
                  mx: 4,
                  width: 3,
                }}
              />
            )}
            <Grid item xs={12} md={5.5}>
              <CustomTypography
                variant={'h5'}
                fontWeight={'bold'}
                marginBottom={4}
              >
                Como descartar os não recicláveis?
              </CustomTypography>
              <CustomTypography marginBottom={isMobile ? 2 : 0}>
                Descartar corretamente materiais não recicláveis é vital para
                preservar o meio ambiente e garantir a segurança. Alguns
                exemplos são: geladeiras, freezers, frigobares, aparelhos de ar
                condicionado, bebedouros, TVs, monitores de tubo, cartuchos de
                impressora, toners, fitas magnéticas (VHS, K7, disquetes),
                pilhas, baterias inchadas, fibras óticas e lâmpadas. Para
                descartar: eletrodomésticos e eletrônicos, entre em contato com
                serviços de coleta de resíduos eletrônicos; tubos de imagem,
                cartuchos e toners, consulte políticas locais de reciclagem;
                algumas lojas coletam fitas magnéticas e pilhas; fibras óticas e
                lâmpadas podem ser aceitas em instalações específicas de
                reciclagem, sujeitas a diretrizes locais.
              </CustomTypography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        bgcolor="white"
        color="black"
        width="100%"
        height="100%"
        pt={6}
        pb={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box px={isMobile ? 2 : 10}>
          <CustomTypography variant="h4" mb={4}>
            Como devemos reciclar
          </CustomTypography>
          <CustomTypography variant="h5" fontWeight="bold" mb={4}>
            Como se dá o processo de reciclagem?
          </CustomTypography>
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
            >
              <CustomTypography variant="h6" fontWeight="bold" mb={2}>
                1° Coleta e Triagem:
              </CustomTypography>
              <CustomTypography ml={8} mb={3}>
                A primeira fase envolve a coleta de lixo eletrônico de
                consumidores, empresas e outros geradores. Após a coleta, os
                itens são triados para separar os recicláveis daqueles que
                precisam de disposição especial.
              </CustomTypography>
              <CustomTypography variant="h6" fontWeight="bold" mb={2}>
                2° Desmontagem e Recuperação de Componentes Valiosos:
              </CustomTypography>
              <CustomTypography ml={8} mb={3}>
                Os dispositivos eletrônicos são desmontados para separar
                diferentes componentes. Isso pode envolver a remoção de placas
                de circuito, fios, baterias e outros elementos. Nesta fase, são
                recuperados materiais valiosos, como metais preciosos (ouro,
                prata, cobre), plásticos, vidro e outros materiais
                reutilizáveis. Isso é frequentemente feito por meio de processos
                de trituração, moagem e separação.{' '}
              </CustomTypography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              p={2}
            >
              <Image
                src="Ativos_Recicla_Mack/alunos-reciclando-bancada.jpg"
                alt="Descrição da imagem"
                sx={{ borderRadius: 3, maxWidth: 500 }}
                width="100%"
              />
            </Grid>
            {/* 3 e 4 etapas */}
            <Grid
              item
              xs={12}
              md={6}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              order={{ xs: 2, md: 0 }} // Ajuste a propriedade "order" para mudar a posição no layout flex
              p={4}
            >
              <Image
                src="Ativos_Recicla_Mack/alunos-reciclando-bancada-reunidos.jpg"
                alt="Descrição da imagem"
                sx={{ borderRadius: 3, maxWidth: 500 }}
                width="100%"
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
            >
              <CustomTypography variant="h6" fontWeight="bold" mb={2}>
                3° Tratamento de Substâncias Tóxicas:
              </CustomTypography>
              <CustomTypography ml={8} mb={3}>
                Dispositivos eletrônicos muitas vezes contêm substâncias
                perigosas, como mercúrio, chumbo e cádmio. Essas substâncias são
                tratadas de maneira segura para evitar a contaminação ambiental.
                Por exemplo, as baterias podem ser separadas e enviadas para
                instalações especializadas de tratamento.
              </CustomTypography>
              <CustomTypography variant="h6" fontWeight="bold" mb={2}>
                4° Recondicionamento ou Reutilização:
              </CustomTypography>
              <CustomTypography ml={8} mb={3}>
                Quando possível, alguns dispositivos eletrônicos podem ser
                recondicionados e reutilizados. Isso é uma forma eficaz de
                estender a vida útil dos produtos e reduzir a demanda por novos
                materiais.
              </CustomTypography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
