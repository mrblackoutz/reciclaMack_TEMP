import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import TemporaryDrawer from "./Drawer";
import { Image } from "../../Image";
import { Computer, ContactMail, Folder, Info, LocationOn } from "@mui/icons-material";

const StyledLink = ({ href, children, style }) => {
  return (
    <Link href={href} style={{ textDecoration: "none", ...style }}>
      {children}
    </Link>
  );
};

const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:700px)");
  const router = useRouter();
  const [currentPath, setCurrentPath] = React.useState(router.pathname);
  const links = [
    { path: "/quem-somos", texto: "Quem somos", icone: <Info /> },
    { path: "/lixo-eletronico", texto: "Lixo Eletrônico", icone: <Computer /> },
    {
      path: "/pontos-de-coleta",
      texto: "Pontos de coleta",
      icone: <LocationOn />,
    },
    { path: "/projetos", texto: "Projetos", icone: <Folder /> },
    { path: "/contato", texto: "Contato", icone: <ContactMail /> },
  ];

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      setCurrentPath(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <div style={{ height: 80, width: "100%" }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#202020", height: 80 }}>
        <Toolbar
          style={{
            "fontFamily?": "Poppins-Regular, Helvetica",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            height={54}
            width={57}
            marginLeft={{ lg: 10, md: 0, xs: 0 }}
            display={"flex"}
            alignItems={"center"}
          >
            <StyledLink href={"/"}>
              <Image
                src="mackenzie.svg"
                height={{ lg: 80, md: 60, xs: 60 }}
                alt="Mackenzie Logo"
              />
            </StyledLink>
          </Box>
          {isMobile ? (
            <TemporaryDrawer links={links} currentPath={currentPath} />
          ) : (
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              fontSize={16}
              marginRight={{ lg: 10, md: 2 }}
            >
              {links.map((link, index) => (
                <StyledLink
                  key={link.path} // Adicione a propriedade "key" aqu
                  href={link.path}
                  style={{
                    color: "#f7f7f7",
                    marginRight: index !== links.length - 1 ? 16 : 0,
                    fontWeight: currentPath === link.path ? "bold" : "normal",
                    fontSize: currentPath === link.path ? 18 : 16,
                    textAlign: "center",
                  }}
                >
                  {link.texto}
                </StyledLink>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
