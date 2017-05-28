var current_image_index = 0;
var current_offset_value = 0;
var image_width = 200;
var position = 0;
var image_frames = document.querySelectorAll('.slides');
var wrapper_frame = document.querySelector('#wrapper')


function right_clicked() {
  if (current_image_index <= image_frames.length-2) {
    current_image_index++;
    position = image_frames[current_image_index].getAttribute('data-pos');
    var translate_value = 'translate3d(-' + position + ', 0px, 0)';
    wrapper_frame.style.transform = translate_value;
  } else {
    position = image_frames[0].getAttribute('data-pos');
    var translate_value = 'translate3d(-' + position + ', 0px, 0)';
    wrapper_frame.style.transform = translate_value;
    current_image_index = 0;
  }

}

function left_clicked() {
  if (current_image_index > 0) {
    current_image_index--;
    position = image_frames[current_image_index].getAttribute('data-pos');
    var translate_value = 'translate3d(-' + position + ', 0px, 0)';
    wrapper_frame.style.transform = translate_value;
  } else {
    position = image_frames[image_frames.length-1].getAttribute('data-pos');
    var translate_value = 'translate3d(-' + position + ', 0px, 0)';
    wrapper_frame.style.transform = translate_value;
    current_image_index = 2;
  }
}
