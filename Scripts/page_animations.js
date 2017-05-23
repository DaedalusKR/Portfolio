function home_anims() {
	$(document).ready(function(){
			// checks if page vistied during session and sets animation based on last view

		var last_visited = sessionStorage.getItem("last_page");
		sessionStorage.setItem("last_page", "home");

		function home_anim_p1() {
			if (!last_visited) {
				$('#nav_bar').animate({width: '100%'}, 500);
				$('#nav_list').animate({opacity: '1'}, 2500); //high duration to offset 0 to 1 speed
				$('#portfolio_main_space').animate({width: '100%'}, 500);
				$('#main_white_cover').animate({width: '0%'}, 500);
				$('#home_footer').animate({width: '100%'}, 500);
				setTimeout(function() {home_anim_p3()}, 1500);
				setTimeout(function() {home_anim_p4()}, 2000);
			} else {
				$('#nav_bar').css('width', '100%');
				$('#portfolio_main_space').animate({width: '100%'}, 500);
				$('#main_white_cover').animate({width: '0%'}, 500);
				$('#home_footer').css('width', '100%');
				$('#nav_list, #nav_logo, #footer_text').css('opacity', '1');
				setTimeout(function() {home_anim_p3()}, 1500);
				setTimeout(function() {home_anim_p4()}, 2000);
			}
		}

		function home_anim_p3() {
			var name = $('#name_area').data('text');
			type_writer_effect_name(name, 0);
		}

		function home_anim_p4() {
			var role = $('#role_area').data('text');
			type_writer_effect_role(role, 0);
			setTimeout(home_anim_p5());
		}

		function home_anim_p5() {
			$('#about_me').animate({height: '325px'});
			$('.article_headings').delay(750).animate({opacity: '1'}, 1000);
			$('.article_text').delay(750).animate({opacity: '1'}, 1000);
		}
		home_anim_p1();
	});
}

function project_anims() {
	$(document).ready(function() {

		var last_visited = sessionStorage.getItem("last_page");
		sessionStorage.setItem("last_page", "project");

		function projects_anim_p1() {
			$('#portfolio_main_space_projects_light').animate({width: '20%'}, 250, projects_anim_p2());
			$('#portfolio_main_space_projects_dark').animate({width: '20%'}, 250, projects_anim_p2());
		}

		function projects_anim_p2() {
			$('#portfolio_main_space_projects_light').animate({height: '0px'}, 0);
			$('#portfolio_main_space_projects_dark').animate({height: '600px'}, 0, projects_anim_p3());//, setCookie('page', 'project.html'), projects_anim_p3());
			$('#nav_list, #nav_logo, #footer_text').css({opacity: 1});
		}

		function projects_anim_p3() {
			$('#nav_proj_side_container').delay(500).animate({opacity: '1'}, 750);
			$('#project_content_view_spacer').delay(0).animate({width: '80%'}, 0);
		}
		projects_anim_p1();
	});
}

function contact_anims() {
	$(document).ready(function() {

		//var last_visited = checkCookie();
		var last_visited = sessionStorage.getItem("last_page");
		sessionStorage.setItem("last_page", "contact");

		if (last_visited == 'project') {
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
			$('#contact_message').hide();
			$('.contact_form').animate({height: '225px'});
			$('.contact_label').animate({opacity: 1});
			$('.contact_label').fadeIn(200);
			$('.form_input_field').animate({opacity: 1});
			$('.form_input_field').fadeIn(400);
			$('#contact_message').fadeIn(600);
			$('.form_submit').fadeIn(800);//, setCookie('page', 'contact.html');
		}
		contact_bg_anim_ph1();
	});
}

$(document).on('click', '#nav_proj_side_a', function() {
	$('#project_content_view_spacer').animate({width: '0%'});
	$('#project_content_view').css('height', '600px');
	$('#project_content_view').animate({width: '80%'});
	getContentPage($(this).text());
});

function getContentPage(link_clicked) {
	var xhttp = new XMLHttpRequest();

	switch (link_clicked) {
		case 'My Portfolio':
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					document.getElementById('project_content_view').innerHTML = this.responseText;
				}
			}
			xhttp.open('GET', 'Projects/myportfolio.html', true);
			xhttp.send();

			//$('#project_content_view').load('Projects/myportfolio.html').hide().slideDown(400);
			break;
		case 'Blog':
			$('#project_content_view').load('Projects/blog.html').hide().slideDown(100);
			break;
		case 'Web Progger':
			$('#project_content_view').load('Projects/webprogger.html').hide().slideDown(100);
			break;
		case 'Wedding':
			$('#project_content_view').load('Projects/wedding.html').hide().slideDown(100);
			break;
		case 'Photo Browser':
			$('#project_content_view').load('Projects/photobrowser.html').hide().slideDown(100);
			break;
		case 'TimeLog':
			$('#project_content_view').load('Projects/TimeLog.html').hide().slideDown(100);
			break;
		case 'DriveSpy':
			$('#project_content_view').load('Projects/DriveSpy.html').hide().slideDown(100);
		default:
			document.getElementById('project_content_view').innerHTML = '<b>ERROR - Contact <a href="mailto:kr26633z@gmail.com?Subject=Web%20Page%20Issue target="_top">Web Admin</a></b>';
		break;
	}
}
