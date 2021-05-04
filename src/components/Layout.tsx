import React from "react";
import { Container, Stack } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => (
  <Stack direction="column" minHeight="100vh">
    <Header title="Dollar Exchange Rate" showColorModeSwitcher/>
    <Container maxW="container.md" alignSelf="center" flex="1">
      {children}
    </Container>
    <Footer />
  </Stack>
);

export default Layout;
