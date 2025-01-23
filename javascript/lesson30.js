// var input = document.getElementById("input");
// var button = document.getElementById("btn");
// var h1 = document.getElementById("h1");

// button.onclick = function(){
//     if (input.value > 10){
//         h1.innerHTML = "Input values is greater than 10.";
//     }else if(input.value < 10){
//         h1.innerHTML = "Input value is less than 10.";
//     }else{
//         h1.innerHTML = "Input value is equal to 10.";
//     }
// }

function showCurrentTime(){
    var clock = document.getElementById('clock');
    var CurrentTime = new Date();
    var hours = currentTime.getHours();
    var minutes =  currentTime.getMinutes();
    var seconds =  currentTime.getSeconds();

    var merdian = "AM";

    // if(hours >= noon){
    //     meridian = "PM";
    // }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
    clock.innerText = clockTime;

}

function changeImage(){
    var time = new Date().getHours();
    console.log(time);
}

// var oneSecond = 1000;
// setInterval(showCurrentTime, oneSecond);