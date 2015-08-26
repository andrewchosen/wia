// Created by Andrew Lancaster
// on 8/18/2015

$(document).ready(function(){

	$("ul > li").hover(slideDown, slideUp);

});

function slideDown(){$(this).find("ul").stop().slideDown(200);}
function slideUp(){$(this).find("ul").stop().slideUp(200);}