import {
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import logoWhite from "../../../assets/img/layout/logo.png";
import React from "react";

export default function SidebarDocs() {
  const bgColor = "white";
  const borderColor = "#061422";

  return (
    <Flex
      justify='center'
      direction='column'
      align='center'
      bg={bgColor}
      borderRadius='30px'
      me='20px'
      position='relative'>
      <Flex
        border='5px solid'
        borderColor={borderColor}
        bg='white'
        borderRadius='50%'
        w='94px'
        h='94px'
        align='center'
        justify='center'
        mx='auto'
        position='absolute'
        left='50%'
        top='-47px'
        transform='translate(-50%, 0%)'>
        <Image src={logoWhite} w='40px' h='40px' />
      </Flex>
      <Flex
        direction='column'
        mb='12px'
        align='center'
        justify='center'
        px='15px'
        pt='55px'>
        <Text
          fontSize={{ base: "lg", xl: "18px" }}
          color='black'
          fontWeight='bold'
          lineHeight='150%'
          textAlign='center'
          px='10px'
          mb='14px'>
          Upgrade to PRO
        </Text>
        <Text
          fontSize='14px'
          color={"black"}
          px='10px'
          mb='14px'
          textAlign='center'>
          With PRO you can have access to other features of our app
        </Text>
      </Flex>
      <Link href='https://horizon-ui.com/pro'>
        <Button
          bg='navy.300'
          _hover={{ bg: "black", color: "white" }}
          _active={{ bg: "whiteAlpha.100" }}
          mb={{ sm: "16px", xl: "24px" }}
          color={"black"}
          fontWeight='regular'
          fontSize='sm'
          minW='185px'
          mx='auto'>
          Learn More
        </Button>
      </Link>
    </Flex>
  );
}
