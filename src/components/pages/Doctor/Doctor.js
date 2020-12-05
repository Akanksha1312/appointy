import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne } from './Data';
//import Pricing from '../../Pricing';

function Doctor() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      {/* <HeroSection {...homeObjTwo} /> */}
   
    </>
  );
}

export default Doctor;