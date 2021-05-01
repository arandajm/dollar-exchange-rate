import React from "react";
import { Container, Heading, Icon, Stack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { FaDollarSign } from "react-icons/fa";

interface Props {
  title: string;
  showColorModeSwitcher: boolean;
}

const Layout: React.FC<Props> = ({ title, showColorModeSwitcher, children }) => (
  <Stack>
    <Stack
      bgColor="brand.300"
      height="16"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      px="8"
    >
      <Stack direction="row" alignItems="center">
        <Icon as={FaDollarSign} w={8} h={8}/>
        <Heading size="lg" ml="0" isTruncated>{title}</Heading>
      </Stack>
      {showColorModeSwitcher && <ColorModeSwitcher />}
    </Stack>
    <Container maxW="container.md" alignSelf="center">
      {children}
    </Container>
  </Stack>
);

export default Layout;
