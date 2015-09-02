$(document).ready(function(){
	console.log($("header").find(".container"));
	$("header").find(".container").append("<video src='videos/prism-light.avi' autoplay loop></video>");
});