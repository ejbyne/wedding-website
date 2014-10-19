var target_date = new Date("Sep 20, 2014").getTime() + 50400000;
var days, hours, minutes, seconds;
var countdown = document.getElementById("countdown");
setInterval(function() {
	var local_date = new Date().getTime();
	var local_offset = new Date().getTimezoneOffset() * 60000;
	var current_date = local_date + local_offset + 7200000;
	var seconds_left = (target_date - current_date) / 1000;
	days = parseInt(seconds_left / 86400);
	seconds_left = seconds_left % 86400;
	hours = parseInt(seconds_left / 3600);
	seconds_left = seconds_left % 3600;
	minutes = parseInt(seconds_left / 60);
	seconds = parseInt(seconds_left % 60);
	countdown.innerHTML = "Countdown: " + "</br>" + days + " days, " + hours + " hours, " + minutes + " minutes and " + seconds + " seconds";
}, 1000);

$(document).ready(function(){
	$('.list').mouseenter(function() {
		$(this).fadeTo('fast', 1);
	});
	$('.list').mouseleave(function() {
		$(this).fadeTo('fast', 0.5);
	})
	$('#option1').click(function() {
		$('#popup2, #popup3, #popup4, #popup5').hide();
		$('#popup1').toggle('slow');
	});		
	$('#option2').click(function() {
		$('#popup1, #popup3, #popup4, #popup5').hide();
		$('#popup2').toggle('slow');
	});		
	$('#option3').click(function() {
		$('#popup1, #popup2, #popup4, #popup5').hide();
		$('#popup3').toggle('slow');
	});		
	$('#option4').click(function() {
		$('#popup1, #popup2, #popup3, #popup5').hide();
		$('#popup4').toggle('slow');
	});		
	$('#option5').click(function() {
		$('#popup1, #popup2, #popup3, #popup4').hide();
		$('#popup5').toggle('slow');
	});
	
	setInterval(function(){
		$('#ed').animate({left: '+=395px'}, 5000).animate({left: '-=395px'}, 5000);
		$('#sini').animate({left: '-=395px'}, 5000).animate({left: '+=395px'}, 5000);
		$('#henry').effect("bounce", {times: 5}, 3000);
	}, 0);

});
