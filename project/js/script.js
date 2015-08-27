// Created by Andrew Lancaster
// on 8/18/2015

$(document).ready(function(){
	$("span").animate({"width": "100px"}, 1000);

	$(".tab").click(function(){
		$(".tab").removeClass("active");
		$(this).addClass("active");
		$("section#about").find("article").slideUp(500, "jswing");
		var tabId = $(this).attr("data-id");
		$(tabId).slideDown(1000, "jswing");

	});
});