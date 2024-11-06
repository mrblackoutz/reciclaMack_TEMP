import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import CustomTypography from '@/components/CustomTypography'
import { messages } from '@/messages'
import { YouTube } from '@mui/icons-material'
const iconSize = 32
const StyledFooter = styled('footer')(({ theme }) => ({
	backgroundColor: '#202020',
	color: '#f7f7f7',
	width: '100%',
	padding: theme.spacing(2, 0)
}))
const FooterLink = styled(Link)(() => ({
	color: '#f7f7f7',
	fontSize: '16px',
	textDecoration: 'none',
	'&:hover': { textDecoration: 'underline' }
}))
const ReciclaMackLabel = () => (
	<CustomTypography
		color='#10B14A'
		sx={{
			fontWeight: 'bold',
			fontSize: { xs: '18px', md: '22px' },
			textAlign: 'center'
		}}
	>
		{messages.footer.recicla}
		<CustomTypography
			component='span'
			sx={{
				color: 'red',
				fontWeight: 'bold',
				fontSize: { xs: '18px', md: '22px' }
			}}
		>
			{messages.footer.mack}
		</CustomTypography>
	</CustomTypography>
)
const ContactInfo = () => (
	<>
		<Typography variant='h5' gutterBottom>
			Contato
		</Typography>
		<Grid container direction='column' spacing={2}>
			{[
				{
					icon: 'icone-telefone.png',
					alt: messages.footer.telefoneIconAlt,
					text: messages.footer.telefoneMackenzie
				},
				{
					icon: 'icone-email.png',
					alt: messages.footer.emailIconAlt,
					text: messages.footer.emailMackenzie
				},
				{
					icon: 'icone-local.png',
					alt: messages.footer.localIconAlt,
					text: messages.footer.localMackenzie,
					href: 'https://maps.app.goo.gl/pbfQXPMZMtVQmHzNA'
				}
			].map((item, index) => (
				<Grid key={index} container alignItems='center' spacing={2} flexWrap={'nowrap'}>
					<Grid>
						<Image
							width={iconSize}
							height={iconSize}
							style={{ maxWidth: '100%', height: 'auto' }}
							src={`/Ativos_Recicla_Mack/${item.icon}`}
							alt={item.alt}
						/>
					</Grid>
					<Grid>
						{item.href ? (
							<FooterLink href={item.href}>
								<CustomTypography variant='body2' sx={{ wordBreak: 'break-all' }}>
									{item.text}
								</CustomTypography>
							</FooterLink>
						) : (
							<CustomTypography variant='body2' sx={{ wordBreak: 'break-all' }}>
								{item.text}
							</CustomTypography>
						)}
					</Grid>
				</Grid>
			))}
		</Grid>
	</>
)
const SocialMedia = () => (
	<>
		<Typography variant='h5' gutterBottom>
			Redes Sociais
		</Typography>
		<Grid container spacing={2}>
			<Grid>
				<IconButton
					aria-label='YouTube'
					color={'primary'}
					href='https://www.youtube.com/channel/UCMAJAKaW_MAxEANo-lTplgg'
					target='_blank'
					rel='noopener noreferrer'
				>
					<YouTube fontSize='large' />
				</IconButton>
			</Grid>
		</Grid>
	</>
)
const WebsiteFooter = () => {
	return (
		<StyledFooter>
			<Container maxWidth='lg'>
				<Grid container spacing={2}>
					<Grid
						container
						size={{ xs: 12, md: 3 }}
						direction={{ xs: 'row', md: 'column' }}
						alignItems='center'
						justifyContent='center'
					>
						<Grid size={'grow'}>
							<Link href='/' passHref>
								<Image
									layout='responsive'
									width={100}
									height={100}
									src='mackenzie.svg'
									alt={messages.footer.mackenzieLogoAlt}
								/>
							</Link>
						</Grid>
						<Grid size={'grow'}>
							<ReciclaMackLabel />
						</Grid>
						<Grid size={'grow'}>
							<Link href='/' passHref>
								<Image
									layout='responsive'
									width={100}
									height={100}
									src='atletica.svg'
									alt={messages.footer.atleticaLogoAlt}
								/>
							</Link>
						</Grid>
					</Grid>
					<Grid container size={{ xs: 6, md: 3 }} direction='column'>
						<Grid size='auto'>
							<Typography variant='h5' gutterBottom>
								Links Rápidos
							</Typography>
						</Grid>
						<Grid
							container
							direction='column'
							justifyContent={'space-around'}
							size='grow'
							sx={{ borderLeft: '2px solid rgba(255, 255, 255, 0.1)', pl: 2 }}
						>
							{[messages.aboutUs, messages.whatToRecycle, messages.faqComponent.faq, messages.contatoPage.contato].map(
								text => (
									<Grid key={text}>
										<FooterLink href='/quem-somos'>{text}</FooterLink>
									</Grid>
								)
							)}
						</Grid>
					</Grid>
					<Grid container size={{ xs: 6, md: 3 }} direction='column'>
						<Grid size='auto'>
							<Typography variant='h5' gutterBottom>
								Informações Legais
							</Typography>
						</Grid>
						<Grid
							container
							direction='column'
							justifyContent={'space-around'}
							size='grow'
							sx={{ borderLeft: '2px solid rgba(255, 255, 255, 0.1)', pl: 2 }}
						>
							{['Direitos Autorais', 'Políticas de Privacidade', 'Cookies', 'Termos de Uso'].map(text => (
								<Grid key={text}>
									<FooterLink href='/quem-somos'>{text}</FooterLink>
								</Grid>
							))}
						</Grid>
					</Grid>
					{/* Contato e Redes Sociais */}
					<Grid size={{ xs: 12, md: 3 }} container direction={{ xs: 'row', md: 'column' }} spacing={1}>
						<Grid size={{ xs: 8, md: 12 }}>
							<ContactInfo />
						</Grid>
						<Grid size={{ xs: 4, md: 12 }}>
							<SocialMedia />
						</Grid>
					</Grid>
				</Grid>
			</Container>
			<Container maxWidth='lg' sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
				<Typography variant='body2' color='white' align='center'>
					{messages.footer.copyRight}
				</Typography>
			</Container>
		</StyledFooter>
	)
}
export default WebsiteFooter
