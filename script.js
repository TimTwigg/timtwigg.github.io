/* Toggle between adding and removing the "responsive" class
to topnav when the user clicks on the icon */
function changeNavBar() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function hideResponsiveNavBar() {
    var x = document.getElementById("navbar");
    x.className = "topnav";
}


/* Manage toTopButton */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    /* toTopButton */
    let mybutton = document.getElementById("toTopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function toTop() {
    window.scrollTo(0, 0);
}


/* Manage Fading */
$(window).on("load",function() {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + ($(this).outerHeight());
            var objectMid = $(this).offset().top + ($(this).outerHeight() / 2);
        
            /* Fade in the element */
            if ((objectMid < windowBottom) || (objectBottom < windowBottom)) { //object comes into view (scrolling down)
                if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
            } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});


/* clear form */
window.onbeforeunload = function() {
    for(const form of document.getElementsByTagName("form")) {
        form.reset();
    }
    window.scrollTo(0, 0);
}


/* Prevent anchor links from changing the url */
$(document).on("click", "a", evt => !(
    evt.target.hash !== "" && $("html, body").animate({
        scrollTop: $(evt.target.hash).offset().top-$("a").outerHeight()
    }, 800)
));