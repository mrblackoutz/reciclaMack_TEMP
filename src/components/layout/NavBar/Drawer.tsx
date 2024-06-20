import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import Link from 'next/link';
import StyledLink from '@/components/StyledLink';

interface Link {
  path: string;
  icone: React.ReactNode;
  texto: string;
}

interface TemporaryDrawerProps {
  links: Link[];
  currentPath: string;
}

export default function TemporaryDrawer(
  props: TemporaryDrawerProps
): JSX.Element {
  const { links, currentPath } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  const renderList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box display={'flex'} justifyContent={'flex-end'}>
        <IconButton sx={{ color: 'inherit' }}>
          <Close fontSize="large" />
        </IconButton>
      </Box>
      <List sx={{ mt: 3 }}>
        {links.map((link) => (
          <ListItem key={link.path} disablePadding>
            <StyledLink href={link.path}>
              <ListItemButton
                sx={{
                  color: 'white',
                  fontWeight: currentPath === link.path ? 'bold' : 'normal',
                }}
              >
                <ListItemIcon style={{ color: 'white' }}>
                  {link.icone}
                </ListItemIcon>
                <ListItemText
                  primary={link.texto}
                  primaryTypographyProps={{
                    style: {
                      fontWeight: currentPath === link.path ? 'bold' : 'normal',
                    },
                  }}
                />
              </ListItemButton>
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        edge="start"
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#202020',
            color: '#f7f7f7',
          },
        }}
      >
        {renderList()}
      </Drawer>
    </div>
  );
}
