/* javascript/jquery for namthai website */

$( document ).ready(function() {
    $(".button-collapse").sideNav();
	$('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
	$('container').height($(window).height()/2);
	$(".menuscrollbutton").click(function() {
    	$('html,body').animate({
        scrollTop: $("#menutopscroll").offset().top},
        'slow');
	});
	$(".scrollbutton").click(function() {
    	$('html,body').animate({
        scrollTop: $("#mainpart").offset().top},
        'slow');
	});
});