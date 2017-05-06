function home_anims() {
	$(document).ready(function(){
			// checks if page vistied during session and sets animation based on last view
		var last_visited = checkCookie();

		function home_anim_p1() {
			if (last_visited == ' ') {
				$('#nav_bar').animate({width: '100%'}, 500);
				$('#portfolio_main_space').animate({width: '100%'}, 500);
				$('#main_white_cover').animate({width: '0%'}, 500);
				$('#home_footer').animate({width: '100%'}, 500, home_anim_p2());
			} else {
				 $('#nav_bar').css('width', '100%');
				 $('#portfolio_main_space').animate({width: '100%'}, 500);
				 $('#main_white_cover').animate({width: '0%'}, 500, home_anim_p2());
				 $('#home_footer').css('width', '100%');
			}
		}

		function home_anim_p2() {
			if (last_visited == ' ') {
				$('#main_white_cover').height('0px');
				$('#light_green_cover').delay(500).animate({height: '275px'});
				$('#portfolio_main_space').delay(0).animate({height: '325px'});
				$('#nav_list, #nav_logo, #footer_text').hide().fadeIn(500).animate({opacity: 1}, setCookie('page', 'index.html'));
			} else {
				$('#main_white_cover').height('0px');
				$('#light_green_cover').delay(500).animate({height: '275px'});
				$('#portfolio_main_space').delay(0).animate({height: '325px'}, setCookie('page', 'index.html'));
				$('#nav_list, #nav_logo, #footer_text').css('opacity', '1');
				setTimeout(function() {home_anim_p3()}, 1250);
				setTimeout(function() {home_anim_p4()}, 2000);
			}
		}

		function type_writer_effect_name(text, n) {
			if (n < (text.length)) {
				$('#name_area').html(text.substring(0, n+1));
				n++;
				setTimeout(function() {type_writer_effect_name(text, n)}, 50);
			}
		}

		function type_writer_effect_role(text, n) {
			if (n < (text.length)) {
				$('#role_area').html(text.substring(0, n+1));
				n++;
				setTimeout(function() {type_writer_effect_role(text, n)}, 50);
			}
		}

		function home_anim_p3() {
			var name = $('#name_area').data('text');
			type_writer_effect_name(name, 0);
		}

		function home_anim_p4() {
			var role = $('#role_area').data('text');
			type_writer_effect_role(role, 0);
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
			$('#portfolio_main_space_projects_dark').animate({height: '600px'}, 250, setCookie('page', 'project.html'), projects_anim_p3());
			$('#nav_list, #nav_logo, #footer_text').css({opacity: 1});
		}

		function projects_anim_p3() {
			$('#nav_proj_side_container').delay(750).animate({opacity: '1'}, 750);
		}
		projects_anim_p1();
	});
}

function contact_anims() {
	$(document).ready(function() {

		var last_visited = checkCookie();

		if (last_visited == 'project.html') {
			$('#portfolio_main_space_contact').css('width', '20%');
			$('#portfolio_main_space_contact').animate({width: '100%'});
		}

		function contact_bg_anim_ph1() {
			$('#main_white_cover').height('0px');
			$('#light_green_cover').delay(0).animate({height: '275px'}, contact_bg_anim_ph2());
			$('#portfolio_main_space').delay(0).animate({height: '325px'}, contact_bg_anim_ph2());
		}

		function contact_bg_anim_ph2() {
			$('#nav_list, #nav_logo, #footer_text').css({opacity: 1});
			$('.form_input_field').hide();
			$('.contact_label').hide();
			$('.form_submit').hide();
			$('.contact_form').animate({height: '225px'});
			$('.contact_label').animate({opacity: 1});
			$('.contact_label').fadeIn(100);
			$('.form_input_field').animate({opacity: 1});
			$('.form_input_field').fadeIn(250);
			$('.form_submit').fadeIn(500), setCookie('page', 'contact.html');
		}
		contact_bg_anim_ph1();
	});
}


function setCookie(cname, cvalue) {
	var d = new Date();
	d.setTime(d.getTime() + 5000);
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie() {
	var last_visited = getCookie("page");
	return last_visited;
}
