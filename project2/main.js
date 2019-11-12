$(document).ready(function(){

  $("#story1").hide();
  $("#story2").hide();
  $("#story3").hide();
  $("#story4").hide();
  $("#story5").hide();
  $("#story6").hide();
  $("#story7").hide();
  $(".question").hide();
  $(".button").hide();
  $("#narrative2").hide();
  $("#narrative4").hide();


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

  $("#card3").click(function(){
    $("#card3").attr("src", "pic/close3");
    $("#card").attr("height", "700");
    $(".narrative").text("Due to her strong powers, only Sun Wukong could detect that she was a demon.");
    $("#pic3").show(1000);
    $("#choice5").show(1000);
    $("#choice6").show(1000);
  });

  $("#choice5").click(function(){
    $("#panel3").slideToggle("slow");
  });

  $("#choice6").click(function(){
    $("#story3").hide();
    $(".narrative").text("When Tang was about to eat her food, Monkey King came.");
    $("#story4").show(1000);
    $("#pic4").show(1000);
  });

  $("#card4").click(function(){
    $("#card4").attr("src", "pic/close4");
    $("#card").attr("height", "300");
    $(".narrative").text("Monkey King hit her with his staff, seemingly killing her. ");
    $("#pic4").text("How will Tang react to this?");
    $("#choice7").show(1000);
    $("#choice8").show(1000);
  });

  $("#choice8").click(function(){
    $("#panel4").slideToggle("slow");
  });

  $("#choice7").click(function(){
    $("#story4").hide();
    $(".narrative").hide();
    $("#story5").show(1000);
    $("#narrative3").show(1000);
    $("#card5").hide();
    $("#narrative3").text("But has the White bone demon died? click text to continue.");
    $(".story").hide();
  });

  $("#narrative3").click(function(){
    $("#narrative3").hide();
    $("#narrative4").show(1000);
    $("#narrative4").text(" No. Tang Sanzang believed she was an innocent and buried her. Having survived the attack, the White Bone Demon dug underground to recover. Click on text to continue");
  });

  $("#narrative4").click(function(){
    $("#narrative4").text("She returned a second time disguised as an elderly woman.");
    $("#story5").show(1000);
    $(".story").show(1000);
    $("#pic5").show(1000);
    $("#card5").show(1000);
    $("#choice9").show(1000);
    $("#choice10").show(1000);
  });

  $("#choice10").click(function(){
    $("#panel5").slideToggle("slow");
  });

  $("#choice9").click(function(){
    $("#card5").hide();
    $(".question").hide();
    $(".button").hide();
    $(".panel").hide();
    $("#story5").hide();
    $(".narrative").hide();
    $("#story6").show(1000);
    $("#narrative5").show(1000);
    $("#card6").hide();
    $("#narrative5").text("Do you think Tang Sanzang will believe in Monkey King this time? click text to continue.");
    $(".story").hide();
  });

  $("#narrative5").click(function(){
    $("#narrative5").hide();
    $("#narrative6").show(1000);
    $("#narrative6").text(" No. Before the demon was beaten, she lied to the group, causing them to believe that the village girl from earlier was her daughter and the group was angry at what Monkey King did. So after Tang saw the old woman was killed by Monkey King, he harshly punished Monkey King and said if this happens again, Sun will not be able to accompany him. Click on text to continue");
  });

  $("#narrative6").click(function(){
    $("#narrative6").text("Finally, the Demon returns again as an elderly man who lies about having a daughter and wife.");
    $("#story5").show(1000);
    $(".story").show(1000);
    $("#pic6").show(1000);
    $("#card6").show(1000);
    $("#choice11").show(1000);
    $("#choice12").show(1000);
  });

  $("#choice12").click(function(){
    $("#panel6").slideToggle("slow");
  });

  $("#choice11").click(function(){
    $("#card6").hide();
    $(".question").hide();
    $(".button").hide();
    $("#story6").hide();
    $(".narrative").hide();
    $("#story7").show(1000);
    $("#narrative7").show(1000);
    $("#card7").hide();
    $("#narrative7").text("Tang Sanzang is angry at Sun Wukong at his reckless slaying and scolds him. click text to continue.");
    $(".story").hide();
  });

  $("#narrative7").click(function(){
    $("#narrative7").text("He cuts his ties with Sun Wukong and sends him away.");
    $("#story7").show(1000);
    $(".story").show(1000);
    $("#card7").show(1000);
  });


});
