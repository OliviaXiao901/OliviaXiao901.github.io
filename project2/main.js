$(document).ready(function(){

  $("#story1").hide();
  $("#story2").hide();
  $("#story3").hide();
  $(".question").hide();
  $(".button").hide();
  $("#narrative2").hide();


  $(".startButton").click(function(){
    $(".startButton").hide();
    $("#story1").show(1000);
    $("#pic1").hide();
  });

  $(".story").click(function(){
    $("#pic1").show(1000);
  });

  $("#pic1").click(function(){
    $("#card").attr("src", "pic/close1");
    $("#card").attr("height", "700");
    $("#pic1").text("Who is she?");
    $("#choice1").show(1000);
    $("#choice2").show(1000);
  });

  $("#choice1").click(function(){
    $("#panel1").slideToggle("slow");
  });

  $("#choice2").click(function(){
    $("#story1").hide();
    $("#card2").hide();
    $("#choice2").hide();
    $("#story2").show(1000);
  });

  $("#narrative1").click(function(){
    $(".narrative").hide();
    $("#choice3").show(1000);
    $("#choice4").show(1000);
  });

  $("#choice3").click(function(){
    $("#panel2").slideToggle("slow");
  });

  $("#choice4").click(function(){
    $("#choice3").hide();
    $("#panel2").hide();
    $("#choice4").hide();
    $("#narrative2").show(1000);
    $("#card2").show(1000);
    $("#pic2").show(1000);
  });

  $("#pic2").click(function(){
    $("#story2").hide();
    $("#story3").show(1000);
    $(".narrative").show(1000);
  });

});
