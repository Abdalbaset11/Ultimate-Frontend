$(function(){"use strict";$(".toggle-sidebar").on("click",function(){$(".content-area, .sidebar").toggleClass("no-sidebar")}),$(".toggle-submenu").on("click",function(){$(this).toggleClass("down"),$(this).parent("a").next(".child-links").slideToggle()}),$(".toggle-fullscreen").on("click",function(){$(this).toggleClass("full-screen"),$(this).hasClass("full-screen")?openFullscreen():closeFullscreen()})});var elem=document.documentElement;function openFullscreen(){elem.requestFullscreen?elem.requestFullscreen():elem.mozRequestFullScreen?elem.mozRequestFullScreen():elem.webkitRequestFullscreen?elem.webkitRequestFullscreen():elem.msRequestFullscreen&&elem.msRequestFullscreen()}function closeFullscreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}