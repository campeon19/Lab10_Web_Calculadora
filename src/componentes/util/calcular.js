import Big from "big.js";
import operate from "./operar";
import isNumber from "./isNumber";

export default function calculate(obj, buttonName) {
  Big.DP = 7;
  console.log(buttonName);
  if (buttonName === "AC") {
    return {
      total: null,
      siguiente: null,
      operacion: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.siguiente === "0") {
      return {};
    }

    if (obj.operacion) {
      if (obj.siguiente) {
        if(obj.siguiente.length < 9){
          return { siguiente: obj.siguiente + buttonName };
        }
        alert("Error numero maximo de digitos sobrepasado");   
      }
      return { siguiente: buttonName };
    }

    if (obj.siguiente) {
      if(obj.siguiente.length < 9){
        const siguiente = obj.siguiente === "0" ? buttonName : obj.siguiente + buttonName;
        return {
          siguiente,
          total: null,
        };
      }
      alert("Error numero maximo de digitos sobrepasado");
      
    }
    return {
      siguiente: buttonName,
      total: null,
    };
  }

  if (buttonName === "%") {
    if (obj.operacion && obj.siguiente) {
      const result = operate(obj.total, obj.siguiente, obj.operacion);
      return {
        total: Big(result)
          .div(Big("100"))
          .toString(),
        siguiente: null,
        operacion: null,
      };
    }
    if (obj.siguiente) {
      return {
        siguiente: Big(obj.siguiente)
          .div(Big("100"))
          .toString(),
      };
    }
    return {};
  }

  if (buttonName === ".") {
    if (obj.siguiente) {

      if (obj.siguiente.includes(".")) {
        return {};
      }
      return { siguiente: obj.siguiente + "." };
    }
    return { siguiente: "0." };
  }

  if (buttonName === "=") {
    if (obj.siguiente && obj.operacion) {
      console.log(operate(obj.total, obj.siguiente, obj.operacion));
      return {
        total: operate(obj.total, obj.siguiente, obj.operacion),
        siguiente: null,
        operacion: null,
      };
    } else {
      return {};
    }
  }

  if (buttonName === "+/-") {
    if (obj.siguiente) {
      return { siguiente: (-1 * parseFloat(obj.siguiente)).toString() };
    }
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  if (obj.operacion) {
    return {
      total: operate(obj.total, obj.siguiente, obj.operacion),
      siguiente: null,
      operacion: buttonName,
    };
  }

  if (!obj.siguiente) {
    return { operacion: buttonName };
  }

  return {
    total: obj.siguiente,
    siguiente: null,
    operacion: buttonName,
  };
}