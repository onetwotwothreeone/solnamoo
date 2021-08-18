$(document).ready(function(){
    $("li").hover(function(){
        $(this).css("background-color", "gray");
        }, function(){
        $(this).css("background-color", "black");
    });
});