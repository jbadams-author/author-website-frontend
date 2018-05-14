function drawCalendar(year, month) {
  // set initial calendar/canvas parameters
  let canvas = document.getElementById("myCalendar");
  let totalW = canvas.width = canvas.clientWidth;
  let dayW = totalW / 7;
  let dayH = dayW * 0.6;
  canvas.height = (dayH * 7);

  // run through dates for an entire month
  let startDate = new Date(year, month, 01);
  let startMonth = startDate.getMonth();
  let day = startDate.getDate();

  let ypos=0;

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
      ctx.fillStyle = "#FFBF00";
    	ctx.rect(xpos,ypos,dayW, dayH);
      ctx.stroke();

      // draw date text
      ctx.fillText(newDay.getDate(),xpos+(dayW*0.05),ypos+(dayH*0.20));

      if (newDay.getDay() == 6) {
        ypos += dayH;
      }


    }
  }

}
