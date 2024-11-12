import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { DeleteOutline, Group, LightbulbOutlined, ArrowForward, HandshakeOutlined } from '@mui/icons-material'
import Image from '@/components/Image'
import CustomTypography from '@/components/CustomTypography'
import { messages } from '@/messages'
import { Divider } from '@mui/material'
import { useRouter } from 'next/router'

const HeroSection = styled(Box)(({}) => ({
	position: 'relative',
	height: '50vh',
	minHeight: 400,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: 'white',
	'&::before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 60, 0, 0.7)',
		zIndex: 1
	}
}))

const AnimatedTypography = styled(CustomTypography)(({ theme }) => ({
	opacity: 0,
	transform: 'translateY(20px)',
	transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
	'&.visible': {
		opacity: 1,
		transform: 'translateY(0)'
	}
}))

const AboutSection = styled(Box)(({ theme }) => ({
	backgroundColor: '#00b59f',
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

const SectionWrapper = styled(Box)(({ theme }) => ({
	padding: theme.spacing(8, 2),
	[theme.breakpoints.up('sm')]: {
		padding: theme.spacing(8, 4)
	},
	[theme.breakpoints.up('md')]: {
		padding: theme.spacing(8, 6)
	}
}))

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText('#00b59f'),
	backgroundColor: '#00b59f',
	'&:hover': {
		backgroundColor: '#008f7a'
	}
}))

export default function Home() {
	const [activeTab, setActiveTab] = useState(0)
	const [isVisible, setIsVisible] = useState(false)
	const router = useRouter()

	useEffect(() => {
		setIsVisible(true)
	}, [])

	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setActiveTab(newValue)
	}

	useEffect(() => {
		if (router.asPath.includes('#')) {
			const id = router.asPath.split('#')[1]
			const element = document.getElementById(id)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [router.asPath])

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
			<HeroSection sx={{ px: 4, position: 'relative' }}>
				<Image
					src='circuitoseletronicos.jpg'
					alt={messages.homePage.bannerAlt}
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				/>
				<Box
					sx={{
						position: 'absolute',
						textAlign: 'center',
						zIndex: 2,
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: '100%',
						maxWidth: { xs: '90%', sm: '80%', md: '70%' },
						padding: 2
					}}
				>
					<AnimatedTypography
						variant='h2'
						className={isVisible ? 'visible' : ''}
						sx={{
							color: '#fff',
							fontSize: { xs: 30, sm: 30, md: 48 },
							mb: 2,
							fontWeight: 'bold',
							wordWrap: 'break-word',
							overflowWrap: 'break-word'
						}}
					>
						{messages.homePage.revitalizando}
					</AnimatedTypography>
					<Typography
						variant='h5'
						sx={{
							color: '#fff',
							fontSize: { xs: 18, sm: 18, md: 20 },
							wordWrap: 'break-word',
							overflowWrap: 'break-word'
						}}
					>
						Uma iniciativa universitária em colaboração com cooperativas e empresas
					</Typography>
				</Box>
			</HeroSection>

			<SectionWrapper as='section' id='about'>
				<Container id='about' sx={{ py: 8 }}>
					<Typography variant='h3' component='h2' gutterBottom align='center'>
						Sobre o Projeto
					</Typography>
					<Grid container spacing={4}>
						<Grid
							size={{ xs: 12, md: 6 }}
							display={'flex'}
							alignItems={'center'}
							justifyContent={'center'}
							flexDirection={'column'}
						>
							<Typography component={'p'}>
								O ReciclaMack é um projeto de extensão universitária que visa promover a reciclagem responsável de
								eletrônicos, unindo esforços acadêmicos, cooperativas e empresas para um futuro mais sustentável.
							</Typography>
							<Typography component={'p'}>
								Nosso objetivo é reduzir o impacto ambiental do lixo eletrônico, educar a comunidade sobre a importância
								da reciclagem e criar oportunidades de emprego no setor de reciclagem.
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Box sx={{ position: 'relative', height: 300 }}>
								<Image
									src='/reciclagemeletronicos.jpg'
									alt='Reciclagem de eletrônicos'
									style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 40 }}
								/>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</SectionWrapper>

			<SectionWrapper as='section' id='whatObjetives' sx={{ backgroundColor: '#00b59f', color: '#fff' }}>
				<AboutSection>
					<Container>
						<Grid container spacing={4} alignItems='center' color={'#fff'}>
							<Grid
								size={{
									xs: 12,
									md: 6
								}}
							>
								<Box sx={{ position: 'relative', height: 300 }}>
									<Image
										src='Ativos_Recicla_Mack/alunos-reciclando-bancada-reunidos.jpg'
										alt='Circuitos'
										style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 40 }}
									/>
								</Box>
							</Grid>
							<Grid
								size={{
									xs: 12,
									md: 6
								}}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'center'}
								flexDirection={'column'}
							>
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
						</Grid>
					</Container>
				</AboutSection>
			</SectionWrapper>

			<SectionWrapper as='section' id='objectives' sx={theme => ({ backgroundColor: theme.palette.background.paper })}>
				<ObjectivesSection>
					<Container>
						<Typography variant='h3' align='center' gutterBottom>
							Nossos Objetivos
						</Typography>
						<Tabs value={activeTab} onChange={handleTabChange} centered variant='fullWidth'>
							<Tab label='Objetivos' />
							<Tab label='Impacto' />
							<Tab label='Futuro' />
						</Tabs>
						<Box sx={{ mt: 2 }}>
							{activeTab === 0 && (
								<Card>
									<CardContent>
										<Typography variant='h6' gutterBottom>
											Objetivos Principais
										</Typography>
										<ul>
											<li>
												<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
													<DeleteOutline color='primary' />
													<Typography sx={{ ml: 1 }}>
														Estabelecer pontos de coleta de eletrônicos em todo o campus e expandir para a comunidade
														local
													</Typography>
												</Box>
											</li>
											<li>
												<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
													<Group color='primary' />
													<Typography sx={{ ml: 1 }}>
														Educar estudantes, funcionários e comunidade sobre a importância da reciclagem responsável
														de eletrônicos
													</Typography>
												</Box>
											</li>
											<li>
												<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
													<LightbulbOutlined color='primary' />
													<Typography sx={{ ml: 1 }}>
														Desenvolver e implementar novas tecnologias para contribuir com aumento de reciclagem de
														maneira eficiente e sustentável
													</Typography>
												</Box>
											</li>
											<li>
												<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
													<HandshakeOutlined color='primary' />
													<Typography sx={{ ml: 1 }}>
														Estabelecer parcerias com empresas e cooperativas locais para criar um ecossistema de
														reciclagem eficaz
													</Typography>
												</Box>
											</li>
										</ul>
									</CardContent>
								</Card>
							)}
							{activeTab === 1 && (
								<Card>
									<CardContent>
										<Typography variant='h6' gutterBottom>
											Nosso Impacto até Agora
										</Typography>
										<ul>
											<li>
												<Typography component={'p'}>
													<strong>Coleta de Resíduos:</strong> Desde o início do projeto, o ReciclaMack já ajudou na
													coleta de lixo eletrônico, evitando que esses materiais acabassem em aterros sanitários.
												</Typography>
											</li>
											<li>
												<Typography component={'p'}>
													<strong>Engajamento Estudantil:</strong> Muitos dos nossos estudantes participaram ativamente
													em nossas iniciativas de reciclagem e campanhas de conscientização.
												</Typography>
											</li>
											<li>
												<Typography component={'p'}>
													<strong>Impacto Ambiental:</strong> Nossas ações resultaram na em uma estimada redução de
													emissões de CO2, equivalente ao plantio de dezenas árvores.
												</Typography>
											</li>
											<li>
												<Typography>
													<strong>Impacto Social:</strong> Contribuimos para apliação e crescimento em cooperativas de
													reciclagem locais, promovendo a economia circular em nossa comunidade.
												</Typography>
											</li>
										</ul>
									</CardContent>
								</Card>
							)}
							{activeTab === 2 && (
								<Card>
									<CardContent>
										<Typography variant='h6' gutterBottom>
											Nossa Visão para o Futuro
										</Typography>
										<ul>
											<li>
												<Typography component={'p'}>
													<strong>Expansão do Projeto:</strong> Planejamos expandir o ReciclaMack para outras
													universidades e comunidades, criando uma rede de reciclagem de eletrônicos.
												</Typography>
											</li>
											<li>
												<Typography component={'p'}>
													<strong>Inovação Tecnológica:</strong> Estamos desenvolvendo um site para facilitar a
													localização de pontos de coleta e uma série de vídeos educar os usuários sobre reciclagem de
													eletrônicos.
												</Typography>
											</li>
											<li>
												<Typography component={'p'}>
													<strong>Pesquisa e Desenvolvimento:</strong> Pretendemos expandir o desenvolvimento de novas
													ideias de reciclagem e reaproveitamento de materiais eletrônicos.
												</Typography>
											</li>
											<li>
												<Typography>
													<strong>Educação Continuada:</strong> Nosso objetivo é integrar temas de sustentabilidade e
													reciclagem no currículo universitário, formando profissionais mais conscientes e preparados
													para os desafios ambientais.
												</Typography>
											</li>
										</ul>
									</CardContent>
								</Card>
							)}
						</Box>
					</Container>
				</ObjectivesSection>
			</SectionWrapper>
			<Divider variant='middle' />
			<PartnersSection id='partners'>
				<Container>
					<Typography variant='h3' align='center' gutterBottom>
						Nossos Parceiros
					</Typography>
					<Grid container spacing={{ xs: 0, md: 4 }} justifyContent='center'>
						{['mackenzie.svg', 'atletica.svg'].map((logo, index) => (
							<Grid
								key={index}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'center'}
								size={{
									xs: 6,
									md: 3
								}}
							>
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

					<ColorButton variant='contained' size='large' endIcon={<ArrowForward />}>
						Fale Conosco
					</ColorButton>
				</Container>
			</ContactSection>
		</Box>
	)
}
