var last_url = '';

function home_anims() {

	$(document).ready(function(){

		var referrer =  document.referrer;
		function home_anim_p1() {
			$('#nav_bar').animate({width: '100%'}, 500);
			$('#portfolio_main_space').animate({width: '100%'}, 500);
			$('#main_white_cover').animate({width: '0%'}, 500);
			$('#home_footer').animate({width: '100%'}, 500, home_anim_p2());
		}


		function home_anim_p2() {
			$('#main_white_cover').height('0px');
			$('#light_green_cover').delay(500).animate({height: '250px'});
			$('#portfolio_main_space').delay(0).animate({height: '350px'});
		}

		home_anim_p1();
	});

}


function project_anims() {
	$(document).ready(function() {
		function projects_anim_p1() {
			$('#portfolio_main_space_projects_light').animate({width: '20%'}, 250, projects_anim_p2());
			$('#portfolio_main_space_projects_dark').animate({width: '20%'}, 250, projects_anim_p2());
		}

		function projects_anim_p2() {
			$('#portfolio_main_space_projects_light').animate({height: '0px'}, 250);
			$('#portfolio_main_space_projects_dark').animate({height: '600px'}, 250);
		}
		projects_anim_p1();
	});


}

function contact_anims() {
	$(document).ready(function() {
		$('.form_input_field').hide();
		$('.contact_label').hide();
		$('.form_submit').hide();
		$('.contact_form').animate({height: '225px'});
		$('.form_input_field').fadeIn(1000);
		$('.contact_label').fadeIn(1000);
		$('.form_submit').fadeIn(2000);
		$('.form_input_field').animate({opacity: 1});
		$('.contact_label').animate({opacity: 1});
	});
}

function contact_leave_page() {
	var current_path = window.location.pathname.split('/').pop();
	if (current_path == 'contact.html') {
		$('.contact_form').slideUp();
	}
}
