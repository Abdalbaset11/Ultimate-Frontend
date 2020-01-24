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
});