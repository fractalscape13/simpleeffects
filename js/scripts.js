$(document).ready(function() {
    $(".clickable").click(function() {
      $("#walrus-showing").fadeToggle();
      $("#walrus-hidden").fadeToggle();
    });
    $(".clickable2").click(function() {
        $("#hiddentext").fadeIn();
    });
    $(".clicktohide").click(function() {
        $("#hiddentext").fadeOut();
    });
  });