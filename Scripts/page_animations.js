function home_anims() {

	$(document).ready(function(){

		function home_anim_p1() { 
			
			$('#nav_bar').animate({width: '100%'}, 500);
			$('#portfolio_main_space').animate({width: '100%'}, 500);
			$('#main_white_cover').animate({width: '0%'}, 500);
			$('#home_footer').animate({width: '100%'}, 500, home_anim_p2());
		}


		function home_anim_p2() {
			$('#main_white_cover').height('0px');
			//$('#main_white_cover').delay(500).animate({height: '0px'});
			$('#light_green_cover').delay(500).animate({height: '250px'});
			$('#portfolio_main_space').delay(0).animate({height: '350px'});
		}
	
		home_anim_p1();
	});

}


function project_anims() {
	$(document).ready(function() {
		$('#portfolio_main_space_projects').animate({width: '20%'});
	});


}

function contact_leave_page() {
	var current_path = window.location.pathname.split('/').pop();
	if (current_path == 'contact.html') {
		$('.contact_form').slideUp();
	}
}

