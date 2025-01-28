// // var person = { firstName: "Micheal", lastName:"Jordan", age:60};
// var text= '';
// var x;
// for(x in person){
//     text += person[x];
// }
// // console.log(text);

// let i = 0;
// do{
//     i += 1;
//     console.log(i);
// }while(i < 5);

// let n = 0;
// let x = 0;
// while(n < 3){
//     n++;
//     x += n;
// }
// console.log(x);
var students = [""];
var names_input = document.getElementById('name_input');
var btnAdd = document.getElementById('btnAdd');
var btnShow = document.getElementById('btnShow');
btnAdd.onclick = function(){
    students.push(names_input.value);
}
btnShow.onclick = function(){
    for(i=0; i<students.length; i++){
        document.write(students[i] + "<br>");
    }
}

