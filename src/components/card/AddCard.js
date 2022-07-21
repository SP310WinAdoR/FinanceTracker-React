import React from "react";

// Chakra imports
import { Flex, Box, Icon, Text, Spacer, Image, IconButton } from "@chakra-ui/react";
import {  AddIcon } from '@chakra-ui/icons'
// Custom components
import Card from "./Card.js";

// Assets
import bgMastercard from "../../assets/img/dashboards/Debit.png";
import addButton from "../../assets/img/addImage.png";
import { RiMastercardFill } from "react-icons/ri";

export default function AddCard(props, trigger) {
  const { exp, cvv, number, holder, ...rest } = props;
  const { showModal } = trigger;

  // Chakra Color Mode
  return (
    <Card
      backgroundImage={bgMastercard}
      backgroundRepeat='no-repeat'
      bgSize='cover'
      alignSelf='center'
      w={{ base: "100%", md: "60%", xl: "23%" }}
      h='95%'
      bgPosition='10%'
      mx='auto'
      p='20px'
      {...rest}>
      <Flex direction='column' color='white' h='100%' w='100%'>
        <Flex justify='space-between' align='center' mb='37px'>
          <Text fontSize='2xl' fontWeight='bold'>
            Add a new Card.
          </Text>
          <Icon as={RiMastercardFill} w='48px' h='auto' color='gray.400' />
        </Flex>
        <Spacer />
        <Flex direction='column'>
            <IconButton icon={<AddIcon/>} onClick={showModal} borderRadius='20rem'/>
        </Flex>
      </Flex>
    </Card>
  );
}
