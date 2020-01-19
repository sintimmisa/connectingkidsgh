// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}



//Slider Script

$(document).ready(function () {
    //you can set this, as long as it's not greater than the slides length
    var show = 3;
    var w = $('#slider').width() / show;
    var l = $('.slide').length;

    $('.slide').width(w);
    $('#slide-container').width(w * l)

    function slider() {
        $('.slide:first-child').animate({
            marginLeft: -w
        }, 'slow', function () {
            $(this).appendTo($(this).parent()).css({ marginLeft: 0 });
        });
    }
    var timer = setInterval(slider, 2000);

    $('#slider').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(slider, 2000);
    });
});



//Animation script by animate.css

$(document).ready(function () {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    // If element is scrolled into view, fade it in
    $(window).scroll(function () {
        $('.scroll-animations .animated').each(function () {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('fadeInLeft');
            }
        });
    });
});



//Mobile view menu Script


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}