var image_array = [];
var spinner_counter = 0;

image_array[0] = new Image(200, 250);
image_array[0].src = '../Resources/Screenshots/Portfolio/portfolio_home.png';
image_array[1] = new Image(200, 250);
image_array[1].src = '../Resources/Screenshots/Portfolio/portfolio_projects.png';
image_array[2] = new Image(200, 250);
image_array[2].src = '../Resources/Screenshots/Portfolio/portfolio_contact.png';

var current_image = image_array[spinner_counter].src;
var image_holding_element = $('#image_area');
set_image(image_holding_element, image_array, spinner_counter);

function  set_image(image_holding_element, image_array, spinner_counter) {
  image_holding_element.attr('src', image_array[spinner_counter].src);
  image_holding_element.attr('height', '200').attr('width', '250');
}

function right_image_button_clicked() {
  if (spinner_counter == 2) {
    spinner_counter = 0;
  } else {
    spinner_counter++;
  }
  set_image(image_holding_element, image_array, spinner_counter);
}

function left_image_button_clicked() {
  if (spinner_counter == 0) {
    spinner_counter = 2;
  } else {
    spinner_counter--;
  }
  set_image(image_holding_element, image_array, spinner_counter);
}
