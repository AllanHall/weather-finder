fetch('api.openweathermap.org/data/2.5/weather?q={city name}')
  .then(resp => {
    if (resp.status === 200) {
      return resp.json()
    } else {
      displayErrorMessage(resp)
    }
  })
  .then(json => {
    displayData(json)
  })

const main = () => {}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.search').addEventListener('click', searchFuction)
