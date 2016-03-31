$(function() {
	
	$(".prices").waypoint(function(){
			var a = -120;
	function rot(n, wh){
	  a++;
	   if (a > n){ return false;}
	      $(wh).css("transform","rotate("+a+"deg)");
	};
	setInterval(rot,20,'10','#speed2');
	setInterval(rot,25,'-60','#speed1');
	setInterval(rot,20,'70','#speed3');
		$({blurRadius: 1}).animate({blurRadius: 0}, {
		duration: 1500,
		easing: 'swing',
		step: function() {
			$(".prices .container-price .speed-item-text p").css({
				"-webkit-filter": "blur("+this.blurRadius+"px)",
				"filter": "blur("+this.blurRadius+"px)"
			});
		},
		
	});
	var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
	$(".prices .container-price .speed-item-text p").each(function() {
		var tcount = $(this).data("count");
		$(this).animateNumber({ number: tcount,
			easing: 'easeInQuad',
			"font-size": "2.4em",
			numberStep: comma_separator_number_step},
			1500);
	});this.disable();
	},
{
	offset: '85%'

});



	$('.main-mnu ul a').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1500);
       //
      var wid = $(window).width();
      if (wid <= 991) {
      	 $(".main-mnu").slideToggle();
		 $(".toggle-mnu").toggleClass("on");
      }
    
      //
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
		if(wid >= 991 && $(".main-mnu").is(':hidden')){
			$(".main-mnu").removeAttr('style');
		}
	});

	//SPEED ICONS
	

	
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
