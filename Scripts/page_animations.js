var screen_width_max = window.matchMedia( "(max-width: 736px)", "(max-device-width: 736px)" );

function home_anims() {
	$(document).ready(function(){
		//controls animation to play - small/large/large-static
		if (screen_width_max.matches) {
			//small screen
			$('#portfolio_main_space').css('height', $(window).height() - 200 - 20 - 50);
			typewrite_name_role();
		} else {
			//animate or static
			if (sessionStorage.getItem("home_anim_played") == null) {
				large_screen_home_anims();
			} else {
				large_screen_home_anims_static();
			}
			sessionStorage.setItem("home_anim_played", "Yes");
		}
	});
}

function project_anims() {
	$(document).ready(function() {
		var last_visited = sessionStorage.getItem("last_page");
		sessionStorage.setItem("last_page", "project");
		$('#project_content_view').css('min-height', $(window).height() - 50 - 20);

		if (!screen_width_max.matches) { //large devices
			setTimeout(projects_nav_max_set(), 1500); //switches to max width for nav bar
				//run large device project animations
			function animate_projects_page() {
				$('.portfolio_main_space_projects_dark').animate({width: '120px'});
				$('#portfolio_main_space_projects_light').delay(250).animate({height: '0px'});
				$('.portfolio_main_space_projects_dark').animate({height: '600px'});
				$('#nav_list, #nav_logo, #footer_text').css({opacity: 1});
				$('#nav_proj_side_container').delay(750).animate({opacity: '1'}, 750);
				$('#project_content_view_spacer').delay(250).animate({width: '80%'}, 0);
			}
				//replace side bar with fixed width
			function projects_nav_max_set() {
				$('.portfolio_main_space_projects_dark').addClass('portfolio_main_space_projects_dark_max_h');
				var link_clicked = $(this).text();
				var content_width = $(window).width() - 120;
				$('#project_content_view').css('height', '600px');
				$('#project_content_view').delay(0).animate({width: content_width + 'px'});
				$('#project_content_view_spacer').delay(0).animate({width: '0%'});
				getContentPage('My Portfolio');
			}
		} else {
				//insert pages for each project as an ajax insert
			$('#my_portfolio_m').load('Projects/myportfolio.html');
		}
		animate_projects_page();
	});
}

function contact_anims() {
	$(document).ready(function() { //when ready animate contact page
		$('#portfolio_main_space_contact').css('height', $(window).height() + 50 + 20);
		var last_visited = sessionStorage.getItem("last_page");
		sessionStorage.setItem("last_page", "contact");
			//seamless animation if projcets page was last visited
		if (last_visited == 'project') {
			$('#portfolio_main_space_contact').css('width', '20%');
			$('#portfolio_main_space_contact').animate({width: '100%'});
		}
			//standard animation sequence for contact page
		function animate_contacts_page() {
			$('#main_white_cover').height('0px');
			$('#portfolio_main_space').delay(0).animate({height: '325px'});
			$('#nav_list, #nav_logo, #footer_text').css({opacity: 1});
			$('.form_input_field').hide();
			$('.contact_label').hide();
			$('.form_submit').hide();
			$('.contact_message').hide();
			$('.contact_form').animate({height: '225px'});
			$('.contact_label').animate({opacity: 1});
			$('.contact_label').fadeIn(200);
			$('.form_input_field').animate({opacity: 1});
			$('.form_input_field').fadeIn(400);
			$('.contact_message').animate({opacity: 1});
			$('.contact_message').fadeIn(800);
			$('.form_submit').animate({opacity: 1});
			$('.form_submit').fadeIn(800);//, setCookie('page', 'contact.html');
		}
		animate_contacts_page();
	});
}

	//when project side bar item clicked slide in the projects view
$(document).on('click', '#nav_proj_side_a', function() {
	var link_clicked = $(this).text();
	var content_width = $(window).width() - 120;
	if ($('#project_content_view').width() == 0) {
		$('#project_content_view').css('height', '600px');
		$('#project_content_view').animate({width: content_width + 'px'});
		$('#project_content_view_spacer').animate({width: '0%'});
		getContentPage(link_clicked);
	 } else {
		$('#project_content_view').animate({width: '0%'});
		$('#project_content_view_screens').css('opacity', '0');
		$('#project_content_view_title').css('opacity', '0');
		$('#project_content_view_heading_dev').css('opacity', '0');
		$('#project_content_view').css('height', '600px');
		$('#project_content_view_spacer').css('width', '0%');
		setTimeout(function() {
			$('#project_content_view_spacer').animate({width: '0%'});
			$('#project_content_view').css('height', '600px');
			$('#project_content_view').animate({width: content_width  + 'px'});
			getContentPage(link_clicked);
		}, 500);
	}
});

	//workarond for resizing project page widths -- on resize updates width
$(window).resize( function() {
	if ($('#project_content_view').width() > 0 &&  (!screen_width_max.matches)) {
		var content_width = $(window).width() - 120;
		$('#project_content_view').css('height', '600px');
		$('#project_content_view').css('width', content_width + 'px');
		$('#project_content_view_spacer').animate({width: '0%'});
		getContentPage(link_clicked);
	}
});

	//check and set height on browser resize
$(window).bind('resize', function(e) {
		//if window is resized then get the current page name of the stack
		//depending on current page in window set the height of background Div
		//the height depends on what is on the page i.e half splits, footers.
	switch (window.location.pathname.path.split('/').pop()) {
		case 'index.html':
			var viewport_height = $(window).height() - 200 - 20 - 50;
			$('#portfolio_main_space').css('min-height', viewport_height);
			break;
		case 'projects.html':
			var viewport_height = $(window).height() - 50 - 20;
			$('#project_content_view').css('min-height', viewport_height);
			break;
		case 'contact.html':
			var viewport_height = $(window).height() + 50 + 20;
			$('#portfolio_main_space_contact').css('min-height', viewport_height);
			break;
		default:
			break;
	}

	if (!screen_width_max.matches) {
	  if (window.RT) clearTimeout(window.RT);
	  window.RT = setTimeout(function()
	  {
	    this.location.reload(false); /* false to get page from cache */
	  }, 100);
	}
});

	//get page for selected link and insert using ajax call
function getContentPage(link_clicked) {
	var xhttp = new XMLHttpRequest();

	switch (link_clicked) {
		case 'My Portfolio':
			 xhttp.onreadystatechange = function() {
			 	if (this.readyState == 4 && this.status == 200) {
			 		document.getElementById('project_content_view').innerHTML = this.responseText;
					image_frames = document.getElementsByClassName('slides'); //hoist into scope but excl var
					wrapper_frame = document.getElementsByClassName('wrapper'); //hoist into scope but excl var
				}}
			xhttp.open('GET', 'Projects/myportfolio.html', true); xhttp.send();
			break;

		case 'Blog':
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					document.getElementById('project_content_view').innerHTML = this.responseText;
				}}
			xhttp.open('GET', 'Projects/blog.html', true); xhttp.send();
			break;

		case 'Web Progger':
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					document.getElementById('project_content_view').innerHTML = this.responseText;
				}}
			xhttp.open('GET', 'Projects/webprogger.html', true); xhttp.send();
			break;

		case 'Wedding':
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					document.getElementById('project_content_view').innerHTML = this.responseText;
				}}
			xhttp.open('GET', 'Projects/wedding.html', true);	xhttp.send();
			break;

		case 'Photo Browser':
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					docment.getElementById('project_content_view').innerHTML = this.responseText;
				}}
			xhttp.open('GET', 'Projects/photobrowser.html', true); xhttp.send();
			break;

		case 'TimeLog':
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					document.getElementById('project_content_view').innerHTML = this.responseText;
				}}
			xhttp.open('GET','Projects/TimeLog.html', true); xhttp.send();
			break;
		case 'DriveSpy':
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					document.getElementById('project_content_view').innerHTML = this.responseText;
				}}
			xhttp.open('GET', 'Projects/DriveSpy.html', true); xhttp.send();
		default:
			document.getElementById('project_content_view').innerHTML = '<b>ERROR - Contact <a href="mailto:kr26633z@gmail.com?Subject=Web%20Page%20Issue target="_top">Web Admin</a></b>';
		break;
	}
}

	//
function send_email() {
		//get form data using FormData object, buold ajax object and when ready
		//send a post request to the php script to generate the email
		//on success replay the contact form show animation
	$(document).ready(function(){
		var contact_form = document.getElementById('contact_form_id');
		var form_data = new FormData(contact_form);
		var build_email = new XMLHttpRequest();
		build_email.onreadystatechange = function() {
			if (build_email.readyState == 4 && build_email.status == 200) {
				contact_form_reset();
			}
		}
		build_email.open('POST', '../Scripts/email.php', true);
		build_email.send(form_data);
		return false;
	});
}

	//contact box animation -- called when email sent successfully
function contact_form_reset() {
	$('.contact_form').animate({height: '0px'});
	$('.contact_label').animate({opacity:0});
	$('.form_input_field').animate({opacity: 0});
	$('.contact_message').animate({opacity: 0});
	$('.form_submit').animate({opacity: 0});
	$('.contact_form').animate({height: '225px'});
	$('.contact_label').animate({opacity: 1});
	$('.contact_label').fadeIn(800);
	$('.form_input_field').animate({opacity: 1});
	$('.form_input_field').fadeIn(1000);
	$('#sender_name').val('');
	$('#sender_address').val('');
	$('.contact_message').val('');
	$('.contact_message').animate({opacity: 1});
	$('.form_submit').animate({opacity: 1});
}

function typewrite_name_role() {
		//get text data in the name and role area div and send this to type script
	var name = $('#name_area').data('text');
	type_writer_effect_name(name, 0);
	setTimeout(function() {
		var role = $('#role_area').data('text');
		type_writer_effect_role(role, 0);
	}, 500);
}

	//home page animations for large screen devices
function large_screen_home_anims() {
	var last_visited = sessionStorage.getItem("last_page");
	sessionStorage.setItem("last_page", "home");
	if (!last_visited) {
		$('#nav_bar').animate({width: '100%'}, 500);
		$('#nav_list').animate({opacity: '1'}, 2500); //high duration to offset 0 to 1 speed
		$('#portfolio_main_space').animate({width: '100%'}, 500);
		$('#main_white_cover').animate({width: '0%'}, 500);
		$('#home_footer').animate({width: '100%'}, 500);
		setTimeout(function() {typewrite_name_role()}, 1500);
		setTimeout(function() {home_anim_p4()}, 2000);
		$('#about_me').animate({height: '325px'});
		$('.article_headings').delay(2750).animate({opacity: '1'}, 1000);
		$('#contact_box').delay(3000).animate({opacity: '1'}, 1000);
		$('.article_text').delay(2750).animate({opacity: '1'}, 1000);
	} else {
		$('#nav_bar').css('width', '100%');
		$('#portfolio_main_space').animate({width: '100%'}, 500);
		$('#main_white_cover').animate({width: '0%'}, 500);
		$('#home_footer').css('width', '100%');
		$('#nav_list, #nav_logo, #footer_text').css('opacity', '1');
		setTimeout(function() {typewrite_name_role()}, 1500);
	}
}

	//home page static animation -- used when visited and don't want to rerun
function large_screen_home_anims_static() {
	var viewport_height = $(window).height() - 200 - 20 - 50;
	$('#portfolio_main_space').css({'height': viewport_height, 'width': '100%'});
	$('#main_white_cover').css('width', '0px');
	$('#nav_bar').css('width', '100%');
	$('#nav_list').css('opacity', '1');
	$('#home_footer').css({'opacity': '1', 'width': '100%'});
	$('#light_green_cover').removeClass('light_green_anim').css('height', '275px');
	$('#portfolio_main_space').removeClass('port_main_dark_green_anim').css('height', '325px');
	$('#name_area').html('Ken Roberts');
	$('#role_area').html('Web Developer');
	$('#contact_box').css('opacity', '1');
	$('.article_headings').css('opacity', '1');
	$('.article_text').css('opacity', '1');
}
