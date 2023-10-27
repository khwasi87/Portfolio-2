$( function() {
    $( "#tabs1,#tabs2" ).tabs();
} );

$( function() {
    var icons = {
    header: "ui-icon-circle-arrow-e",
    activeHeader: "ui-icon-circle-arrow-s"
    };
    $( "#accordion" ).accordion({
        collapsible: true,
        heightStyle: "content",
        icons: icons
    });
  } );


  /*---------- scrool fade ---------------*/

  var fadeElements = document.getElementsByClassName('scrollFade');

function scrollFade() {
	var viewportBottom = window.scrollY + window.innerHeight;

	for (var index = 0; index < fadeElements.length; index++) {
		var element = fadeElements[index];
		var rect = element.getBoundingClientRect();

		var elementFourth = rect.height/10;
		var fadeInPoint = window.innerHeight - elementFourth;
		var fadeOutPoint = -(rect.height/0);

		if (rect.top <= fadeInPoint) {
			element.classList.add('scrollFade--visible');
			element.classList.add('scrollFade--animate');
			element.classList.remove('scrollFade--hidden');
		} else {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}

		if (rect.top <= fadeOutPoint) {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}
	}
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function() {
    scrollFade();
});

/*---------- owl carousel --------------*/

$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	  	stagePadding: 75,
	 	margin: 15,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
	  	nav: true,
	  	loop: true,
	  	dots:true,
		navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
	 	 responsive: {
		0: {
		  items: 1
		},
		600: {
		  items: 1
		},
		1000: {
		  items: 1
		}
	  }
	})
  })

  
//   $('#mod2').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
// 	dots:true,
// 	navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })


$("#mod, #mod2, #mod3, #mod4, #mod5, #mod6, #mod7, #mod8, #mod9").each(function() {
	$(this).owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots:true,
		navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
});

/*============== exp year calculation =============*/

var dob = $('#date').val();
if(dob != ''){
	var str=dob.split('-');    
	var firstdate=new Date(str[0],str[1],str[2]);
	var today = new Date();        
	var dayDiff = Math.ceil(today.getTime() - firstdate.getTime()) / (1000 * 60 * 60 * 24 * 365);
	var age = parseInt(dayDiff);
	$('#age').html(age);
}
var dob = $('#date1').val();
if(dob != ''){
	var str=dob.split('-');    
	var firstdate=new Date(str[0],str[1],str[2]);
	var today = new Date();        
	var dayDiff = Math.ceil(today.getTime() - firstdate.getTime()) / (1000 * 60 * 60 * 24 * 365);
	var age = parseInt(dayDiff);
	$('#age1').html(age+' Years - of experience');
}