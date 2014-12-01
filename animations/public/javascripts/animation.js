/**
 * Created by benparker on 11/25/14.
 */
$(document).ready(function(){
    $("#ex1").click(function(){
        $("div").animate({
            left:'+=250px',
        });
    });
});

$(document).ready(function(){
    $("#ex2").click(function(){
        $("div").animate({
            left:'-=250px',
        });
    });
});

$(document).ready(function(){
    $("#ex3").click(function(){
        $("div").animate({
          height:'toggle',
        });
    });
});

$(document).ready(function(){
    $("#ex4").click(function(){
        $("div").animate({
           height:'+=150px',
           width:'+=150px',
           opacity: '-=.1'
        });
    });
});

$(document).ready(function(){
    $("#ex5").click(function(){
        $("div").animate({
            height:'-=150px',
            width:'-=150px',
            opacity: '+=.1'
        });
    });
});

$(document).ready(function(){
    $("#ex6").click(function(){
        $("div").animate({
            width:'230px',
            fontSize:'3em'
        });
    });
});

$(document).ready(function(){
    $("#ex7").click(function(){
        var div=$("div");
        div.animate({height:'100px',opacity:'0.4',left:'500px',top:'150px'},"slow");
        div.animate({width:'150px',opacity:'0.85',height:'300px',top:'150px'},"slow");
        div.animate({width:'300px',top:'300px',height:'150px',opacity:'0.3'},"slow");
        div.animate({width:'400px',top:'300px',left:'5px',opacity:'0.7'},"slow");
        div.animate({width:'150px',top:'120px',height:'150px',opacity:'1.0'},"slow");
    });
});






