'use strict'

const isMobilDevice = navigator.userAgent.indexOf('Mobile') !== -1 ||
  navigator.userAgent.indexOf('iPhone') !== -1 ||
  navigator.userAgent.indexOf('Android') !== -1 ||
  navigator.userAgent.indexOf('Windows Phone') !== -1;




function isLandscape() {
  if (window.innerWidth > window.innerHeight) {
    return true;
  }
  return false;
}


function toggleNavBar() {
  let navBar = document.getElementById('navbar');


  if (isLandscape() && isMobilDevice) {
    navBar.classList.remove('fixed');
  } else {
    navBar.classList.add('fixed');
  }


}






const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((item) =>
  item.addEventListener('click', function () {
    this.classList.toggle('collapsible--expanded');
  })
);


const collapsibleExclusives = document.querySelectorAll(".collapsible--exclusive");

collapsibleExclusives.forEach((item) =>
  item.addEventListener('click', function () {
    collapsibleExclusives.forEach((item) => {
      if (this !== item) {
        item.classList.remove('collapsible--expanded');
      }
    })
  })
);



// Get the modal
var modal = document.getElementById("videoModal");

// Get the button that opens the modal
var btn = document.getElementById("videoButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
if (btn !== null) {
  btn.onclick = function () {
    modal.style.display = "block";
  }


  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
}




// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
