import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { DeleteOutline, Group, LightbulbOutlined, ArrowForward } from '@mui/icons-material'
import Image from '../../components/Image'
import CustomTypography from '../../components/CustomTypography'
import { messages } from '@/messages'
const HeroSection = styled(Box)(({ theme }) => ({
	backgroundColor: 'black',
	color: 'white',
	position: 'relative',
	height: '40vh',
	[theme.breakpoints.up('lg')]: { height: '400px' },
	[theme.breakpoints.down('sm')]: { height: '60vh' },
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	overflow: 'hidden'
}))
const AboutSection = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	padding: theme.spacing(8, 0)
}))
const WhyRecycleSection = styled(Box)(({ theme }) => ({
	backgroundColor: '#00b59f',
	color: 'white',
	padding: theme.spacing(8, 0)
}))
const ObjectivesSection = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	padding: theme.spacing(8, 0)
}))
const PartnersSection = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	padding: theme.spacing(8, 0)
}))
const ContactSection = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.primary.contrastText,
	padding: theme.spacing(8, 0),
	textAlign: 'center'
}))
export default function Home() {
	const [activeTab, setActiveTab] = useState(0)
	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setActiveTab(newValue)
	}
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
			<HeroSection>
				<Image
					src='Ativos_Recicla_Mack/banner1.png'
					alt={messages.homePage.bannerAlt}
					sx={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						opacity: 0.6
					}}
				/>
				<Box sx={{ position: 'absolute', textAlign: 'center', zIndex: 1 }}>
					<CustomTypography variant='h2' sx={{ color: '#fff', fontSize: { xs: 25, md: 40 }, mb: 2 }}>
						{messages.homePage.revitalizando}
					</CustomTypography>
					<Typography variant='h5' sx={{ mb: 4 }}>
						Uma iniciativa da Universidade Presbiteriana Mackenzie para um futuro sustentável
					</Typography>
					<Button variant='contained' size='large'>
						Descubra como participar
					</Button>
				</Box>
			</HeroSection>
			<AboutSection id='about'>
				<Container>
					<Grid container spacing={4} alignItems='center'>
						<Grid item xs={12} md={6}>
							<Typography variant='h4' gutterBottom>
								{messages.homePage.objetivos}
							</Typography>
							<Typography paragraph>{messages.homePage.objetivosTexto}</Typography>
							<Typography>
								O ReciclaMack é um projeto pioneiro de extensão universitária da Universidade Presbiteriana Mackenzie.
								Nossa missão é promover a reciclagem responsável de eletrônicos, unindo esforços acadêmicos,
								cooperativas e empresas parceiras.
							</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<Image
								src='Ativos_Recicla_Mack/imagem-circuitos.png'
								alt='Circuitos'
								sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
							/>
						</Grid>
					</Grid>
				</Container>
			</AboutSection>
			<WhyRecycleSection>
				<Container>
					<Grid container spacing={4} alignItems='center'>
						<Grid item xs={12} md={6}>
							<Image
								src='Ativos_Recicla_Mack/imagem-aparelhos-simbolo.png'
								alt='Aparelhos eletrônicos'
								sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<Typography variant='h4' gutterBottom>
								{messages.homePage.porqueReciclar}
							</Typography>
							<Typography>{messages.homePage.porqueReciclarTexto}</Typography>
						</Grid>
					</Grid>
				</Container>
			</WhyRecycleSection>
			<ObjectivesSection id='objectives'>
				<Container>
					<Typography variant='h3' align='center' gutterBottom>
						Nossos Objetivos
					</Typography>
					<Tabs value={activeTab} onChange={handleTabChange} centered>
						<Tab label='Objetivos' /> <Tab label='Impacto' />
						<Tab label='Futuro' />
					</Tabs>
					<Box sx={{ mt: 2 }}>
						{activeTab === 0 && (
							<Card>
								<CardContent>
									<ul>
										<li>
											<Box sx={{ display: 'flex', alignItems: 'center' }}>
												<DeleteOutline />
												<Typography sx={{ ml: 1 }}>
													Estabelecer pontos de coleta de eletrônicos em todo o campus
												</Typography>
											</Box>
										</li>
										<li>
											<Box sx={{ display: 'flex', alignItems: 'center' }}>
												<Group />
												<Typography sx={{ ml: 1 }}>
													Educar estudantes e comunidade sobre reciclagem responsável
												</Typography>
											</Box>
										</li>
										<li>
											<Box sx={{ display: 'flex', alignItems: 'center' }}>
												<LightbulbOutlined />
												<Typography sx={{ ml: 1 }}>Desenvolver novas tecnologias para reciclagem eficiente</Typography>
											</Box>
										</li>
									</ul>
								</CardContent>
							</Card>
						)}
						{activeTab === 1 && (
							<Card>
								<CardContent>
									<Typography>
										Desde o início do projeto, o ReciclaMack já coletou toneladas de lixo eletrônico e envolveu centenas
										de estudantes em iniciativas de reciclagem.
									</Typography>
								</CardContent>
							</Card>
						)}
						{activeTab === 2 && (
							<Card>
								<CardContent>
									<Typography>
										Planejamos expandir nosso projeto para outras universidades e comunidades, criando uma rede de
										reciclagem de eletrônicos em todo o país.
									</Typography>
								</CardContent>
							</Card>
						)}
					</Box>
				</Container>
			</ObjectivesSection>
			<PartnersSection id='partners'>
				<Container>
					<Typography variant='h3' align='center' gutterBottom>
						Nossos Parceiros
					</Typography>
					<Grid container spacing={4} justifyContent='center'>
						{['mackenzie.svg', 'atletica.svg'].map((logo, index) => (
							<Grid item xs={6} md={3} key={index}>
								<Box
									component='img'
									src={logo}
									alt={`Logo Parceiro ${index + 1}`}
									sx={{
										maxHeight: 80,
										width: 'auto',
										margin: 'auto',
										display: 'block',
										filter: index === 0 ? 'invert(1)' : undefined
									}}
								/>
							</Grid>
						))}
					</Grid>
				</Container>
			</PartnersSection>
			<ContactSection id='contact'>
				<Container>
					<Typography variant='h3' gutterBottom>
						Entre em Contato
					</Typography>
					<Typography variant='h6' paragraph>
						Quer saber mais sobre o projeto ou se tornar um parceiro? Entre em contato conosco!
					</Typography>
					<Button variant='contained' color='secondary' size='large' endIcon={<ArrowForward />}>
						Fale Conosco
					</Button>
				</Container>
			</ContactSection>
		</Box>
	)
}
