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

$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	  	// stagePadding: 75,
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
		  items: 1,
		  nav:false
		},
		600: {
		  items: 1,
		  nav:false
		},
		1000: {
		  items: 1
		}
	  }
	})
  })


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