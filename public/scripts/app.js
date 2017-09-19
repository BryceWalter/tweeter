/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function(){
//Hover state on/off for tweets
  $(".tweet").on('mouseenter', function(){
    var buttons = $(".tweet > footer").children('div')
    buttons.removeClass("hidden")
  })
  $(".tweet").on('mouseleave', function(){
    var buttons = $(".tweet > footer").children('div')
    buttons.addClass("hidden")
  })
})