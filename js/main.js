$(document).ready(function () {
  // burger menu
  $(".burger").click(function () {
    $("nav").slideToggle("fast");
  });

  // lightslider
  const mediaQuery = window.matchMedia("(min-width: 720px)");

  if (mediaQuery.matches) {
    $("#lightSlider").lightSlider({
      item: 3,
      autoWidth: false,
      loop: true,
      speed: 500,
      auto: true,
      vertical: true,
      verticalHeight: 810,
      enableTouch: true,
      enableDrag: true,
      pager: false,
    });
  } else {
    $("#lightSlider").lightSlider({
      item: 3,
      autoWidth: false,
      slideMargin: 0,
      loop: true,
      speed: 500,
      auto: true,
      vertical: false,
      enableTouch: true,
      enableDrag: true,
      pager: false,
    });
  }

  // courselist
  $(".courseList").click(function () {
    $(".courses").toggle("fast");
  });

  // rules toggle
  $(".rulesList").click(function () {
    $(".rules").toggle("fast");
  });

  // campus map
  $(".viewMap").click(function () {
    $(".campusMap").toggle("fast");
  });

  // staff info accordion
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
      this.classList.toggle("current");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  // reference for accordion js https://www.w3schools.com/howto/howto_js_accordion.asp
});
