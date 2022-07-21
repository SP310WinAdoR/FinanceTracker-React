import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";

export default function CreditCard(props) {

  const { creditCardNumber , holder , exp_date, secret_num } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");

  return (
    <Box pt='6px' fontFamily='Space Mono' fontWeight='800'>
      <Container w='25rem' h='15rem' bg='linear-gradient(to right bottom, #fd696b, #fa616e, #f65871, #f15075, #ec4879);' borderRadius='2rem' boxShadow='2xl' p='1rem' >
      <Flex display='column' justify='center' align='center' p='2rem'>
        <Box>
          <Text fontColor='textColorBrand' w='100%' letterSpacing='0.1rem' fontSize='1.9rem' mb='1.5rem' mt='2rem'>{creditCardNumber}</Text>
        </Box>
        <Flex justify='space-between' align='center'>
        <Box>
          <Text fontColor={textColorBrand} textTransform='uppercase'letterSpacing='0.1rem' lineHeight='1.6rem' fontSize='1rem' mt='0.5rem' >Card Holder</Text>
          <Text textTransform='uppercase'letterSpacing='0.1rem' lineHeight='1.6rem' fontSize='1.2rem' mt='0.5rem' >{ holder }</Text>
        </Box>
        <Box>
          <Text textTransform='uppercase'letterSpacing='0.1rem' lineHeight='1.6rem' fontSize='1rem' mt='0.5rem'>Expires</Text>
          <Text textTransform='uppercase'letterSpacing='0.1rem' lineHeight='1.6rem' fontSize='1.2rem' mt='0.5rem'>{ exp_date }</Text>
        </Box>

        {/* <Box> */}
        {/* <Text fontColor={textColorBrand} textTransform='uppercase'letterSpacing='0.1rem' lineHeight='1.6rem' fontSize='1rem' mt='0.5rem' >SECRET NUMBER</Text>
          <Text>{secret_num}</Text>
        </Box> */}
        </Flex>

        </Flex>
      </Container>
      <Container>
        <Box></Box>
        <Box></Box>

      </Container>
    </Box>
  );
}
