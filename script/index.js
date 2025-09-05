$("button.startTour").click(function () {
  $("html").addClass("hideNavbar");
  $(".informationContainer").fadeOut();
  $(".textZone").addClass("moveLeft");
  $(".heroSection").addClass("grayScale");

  $(".videoCardOverlay button").fadeOut(500, function () {
    $(".heroSection > video.card-img-top:first-child").addClass("d-none");
    $(".heroSection > video.card-img-top.loading").removeClass("d-none");

    $(".heroSection .card-img-overlay").css({
      "background": "none",
      "backdrop-filter": "none"
    });
    $(".videoOverlay").addClass("d-none");

    $(".videoContainer > video").fadeOut(300, function () {
      $(".videoContainer img.card-img-top.hidden").fadeIn(700).removeClass("hidden");
    });

    $(".videoContainer").addClass("moveToCenter");

    setTimeout(function () {
      $(".videoCardOverlay .videoLoader").addClass("fadeUpLoading");
    }, 1500);
    setTimeout(function () {
      $("html").removeClass("hideNavbar").addClass("tourStarted");
      startTour()
      //waitForElements('.customThumb, .imageHotspot', showTutorial);
      
    }, 4500);
    
  });

  // Start loading animation
  startLoading(function () {
    // After loading completes
    setTimeout(function () {
      // Instead of redirecting, fade out heroSection and fade in #pano
      $(".heroSection").addClass("zoomOutBeforeFade");

setTimeout(function () {
  $(".heroSection").addClass("zoomed");

  setTimeout(function () {
    $(".heroSection").hide(); // Or use .fadeOut(0) if preferred
    $(".tourContainer").fadeIn(1000);
  }, 1000); // Match the transition duration

}, 100); // Optional short delay before starting zoom

    }, 0); // Optional delay after loading
  });
});

function startLoading(callback) {
  var $percentage = $('.percentage');
  var $loadingText = $('.loadingText');
  var $videoContainer = $('.videoContainer');
  var $moveLeft = $(".moveLeft");
  var progress = 0;

  var intervalId = setInterval(function () {
    if (progress < 100) {
      progress++;
      $percentage.text(progress + '%');
    } else {
      clearInterval(intervalId);

      $percentage.addClass('fadeOutDown');
      $loadingText.addClass('fadeOutDown');
      $videoContainer.addClass('goToTour');
      $moveLeft.addClass('d-none');

      setTimeout(function () {
        if (callback) callback();
      }, 600);
    }
  }, 30);
}

    $(".search").click(function () {
    $(".open-search").addClass("active");
    $("body").css({ overflow: "hidden" });
    setTimeout(function () {
        $(".close-search").css({ display: "flex" });
    }, 400);
    $("#txtSearch").focus();
    });
    $(".menu-btn").click(function () {
    $(".menu").addClass("active");
    $(".links").addClass("animate");
    $("body").css({ overflow: "hidden" });
    $(".nav-item").addClass("reveal");

    setTimeout(function () {
        $(".close-btn").css({ display: "flex" });
    }, 400);
    });
    $(".close-btn").click(function () {
    if ($(".menu").is(".active")) {
    $(".menu").addClass("inactive");

    $(".menu").removeClass("active");
    }
    $(".links").removeClass("animate");
    $(".nav-item").removeClass("reveal");
    $(this).css({ display: "none" });
    $("body").css("overflow-y", "auto");
    $(".open-search").addClass("close-search");
    setTimeout(function () {
    $(".open-search").removeClass("active");
    $(".open-search").removeClass("close-search");
    }, 500);
    });
    function RedirectToEnglishArabic(){
    var portalUrl = window.location.href;
    if (portalUrl.indexOf("/ar/") > -1) {
    portalUrl = window.location.href.replace("/ar/","/en/");
    }
    else if(portalUrl.indexOf("/en/") > -1){
    portalUrl = window.location.href.replace("/en/","/ar/");
    }
    $("#langBtn").attr("href",portalUrl);
    $("#langBtn-ar").attr("href",portalUrl);
    }
    $("#langBtn").click(function() {
        RedirectToEnglishArabic();
    });
    $("#langBtn-ar").click(function() {
        RedirectToEnglishArabic();
    });
    $(function() {
    var $percentage = $('.percentage');
    var progress = 0;
    var intervalId;

    function startLoading() {
      intervalId = setInterval(function() {
        if (progress < 90) {
          progress++;
          $percentage.text(progress + '%');
        }
      }, 30);
    }

    $(window).on('load', function() {
      clearInterval(intervalId);
      progress = 100;
      $percentage.text('100%');

      // Optional: hide loader after loading completes
      // $('.videoLoader').fadeOut();
    });

    
  });
$(document).ready(function(){
  $("#map-container").click(function(){
    $('.mapContainerPopup').fadeIn();
  })
})
