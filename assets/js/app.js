// On Load

window.onload = function () {
    navbarPlaceholder();
}


// On Scroll

window.onscroll = function () {
    navbarPlaceholder();
}


// Navbar Toggle

$('.toggle').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
    } else {
        $('.navbar-toggle').removeClass('is-active');
        $(this).addClass('is-active');
    }
});


// Navbar Scroll

$(document).ready(function () {
    var previousScroll = 0;
    $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();
        if (currentScroll < 0) {
            showTopNav();
        } else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
            if (currentScroll > previousScroll) {
                hideNav();
            } else {
                showNav();
            }
            previousScroll = currentScroll;
        } else if ($(window).scrollTop() === 0) {
            showTopNav();
            previousScroll = currentScroll;
        }
    });

    function hideNav() {
        $(".navbar").removeClass("is-scrollup").removeClass("is-scrolltop").addClass("is-scrolldown").addClass("is-scrolling");
        $('.navbar-toggle').removeClass('is-active');
    }

    function showNav() {
        $(".navbar").removeClass("is-scrolldown").removeClass("is-scrolltop").addClass("is-scrollup").addClass("is-scrolling");
    }

    function showTopNav() {
        $(".navbar").removeClass("is-scrolldown").removeClass("is-scrollup").removeClass("is-scrolling").addClass("is-scrolltop");
    }
});


// Navbar Placeholder

function navbarPlaceholder() {
    var navbarPlaceholder = $('.navbar').outerHeight(true);
    $('.navbar-placeholder').css('height', `${navbarPlaceholder}px`);
}