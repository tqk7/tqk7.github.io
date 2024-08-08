/*================================================
*
* Template name : Sana
* Version       : 1.1
* Author        : FlaTheme
* Author URL    : https://themeforest.net/user/flatheme
*
* Table of Contents :
* 1. Page Preloader
* 2. Header Menu
* 3. Sliders
* 4. Portfolio Filter
* 5. Lightbox
* 6. Animated Progress bar
* 7. Accordion
* 8. Google Maps
* 9. Contact Form
* 10. Background Image
* 11. Counter
* 12. Scroll To Top
* 13. Animate on Scroll
*
================================================*/
"use strict";

/*===============================================
  1. Page Preloader
===============================================*/
var body = document.body;

window.addEventListener("load", function() {
  document.body.classList.add("loaded");
});

var preloaderType = body.getAttribute("data-preloader");

if (preloaderType === "true") {
  var preloader = document.createElement("div");
  preloader.className = "preloader";
  preloader.innerHTML = "<div><span></span></div>";
  body.appendChild(preloader);
}


/*===============================================
  2. Header Menu
===============================================*/
//
// Header Placeholder //
//
if (document.querySelector(".header.with-placeholder")) {
  var headerPlaceholder = document.createElement("div");
  headerPlaceholder.className = "header-placeholder";
  document.querySelector(".header.with-placeholder").insertAdjacentElement("beforebegin", headerPlaceholder);
}

//
// Open/Close Header Menu //
//
var headerMenu = document.querySelector(".header-menu");
var menuToggle = document.querySelector(".menu-toggle");
var menuClose = document.querySelector("#menu-close");

if (menuToggle) {
  menuToggle.addEventListener("click", function() {
    headerMenu.classList.add("show");
  });
}
if (headerMenu) {
  document.addEventListener("click", function(e) {
    if (!e.target.closest(".header-menu, .menu-toggle")) {
      if (headerMenu.classList.contains("show")) {
        headerMenu.classList.remove("show");
      }
    }
  });
  menuClose.addEventListener("click", function() {
    headerMenu.classList.remove("show");
  });
}

//
// Dropdown Menu //
//
if (document.querySelector(".nav-dropdown")) {
  var navDropdowns = document.querySelectorAll(".nav-dropdown");

  navDropdowns.forEach(function(navDropdown) {
    var parentNavItem = navDropdown.parentNode;
    parentNavItem.insertAdjacentHTML("beforeend", '<a class="nav-dropdown-toggle" href="#"><i class="fa-solid fa-angle-down"></i></a>');
  });

  var navDropdownToggles = document.querySelectorAll(".nav-dropdown-toggle");
  navDropdownToggles.forEach(function(navDropdownToggle) {
    var parentNavItem = navDropdownToggle.parentNode;
    var navDropdown = parentNavItem.querySelector(".nav-dropdown");

    navDropdownToggle.addEventListener("click", function(e) {
      if (navDropdownToggle.classList.contains("active")) {
        navDropdownToggle.classList.remove("active");
        navDropdown.classList.remove("show");
      } else {
        navDropdownToggle.classList.add("active");
        navDropdown.classList.add("show");
      }
      e.preventDefault();
    });
  });

  //
  // Subdropdown //
  //
  var navSubdropdowns = document.querySelectorAll(".nav-subdropdown");
  navSubdropdowns.forEach(function(navSubdropdown) {
    var parentNavDropdownItem = navSubdropdown.parentNode;
    var navDropdownLink = parentNavDropdownItem.querySelector(".nav-dropdown-link");
    navDropdownLink.classList.add("sd-toggle");
    parentNavDropdownItem.insertAdjacentHTML("beforeend", '<a class="nav-subdropdown-toggle" href="#"><i class="fa-solid fa-angle-down"></i></a>');
  });

  var navSubdropdownToggles = document.querySelectorAll(".nav-subdropdown-toggle");
  navSubdropdownToggles.forEach(function(navSubdropdownToggle) {
    var parentNavDropdownItem = navSubdropdownToggle.parentNode;
    var navSubdropdown = parentNavDropdownItem.querySelector(".nav-subdropdown");

    navSubdropdownToggle.addEventListener("click", function(e) {
      if (navSubdropdownToggle.classList.contains("active")) {
        navSubdropdownToggle.classList.remove("active");
        navSubdropdown.classList.remove("show");
      } else {
        navSubdropdownToggle.classList.add("active");
        navSubdropdown.classList.add("show");
      }
      e.preventDefault();
    });
  });
}


/*===============================================
  3. Sliders
===============================================*/
//
// Portfolio Slider //
//
var swiper = new Swiper(".portfolio-slider", {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".swiper-portfolio-next",
    prevEl: ".swiper-portfolio-prev",
  },
});

//
// Blog Slider //
//
var swiper = new Swiper(".blog-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".swiper-blog-next",
    prevEl: ".swiper-blog-prev",
  },
});

//
// Clients Slider //
//
var swiper = new Swiper(".clients-slider", {
  slidesPerView: 2,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    998: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
  },
});

//
// Testimonial Slider //
//
var swiper = new Swiper(".testimonial-slider", {
  slidesPerView: 1,
  spaceBetween: 40,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-testimonial-next",
    prevEl: ".swiper-testimonial-prev",
  },
  pagination: {
    el: ".swiper-testimonial-pagination",
  },
});


/*===============================================
  4. Portfolio Filter
===============================================*/
var pGrid = $(".portfolio-grid");

if (pGrid.length) {
  var mixer = mixitup('.portfolio-grid', {
    selectors: {
        target: '.portfolio-item'
    },
    animation: {
        duration: 250
    }
  });
}


/*===============================================
  5. Lightbox
===============================================*/
//
// Lightbox - Image //
//
var $lightboxImage = $(".lightbox-image a");

$lightboxImage.each(function () {
  var $this = $(this);
  $this.magnificPopup({
    type: 'image',
    fixedContentPos: false,
    removalDelay: 200,
    closeOnContentClick: true, 
    image: {
      titleSrc: 'data-image-title'
    }
  });
});

//
// Lightbox - Video //
//
var $lightboxVideo = $(".lightbox-video a, .lightbox-video-link");

$lightboxVideo.each(function() {
  var $this = $(this);
  $this.magnificPopup({
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0'
        },
          vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }
      },
      srcAction: "iframe_src" 
    }
  });
});


/*===============================================
  6. Animated Progress bar
===============================================*/
$(".animated-progress div").each(function () {
  $(this).appear(function () {
    $(this).css("width", $(this).attr("data-progress") + "%");
  },{accX: 0, accY: -10})
});


/*===============================================
  7. Accordion
===============================================*/
var accordionTitles = document.querySelectorAll(".accordion-title");

accordionTitles.forEach(function (accordionTitle) {
  accordionTitle.addEventListener("click", function () {
    var accordionList = accordionTitle.parentElement;
    var accordionContent = accordionTitle.nextElementSibling;

    if (accordionList.classList.contains("active")) {
      accordionList.classList.remove("active");
      accordionContent.style.maxHeight = null;
    } else {
      accordionList.classList.add("active");
      if (accordionTitle.closest(".accordion").classList.contains("single-open")) {
        var accordionItems = accordionTitle.closest(".accordion").querySelectorAll("li");
        accordionItems.forEach(function (item) {
          item.classList.remove("active");
        });
        accordionList.classList.add("active");
        accordionTitle.closest(".single-open").querySelectorAll(".accordion-content").forEach(function (content) {
          content.style.maxHeight = "0";
        });
      }
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });

  //
  // Give max-height to Accordion's active content //
  //
  var accordion = accordionTitle.parentElement.closest(".accordion");
  if (accordion.querySelector("li.active")) {
    var accordionActiveContent = accordion.querySelector("li.active .accordion-content");
    var accordionHeight = accordionActiveContent.scrollHeight;
    accordionActiveContent.style.maxHeight = accordionHeight + "px";
  }
});


/*===============================================
  8. Google Maps
===============================================*/
var mapCanvas = $(".gmap");

if (mapCanvas.length) {
  var m,divId,initLatitude, initLongitude, map;

  for (var i = 0; i < mapCanvas.length; i++) {
    m = mapCanvas[i];

    initLatitude = m.dataset["latitude"];
    initLongitude = m.dataset["longitude"];
    divId = "#"+ m["id"];

    map = new GMaps({
      el: divId,
      lat: initLatitude,
      lng: initLongitude,
      zoom: 16,
      scrollwheel: false,
      styles: [
          /* style your map at https://snazzymaps.com/editor and paste JSON here */
      ]
    });

    map.addMarker({
      lat : initLatitude,
      lng : initLongitude
    });
  }
}


/*===============================================
  9. Contact Form
===============================================*/
$("#contactform").on("submit", function(e) {
  var name = $("#name").val();
  var email = $("#email").val();
  var subject = $("#subject").val();
  var message = $("#message").val();

  if (name === "") {
    $("#name").addClass("error-color");
  }
  if (email === "") {
    $("#email").addClass("error-color");
  }
  if (subject === "") {
    $("#subject").addClass("error-color");
  }
  if (message === "") {
    $("#message").addClass("error-color");
  }

  else {
    $.ajax({
      url:"/assets/php/contact-form.php",
      data:$(this).serialize(),
      type:"POST",
      success:function(data){
        $("#success").addClass("show-result"); //=== Show Success Message==
        $("#contactform").each(function(){
          this.reset();
        });
      },
      error:function(data){
        $("#error").addClass("show-result"); //===Show Error Message====
      }
    });
    var forms = $("#contactform input, #contactform textarea");
    forms.removeClass("error-color");
  }

  e.preventDefault();
});


/*===============================================
  10. Background Image
===============================================*/
var bgImages = document.querySelectorAll(".bg-image");

if (bgImages) {
  bgImages.forEach(function(bgImage) {
    var bgData = bgImage.getAttribute("data-bg-src");
    bgImage.style.backgroundImage = 'url("' + bgData + '")';
  });
}


/*===============================================
  11. Counter
===============================================*/
var nCounter = document.querySelectorAll(".counter");

if (nCounter) {
  $(".counter").appear(function() {

    $(this).each(function () {
      $(this).prop("Counter",0).animate({
          Counter: $(this).text()
      }, {
          duration: 2500,
          easing: "swing",
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
    
  },{accX: 0, accY: -10});
}


/*===============================================
  12. Scroll To Top
===============================================*/
var scrollTopBtn = document.querySelector(".scrolltotop");

if (scrollTopBtn) {
  // Show, Hide //
  window.addEventListener("scroll", function() {
    if (window.scrollY > 700) { // 700px from top
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });
  // Scroll to top on click //
  scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
    });
  });
}


/*===============================================
  13. Animate on Scroll
===============================================*/
scrollCue.init();