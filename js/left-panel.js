let $ = require('jQuery');


$(".nav-group-item").click(function(){
   $(".left-panel").css("display","none");
   $(".substitution").css("display","block");

})

$("#tabs").click(function(){
    $(".left-panel").css("display","block");
    $(".substitution").css("display","none");
 
 })