import React from "react";
import { Stack, Text } from "@chakra-ui/react";


const Footer = () => {
  return (
    <Stack
      bgColor="brand.300"
      height="16"
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontWeight="extrabold">2021 @ Developed by Suru IT ❤️</Text>
    </Stack>
  );
};

export default Footer;
