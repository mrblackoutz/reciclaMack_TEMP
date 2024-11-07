import { AccessibilityNew } from '@mui/icons-material'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid2'
import CustomTypography from '@/components/CustomTypography'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import useThemeContext from '@/hooks/useThemeContext'
import Image from 'next/image'
import TemporaryDrawer from './Drawer'
import { pages } from '@/@core/routes'
import { styled } from '@mui/material/styles'

const StyledLink = ({ href, children, style }: { href: string; children: React.ReactNode; style?: React.CSSProperties }) => {
	return (
		<Link href={href} style={{ textDecoration: 'none', ...style }}>
			{children}
		</Link>
	)
}

const NavBar = () => {
	const isMobile = useMediaQuery('(max-width:700px)')
	const router = useRouter()
	const [currentPath, setCurrentPath] = React.useState(router.pathname)
	const { isDarkMode, toggleDarkMode, colorblindMode, toggleColorblindMode, increaseFontSize, decreaseFontSize } = useThemeContext()
	React.useEffect(() => {
		const handleRouteChange = (url: React.SetStateAction<string>) => {
			setCurrentPath(url)
		}
		router.events.on('routeChangeComplete', handleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [])
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	return (
		<AppBar component='nav' sx={{ backgroundColor: '#202020' }}>
			<Toolbar>
				<Grid container width={'100%'} height={'64px'}>
					{/* Logo */}
					<Grid size={4}>
						<Box
							sx={{
								position: 'relative',
								width: '100%',
								height: '100%',
								overflow: 'hidden',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<StyledLink href={'/'}>
								<Image src='/mackenzie.svg' fill objectFit='contain' alt='Mackenzie Logo' />
							</StyledLink>
						</Box>
					</Grid>
					{/* Links */}
					<Grid display='flex' justifyContent='center' alignItems='center' size={4}>
						{isMobile ? (
							<TemporaryDrawer links={pages} currentPath={currentPath} />
						) : (
							pages.map((link, index) => (
								<StyledLink
									key={link.path}
									href={link.path}
									style={{
										color: '#f7f7f7',
										marginRight: index !== pages.length - 1 ? 16 : 0,
										fontWeight: currentPath === link.path ? 'bold' : 'normal',
										fontSize: currentPath === link.path ? 18 : 16,
										textAlign: 'center'
									}}
								>
									{link.texto}
								</StyledLink>
							))
						)}
					</Grid>
					{/* Botão de Acessibilidade */}
					<Grid display='flex' justifyContent='center' alignItems='center' size={4}>
						<IconButton aria-label='accessibility' onClick={handleClick}>
							<AccessibilityNew sx={{ color: 'white' }} fontSize='large' />
						</IconButton>
						<Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
							<MenuItem onClick={toggleDarkMode}>
								<CustomTypography variant='body1'>{isDarkMode ? 'Modo Claro' : 'Modo Escuro'}</CustomTypography>
							</MenuItem>
							<MenuItem onClick={toggleColorblindMode}>
								<CustomTypography variant='body1'>
									{colorblindMode ? 'Desativar Modo Daltonismo' : 'Ativar Modo Daltonismo'}
								</CustomTypography>
							</MenuItem>
							<MenuItem onClick={() => increaseFontSize()}>
								<CustomTypography variant='body1'>Aumentar Fonte</CustomTypography>
							</MenuItem>
							<MenuItem onClick={() => decreaseFontSize()}>
								<CustomTypography variant='body1'>Diminuir Fonte</CustomTypography>
							</MenuItem>
						</Menu>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}
export default NavBar
