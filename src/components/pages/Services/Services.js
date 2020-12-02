import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne,  homeObjThree } from './Data';


function Services() {
  return (
    <>
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjOne} />
     
    </>
  );
}

export default Services;
