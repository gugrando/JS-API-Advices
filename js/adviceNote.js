export class Advice{
  static search(){
    const endpoint = `https://api.adviceslip.com/advice`
    return fetch(endpoint).then(advice => advice.json()).then(advice => advice.slip.advice)
  }
}