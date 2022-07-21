import {
  Flex,
  Box,
  VStack,
    ChakraProvider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    ModalFooter,
    Button,
    IconButton,
    useDisclosure
  } from "@chakra-ui/react";
  import * as React from "react";

  import { Formik, Field } from "formik";
  import {  AddIcon } from '@chakra-ui/icons'
  import { render } from "react-dom";

  function ModalUI() {

    const { isOpen, onClose, onOpen } = useDisclosure();
    const  initialValues={ holder: 'Jhon Doe',  number: '1234 5678 90123', exp: '25/10', cvv: '420' };

    return (
      <>
        <IconButton bg='yellow' color='black' borderRadious='10rem' w='7rem' h='rem' p='1rem' icon={<AddIcon/>} onClick={onOpen} borderRadius='20rem'  />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <ModalCloseButton />
            </ModalHeader>

            <ModalBody>
            <Formik
            initialValues={ initialValues }
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl>
                    <FormLabel color='white' htmlFor="email">Credit Card Number</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color='white' htmlFor="email">Expiration Date</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color='white' htmlFor="email">CVV</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel color='white' htmlFor="email">Name of Holder</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                    />
                  </FormControl>
                </VStack>
              </form>
            )}
          </Formik>
            </ModalBody>

            <ModalFooter>
              <Button bg='yellow ' color='black' type="submit" form="new-note">
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  export default ModalUI;