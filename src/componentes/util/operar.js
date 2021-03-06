/* eslint-disable no-alert */
import Big from "big.js";

export default function operar(numberOne, numberTwo, operation) {
  const one = Big(numberOne || "0");
  const two = Big(numberTwo || (operation === "÷" || operation === 'x' ? "1": "0")); // If dividing or multiplying, then 1 maintains current value in cases of null
  Big.DP = 7;
  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "x") {
    return one.times(two).toString();
  }
  if (operation === "/") {
    if (two === "0") {
      alert("Error division en 0");
      return "0";
    } else {
      return one.div(two).toString();
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}