import convertDistance from "../controllers/conversion.js"

const displayLayout = (event) => {
  event.preventDefault()

  const distanceValue = document.getElementById("distance-value").value
  const distanceUnit = document.getElementById("distance-unit").value
  const convertTo = document.getElementById("convert-to").value

  const distance = { unit: distanceUnit, value: parseFloat(distanceValue) }
  const result = convertDistance(distance, convertTo)

  const resultElement = document.getElementById("result")
  resultElement.innerHTML = `Результат: ${result.value} ${result.unit}`
}

const form = document.getElementById("conversion-form")
form.addEventListener("submit", displayLayout)
