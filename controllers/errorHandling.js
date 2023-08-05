import conversionTable from "../data/conversionTable.json" assert { type: "json" }

const errorHandling = (distance, convertTo) => {
  // Проверяем, что бы единицы измерения были разными
  if (distance.unit === convertTo) {
    alert(`Нельзя выбрать ${distance.unit} и ${convertTo} для конвертации`)
  }

  // Проверяем, что значение расстояния является числом
  if (typeof distance.value !== "number" || isNaN(distance.value)) {
    throw new Error("Значение расстояния должно быть числом")
  }

  // Проверяем, что бы введенное значение было больше 0
  if (distance.value <= 0) {
    throw new Error("Значение должно быть больше 0")
  }

  // Проверяем, что единица измерения находится в списке поддерживаемых единиц
  if (!conversionTable[distance.unit]) {
    throw new Error(`Единица измерения "${distance.unit}" не поддерживается`)
  }

  const conversionFactor = conversionTable[distance.unit][convertTo]

  // // Проверяем, что коэффициент конвертации является числом
  if (typeof conversionFactor !== "number" || isNaN(conversionFactor)) {
    throw new Error(`Невозможно выполнить конвертацию в "${convertTo}"`)
  }

  const conversValue = distance.value * conversionFactor

  // Проверяем, что результат конвертации является числом
  if (isNaN(conversValue)) {
    throw new Error(`Невозможно выполнить конвертацию в "${convertTo}"`)
  }
  return true
}
export default errorHandling
