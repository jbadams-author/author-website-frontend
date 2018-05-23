



/*
function modifyNewsPage(newsArticles, events) {
  //assign function to news article button
  let newsArticleButton = document.getElementById("newsArticleButton");
  newsArticleButton.onclick = articleButtonClick;
  //assign function news calendar button
  let newsCalendarButton = document.getElementById("newsCalendarButton");
  newsCalendarButton.onclick = calendarButtonClick;

  //load news article json into the list
  let newsArticleList = document.getElementById("newsArticleList");
  for(i=0; i<newsArticles.length; i++) {
    let title = newsArticles[i]["fields"]["title"];
    let raw_date = newsArticles[i]["fields"]["pub_date"];
    let urlString = newsArticles[i]["fields"]["url_string"];

    //create mature date string from raw date
    let dateObj = new Date(raw_date);
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dateString = months[dateObj.getMonth()] + " " + dateObj.getDate() + ", " + dateObj.getFullYear();

    //create and modify DOM elements
    let li = document.createElement("li");
    li.classList.add("newsArticleListItem");
    let span = document.createElement("span");
    span.classList.add("newsArticleListSpan");
    let text = document.createTextNode(`${dateString} - ${title}`);

    li.onmouseenter = function() {
      li.style["color"] = "#FFBF00";
    };
    li.onmouseleave = function() {
      li.style["color"] = "#FFFFFF";
    };
    li.onclick = function() {location.href = urlString};
    li.appendChild(text);
    newsArticleList.appendChild(li);
  }

  //load upcoming event json into the list
}
*/
