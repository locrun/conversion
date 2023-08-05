import convertDistance from "../controllers/conversion.js"
import testData from "../data/testData.json" assert { type: "json" }

// Функция для выполнения конвертации на основе входных и выходных данных в формате JSON
const performConversion = (input) => {
  const { distance, convert_to } = input

  try {
    const result = convertDistance(distance, convert_to)
    return result
  } catch (error) {
    console.error(error.message)
  }
}

// Выполнение конвертации
const output = performConversion(testData)

// Вывод результата
console.log(JSON.stringify(output))
