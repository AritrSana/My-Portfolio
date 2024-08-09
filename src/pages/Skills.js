/** @format */

import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SkillProgressBar from "../components/SkillProgressBar";

const Skills = () => {
  return (
    <>
      <Navbar />

      <Box
        width='100%'
        height={{ base: "auto", md: "65vh" }}
        d='grid'
        gridTemplateRows={{ md: "0.8fr 1fr", base: "1fr" }}
        justifyContent='center'
        className='animate__animated animate__backInDown animate__delay-2s container'>
        <Text fontSize='5xl' fontWeight='bold' textAlign='center'>
          My Skills
        </Text>
        <SkillProgressBar />
      </Box>

      <Footer />
    </>
  );
};

export default Skills;
