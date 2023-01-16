const button = document.getElementById("btn")
const resetBtn = document.getElementById("btnRestart")
const startBtn = document.getElementById("btnStart")
const parrafo = document.getElementById("parf")
const creg = document.getElementById("cuentareg")
const parrafo2 = document.getElementById("parf2")


var clicks = 0;

let counter = () => {
    clicks += 1;
    parrafo.innerHTML = clicks;
}

creg.innerHTML = "10 Seconds left"
let calcClicks = () =>{
    clicksresul = clicks / 10
    parrafo2.innerHTML = clicksresul;
    console.log("Calculo terminado tras 10 segundos")
}


setTimeout(calcClicks, "10000")
clearTimeout(calcClicks)
let num = 9

let cuentaregresiva = setInterval(() => {
  creg.innerHTML = num + ' Seconds left'
  num--;
if(num === -1){
  clearInterval(cuentaregresiva);}
},1000)


function code(){
  setTimeout(calcClicks, "10000")
  clearTimeout(calcClicks)
  let num = 9

  let cuentaregresiva = setInterval(() => {
  creg.innerHTML = num + ' Seconds left'
  num--;
  if(num === -1){
  clearInterval(cuentaregresiva);}
  },1000) 
}

