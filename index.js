const titulo = document.getElementById("title")
const cuentaregres = document.getElementById("Cuentaregresiva")
const totalofclicks = document.getElementById("contclicks")
const botonStart = document.getElementById("btnstart")
const botonReset = document.getElementById("btnreset")
const botonprincipal = document.getElementById("boton")
const clicksporsegundo = document.getElementById("cps")

var clicks = 0;
var num = 9;
var timeoutId= null;
var setintervalid = null;


let numerodeclicks = () => {
    clicks += 1;
    totalofclicks.innerHTML = clicks;
}

let calcClicks = () =>{
    clicksresul = clicks / 10
    clicksporsegundo.innerHTML = clicksresul;
}

function start(flag) {
    if (flag) {
      botonStart.disabled = true;
    }
    clicks = 0
    timeoutId = setTimeout(function() {
    cuentaregres.innerHTML = 10;
    clicksresul = clicks / 10
    clicksporsegundo.innerHTML = clicksresul;
    clearTimeout(timeoutId)
    clearInterval(setintervalid)
    //start();
}
, 10000);

setintervalid = setInterval(() => {
    cuentaregres.innerHTML = num + ' Seconds left'
    num--;
    if(cuentaregres.value == 0){
    clearInterval(setintervalid);
    }
}, 1000);
}

   
let reset = () => {
    clicks = 0;
    num = 9;
    totalofclicks.innerHTML = 0;
    totalofclicks.innerText = "numero total de clicks";
    clicksporsegundo.innerHTML = 0;
    clicksporsegundo.innerText = "Resultado cps";
    cuentaregres.innerText = "10 Seconds Left"
    clearTimeout(timeoutId);
    clearInterval(setintervalid);
    botonStart.disabled = false;
}


/*
function start(flag) {
    if (flag) {
      botonStart.disabled = true;
    }

    timeoutId = setTimeout(function() {
    cuentaregres.innerHTML = 0;
    clicksresul = clicks / 10
    clicksporsegundo.innerHTML = clicksresul;
    start();
}
, 10000);

let setintervalid = setInterval(() => {
    cuentaregres.innerHTML = num + ' Seconds left'
    num--;

    if(cuentaregres === 0){
    clearInterval(setintervalid);
    }
}, 1000);
}
*/
