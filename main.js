var e = ace.edit('myEditor');
e.getSession().setMode("ace/mode/html");
e.setTheme("ace/theme/xcode");
e.setValue("<!DOCTYPE html>\n<html>\n   <head>\n   </head>\n   <body>\n        <p>Hi Freds</p>\n   </body>\n</html>");

$(document).ready(function () {


    $(document).on('click', "#run", function () {
        var code = e.getValue();
        $("#output").html(code);
    })
    $(document).on("click", "#clear", function () {
        e.setValue("");
    })
});

function checkBackround(){
    var hero = document.getElementById('hero');
    var hero_code = document.getElementById('myEditor');
//     var textBool = true;
//  if(hero.style.background == "#121212"){
//     hero.style.background = "#ffffff";
//     hero_code.style.background = "#ffffff"
//     hero_code.style.color = "#121212";
//  }
//  else{
//     hero.style.background = "#121212";
//     hero_code.style.background = "#121212";
//     hero_code.style.color = "#ffffff";
//  }

// if(hero.style.background == "#fff")
    hero.style.background = "rgb(255, 255, 255)";
    hero_code.style.background = "#121212";
    hero_code.style.color = "#ffffff";



}