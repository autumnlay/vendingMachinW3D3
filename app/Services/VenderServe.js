import { ProxyState } from "../AppState.js";

class VenderServe {
    addMoney() {
        ProxyState.money += 0.25
        console.log(ProxyState.money)
    }
}

export const venderServe = new VenderServe()