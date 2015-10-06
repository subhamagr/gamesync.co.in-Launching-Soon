// JpreLoader ------------------
	$('#wrapper').jpreLoader({
		loaderVPos: '50%',
		autoClose: true,
	}, 
	function() {
		var al = {queue:false,duration:200,easing:"easeInOutQuad"};	
		$('#wrapper').animate({"opacity":'1'},{queue:false,duration:700,easing:"easeInOutQuad"});		

		$('.about-link').animate({'margin-left':'0'},al);
		$('.contact-link').animate({'margin-right':'0'},al);
		setTimeout( function(){		
			$('.fistslide').removeClass('bc');
		},900);
	});

function init_gamesync() {

	"use strict";

//------------------------------init Superslides-----------------------

	$('#slides').superslides({
		animation: 'fade',
		play: 10000
	});
	
//------------------------------init swiper-----------------------

	var mySwiper = new Swiper('.swiper-container',{
		initialSlide:1,
	});

	$('.arrow-left').on('click', function(e){
    	e.preventDefault();
   		mySwiper.swipePrev();
  	});
	
	$('.arrow-right').on('click', function(e){
		e.preventDefault();
		mySwiper.swipeNext();
	});

	$('a.home-nav-link').on('click', function(e) {
		e.preventDefault();
		mySwiper.swipeTo( 1,1000,false );
	});

	$('a.contact-nav-link').on('click', function(e) {
		e.preventDefault();
		mySwiper.swipeTo( 2,1000,false );
	});

	$('a.about-nav-link').on('click', function(e) {
		e.preventDefault();
		mySwiper.swipeTo( 0,1000,false );
	});
	
//------------------------------init countdown-----------------------

	$('.countdown').downCount({
		date: '09/12/2015 12:00:00', // your date
		offset: +10
	});	
	
// functions ------------------	

	function showprogresss() { 
		$(".show-progress").removeClass('isDown');
		$('.fade').addClass('bc');
			setTimeout( function(){	
				$('.progress-holder').fadeIn(1000);		
			},650);
			$({value: 0}).animate({value: $('.num2').attr("name")}, {
				duration: 2000,
				easing:'swing',
				step: function() 
					{
						$('.num2').val(Math.ceil(this.value)).trigger('change');
					}
			})
	}
	
	function hideprogresss() { 
		$(".show-progress").addClass('isDown');
		$('.progress-holder').fadeOut(1000);	
		setTimeout( function(){	
			$('.fade').removeClass('bc');	
		},650);				    
	}
	function showform() { 
		$('.fade2').addClass('bc2');
		setTimeout( function(){	
			$('.contact-form').fadeIn(500);			
		},650);		   
	}
	function hideform() { 
		$('.contact-form').fadeOut(500);
		setTimeout( function(){	
			$('.fade2').removeClass('bc2');		
		},650);				   
	}	
	
	$('.lanch-form').click(function(){showform();});
	$('.close-form').click(function(){hideform();});
	
	$('.num').knob();
	$(".show-progress").click( function(){
		$(this).toggleClass('but-rotade');
		if ($(this).hasClass("isDown") ) {
			showprogresss();			
		} else {
			hideprogresss();
		}	
		return false;
	});
	
$(document).ready(function(){
	init_gamesync();
});
