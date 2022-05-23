var colors =
    ["rgb(red,green,blue)",
        "rgb(red,green,blue)",
        "rgb(red,green,blue)",
        "rgb(red,green,blue)",
        "rgb(red,green,blue)",
        "rgb(red,green,blue)"
    ]
//************PASO 4**************** */
//captura elementos
var tarjeta = document.querySelectorAll(".square");
var body = document.querySelector("#encabezado");
var divMessage = document.querySelector("#divMessage");
var txtMessage = document.querySelector("#message");
var colorDisplay = document.querySelector("#colorDisplay")
var btnReset = document.getElementById("NColores")
var numberSquare = 6;
var clickedColor;
var pickedColor
btnEasy = document.getElementById("facil")
btnHard = document.getElementById("dificil")
/*captura los elemetos de las tarjetas y los guarda en una variable=generandose un arreglo*/
//randomiza la posicion del color correcto
function generateRandomColors(Nmodo) {
    for (let i = 0; i < Nmodo; i++) {
        console.log(tarjeta[i].style.background = randomColor());
    }
    //recorre el largo de las tarjetas y le asigna un color
}
generateRandomColors(6)
for (let i = 0; i < tarjeta.length; i++) {
    tarjeta[i].addEventListener("click", function logica() {
        clickedColor = tarjeta[i].style.background;
        //prueba de comparacion de datos
        //console.log("clicked Color"+clickedColor)
        if (clickedColor !== colorDisplay.innerHTML) {
            incorrecto();
            tarjeta[i].style.background = "rgb(23,23,23)";
            tarjeta[i].style.transition = "0.5s"
        } else {
            correcto();
        }
    })
}
//funcion correcto
function correcto() {
    console.log("Correcto");
    txtMessage.innerHTML = "Correcto"
    body.style.background = colorDisplay.innerHTML
    body.style.transition = "1.5s"
    btnReset.innerHTML = "Jugar de Nuevo"
    changeColor();
}
//funcion incorrecto
function incorrecto() {
    console.log("incorrecto");
    txtMessage.innerHTML = "Intentalo Nuevamente"
    body.style.background = "rgb(23,23,23)"
    body.style.transition = "1.5s"
}
//Cambia a todas las tarjetas del color correcto
function changeColor(colorCorrecto) {
    for (let i = 0; i < tarjeta.length; i++) {
        tarjeta[i].style.background = colorDisplay.innerHTML
        tarjeta[i].style.transition = "0.5s";
    }
}
//Rescata el codigo RGB
function pickColor(rgb) {
    return rgb = tarjeta[Math.floor(Math.random() * (tarjeta.length = numberSquare))].style.background
}

colorDisplay.innerHTML = pickColor()
function randomColor() {
    //randomiza los parametros del rgb
    var red = Math.floor(Math.random() * 255)
    var green = Math.floor(Math.random() * 255)
    var blue = Math.floor(Math.random() * 255)
    //guarda los valores randomizados a lenguaje rbg al arreglo colors{}
    return "rgb(" + red + ", " + green + ", " + blue + ")"
}

btnReset.addEventListener("click", function () {
    generateRandomColors(numberSquare);
    colorDisplay.innerHTML = pickColor()
    body.style.background = "rgb(23,23,23)"
    body.style.transition = "0s"
    txtMessage.innerHTML = ""
    btnReset.innerHTML = "Nuevos Colores"
    console.log("----------------------------")
})

btnEasy.addEventListener("click", function () {
    for (let i = 3; i < tarjeta.length; i++) {
        tarjeta[i].style.transition = "0s";
        tarjeta[i].style.visibility = "hidden"
    }
    numberSquare = 3;
    generateRandomColors(numberSquare);
    colorDisplay.innerHTML = pickColor()
    body.style.background = "rgb(23,23,23)"
    body.style.transition = "0s"
    txtMessage.innerHTML = ""
    btnEasy.style.background = "blue"
    btnEasy.style.transition = "1s"
    btnHard.style.background = "rgb(23, 23, 23)"
    console.log("----------------------------")
})

btnHard.addEventListener("click", function () {
    for (let i = 0; i < tarjeta.length; i++) {
        tarjeta[i].style.transition = "1s";
        tarjeta[i].style.visibility = "visible"
    }
    numberSquare = 6;
    generateRandomColors(numberSquare);
    colorDisplay.innerHTML = pickColor()
    body.style.background = "rgb(23,23,23)"
    body.style.transition = "0s"
    txtMessage.innerHTML = ""
    btnHard.style.background = "blue"
    btnHard.style.transition = "1s"
    btnEasy.style.background = "rgb(23, 23, 23)"
    console.log("----------------------------")
})
