$(function () {
    'use strict';
    // Toggle Sidebar
    $('.toggle-sidebar').on("click", function () {
        $(".content-area, .sidebar").toggleClass("no-sidebar");
    });

    // Toggle Submenu 
    $('.toggle-submenu').on("click", function () {
        $(this).toggleClass("down")
        $(this).parent("a").next(".child-links").slideToggle();
    });

    // Open / Close Full Screen
    $('.toggle-fullscreen').on('click', function () {
        $(this).toggleClass('full-screen');

        if ($(this).hasClass('full-screen')) {
            openFullscreen();
        } else {
            closeFullscreen();
        }
    });

    // Toggle Setting
    $('.toggle-setting').on('click', function () {
        $(this).find('i').toggleClass('fa-spin');
        $(this).parent().toggleClass('hide-setting');
    });

    // Switch Color Themes
    var themesClasses = [];
    $('.color-options li').each(function () {
        themesClasses.push($(this).data('theme'));
    });

    $('.color-options li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('body')
            .removeClass(themesClasses.join(" "))
            .addClass(($(this).data('theme')));
    });
});

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
    }
}