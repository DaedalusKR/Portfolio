	//both function take passed text and an offset. Get length of the string
	//and insert the substring string[n] to the page. Keep calling increasing
	//the substring length by 1 until the full string is showing.
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
