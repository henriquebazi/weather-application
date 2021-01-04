const form = document.querySelector('form')
const cityName = document.querySelector('[data-js="city-name"]')
const cityWeather = document.querySelector('[data-js="city-weather"]')
const cityTemperature = document.querySelector('[data-js="city-temperature"]')
const timeImg = document.querySelector('[data-js="time"]')
const weatherIcon = document.querySelector('[data-js="weather-icon"]')
const card = document.querySelector('[data-js="card"]')

const showCityCard = () => {
  if(card.classList.contains('d-none')) {
    card.classList.remove('d-none')
  }
}

const showCityWeather = async inputValue => {
  const [{Key, LocalizedName}] = await getCityData(inputValue)
  const [{IsDayTime, Temperature, WeatherText, WeatherIcon}] = await getCityWeather(Key)
  const timeIcon = IsDayTime ? './src/day.svg' : './src/night.svg'

  timeImg.setAttribute('src', timeIcon)
  weatherIcon.innerHTML = `<img src="./src/icons/${WeatherIcon}.svg" />`
  cityName.textContent = LocalizedName
  cityWeather.textContent = WeatherText
  cityTemperature.textContent = Temperature.Metric.Value  + " ºC"
}

form.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.city.value

  showCityCard()
  showCityWeather(inputValue)
  event.target.reset()
})