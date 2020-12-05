import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css';

 
function Calender() {
  const [date, onChange] = useState(new Date())

  let in3Days = new Date();
  in3Days.setDate(in3Days.getDate() + 63);
    
  return (
    <div >
      <Calendar
        onChange={onChange}
        value={date}
        minDate={new Date()}
        maxDate={in3Days}
        calendarClassName="responsive-calendar" 
        
      />
    </div>
  );
}

export default Calender;