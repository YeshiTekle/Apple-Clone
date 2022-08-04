import $ from 'jquery'
$("button").on("click",function(){
    $(".collapse").next('ul').toggle()
})



// $(document).ready(function(){
//   $("h3").click(function(){
//       $(this).nextUntil('h3').toggle();
// });
// });
// $(window).resize(function(){
//     window.location.reload();
// })