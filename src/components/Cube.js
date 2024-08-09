/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { Box } from "@chakra-ui/react";

const Cube = () => {
  return (
    <Box
      width={{ base: "100%", md: "45%" }}
      height={{ base: "300px", md: "auto" }}
      className='stage-cube-cont'>
      <div className='cube-spinner'>
        <div className='face1'>
          <FontAwesomeIcon icon={faHtml5} color='#e34c26' />
        </div>

        <div className='face2'>
          <FontAwesomeIcon icon={faCss3} color='#2980b9' />
        </div>
        <div className='face3'>
          <FontAwesomeIcon icon={faJsSquare} color='#f1c40f' />
        </div>
        <div className='face4'>
          <FontAwesomeIcon icon={faReact} color='#61dafb' />
        </div>
        <div className='face5'>
          <FontAwesomeIcon icon={faNodeJs} color='#3c873a' />
        </div>
        <div className='face6'>
          <FontAwesomeIcon icon={faGitAlt} color='#f05033' />
        </div>
      </div>
    </Box>
  );
};

export default Cube;
