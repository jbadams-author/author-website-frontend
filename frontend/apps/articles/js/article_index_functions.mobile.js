assignTDStyle = function(td, imgPath, urlstring, p, p2, text, text2) {
  let divArticleTitle = document.createElement("div");
  td.style["background-image"] = `linear-gradient(rgba(255, 255, 255, 1.0), rgba(255, 255, 255, 0.0)), url(${imgPath})`;
  p.classList.add("text");
  p.classList.add("textArticleTitle");
  p.appendChild(text);
  td.appendChild(p);
}

assignTDEvents = function(td, imgPath, urlstring, p, p2, text, text2) {
  td.onclick = function() { location.href = urlstring; };
}
