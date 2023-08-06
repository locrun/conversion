import conversionRules from "../data/conversionRules.json" assert { type: "json" }

const errorHandling = (distance, convertTo) => {
  // Проверяем, что бы единицы измерения были разными
  if (distance.unit === convertTo) {
    throw new Error(
      `Нельзя выбрать ${distance.unit} и ${convertTo} для конвертации`
    )
  }

  // Проверяем, что бы введенное значение было больше 0
  if (distance.value <= 0) {
    throw new Error("Значение должно быть больше 0")
  }

  // Проверяем, что единица измерения находится в списке поддерживаемых единиц
  if (!conversionRules[distance.unit]) {
    throw new Error(`Единица измерения "${distance.unit}" не поддерживается`)
  }

  return true
}
export default errorHandling
