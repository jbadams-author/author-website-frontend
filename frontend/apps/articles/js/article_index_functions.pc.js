assignTDStyle = function(td, imgPath, urlstring, p, p2, text, text2) {
  td.style["background-image"] = `url(${imgPath})`;
}

assignTDEvents = function(td, imgPath, urlstring, p, p2, text, text2) {

  td.onmouseenter = function() {
    //td.style["background-image"] = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${imgPath})`;
    td.style["background-image"] = `linear-gradient(rgba(255, 255, 255, 1.0), rgba(255, 255, 255, 0.0)), url(${imgPath})`;
    p.classList.add("text");
    p.classList.add("textArticleTitle");
    p.appendChild(text);
    td.appendChild(p);
  };

  td.onmouseleave = function() {
    td.style["background-image"] = `url(${imgPath})`;
    td.removeChild(p);
    td.removeChild(p2);
  };

  td.onclick = function() { location.href = urlstring; };

}
