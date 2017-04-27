function home_anims() {
  
	$(document).ready(function(){
  
	
		var light_green_view = $('#light_green_cover');
		

		$('#nav_bar').animate({width: '100%'}, 500);
    
		$('#portfolio_main_space').animate({width: '100%'}, 500);
    				
		$('#main_white_cover').animate({width: '0%'}, 500);
    
	
		$('#home_footer').animate({width: '100%'}, 500);

		
		
		$('#main_white_cover').delay(501).height('0px');


		$('#light_green_cover').delay(1000).animate({height: '300px'});
		
		

		
	
  
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

