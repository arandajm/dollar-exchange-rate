import React from "react";
import { Heading, Icon, Stack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { FaDollarSign } from "react-icons/fa";

interface Props {
  title: string;
  showColorModeSwitcher: boolean;
}

const Header: React.FC<Props> = ({ title, showColorModeSwitcher }) => {
  return (
    <Stack
      bgColor="brand.300"
      height="16"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      px="8"
    >
      <Stack direction="row" alignItems="center">
        <Icon as={FaDollarSign} w={8} h={8} />
        <Heading size="lg" ml="0" isTruncated>
          {title}
        </Heading>
      </Stack>
      {showColorModeSwitcher && <ColorModeSwitcher />}
    </Stack>
  );
};

export default Header;
