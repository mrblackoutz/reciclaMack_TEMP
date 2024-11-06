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
import { quickLinks, legalLinks } from './_props'
import { ReciclaMackLabel, FooterLinkSection, ContactInfo, SocialMedia, LogoContainer } from './FooterComponents'

const StyledFooter = styled('footer')(({ theme }) => ({
	backgroundColor: '#202020',
	color: '#f7f7f7',
	width: '100%',
	padding: theme.spacing(2, 0)
}))

const WebsiteFooter = () => {
	return (
		<StyledFooter>
			<Container maxWidth='lg'>
				<Grid container spacing={1}>
					{/* Logo e ReciclaMack */}
					<Grid
						container
						size={{ xs: 12, md: 3 }}
						direction={{ xs: 'row', md: 'column' }}
						alignItems='center'
						justifyContent='center'
					>
						<LogoContainer>
							<Image
								layout='responsive'
								width={100}
								height={100}
								src='mackenzie.svg'
								alt={messages.footer.mackenzieLogoAlt}
							/>
						</LogoContainer>
						<LogoContainer>
							<ReciclaMackLabel />
						</LogoContainer>
						<LogoContainer>
							<Image
								layout='responsive'
								width={100}
								height={100}
								src='atletica.svg'
								alt={messages.footer.atleticaLogoAlt}
							/>
						</LogoContainer>
					</Grid>

					{/* Links Rápidos e Informações Legais */}
					<FooterLinkSection title='Links rápidos' links={quickLinks} />
					<FooterLinkSection title='Informações Legais' links={legalLinks} />

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
