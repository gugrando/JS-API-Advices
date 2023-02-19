import { Advice } from "./adviceNote.js";

export class addDisplay{
  
  async updateDisplay(){
    try {
      const adviceContainer = document.querySelector(".container")
      const adviceContent = await Advice.search()
      adviceContainer.innerHTML = `<h2 class="advice">${adviceContent}</h2>`
    }catch (error) {
      alert(error.message = "Erro, tente novamente!")
    }
  }
}