import React from "react";

// Chakra imports
import { Flex, Box, Icon, Text, Spacer } from "@chakra-ui/react";
// Custom components
import Card from "./Card.js";

// Assets
import bgMastercard from "../../assets/img/dashboards/Debit2.jpg";
import { RiMastercardFill } from "react-icons/ri";

export default function Banner(props) {
  const { exp, cvv, number, holder, ...rest } = props;

  // Chakra Color Mode
  return (
    <Card
      backgroundImage={bgMastercard}
      backgroundRepeat='no-repeat'
      bgSize='cover'
      alignSelf='center'
      w='26%'
      h='95%'
      bgPosition='10%'
      mx='0'
      p='20px'
      {...rest}>
      <Flex direction='column' color='black' h='100%' w='100%'>
        <Flex justify='space-between' align='center' mb='37px'>
          <Text fontSize='2xl' fontWeight='bold'>
            Cas$ty.
          </Text>
          <Icon as={RiMastercardFill} w='48px' h='auto' color='black' />
        </Flex>
        <Spacer />
        <Flex direction='column'>
          <Box>
            <Text fontSize='1.9rem' fontWeight='bold' letterSpacing='0.1rem'  >
              {number}
            </Text>
          </Box>
          <Flex mt='14px' gap='5'>
          <Flex direction='column'>
              <Text fontSize='xs'>Holder</Text>
              <Text fontSize='sm' fontWeight='500'>
                {holder}
              </Text>
            </Flex>
            <Flex direction='column' me='34px'>
              <Text fontSize='xs'>EXPIRES</Text>
              <Text fontSize='sm' fontWeight='500'>
                {exp}
              </Text>
            </Flex>
            <Flex direction='column'>
              <Text fontSize='xs'>CVV</Text>
              <Text fontSize='sm' fontWeight='500'>
                {cvv}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
