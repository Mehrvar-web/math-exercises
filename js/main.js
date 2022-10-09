/*--FIRST BLOG--*/
var firstNum = document.getElementById("first_num");
var secondNum = document.getElementById("second_num");
var showResult = document.getElementById("show_result");
var printResult = document.getElementById("print_result");

showResult.addEventListener("click", function() {

    var x = parseFloat(firstNum.value);
    var b = parseFloat(secondNum.value);

    let z = (Math.pow(x, 3) * Math.pow(Math.sin(x + b), 2)) + (x / (x + Math.pow(b, 2))); //sin(x+b) bo radian hisob mekunad

    printResult.innerHTML = z;

    if (firstNum.value == "" && secondNum.value != "") {
        printResult.innerHTML = "Лутфан ба х ягон адад бубахшед!";
        printResult.style.color = "#002";
        printResult.style.border = "none";
        printResult.style.borderBottom = "2px solid darkGreen";
    } else if (firstNum.value != "" && secondNum.value == "") {
        printResult.innerHTML = "Лутфан ба b ягон адад бубахшед!";
        printResult.style.color = "#002";
        printResult.style.border = "none";
        printResult.style.borderBottom = "2px solid darkGreen";
    } else if (firstNum.value == "" && secondNum.value == "") {
        printResult.innerHTML = "Лутфан ба тағйирёбандаҳои 'х' ва 'b' ягон адад бубахшед!";
        printResult.style.color = "#002";
        printResult.style.border = "none";
        printResult.style.borderBottom = "2px solid darkGreen";
    } else if (firstNum.value != "" && secondNum.value != "") {
        printResult.style.border = "2px solid rgb(33, 31, 31)";
        printResult.style.color = "green";
    }


});

/*--SECOND BLOG--*/

var a1 = document.getElementById("x1");
var a2 = document.getElementById("x2");
var a3 = document.getElementById("x3");
var a4 = document.getElementById("x4");
var btn2 = document.getElementById("btn2");
var y1 = document.querySelectorAll(".y1");


btn2.addEventListener("click", function() {

    x1 = Number(Boolean(Number(a1.value)));
    x2 = Number(Boolean(Number(a2.value)));
    x3 = Number(Boolean(Number(a3.value)));
    x4 = Number(Boolean(Number(a4.value)));

    var boolResult = x4 && (x2 && x1) || x4 && x2 || (x2 || (x3 && x1));


    if (x1 == 0 && x2 == 0 && x3 == 0 && x4 == 0) {

        y1[0].innerHTML = boolResult;
        y1[0].classList.add("td_backcolor");

    } else if (x1 == 0 && x2 == 0 && x3 == 0 && x4 == 1) {
        y1[1].innerHTML = boolResult;
        y1[1].classList.add("td_backcolor");
    } else if (x1 == 0 && x2 == 0 && x3 == 1 && x4 == 0) {
        y1[2].innerHTML = boolResult;
        y1[2].classList.add("td_backcolor");
    } else if (x1 == 0 && x2 == 0 && x3 == 1 && x4 == 1) {
        y1[3].innerHTML = boolResult;
        y1[3].classList.add("td_backcolor");
    } else if (x1 == 0 && x2 == 1 && x3 == 0 && x4 == 0) {
        y1[4].innerHTML = boolResult;
        y1[4].classList.add("td_backcolor");
    } else if (x1 == 0 && x2 == 1 && x3 == 0 && x4 == 1) {
        y1[5].innerHTML = boolResult;
        y1[5].classList.add("td_backcolor");
    } else if (x1 == 0 && x2 == 1 && x3 == 1 && x4 == 0) {
        y1[6].innerHTML = boolResult;
        y1[6].classList.add("td_backcolor");
    } else if (x1 == 0 && x2 == 1 && x3 == 1 && x4 == 1) {
        y1[7].innerHTML = boolResult;
        y1[7].classList.add("td_backcolor");
    } else if (x1 == 1 && x2 == 0 && x3 == 0 && x4 == 0) {
        y1[8].innerHTML = boolResult;
        y1[8].classList.add("td_backcolor");
    } else if (x1 == 1 && x2 == 0 && x3 == 0 && x4 == 1) {
        y1[9].innerHTML = boolResult;
        y1[9].classList.add("td_backcolor");
    } else if (x1 == 1 && x2 == 0 && x3 == 1 && x4 == 0) {
        y1[10].innerHTML = boolResult;
        y1[10].classList.add("td_backcolor");
    } else if (x1 == 1 && x2 == 0 && x3 == 1 && x4 == 1) {
        y1[11].innerHTML = boolResult;
        y1[11].classList.add("td_backcolor");
    } else if (x1 == 1 && x2 == 1 && x3 == 0 && x4 == 0) {
        y1[12].innerHTML = boolResult;
        y1[12].classList.add("td_backcolor");
    } else if (x1 == 1 && x2 == 1 && x3 == 0 && x4 == 1) {
        y1[13].innerHTML = boolResult;
        y1[13].classList.add("td_backcolor");
    } else if (x1 == 1 && x2 == 1 && x3 == 1 && x4 == 0) {
        y1[14].innerHTML = boolResult;
        y1[14].classList.add("td_backcolor");
    } else if (x1 == 1 && x2 == 1 && x3 == 1 && x4 == 1) {
        y1[15].innerHTML = boolResult;
        y1[15].classList.add("td_backcolor");
    }

});



/*--THIRD BLOG--*/



var b1 = document.getElementById("z1");
var b2 = document.getElementById("z2");
var b3 = document.getElementById("z3");
var b4 = document.getElementById("z4");
var btn3 = document.getElementById("btn3");
var y2 = document.querySelectorAll(".y2");


btn3.addEventListener("click", function() {

    z1 = Number(Boolean(Number(b1.value)));
    z2 = Number(Boolean(Number(b2.value)));
    z3 = Number(Boolean(Number(b3.value)));
    z4 = Number(Boolean(Number(b4.value)));

    var boolResult2 = !z2 || (!z1 || !z4) && z2 && !(!z3 || z4 && !z4) || z3;


    if (z1 == 0 && z2 == 0 && z3 == 0 && z4 == 0) {

        y2[0].innerHTML = +boolResult2;
        y2[0].classList.add("td_backcolor");
    } else if (z1 == 0 && z2 == 0 && z3 == 0 && z4 == 1) {
        y2[1].innerHTML = +boolResult2;
        y2[1].classList.add("td_backcolor");
    } else if (z1 == 0 && z2 == 0 && z3 == 1 && z4 == 0) {
        y2[2].innerHTML = +boolResult2;
        y2[2].classList.add("td_backcolor");
    } else if (z1 == 0 && z2 == 0 && z3 == 1 && z4 == 1) {
        y2[3].innerHTML = +boolResult2;
        y2[3].classList.add("td_backcolor");
    } else if (z1 == 0 && z2 == 1 && z3 == 0 && z4 == 0) {
        y2[4].innerHTML = +boolResult2;
        y2[4].classList.add("td_backcolor");
    } else if (z1 == 0 && z2 == 1 && z3 == 0 && z4 == 1) {
        y2[5].innerHTML = +boolResult2;
        y2[5].classList.add("td_backcolor");
    } else if (z1 == 0 && z2 == 1 && z3 == 1 && z4 == 0) {
        y2[6].innerHTML = +boolResult2;
        y2[6].classList.add("td_backcolor");
    } else if (z1 == 0 && z2 == 1 && z3 == 1 && z4 == 1) {
        y2[7].innerHTML = +boolResult2;
        y2[7].classList.add("td_backcolor");
    } else if (z1 == 1 && z2 == 0 && z3 == 0 && z4 == 0) {
        y2[8].innerHTML = +boolResult2;
        y2[8].classList.add("td_backcolor");
    } else if (z1 == 1 && z2 == 0 && z3 == 0 && z4 == 1) {
        y2[9].innerHTML = +boolResult2;
        y2[9].classList.add("td_backcolor");
    } else if (z1 == 1 && z2 == 0 && z3 == 1 && z4 == 0) {
        y2[10].innerHTML = +boolResult2;
        y2[10].classList.add("td_backcolor");
    } else if (z1 == 1 && z2 == 0 && z3 == 1 && z4 == 1) {
        y2[11].innerHTML = +boolResult2;
        y2[11].classList.add("td_backcolor");
    } else if (z1 == 1 && z2 == 1 && z3 == 0 && z4 == 0) {
        y2[12].innerHTML = +boolResult2;
        y2[12].classList.add("td_backcolor");
    } else if (z1 == 1 && z2 == 1 && z3 == 0 && z4 == 1) {
        y2[13].innerHTML = +boolResult2;
        y2[13].classList.add("td_backcolor");
    } else if (z1 == 1 && z2 == 1 && z3 == 1 && z4 == 0) {
        y2[14].innerHTML = +boolResult2;
        y2[14].classList.add("td_backcolor");
    } else if (z1 == 1 && z2 == 1 && z3 == 1 && z4 == 1) {
        y2[15].innerHTML = +boolResult2;
        y2[15].classList.add("td_backcolor");
    }
});