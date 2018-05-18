/*
function drawCalendar(year, month, eventDateDict, canvas, dayW, dayH) {
  // update year month label
  let calendarControlDisplay = document.getElementById("calendarControlDisplay");
  let all_months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
  calendarControlDisplay.innerHTML = `${all_months[month]} ${year}`;

  // set initial calendar/canvas parameters
  //let canvas = document.getElementById("myCalendar");
  //canvas.width = (canvas.clientWidth * 2.0);
  //let totalW = canvas.width;
  //let dayW = totalW / 7;
  //let dayH = dayW * 0.6;
  //canvas.height = (dayH * 7);

  //let canvasPopup = document.getElementById("myCalendarPopup");
  //canvasPopup.width = canvas.width;
  //canvasPopup.height = canvas.height;

  // run through dates for an entire month
  let startDate = new Date(year, month, 01);
  let startMonth = startDate.getMonth();
  let day = startDate.getDate();

  //render days of the week header
  let ypos=dayH * 0.75;
  let daysOfWeek = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
  for (i=0; i<daysOfWeek.length;i++) {
    let ctx = canvas.getContext('2d');
    let xpos = (i*dayW) + (dayW*0.33);
    ctx.lineWidth = "1";
    ctx.strokeStyle = "#FFBF00";
    ctx.fillStyle = "#FFBF00";
    ctx.stroke();
    ctx.font = "30px Arial";
    ctx.fillText(daysOfWeek[i], xpos, ypos);
  }

  //render the actual days of the calendar
  ypos = dayH;
  let monthCheck = startMonth;

  while (monthCheck == startMonth) {
    let newDay = new Date(year,month,day);
    monthCheck = newDay.getMonth();
    day += 1;

    // draw elements
    if (monthCheck == startMonth) {
      let xpos = (newDay.getDay() * dayW);
      let ctx = canvas.getContext('2d');

      // draw rectangle
      ctx.lineWidth = "1";
      ctx.strokeStyle = "#FFBF00";

      //check if event(s) exist
      totalEvents = 0;
      eventDateKey = `${newDay.getFullYear()}-${newDay.getMonth()}-${newDay.getDate()}`;
      if (eventDateDict.hasOwnProperty(eventDateKey)) {
        totalEvents = eventDateDict[eventDateKey].length;
      }
      ctx.fillStyle = "#FFFFFF";
      if (totalEvents > 0) {
        //alert(eventDateKey);
        ctx.fillStyle = "#FFBF00";
      }
      //ctx.fill();
      ctx.fillRect(xpos,ypos,dayW, dayH);
      ctx.rect(xpos,ypos,dayW, dayH);
      ctx.stroke();

      // draw date text
      ctx.fillStyle = "#000000";
      ctx.font = "30px Arial";
      ctx.fillText(newDay.getDate(),xpos+(dayW*0.05),ypos+(dayH*0.20));

      if (newDay.getDay() == 6) {
        ypos += dayH;
      }


    }
  }

}
*/
