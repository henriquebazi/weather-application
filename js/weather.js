const APIKey = 'YU4IwyqAmR4tIT9jlvzZ4soLVoVv9vJs'
const baseUrl = 'https://dataservice.accuweather.com/'

const getCityUrl = city => 
`${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${city}`


const getWeatherUrl = cityKey => `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`

const fetchUrl = async Url => {
  try {
    const response = await fetch(Url)

    if(!response.ok) {
      throw new Error('Não foi possível obter os dados.')
    }

    return response.json()

  } catch (error) {
    console.log(error)
  }
}

const getCityData = cityName => fetchUrl(getCityUrl(cityName))
const getCityWeather = cityName => fetchUrl(getWeatherUrl(cityName))
