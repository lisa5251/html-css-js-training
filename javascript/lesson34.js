// function printNames(){
//     document.write("John Doe");
//     document.write("<br>");
//     setTimeout(function(){document.write("Ana");},2000);
//     document.write("Bob");
// }
// printNames();
var colors = ['red','green','blue','purple'];
var names = ['John','Bob','Ana','Mark'];

function changeBgcolors(){
    document.querySelector('body').style.background = colors[Math.floor(Math.random()*colors.length)];
}
function changeNames(){
    document.querySelector('p').innerHTML = names[Math.floor(Math.random()*names.length)];
}
setInterval(changeBgcolors,1000);
setInterval(changeNames,1000);
