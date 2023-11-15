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


  /*---------- scrool effect ---------------*/


/*---------- owl carousel --------------*/
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

/*========== time elapsed Js==============*/

function calculateElapsedYears() {
	var startDate = new Date(document.getElementById("start_date").value);
	var endDate = new Date(document.getElementById("end_Date").value);
   
	var elapsedYears = endDate.getFullYear() - startDate.getFullYear();
   
	document.getElementById("elapsed_years").innerHTML = elapsedYears;

	var startDate1 = new Date(document.getElementById("start_date1").value);
	var endDate1 = new Date(document.getElementById("end_Date1").value);
   
	var elapsedYears1 = endDate1.getFullYear() - startDate1.getFullYear();
   
	document.getElementById("elapsed_years1").innerHTML = elapsedYears1;

	var startDate1 = new Date(document.getElementById("start_date2").value);
	var endDate1 = new Date(document.getElementById("end_Date2").value);
   
	var elapsedYears1 = endDate1.getFullYear() - startDate1.getFullYear();
   
	document.getElementById("elapsed_years2").innerHTML = elapsedYears1;
   }
   
	   /*================ today date js================*/

	   var date = new Date();
   
	   var day = date.getDate();
	   var month = date.getMonth() + 1;
	   var year = date.getFullYear();
   
	   if (month < 10) month = "0" + month;
	   if (day < 10) day = "0" + day;
   
	   var today = year + "-" + month + "-" + day;
   
	   document.getElementById('end_Date').value = today;

	   var date = new Date();
   
	   var day = date.getDate();
	   var month = date.getMonth() + 1;
	   var year = date.getFullYear();
   
	   if (month < 10) month = "0" + month;
	   if (day < 10) day = "0" + day;
   
	   var today = year + "-" + month + "-" + day;
   
	   document.getElementById('end_Date2').value = today;

	  /*========== mobile-js===============*/

	  var date = new Date();
   
	  var day = date.getDate();
	  var month = date.getMonth() + 1;
	  var year = date.getFullYear();
	  
	  if (month < 10) month = "0" + month;
	  if (day < 10) day = "0" + day;
  
	  var today = year + "-" + month + "-" + day;
  
	  document.getElementById('today1').value = today;

	  $(document).ready(function() {
		// Get the current date.
		var today = new Date();
   
		// Get the date of birth from the input field.
		var dob = new Date($('#start-date').val());
   
		// Calculate the age difference in years.
		var age = today.getFullYear() - dob.getFullYear();
   
		// Display the age.
		$('#age').html(age);
	  });
	  /*----------- exp 2nd --------------*/
	  var date = new Date();
   
	  var day = date.getDate();
	  var month = date.getMonth() + 1;
	  var year = date.getFullYear();
	  
	  if (month < 10) month = "0" + month;
	  if (day < 10) day = "0" + day;
  
	  var today = year + "-" + month + "-" + day;
  
	  document.getElementById('today2').value = today;

	  $(document).ready(function() {
		// Get the current date.
		var today = new Date();
   
		// Get the date of birth from the input field.
		var dob = new Date($('#start-date1').val());
   
		// Calculate the age difference in years.
		var age = today.getFullYear() - dob.getFullYear();
   
		// Display the age.
		$('#age1').html(age);
	  });

	  /*============ mobile js ends===========*/

	   /*============ button disappear js============*/

	   function disappear() {
		document.getElementById("myButton").style.display = "none";
	  }
	  document.getElementById("myButton").addEventListener("click", disappear);

	  /*========== copyright date===========*/

	  $(document).ready(function() {
		var currentYear = new Date().getFullYear();
		$("#copyright-year").html(currentYear);
	  });

	$(document).ready(function(){
		$("#close").click(function(){
		  $("#alert").hide();
		});
	});

	/*=========== progress bar =============*/

	$(document).ready(function () {
		$(window).on("scroll", function () {
		  // Show & Hide Text On-Scroll
		  if ($(window).scrollTop() > 1000) {
			$(".progress-percent").fadeIn(6000);
		  } else {
			$(".progress-percent").fadeOut(1000);
		  }
		});
	  });


	  /*----------------- progress bar ------------------*/

	  (function($) {

		jQuery.fn.progressBar = function( options ) {
	
			//Default values for progress_bar
			var defaults = {
				height : "20",
				backgroundColor : "#E0E0E0",
				barColor : "#F97352",
				targetBarColor : "#CCC",
				percentage : true,
				shadow : false,
				border : false,
				animation : false,
				animateTarget : false,
			};
	
			var settings = $.extend( {}, defaults, options );
	
			return this.each( function() {
				var elem = $( this );
				$.fn.replaceProgressBar( elem, settings );
			});
		};
	
		$.fn.replaceProgressBar = function( item, settings ) {
			var skill		= item.text();
			var progress	= item.data( 'width' );
			var target		= item.data ( 'target' );
			var bar_classes = ' ';
			var animation_class = '';
			var bar_styles	= 'background-color:' + settings.backgroundColor + ';height:' + settings.height + 'px;';
			if ( settings.shadow ) { bar_classes += 'shadow'; }
			if ( settings.border ) { bar_classes += ' border'; }
			if ( settings.animation ) { animation_class = ' animate'; }
	
			var overlay = '<div class="my-progressbar' + animation_class + '" data-width="' + progress + '">';
			overlay += '<p class="title">' + skill + '</p>';
			overlay += '<div class="bar-container' + bar_classes + '" style="' + bar_styles + '">';
	
			// Render the progress bar background
			overlay += '<span class="backgroundBar"></span>';
	
			// Display target bar only if set
			if ( target ) {
				if ( settings.animateTarget ) {
					overlay += '<span class="targetBar loader" style="width:' + target + '%;background-color:' + settings.targetBarColor + ';"></span>';
				}
				else {
					overlay += '<span class="targetBar" style="width:' + target + '%;background-color:' + settings.targetBarColor + ';"></span>';
				}
			}
	
			// Render the progress bar
			if ( settings.animation ) {
				overlay += '<span class="bar" style="background-color:' + settings.barColor + ';"></span>';
			}
			else {
				overlay += '<span class="bar" style="width:' + progress + '%;background-color:' + settings.barColor + ';"></span>';
			}
	
			// Render the percentage if enabled
			if ( settings.percentage ) {
				overlay += '<span class="progress-percent" style="line-height:' + settings.height + 'px;">' + progress + '%</span>';
			}
	
			// End
			overlay += '</div></div>';
	
			// Render the progress bar on the page
			$( item ).replaceWith( overlay );
	
		};
	
		var animate = function() {
	
			var doc_height = $(window).height();
	
			$( '.my-progressbar.animate' ).each( function() {
				var position = $( this ).offset().top;
	
				if ( ( $(window).scrollTop() + doc_height - 60 ) > position ) {
					var progress = $( this ).data( 'width' ) + "%";
	
					$( this ).removeClass( 'animate' );
					$( this ).find( '.bar' ).css('opacity', '0.1');
	
					$( this ).find( '.bar' ).animate({
						width : progress,
						opacity : 1
					}, 3000 );
				}
	
			});
	
		};
	
		// Looking for an animation element in the view
		$(window).scroll(function() {
	
			if ( $( '.my-progressbar.animate' ).length < 1 ) {
				return;
			}
	
			// If there is an animate element visible on the page, trigger the animation
			animate();
	
		});
	
	
	})(jQuery);
	