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
import { styled } from '@mui/material/styles'

const StyledLink = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: '#f7f7f7',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const NavBar = () => {
  const isMobile = useMediaQuery('(max-width:700px)')
  const router = useRouter()
  const [currentPath, setCurrentPath] = React.useState(router.pathname)
  const { isDarkMode, toggleDarkMode, colorblindMode, toggleColorblindMode, increaseFontSize, decreaseFontSize } = useThemeContext()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      setCurrentPath(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const pages = [
    { id: 'about', texto: 'Sobre', path: '/#about'},
    { id: 'objectives', texto: 'Objetivos', path: '/#objectives' },
    { id: 'partners', texto: 'Parceiros', path: '/#partners' },
    { id: 'contact', texto: 'Contato', path: '/#contact' },
  ]

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
              <Link href={'/'} passHref>
                <Image src='/mackenzie.svg' fill objectFit='contain' alt='Mackenzie Logo' />
              </Link>
            </Box>
          </Grid>
          {/* Links */}
          <Grid display='flex' justifyContent='center' alignItems='center' size={4}>
            {isMobile ? (
              <TemporaryDrawer links={pages} currentPath={currentPath} />
            ) : (
              pages.map((link, index) => (
                <StyledLink
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  style={{
                    marginRight: index !== pages.length - 1 ? 16 : 0,
                    fontWeight: currentPath === `/#${link.id}` ? 'bold' : 'normal',
                    fontSize: currentPath === `/#${link.id}` ? 18 : 16,
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