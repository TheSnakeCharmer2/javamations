/**
 * Created by benparker on 11/25/14.
 */
$(document).ready(function(){
    $("#ex1").click(function(){
        $("div").animate({
            left:'250px'
        });
    });
});

$(document).ready(function(){
    $("#ex2").click(function(){
        $("div").animate({
          height:'toggle',
        });
    });
});

$(document).ready(function(){
    $("#ex3").click(function(){
        $("div").animate({
           left:'250px',
           height:'+=150px',
           width:'+=150px'
        });
    });
});

$(document).ready(function(){
    $("#ex4").click(function(){
        $("div").animate({
        });
    });
});









