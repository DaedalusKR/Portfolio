window.onload = function () {
  var current_image_index = 0;
  var current_offset_value = 0;
  var image_width = 300;
  var position = 0;
  var image_frames = document.getElementsByClassName('slides');
  var wrapper_frame = document.getElementsByClassName('wrapper');
  alert('wf = ' + wrapper_frame[0]);

}



// for (var  i = 0; i < image_frames.length; i++) {
//   console.log(image_frames[i]);
// }


function right_clicked() {
  alert('wrapper length = ' + wrapper_frame.length);

  if (current_image_index <= image_frames.length) {
    current_image_index++;
    position = image_frames[current_image_index].getAttribute('data-pos');
    var translate_value = 'translate3d(-' + position + ', 0px, 0)';
    wrapper_frame.style.transform = translate_value;
  } else {
    alert('in else');
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
