'use client'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery'
import CustomizedButtons from './customButton'
import CustomTypography from '../../components/CustomTypography'
import FAQ from './faq'
interface CardProps {
	title: string
	description: string
	textButton: string
}
const Card = ({ title, description, textButton }: CardProps) => {
	return (
		<Box
			sx={{
				width: '100%',
				borderRadius: 10,
				overflow: 'hidden',
				background: 'linear-gradient(44deg, #01D1B8 0%, #10B14A 100%)',
				display: 'flex',
				p: { md: 6, xs: 3 }
			}}
		>
			<Grid container spacing={3}>
				<Grid item xs={12} md={8} display='flex' flexDirection='column' justifyContent='space-between'>
					<CustomTypography variant='h4' color='#FFF' mb={3}>
						{title}
					</CustomTypography>
					<CustomTypography variant='body1' color='#FFF' mb={3}>
						{description}
					</CustomTypography>
					<CustomizedButtons
						variant='contained'
						color='primary'
						sx={{ fontWeight: 'bold', width: 'auto' }}
						size='large'
					>
						{textButton}
					</CustomizedButtons>
				</Grid>
				<Grid item xs={12} md={4} display='flex' justifyContent='center'>
					<Box
						component='img'
						src='Ativos_Recicla_Mack/icone-imagem-aleatoria.png'
						alt='Descrição da imagem'
						sx={{
							height: { md: '100%', xs: 'auto' },
							maxHeight: { md: '100%', xs: '200px' },
							maxWidth: '100%',
							borderRadius: 3
						}}
					/>
				</Grid>
			</Grid>
		</Box>
	)
}
const Contact = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const isMobile = useMediaQuery('(max-width:700px)')
	return (
		<div>
			<Grid
				container
				color={'white'}
				display={'flex'}
				padding={'2rem'}
				bgcolor={'#202020'}
				width={'100%'}
				height={{ md: '90vh', sm: '155vh' }}
				justifyContent={'space-between'}
			>
				<Grid item xs={12}>
					<h1>Sugestões / Perguntas</h1>
				</Grid>
				<Grid item xs={12} container spacing={5}>
					<Grid
						item
						xs={12}
						sm={12}
						md={6}
						display={'flex'}
						flexDirection={'row'}
						justifyContent={'space-evenly'}
						alignItems={'center'}
						paddingBottom={'7rem'}
					>
						<Card
							title={'Alguma pergunta?'}
							description={
								'Você tem alguma dúvida sobre o nosso site, os nossos serviços ou os nossos produtos? Nós estamos aqui para te ajudar. Clique no botão abaixo e envie a sua pergunta. Nós responderemos o mais rápido possível.'
							}
							textButton={'Perguntas'}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						sm={12}
						md={6}
						display={'flex'}
						flexDirection={'row'}
						justifyContent={'space-evenly'}
						alignItems={'center'}
						paddingBottom={'7rem'}
					>
						<Card
							title={'Alguma sugestão?'}
							description={
								'Você tem alguma ideia de como podemos melhorar o nosso site, os nossos serviços ou os nossos produtos? Nós adoraríamos ouvir a sua opinião. Clique no botão abaixo e envie a sua sugestão. Nós agradecemos a sua colaboração.'
							}
							textButton={'Sugestões'}
						/>
					</Grid>
				</Grid>
			</Grid>
			<FAQ />
		</div>
	)
}
export default Contact
