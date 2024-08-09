/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Box
        className='container animate__animated animate__backInUp animate__delay-2s'
        width='100%'
        height='auto'
        padding={"1rem"}>
        <ContactForm />
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
