
import DateComponent from "./date"
import { useState } from "react";
import moment from "moment";
import '../css/calender.css'
function Calender()
{    const currentDate = moment();
  
    // Start of the week (Monday)
    const startOfWeek = currentDate.startOf('isoWeek'); // isoWeek starts on Monday
    const datesOfWeek = [];
  
    // Generate dates for the week
    for (let i = 0; i < 7; i++) {
      const date = startOfWeek.clone().add(i, 'days');
      datesOfWeek.push({
        day: date.format('ddd'), // Get day of the week
        date: date.format('MMM Do YY'), // Get date
        isoDate: date.format('YYYY-MM-DD')
        
      });
    }
    return(
        <div className="calender">
          {datesOfWeek.map((item, index) => (
          <DateComponent key={item.day} weekday={item.day} weekdate={item.date} isoDate={item.isoDate}/>
        
         
        ))}
        </div>
    )
}
export default Calender