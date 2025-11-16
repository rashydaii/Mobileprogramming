$(document).ready(function(){
    $("#hamburger").click(function(){
        $(this).toggleClass("active");
        $("#navMenu").toggleClass("active");
    });
});
