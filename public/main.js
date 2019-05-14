let city = {}
let zipcode = {}

fetch('api.openweathermap.org/data/2.5/weather?q={city name}')
  .then(resp => {
    if (resp.status === 200) {
      return resp.json()
    } else {
      console.log('error')
    }
  })
  .then(city => {
    displayData(city)
  }
  fetch('api.openweathermap.org/data/2.5/weather?zip={zip code}')
    .then(zipcode => {
    displayData(zipcode)
  })
)

const main = () => {}

const searchFunction = (name) => {
  city = document.querySelector('.city-zip').value
  //run this value through the api
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.search').addEventListener('click', searchFunction)
