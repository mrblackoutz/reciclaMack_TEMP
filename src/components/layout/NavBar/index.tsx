import { AccessibilityNew } from '@mui/icons-material';
import {
  Box,
  useMediaQuery,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Grid,
} from '@mui/material';
import CustomTypography from '@/components/CustomTypography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import useThemeContext from '@/hooks/useThemeContext';
import Image from 'next/image';
import TemporaryDrawer from './Drawer';
import { pages } from '@/@core/routes';

const StyledLink = ({
  href,
  children,
  style,
}: {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <Link href={href} style={{ textDecoration: 'none', ...style }}>
      {children}
    </Link>
  );
};

const NavBar = () => {
  const isMobile = useMediaQuery('(max-width:700px)');
  const router = useRouter();
  const [currentPath, setCurrentPath] = React.useState(router.pathname);
  const {
    isDarkMode,
    toggleDarkMode,
    colorblindMode,
    toggleColorblindMode,
    increaseFontSize,
    decreaseFontSize,
  } = useThemeContext();

  React.useEffect(() => {
    const handleRouteChange = (url: React.SetStateAction<string>) => {
      setCurrentPath(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ height: 80, width: '100%' }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#202020', height: 80 }}>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            {/* Logo */}
            <Grid item xs={4}>
              <StyledLink href={'/'}>
                <Box
                  sx={{
                    position: 'relative',
                    width: isMobile ? 150 : 200,
                    height: 80,
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src="/mackenzie.svg"
                    layout="fill"
                    objectFit="contain"
                    alt="Mackenzie Logo"
                  />
                </Box>
              </StyledLink>
            </Grid>

            {/* Links */}
            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
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
                      textAlign: 'center',
                    }}
                  >
                    {link.texto}
                  </StyledLink>
                ))
              )}
            </Grid>

            {/* Botão de Acessibilidade */}
            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton aria-label="accessibility" onClick={handleClick}>
                <AccessibilityNew sx={{ color: 'white' }} fontSize="large" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={toggleDarkMode}>
                  <CustomTypography variant="body1">
                    {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
                  </CustomTypography>
                </MenuItem>
                <MenuItem onClick={toggleColorblindMode}>
                  <CustomTypography variant="body1">
                    {colorblindMode
                      ? 'Desativar Modo Daltonismo'
                      : 'Ativar Modo Daltonismo'}
                  </CustomTypography>
                </MenuItem>
                <MenuItem onClick={() => increaseFontSize()}>
                  <CustomTypography variant="body1">
                    Aumentar Fonte
                  </CustomTypography>
                </MenuItem>
                <MenuItem onClick={() => decreaseFontSize()}>
                  <CustomTypography variant="body1">
                    Diminuir Fonte
                  </CustomTypography>
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
