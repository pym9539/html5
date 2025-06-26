import { useState } from 'react'

function App() {
  const [ lat, sat_lat ] = useState(0)
  const [ lon, sat_lon ] = useState(0)
  const [ acc, sat_acc ] = useState(0)

  navigator.geolocation.getCurrentPosition((position) => {
    const lat0 = position.coords.latitude;
    const lon0 = position.coords.longitude;
    const acc0 = position.coords.accuracy;
    sat_lat(lat0)
    sat_lon(lon0)
    sat_acc(acc0)
  })

  return (
    <div>
      <h2> 위도: {lat} </h2>
      <h2> 경도: {lon} </h2>
      <h2> 정확도: {acc} </h2>
    </div>
  )
}

export default App
