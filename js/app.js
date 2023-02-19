// import { Advice } from "./adviceNote.js";
import { addDisplay } from "./adviceDisplay.js";

function adviceCall(){
  const display = new addDisplay
  const btnCall = document.querySelector(".advice-btn")
  
  btnCall.addEventListener("click", ()=>{
     display.updateDisplay()
  })
}
adviceCall()