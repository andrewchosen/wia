// Created by Andrew Lancaster
// on 8/25/2015

var barSpacing = 0;
var barWidth = 0;
var chartHeight = 0;
var chartHeightArea = 0;
var chartScale = 0;
var maxValue = 0;
var highestYlabel = 0;
var valueMultiplier = 0;

$(document).ready(function(){

	Modernizr.load([{
		test: Modernizr.rgba,
		yep: 'css/rgba.css',
		nope: 'css/no-rgba.css'
	},
	{
		test: Modernizr.video,
		yep: 'js/video.js'
	},
	{
		test: Modernizr.svg,
		nope: 'js/no-svg.js'
	}]);



	// Scroll Effect

	$('a[href^="#"]').on('click',function(e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	// Title Animations

	titles();

	$("nav").click("a", function(){
		titles();
		animateChart();
	});

	// About Tabs

	$(".tab").click(function(){
		$(".tab").removeClass("active");
		$(this).addClass("active");
		$("section#about").find("article").hide();
		var tabId = $(this).attr("data-id");
		$(tabId).fadeIn("2000");

	});

	// Chart

	window.chartHeight = Number($('.chart-area').height());
	window.barWidth = $('.chart-area .chart-bar').width();
	window.highestYlabel = Number($('.chart-y-axis p').first().html());
	window.chartHeightArea = window.chartHeight - Number($('p.axis-value').first().height());
	window.chartScale = chartHeightArea / window.highestYlabel;
	window.barSpacing = Number($('.chart-area').attr('bar-spacing'));
	positionBars();

	// Interactive Map

	$('#mapForm').change(function() {
	
		var selectedType = $('#mapForm option:selected').val();
		if (selectedType == 'ALL'){
			$('a.dot').show(400);
		}else{
			$('a.dot[type = "'+selectedType+'"]').show(400);
			$('a.dot[type != "'+selectedType+'"]').hide(400);
		}
		
	});

	$('a.dot').click(function(){

		$('a.dot').removeClass('selected');
		$(this).addClass('selected');

		var client = '.client_detail#' + $(this).attr('client');
		var htmlCode = $(client).html();

		$('.detail_container').fadeOut(500, function(){
			$('.detail_container').html(htmlCode);
			$('.detail_container').fadeIn(500);
		});

	});
});

function titles(){
		$("h1").hide().show("slide", {direction: "down"}, 1000);
		$("h2").hide().show("slide", {direction: "up"}, 1000);
		$("h3").hide().show("slide", {direction: "down"}, 1000);
		$("span").css({"width": "0px"}).delay(1000).animate({"width": "100px"}, 1000);
	};

function positionBars(){
	$('.chart-area .chart-bar').each(function(index){
	
		var barPosition = (window.barWidth*index)+(index*barSpacing)+barSpacing;
		$(this).css('left',barPosition+'px');
		$(this).html('<p>'+$(this).attr('bar-value')+'%</p>');
		$('.chart-x-axis').append('<p style="left:'+(barPosition-(window.barWidth/2))+'px;">'+$(this).attr('label')+'</p>');
	
		var barValue = Number($(this).attr('bar-value'));
		if(barValue > window.maxValue){
			window.maxValue = barValue;
			window.valueMultiplier = window.maxValue / window.highestYlabel;
		}
		
	});
	animateChart();
}

function animateChart(){

	$('.chart-area .chart-bar').each(function(index){
		$(this).children('p').hide();
		var revisedValue = Number($(this).attr('bar-value'))*window.chartScale;
		var newDelay = 125*index;
		$(this).delay(newDelay).css({"height": "0"}).animate({height:revisedValue},1000, function(){
			$(this).children('p').delay(500).fadeIn(250);
		});
	});
	
	/* debug */ $('.valueMultiplier').html('valueMultiplier = '+window.valueMultiplier);
	/* debug */ $('.highestYlabel').html('highestYlabel = '+highestYlabel);
	/* debug */ $('.maxValue').html('maxValue = ' + window.maxValue);
	/* debug */ $('.chartHeight').html('chartHeight = '+window.chartHeight);
	/* debug */ $('.chartHeightArea').html('chartHeightArea = '+window.chartHeightArea);
	/* debug */ $('.chartScale').html('chartScale = '+window.chartScale);

}