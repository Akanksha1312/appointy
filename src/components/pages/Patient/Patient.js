import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne,homeObjTwo} from './Data';
//import Pricing from '../../Pricing';

function Patient() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
   
    </>
  );
}

export default Patient;