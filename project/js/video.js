$(document).ready(function(){
	console.log($("header").find(".container"));
	$("header").find(".container").append("<video src='videos/dark_smoke.mov' autoplay loop></video>");
});