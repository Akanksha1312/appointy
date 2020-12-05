import React from "react";
import {Button} from "../../../Button"
import { Link } from 'react-router-dom';
import './Entry.css'

function Entry(props) {
  return (
    <div className="term">
      <dt>
        {/* <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span> */}
        <span>{props.name}</span><br/>
        
       
      </dt>
      <dd>{props.time}</dd>
      <dd>{props.description}</dd>
      <Link to ='/patient-sign-up'><Button buttonSize='btn--wide' buttonColor='blue'>Book</Button></Link>

    </div>
  );
}

export default Entry;