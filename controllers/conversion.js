import conversionRules from "../data/conversionRules.json" assert { type: "json" }
import errorHandling from "./errorHandling.js"

// Функция для конвертации расстояния
const convertDistance = (distance, convertTo) => {
  errorHandling(distance, convertTo)

  const value = distance.value * conversionRules[distance.unit][convertTo]
  return { unit: convertTo, value: Number(value.toFixed(2)) }
}
export default convertDistance
