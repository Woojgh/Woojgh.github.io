'use strict';

var projectView = {};

projectView.handleMainNav = function() {
  $('.nav-bar').on('click', '.tab', function(e) {
    e.preventDefault();
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.nav-bar .tab:first').click();
};

projectView.setTeasers = function() {
  $('.project-body *:nth-of-type(n+2)').hide();
  $('.projects').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

$('#interactive3d').interactive3d({ 
  frames: 30,
  cursor: "move", 
  speed: 0, 
  entrance: true, 
  preloadImages: true,
  touchSupport: true,
  loading: "Loading..", 
  autoPlay: false 
  });


$(document).ready(function() {
  projectView.handleMainNav();
  projectView.setTeasers();
});
