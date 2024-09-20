import Kartya from "./Kartya.js";
export default class Kartyak{
    constructor(list, parent){
        this.list = list
        this.parent = parent
        this.#kartyaCreate()
    }
    #kartyaCreate(){
        this.list.forEach((pic) => {
            new Kartya(pic, this.parent)
        });
    }
}