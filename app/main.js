import { ValuesController } from "./Controllers/ValuesController.js";
import { VenderControl } from "./Controllers/VenderControl.js";

class App {
  valuesController = new ValuesController();
  venderController = new VenderControl();
}

window["app"] = new App();
