export default class Kartya{
    #kartya = {}
    constructor(pic, parent){
        this.#kartya = pic
        this.parent = parent
        this.#data()
        this.#bigpipcSwap()
    }
    #data(){
        this.parent.append(`<div class ="card">
            <button class="picCard">
            <img src=${this.#kartya.url}>
            </button>
          </div>`
        )
    }

    #bigpipcSwap(){
        this.parent.on("click", ()=>{
            
        })
    }
}
