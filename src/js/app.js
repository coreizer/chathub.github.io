import $ from 'jquery'
import GLightBox from 'glightbox'
import Headroom from "headroom.js"

const glightbox = GLightBox({
  selector: ".glightbox"
})

const globalHeader = document.querySelector("header");

// construct an instance of Headroom, passing the element
const headerRoom = new Headroom(globalHeader, {
  'offset': 0,
});

// initialise
headerRoom.init();