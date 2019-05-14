const getTempsFromAPI = () => {
  document.querySelector('.temp').textContent = ' '
  const city = document.querySelector('.city').value
  console.log(city)
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&appid=979aec3e332786db0d8259a92f2dbaa9'
  )
    .then(resp => {
      return resp.json()
    })
    .then(temp => {
      const temperature = document.createElement('h1')
      temperature.textContent = { temp }.temp.main.temp
      document.querySelector('.temp').appendChild(temperature)
    })
}
const main = () => {}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.search').addEventListener('click', getTempsFromAPI)
