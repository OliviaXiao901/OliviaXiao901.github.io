$(document).ready(function(){

  $("#story1").hide();
  $("#story2").hide();
  $(".question").hide();
  $(".button").hide();

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
    $("#story2").show(1000);
    $("#choice3").show(1000);
    $("#choice4").show(1000);
  });

});
