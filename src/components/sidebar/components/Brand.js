import React from "react";

// Chakra imports
import { Image, Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
// import { HorizonLogo } from "../../icons/Icons";
// import { HSeparator } from "../../separator/Separator";
import cashtyWhite from "../../../assets/img/layout/cashtyWhite.png"
import cashtyBlack from "../../../assets/img/layout/cashtyBlack.png"

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column' padding="2rem" marginBottom="2.5rem">
       <Image src={cashtyWhite} w='250px' h='60px' />
    </Flex>
  );
}

export default SidebarBrand;
