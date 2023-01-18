/* Toggle between adding and removing the "responsive" class
to topnav when the user clicks on the icon */
function changeNavBar() {
    var x = document.getElementById("home");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* Manage toTopButton */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let mybutton = document.getElementById("toTopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
  }

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}