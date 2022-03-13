import $ from 'jquery'
import GLightbox from 'glightbox'
import Headroom from "headroom.js"

const glightbox = GLightbox({
  selector: ".glightbox"
})

var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom = new Headroom(myElement, {
  'offset': 0,
});
// initialise
headroom.init();