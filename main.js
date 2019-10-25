$(document).ready(function(){

  console.log("page has loaded");
  var object = $("p");
  object=$(".second");
  object=$("#food");

  $(".second").html("not haha");

  $(".second").css("color","#ffaa33");
  $("body").css("background","light pink");

  $("img").attr("src","https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/dog-landing-hero-lg.jpg?bust=1536935129&width=1080")

  $(".second").click(function(){
  $("body").css("background", "red");
});


$("#dog").hide();

$("#showdog").click(function(){
  $("#dog").show();
  $("#dog").click(function(){
    $("#dog").hide();
  });
});

$("#showdog").hover(function(){
  $("#showdog").animate({fontSize:"100px", color:"gray"}, 1000);
},function(){
  $("#showdog").css("font-size","1px");
});

  console.log(object);

});
