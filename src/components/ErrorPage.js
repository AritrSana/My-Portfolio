/** @format */

import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <Box className='container' height='65vh'>
        <div className='animate__animated animate__backInDown animate__delay-2s'>
          <Text textAlign='center' fontSize='8xl' marginTop='auto'>
            404!
          </Text>
          <Text textAlign='center' marginTop='auto' fontSize='2xl'>
            Not Found!
          </Text>
        </div>
      </Box>
      <Footer />
    </>
  );
};

export default ErrorPage;
