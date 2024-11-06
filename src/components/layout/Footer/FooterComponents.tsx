import { ReactNode } from 'react'
import CustomTypography from '@/components/CustomTypography'
import { messages } from '@/messages'
import { YouTube } from '@mui/icons-material'
import { Typography, IconButton } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import Image from 'next/image'
import { ICON_SIZE } from './_props'

export const FooterLink = styled(Link)(() => ({
	color: '#f7f7f7',
	fontSize: '16px',
	textDecoration: 'none',
	'&:hover': { textDecoration: 'underline' }
}))
export const ReciclaMackLabel = () => (
	<CustomTypography
		color='#10B14A'
		sx={{
			fontWeight: 'bold',
			fontSize: { xs: '18px', md: '22px' }
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
export const ContactInfo = () => (
	<>
		<Typography variant='h5' gutterBottom>
			Contato
		</Typography>
		<Grid container direction={{ xs: 'row', md: 'column' }} spacing={2}>
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
				<Grid key={index} container alignItems='center' flexWrap={'nowrap'}>
					<Grid>
						<Image
							width={ICON_SIZE}
							height={ICON_SIZE}
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
export const SocialMedia = () => (
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

interface FooterLinkItemProps {
	href: string
	children: ReactNode
}

export const FooterLinkItem = ({ href, children }: FooterLinkItemProps) => (
	<Grid>
		<FooterLink href={href}>{children}</FooterLink>
	</Grid>
)

interface LinkItem {
	href: string
	text: string
}

interface FooterLinkSectionProps {
	title: string
	links: LinkItem[]
}

export const FooterLinkSection = ({ title, links }: FooterLinkSectionProps) => (
	<Grid container size={{ xs: 6, md: 3 }} direction='column'>
		<Grid size='auto'>
			<Typography variant='h5' gutterBottom>
				{title}
			</Typography>
		</Grid>
		<Grid
			container
			direction='column'
			justifyContent='space-around'
			size='grow'
			sx={{ borderLeft: '2px solid rgba(255, 255, 255, 0.1)', pl: 2 }}
		>
			{links.map(link => (
				<FooterLinkItem key={link.text} href={link.href}>
					{link.text}
				</FooterLinkItem>
			))}
		</Grid>
	</Grid>
)

export const LogoContainer = ({ children }: { children: ReactNode }) => (
	<Grid display='flex' justifyContent='center' alignItems='center' size={'grow'}>
		<Link href='/' passHref style={{ textDecoration: 'none' }}>
			{children}
		</Link>
	</Grid>
)
