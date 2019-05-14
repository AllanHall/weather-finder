let city = {}
let zipcode = {}

const getTempsFromAPI = () => {
  fetch('https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=979aec3e332786db0d8259a92f2dbaa9')
  .then(resp => {
    if (resp.status === 200) {
      return resp.json()
    } else {
      console.log('error')
    }
  })
  .then(temp => {
    document.querySelector('.temp').createElement('p').appendChild(temp)
  }
  fetch('https://api.openweathermap.org/data/2.5/weather?zip={zip code}&appid=979aec3e332786db0d8259a92f2dbaa9')
    .then(temp => {
    document.querySelector('.temp').createElement('p').appendChild(temp)
  })
)
}
const main = () => {}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.search').addEventListener('click', getTempsFromAPI)
