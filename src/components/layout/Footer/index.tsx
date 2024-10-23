import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import CustomTypography from '@/components/CustomTypography';
import Image from '@/components/Image';
import StyledLink from '@/components/StyledLink';
import { messages } from '@/messages';

const ReciclaMackLabel = ({ fontSize }: { fontSize: string }) => {
  return (
    <CustomTypography
      color={'#10B14A'}
      sx={{ fontWeight: 'bold', fontSize: fontSize }}
    >
      {messages.footer.recicla}
      <CustomTypography
        component="span"
        sx={{ color: 'red', fontWeight: 'bold', fontSize: fontSize }}
      >
        {messages.footer.mack}
      </CustomTypography>
    </CustomTypography>
  );
};

const WebsiteFooter = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const iconSize = isMobile ? 30 : 45;

  return (
    <footer style={{ height: '100%', width: '100%' }}>
      <Box bgcolor={'#202020'} width={'100%'} height={'100%'}>
        <Grid container height={'100%'} width={'100%'}>
          <Grid item xs={6} md={3}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent={'center'}
              width={'100%'}
              height={'100%'}
            >
              <StyledLink href={'/'}>
                <Image
                  src="mackenzie.svg"
                  style={{ height: isMobile ? 45 : 80, margin: 10 }}
                  alt={messages.footer.mackenzieLogoAlt}
                />
              </StyledLink>
              <ReciclaMackLabel fontSize={isMobile ? '18px' : '22px'} />
              <StyledLink href={'/'}>
                <Image
                  src="atletica.svg"
                  style={{ height: isMobile ? 45 : 80, margin: 10 }}
                  alt={messages.footer.atleticaLogoAlt}
                />
              </StyledLink>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box
              display={'flex'}
              width={'100%'}
              height={'100%'}
              flexDirection={'column'}
              justifyContent={'space-evenly'}
              alignItems={'center'}
              fontSize={{ md: '16px', xs: '14px' }}
            >
              <Link
                href="/quem-somos"
                style={{ color: '#f7f7f7', fontSize: '16px' }}
              >
                {messages.aboutUs}
              </Link>
              <Link
                href="/lixo-eletronico"
                style={{ color: '#f7f7f7', fontSize: '16px' }}
              >
                {messages.whatToRecycle}
              </Link>
              <Link
                href="/lixo-eletronico"
                style={{ color: '#f7f7f7', fontSize: '16px' }}
              >
                {messages.howToRecycle}
              </Link>
              <Link
                href="/contato"
                style={{ color: '#f7f7f7', fontSize: '16px' }}
              >
                {messages.faqComponent.faq}
              </Link>
              <Link
                href="/contato"
                style={{ color: '#f7f7f7', fontSize: '16px' }}
              >
                {messages.contatoPage.contato}
              </Link>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box
              width={'100%'}
              height={'100%'}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'space-evenly'}
              alignItems={'center'}
            >
              <Link
                href="/quem-somos"
                style={{ color: '#f7f7f7', fontSize: '16px' }}
              >
                Direitos Autorais
              </Link>
              <Link
                href="/quem-somos"
                style={{ color: '#f7f7f7', fontSize: '16px' }}
              >
                Políticas de Privacidade
              </Link>
              <Link
                href="/quem-somos"
                style={{ color: '#f7f7f7', fontSize: '16px' }}
              >
                Cookies
              </Link>
              <Link
                href="/quem-somos"
                style={{ color: '#f7f7f7', fontSize: '16px' }}
              >
                Termos de Uso
              </Link>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} display={'flex'} alignItems={'center'}>
            <Box width={'100%'} m={1}>
              <Box display={'flex'} alignItems={'center'} mt={1}>
                <Image
                  src="Ativos_Recicla_Mack/icone-telefone.png"
                  style={{ height: iconSize }}
                  alt={messages.footer.telefoneIconAlt}
                />
                <CustomTypography
                  color={'#f7f7f7'}
                  variant="body2"
                  sx={{ ml: 1, textDecoration: 'underline' }}
                >
                  {messages.footer.telefoneMackenzie}
                </CustomTypography>
              </Box>
              <Box display={'flex'} alignItems={'center'} mt={1}>
                <Image
                  src="Ativos_Recicla_Mack/icone-email.png"
                  style={{ height: iconSize }}
                  alt={messages.footer.emailIconAlt}
                />
                <CustomTypography
                  color={'#f7f7f7'}
                  variant="body2"
                  sx={{
                    ml: 1,
                    textDecoration: 'underline',
                    wordBreak: 'break-all',
                  }}
                >
                  {messages.footer.emailMackenzie}
                </CustomTypography>
              </Box>
              <Box display={'flex'} alignItems={'center'} mt={1}>
                <Image
                  src="Ativos_Recicla_Mack/icone-local.png"
                  style={{ height: iconSize }}
                  alt={messages.footer.localIconAlt}
                />
                <CustomTypography
                  color={'#f7f7f7'}
                  variant="body2"
                  sx={{ ml: 1, textDecoration: 'underline' }}
                >
                  {messages.footer.localMackenzie}
                </CustomTypography>
              </Box>
              <Box marginTop={2}>
                <Image
                  src="Ativos_Recicla_Mack/icone-logo-whatsapp.png"
                  alt={messages.footer.whatsappIconAlt}
                  style={{ height: iconSize, marginRight: 12 }}
                />
                <Image
                  src="Ativos_Recicla_Mack/icone-logo-youtube.png"
                  alt={messages.footer.youtubeIconAlt}
                  style={{ height: iconSize, marginRight: 12 }}
                />
                <Image
                  src="Ativos_Recicla_Mack/icone-logo-facebook.png"
                  alt={messages.footer.facebookIconAlt}
                  style={{ height: iconSize, marginRight: 12 }}
                />
                <Image
                  src="Ativos_Recicla_Mack/icone-logo-instagram.png"
                  alt={messages.footer.instagramIconAlt}
                  style={{ height: iconSize, marginRight: 12 }}
                />
                <Image
                  src="Ativos_Recicla_Mack/icone-logo-linkedin.png"
                  alt={messages.footer.linkedinIconAlt}
                  style={{ height: iconSize, marginRight: 12 }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        display={'flex'}
        color={'ffffff'}
        bgcolor={'#000000'}
        width={'100%'}
        py={3}
        justifyContent={'center'}
        alignItems="center"
      >
        <CustomTypography variant="body1" color={'white'} ml={2} mr={2}>
          {messages.footer.copyRight}
        </CustomTypography>
      </Box>
    </footer>
  );
};

export default WebsiteFooter;
