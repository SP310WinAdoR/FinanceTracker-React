import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import Banner from "./components/Banner";
import General from "./components/General";


// Assets
import banner from "../../../assets/img/auth/banner.png";
import avatar from "../../../assets/img/avatars/avatar4.png";
import React from "react";
import CreditCard from "./components/CreditCard";
import  Mastercard from "../../../components/card/Mastercard";
import  Modal from "../../../components/card/Modal";



export default function Overview() {

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("secondaryGray.900", "white");


    const onSubmit = (event) => {
    event.preventDefault(event);
    console.log("Button CLIIIIIIIIIIIIIICK");

  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='20px'
        gridTemplateRows={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}>

        <Banner
          gridArea='1 / 1 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name='Adela Parkson'
          job='Product Designer'
          posts='17'
          followers='9.7k'
          following='274'
        />
          <Flex direction='column'>
            <Flex
              mt='45px'
              mb='10px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>

              <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
                Sections
              </Text>



              <Flex
                align='center'
                me='20px'
                ms={{ base: "24px", md: "0px" }}
                mt={{ base: "20px", md: "0px" }}>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#art'>
                  Cards
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#music'>
                  Goals
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#collectibles'>
                  Friends
                </Link>

              </Flex>
            </Flex>


            <Flex
              mt='45px'
              mb='20px'
              direction='row'
              justifyContent='space-around'
              align='center'
              gap='1'
              m='5%'>

<Mastercard
            exp='10/25'
            cvv='420'
            number='**** **** **** 6258'
            holder='Jhon Doe'
            onCli
            ></Mastercard>

<Mastercard
            exp='10/25'
            cvv='420'
            number='**** **** **** 6258'
            holder='Jhon Doe'
            ></Mastercard>

<Modal
            onSubmit={onSubmit}
            ></Modal>

</Flex>
            </Flex>

      </Grid>
    </Box>
  );
}
