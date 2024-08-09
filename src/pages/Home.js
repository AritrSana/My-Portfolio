/** @format */

import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import myPic from "../images/me.jpg";

const Home = () => {
  const history = useNavigate();

  return (
    <>
      <Navbar />

      <Box
        width='100%'
        height={{ md: "70vh", base: "auto" }}
        className='container'>
        <Box
          className='home'
          display='grid'
          gridTemplateColumns={"1fr 1fr"}
          marginBottom='1em'>
          <Image
            src={myPic}
            alt='Aritro Globe'
            width={{ lg: "50%", md: "60%", base: "80%" }}
            className='my-pic animate__animated animate__backInLeft animate__delay-2s'
          />
          <Text
            w='80%'
            fontSize={{ base: "xl", md: "2xl" }}
            className='animate__animated animate__backInRight animate__delay-2s'>
            Hi! I'm Aritro/Ankit Sana and I'm an intermediate level programmer
            as well as a student. I will be the instructor of this JavaScript
            course.
          </Text>
        </Box>
        <Box
          className='button-container'
          width='100%'
          d='flex'
          justifyContent='space-between'
          marginTop='1em'
          marginBottom='1em'>
          <Button
            variant='outline'
            colorScheme='red'
            onClick={() => history("/js-series")}
            className='animate__animated animate__backInLeft animate__delay-2s'>
            Get Started
          </Button>
          <Button
            variant='outline'
            colorScheme='yellow'
            onClick={() => history("/about")}
            className='animate__animated animate__backInDown animate__delay-2s'>
            About
          </Button>
          <Button
            variant='outline'
            colorScheme='blue'
            onClick={() => history("/skills")}
            className='animate__animated animate__backInRight animate__delay-2s'>
            Skills
          </Button>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Home;
