/** @format */

import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Cube from "../components/Cube";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <Box
        className='container'
        width='100%'
        height={{ base: "auto", xl: "65vh" }}
        marginBottom='0.5rem'
        d='flex'
        flexDir={{ base: "column", md: "row" }}>
        <Box width={{ base: "auto", md: "55%" }} overflow='none'>
          <Text
            fontSize='5xl'
            fontWeight='bold'
            className='animate__animated animate__backInDown animate__delay-2s'
            marginBottom='1.5'>
            About Myself
          </Text>
          <div
            style={{
              fontSize: "1.6em",
            }}
            className='animate__animated animate__backInLeft animate__delay-2s'>
            Hello! I live and was born in Khulna, Bangladesh. My name is Ankit
            Sana. I am a web developer as well as a student. I have learned
            HTML, CSS, JS, ReactJS, etc. I'm an intermediate level web developer
            and I can make good looking functional website.
          </div>
        </Box>
        <Cube />
      </Box>
      <Footer />
    </>
  );
};

export default About;
