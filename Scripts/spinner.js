  //set base values for offsets and image properties
var current_image_index = 0;
var current_offset_value = 0;
var image_width = 300;
var position = 0;

  //right_ and left_ work similarly. Find the current position on the image in the
  //frame, this works by knowing the value of the offset divided by the image width.
  //Move the image position left or right using translate3d to slide. If hit end
  //of the container then flick back round.
function right_clicked() {
  if (current_image_index <= 1) { //need to understand why its 1 for 3 images
    current_image_index++;
    position = image_frames[current_image_index].getAttribute('data-pos');
    var translate_value = 'translate3d(-' + position + ', 0px, 0)';
    wrapper_frame[0].style.transform = translate_value;
  } else {
    position = image_frames[0].getAttribute('data-pos');
    var translate_value = 'translate3d(-' + position + ', 0px, 0)';
    wrapper_frame[0].style.transform = translate_value;
    current_image_index = 0;
  }
}

function left_clicked() {
  if (current_image_index > 0) {
    current_image_index--;
    position = image_frames[current_image_index].getAttribute('data-pos');
    var translate_value = 'translate3d(-' + position + ', 0px, 0)';
    wrapper_frame[0].style.transform = translate_value;
  } else {
    position = image_frames[image_frames.length-1].getAttribute('data-pos');
    var translate_value = 'translate3d(-' + position + ', 0px, 0)';
    wrapper_frame[0].style.transform = translate_value;
    current_image_index = 2;
  }
}
