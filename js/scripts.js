$(document).ready(function(){
  $("button#dark").click(function(){
    $("body").removeClass();
    $("body").addClass("dark-background")
  });

  $("button#light").click(function(){
    $("body").removeClass();
    $("body").addClass("light-background")
  });

  $("p").click(function(){
    $("p").removeClass();
    $("p").addClass("paragraph-decoration")
  });

})
