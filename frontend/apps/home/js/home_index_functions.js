/**
given the featured articles, posts, news items, script and display these items
on the home page
arguments:
  sortedFeatures(array) - array of feature model objects to add to page
  articleDict(obj) - dictonary of article objects, each object referenced by
    its unique reference_number
*/
function modifyHomePage(sortedFeatures, articleDict) {
  let divSlideshowContainer = document.getElementById("slideshow-container");

  for (let a=0; a<sortedFeatures.length; a++) {
    let feature = sortedFeatures[a];
    if (feature["fields"]["is_article"]) {
      let articleObj = articleDict[feature["fields"]["foreign_reference_number"]];
      let urlString = articleObj["fields"]["url_string"];
      let imgPath = '/static/articles/img/'+urlString+'.jpg';
      let aPath = '/articles/'+urlString;
      let title = articleObj["fields"]["title"];
      let description = articleObj["fields"]["description"];

      let divSlide = document.createElement("div");
      divSlide.classList.add("homeSlide");
      divSlide.classList.add("mySlides");
      divSlide.classList.add("fade");
      divSlide.style["background-image"] = 'url('+imgPath+')';

      let divText = document.createElement("div");
      divText.classList.add("homeSlideText");

      let h2_1 = document.createElement("h2");
      h2_1.classList.add("featureHeader");
      let t1 = document.createTextNode("New Article");
      h2_1.appendChild(t1);

      let h2_2 = document.createElement("h2");
      h2_2.classList.add("featureTitle");
      let t2 = document.createTextNode(title);
      h2_2.appendChild(t2);

      let h2_3 = document.createElement("h4");
      h2_3.classList.add("featureDescription");
      let t3 = document.createTextNode(description);
      h2_3.appendChild(t3);

      let linkDiv = document.createElement("div");
      linkDiv.classList.add("homeLinkDiv");
      let t4 = document.createTextNode("READ");
      linkDiv.appendChild(t4);
      linkDiv.onclick = function() { location.href = aPath };

      divText.appendChild(h2_1);
      divText.appendChild(h2_2);
      divText.appendChild(h2_3);
      divText.appendChild(linkDiv);
      divSlide.appendChild(divText);
      divSlideshowContainer.appendChild(divSlide);

    } else if (feature["fields"]["is_blog"]) {
      alert("blog");
    } else if (feature["fields"]["is_news"]) {

    }
  }

  let homepageDiv = document.getElementById("homepage");
  let dotDiv = document.createElement("div");
  dotDiv.classList.add("dotDiv");
  dotDiv.id = "dotDiv";
  for (let a=0; a<sortedFeatures.length; a++) {
    let dotSpan = document.createElement("span");
    dotSpan.classList.add("dot");
    dotSpan.onclick = function() {currentSlide(a+1)};
    dotDiv.appendChild(dotSpan);
  }
  homepageDiv.appendChild(dotDiv);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
