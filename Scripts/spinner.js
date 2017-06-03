
var current_image_index = 0;
var current_offset_value = 0;
var image_width = 300;
var position = 0;

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
