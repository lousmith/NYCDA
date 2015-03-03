$(document).ready(function(e){
	
	// Click Event
	$('#item1_button').click(function(e){
		alert("Clicked");
	});

	// Hover Event
	$('#item2_button').hover(function(e){
		alert("Item 2 Button Hovered Over");
	});

	// Event Parameter
	$('#item3_button').click(function(e){
		$(e.currentTarget).hide();
	});

	// Hiding an Element
	$('#item4_button').click(function(e){
		$("#item4 p").fadeOut(3000);
	});

	// Toggle Event
	$('#item5_button').click(function(e){
		$("#item5 p").toggle();
	});

	// Insert/Change Text Event
	$('#item6_button').click(function(e){
		$("#item6 p").text($("#item6 p").text() + " New Text");
	});

	// Attr Event
	$('#item7_button').click(function(e){
		if ($("#item7 img").attr('src') === "imgs/image1.png"){
			$("#item7 img").attr({'src':'imgs/image2.png'});
		}else{
			$("#item7 img").attr({'src':'imgs/image1.png'});
		};
	});

	// Animate Event
	$('#item8_button').click(function(e){	//set img position to relative.
		$('#item8 img').css({
			position:"relative"
		});

		$('#item8 img').animate({			// Animate to new screen position, disappear gradually.
				top: "-100px",
				left: "100px"
			}).fadeOut(1000)

			.fadeIn(1000).animate({			// reappear gradually, animate to home position.
				top: "0px",
				left: "0px"
			});
	});
})