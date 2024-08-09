/** @format */

import React from "react";

const SkillProgressBar = () => {
  return (
    <div style={{ marginBottom: ".7rem" }}>
      <div className='skill-bars'>
        <div className='bar'>
          <div className='info'>
            <span>HTML</span>
          </div>
          <div className='progress-line html'>
            <span></span>
          </div>
        </div>
        <div className='bar'>
          <div className='info'>
            <span>CSS</span>
          </div>
          <div className='progress-line css'>
            <span></span>
          </div>
        </div>
        <div className='bar'>
          <div className='info'>
            <span>JavaScript</span>
          </div>
          <div className='progress-line javascript'>
            <span></span>
          </div>
        </div>
        <div className='bar'>
          <div className='info'>
            <span>ReactJS</span>
          </div>
          <div className='progress-line react'>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillProgressBar;
