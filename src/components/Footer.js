/** @format */

import { Box, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <footer
      style={{
        width: "100%",
        height: "18vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        padding: "1em",
        position: "relative",
      }}
      className={`animate__animated animate__backInLeft animate__delay-3s bg-${
        colorMode === "dark" ? "dark" : "light"
      } `}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        position={"absolute"}
        justifyContent={"space-around"}
        alignItems={"center"}
        padding={"1rem"}
        bottom={0}>
        <a
          href='https://github.com/AritrSana'
          target={"_blank"}
          rel='noreferrer'
          className='github-a'>
          <BsGithub style={{ margin: "0.25em", fontSize: "1.50em" }} />
        </a>
        <Text>&copy; Ankit Sana - {new Date().getFullYear()}</Text>
      </Box>
    </footer>
  );
};

export default Footer;
