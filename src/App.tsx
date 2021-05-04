import {
  Divider,
  Heading,
  SimpleGrid,
  Stack,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import Layout from "./components/Layout";

export const App = () => (
  <Layout>
    <Stack spacing="8" my="12" maxWidth="3xl">
      <Heading as="h1" size="2xl">
        Stay up-to-date on the dollar exchange rate in Argentina with
        <Text as="span" color="brand.400">
          Dollar Rate App
        </Text>
      </Heading>
      <Text fontSize="2xl" color="gray.500">
        With the Dollar Rate App you can get the dollar exchange rate in
        Argentina whenever and wherever you want.
      </Text>
    </Stack>

    <Divider orientation="horizontal" />

    <SimpleGrid columns={2} spacing={10} mt="10">
      <Stack
        alignItems="center"
        bgColor="brand.100"
        spacing="0"
        justifyContent="center"
      >
        <Text fontSize="xl" fontWeight="bold" py="2">
          {" "}
          Dolar Blue
        </Text>
        <StatGroup w="100%" textAlign="center">
          <Stat bgColor="brand.200" py="2">
            <StatLabel fontSize="xl">Sent</StatLabel>
            <StatNumber>$345,670</StatNumber>
            <StatHelpText mb="0" mt="1">
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>

          <Stat bgColor="brand.300" py="2">
            <StatLabel fontSize="xl">Clicked</StatLabel>
            <StatNumber>$45</StatNumber>
            <StatHelpText mb="0" mt="1">
              <StatArrow type="decrease" />
              9.05%
            </StatHelpText>
          </Stat>
        </StatGroup>
        <Text fontWeight="light">Ultima Actualización: </Text>
      </Stack>
    </SimpleGrid>
  </Layout>
);
