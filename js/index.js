$(document).ready(function() {
  let power = false;
  let saberOn = new Audio("http://www.jarrodyellets.com/sounds/renOn.mp3");
  let saberOff = new Audio("http://www.jarrodyellets.com/sounds/renOff.mp3");
  $(".housing").click(function() {
    power = !power;
    if (power) {
      $(this).addClass("rotate");
      setTimeout(function() {
        saberOff.pause();
        saberOff.currentTime = 0;
        saberOn.play();
      }, 300);
      setTimeout(function() {
        $(".saberLong").css("width", "1000px");
        $(".line1").css("width", "960px");
        $(".line2").css("width", "960px");
        $(".spark1").addClass("sparkAnimationUp");
        $(".spark2").addClass("sparkAnimationDown");
        $(".sparks").addClass("spark");
      }, 500);
      setTimeout(function() {
        $(".saberUpper").css("height", "175px");
        $(".saberLower").css("height", "175px");
        $(".spark3").addClass("sparkAnimationUp");
        $(".spark4").addClass("sparkAnimationDown");
        $(".line3").css("height", "150px");
        $(".line4").css("height", "150px");
        $(".line5").css("height", "150px");
        $(".line6").css("height", "150px");
      }, 1270);
    } else {
      $(".saberLong").css("width", "0");
      $(".line1").css("width", "0");
      $(".line2").css("width", "0");
      $(".line3").css("height", "0");
      $(".line4").css("height", "0");
      $(".line5").css("height", "0");
      $(".line6").css("height", "0");
      $(".saberUpper").css("height", "0");
      $(".saberLower").css("height", "0");
      $(".sparkUp").removeClass("sparkAnimationUp");
      $(".sparkDown").removeClass("sparkAnimationDown");
      $(".sparks").removeClass("spark");
      saberOn.pause();
      saberOn.currentTime = 0;
      saberOff.play();
      setTimeout(function() {
        $(".housing").removeClass("rotate");
      }, 300);
    }
  });
});