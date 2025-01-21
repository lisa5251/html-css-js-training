var input = document.getElementById("input");
var button = document.getElementById("btn");
var h1 = document.getElementById("h1");

button.onclick = function(){
    if (input.value > 10){
        h1.innerHTML = "Input values is greater than 10.";
    }else if(input.value < 10){
        h1.innerHTML = "Input value is less than 10.";
    }else{
        h1.innerHTML = "Input value is equal to 10.";
    }
}