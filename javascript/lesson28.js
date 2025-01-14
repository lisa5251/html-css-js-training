// //var button1 = document.querySelector("button")

// //button1.addEventListener('click', function(){
//     //alert('hello world');
// //

// //var button2 = document.getElementById('btn1')//
// var button3 = document.getElementById('btn2');
// var button4 = document.getElementById('btn3');
// var v_button = document.getElementById('btn1');
// var v_text = document.getElementById('txt1')

// v_button.onclick = function(){
//     // v_text.style.color="red";
//     // v_text.style.textAlign.backgroundcolor = "lightgrey";
//     // v_text.style.textAlign= "center";
//     // v_text.style.fontsize= "100px";
//     // v_text.style.padding= "200px";
//     v_text.setAttribute("class","test");
// }
// v_text.onmouseover=function(){
//     v_text.style.cssText = "color: red;background-color : lightblue; text-align: center; font-size: 100px; padding: 20px;"
// }
// button2.onmouseover = function (){
//     alert('over')
// }
// button3.onmouseleave = function (){
//     alert('leave')
// }
// button4.onmousewheel = function (){
//     alert('wheel')
// }
var btn_Circle = document.getElementById("btnCircle");
var btn_Rectangle = document.getElementById("btnRectangle");
var btn_Triangle = document.getElementById("btnTriangle");

var circle = document.getElementById("circle");
var rect = document.getElementById("rectangle");
var triangle = document.getElementById("triangle");

btn_Circle.onclick = function(){
    circle.setAttribute("class","shape_circle");
}
btn_Rectangle.onclick  = function(){
    rect.setAttribute("class","shape_rectangle");
}
btn_Triangle.onclick  = function(){
    triangle.setAttribute("class","shape_triangle");
}