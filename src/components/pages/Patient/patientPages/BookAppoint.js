import React from 'react';
import Calender from '../../../Calender'
import './BookAppoint.css';
import Img from './calender.png'
//import { Link } from 'react-router-dom';
//import { Button } from '../../../Button';

function BookAppoint() {
    return (
        <div className='hero-section'>
          <div className='container '>
           <div className='row hero-row'>
                <div className='col'>
                   <div className='hero-text-wrapper'>
                        <h1 className='heading'> Select date.</h1>
                            
                        <p className='hero-subtitle'>
                        Please select date of your appointment.
                        </p>  
                              
                   </div>
                    
                    <div className ='img-wrapper'>
                          <img src={Img} alt= "calender" className='cal-img' />
                    </div>
                 </div>
                <div className='col'>
                  <div>
                    <div className="cal-pos">
                      <Calender/> 
                    </div>
                  </div>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default BookAppoint;
