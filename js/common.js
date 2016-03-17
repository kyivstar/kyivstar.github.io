$(function() {
	
	$('.main-mnu ul a').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
   });

	$(".popup-modal").magnificPopup();

	$(".toggle-mnu").click(function() {
	  $(this).toggleClass("on");
	  $(".main-mnu").slideToggle();
	  return false;

	});
		$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 991 && $(".main-mnu").is(':hidden')){
			$(".main-mnu").removeAttr('style');
		}
	});

	//SPEED ICONS
	$(".prices").waypoint(function(){
	var a = -90;
	function rot(n, wh){
	  a++;
	   if (a > n){ return false;}
	      $(wh).css("transform","rotate("+a+"deg)");
	};
	setInterval(rot,20,'10','#speed2');
	setInterval(rot,50,'-60','#speed1');
	setInterval(rot,30,'70','#speed3');
	},

	{
		offset: '40%'
	});

	
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


$('img').each(function(){
var $img = $(this);
var imgID = $img.attr('id');
var imgClass = $img.attr('class');
var imgURL = $img.attr('src');

$.get(imgURL, function(data) {
// Get the SVG tag, ignore the rest
var $svg = $(data).find('svg');

// Add replaced image's ID to the new SVG
if(typeof imgID !== 'undefined') {
$svg = $svg.attr('id', imgID);
}
// Add replaced image's classes to the new SVG
if(typeof imgClass !== 'undefined') {
$svg = $svg.attr('class', imgClass+' replaced-svg');
}

// Remove any invalid XML tags as per http://validator.w3.org
$svg = $svg.removeAttr('xmlns:a');

// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
}

// Replace image with new SVG
$img.replaceWith($svg);

}, 'xml');

});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
$(".preloader").fadeOut();
});
