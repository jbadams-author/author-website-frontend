function articleButtonClick() {
  let newsArticleButton = document.getElementById("newsArticleButton");
  let newsCalendarButton = document.getElementById("newsCalendarButton");
  let newsArticleFrame = document.getElementById("newsArticleFrame");
  let newsCalendarFrame = document.getElementById("newsCalendarFrame");

  newsArticleButton.style["background-color"] = "#FFBF00";
  newsCalendarButton.style["background-color"] = "#FFFFFF";
  newsArticleFrame.style["display"] = "block";
  newsCalendarFrame.style["display"] = "none";
}

function calendarButtonClick() {
  let newsArticleButton = document.getElementById("newsArticleButton");
  let newsCalendarButton = document.getElementById("newsCalendarButton");
  let newsArticleFrame = document.getElementById("newsArticleFrame");
  let newsCalendarFrame = document.getElementById("newsCalendarFrame");

  newsArticleButton.style["background-color"] = "#FFFFFF";
  newsCalendarButton.style["background-color"] = "#FFBF00";
  newsArticleFrame.style["display"] = "none";
  newsCalendarFrame.style["display"] = "block";

  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  drawCalendar(year, month);
}

function modifyNewsPage() {
  //assign function to news article button
  let newsArticleButton = document.getElementById("newsArticleButton");
  newsArticleButton.onclick = articleButtonClick;
  //assign function news calendar button
  let newsCalendarButton = document.getElementById("newsCalendarButton");
  newsCalendarButton.onclick = calendarButtonClick;
}
