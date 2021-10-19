import { venderServe } from "../Services/venderServe.js";
import { ProxyState } from "../AppState.js"

function _draw() {
    let template = ''
    let theSnacks = ProxyState.snacks
    for (let i = 0; i < theSnacks.length; i++) {
        let aSnack = theSnacks[i]
        //console.log(aSnack)
        template += `snack: ${aSnack.name}, price: ${aSnack.price}\n`
    }
    document.getElementById('listSnacks').innerText = template
    console.log(theSnacks)

}
_draw()

export class VenderControl {
    constructor() {
    }
    addMoney() {
        venderServe.addMoney()
    }
}