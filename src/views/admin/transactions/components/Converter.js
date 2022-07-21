import React from "react";
// Chakra imports
import {
    SimpleGrid,
    useColorModeValue,
    Text,
    Select,
    Box,
    Button,
    TextColor,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
  } from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/card/Card.js";

// Assets
export default function Converter(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "1xl": "15px" }} w="65%" left="35%" {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        Currency Converter
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        Select the currency to convert:
      </Text>
      <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}
          >

<Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          align="stretch"
          maxW='100%'
          padding="0.2rem"
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}
          >
            <Box >

            <Box padding="0.1rem" margin='0.5rem'>
            <Text color={textColorPrimary} fontSize='sm' fontWeight='700'>From Currency</Text>

            <Select   color={textColorPrimary} borderColor={ textColorSecondary} placeholder='Select option'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
            </Select>
            </Box>

            <Button left='15%'  w="70%"> &#8596; </Button>

            <Box padding="0.1rem" margin='0.5rem'>
            <Text color={textColorPrimary} fontSize='sm' fontWeight='700'>To Currency</Text>
            <Select  color={textColorPrimary} borderColor={ textColorSecondary} placeholder='Select option'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
            </Select>
            </Box>

            <Button left='15%'  w="70%"> Convert </Button>

            </Box>

            <Box  w="100%">
            <Text fontSize='1xl' color='gray' position='relative' left='25%' top='15%' > 1 USD =</Text>
            <Text fontSize='5xl' color='green' position='relative' left='25%' top='15%' w="70%" >4.700 COP</Text>
            </Box>
            </Flex>
        </Flex>

    </Card>
  );
}
