// Created by Andrew Lancaster
// on 8/18/2015

$(document).ready(function(){

	$("ul").hoverIntent({
	    over: slideDown,
	    out: slideUp,
	    selector: 'li',
	    timeout: 150,
	    sensitivity: 3
	});

});

function slideDown(){$(this).find("ul").slideDown(200);}
function slideUp(){$(this).find("ul").slideUp(200);}