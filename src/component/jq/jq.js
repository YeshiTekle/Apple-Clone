import $ from 'jquery';
$(document).ready(function(){
  $("h3").click(function(){
      $(this).nextUntil('h3').toggle();
});
});
$(window).resize(function(){
    window.location.reload();
})