$(document).ready(function() {
    
    $("#showBtn").click(function() {
        $("#contentBox").show();
        $("#showBtn").hide();
        $("#hideBtn").show();
    });

    $("#hideBtn").click(function() {
        $("body").empty();
    });

    $("#box1").mouseenter(function() {
        $(this).css("background-color", "green");
        alert("Mouse Entered Box 1!");
    });

    $("#box2").mouseleave(function() {
        $(this).css("background-color", "red");
        alert("Mouse Left Box 2!");
    });

    $("#box3").click(function() {
        alert("Box 3 Clicked!");
    });

    $("#box4").dblclick(function() {
        alert("Box 4 Double Clicked!");
    });

});