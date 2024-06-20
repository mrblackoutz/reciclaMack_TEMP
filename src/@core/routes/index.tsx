import {
  Computer,
  ContactMail,
  Folder,
  Info,
  LocationOn,
} from '@mui/icons-material';

export const pages = [
  { path: '/quem-somos', texto: 'Quem somos', icone: <Info /> },
  { path: '/lixo-eletronico', texto: 'Lixo Eletrônico', icone: <Computer /> },
  {
    path: '/pontos-de-coleta',
    texto: 'Pontos de coleta',
    icone: <LocationOn />,
  },
  { path: '/projetos', texto: 'Projetos', icone: <Folder /> },
  { path: '/contato', texto: 'Contato', icone: <ContactMail /> },
];
