import { useState } from "react";

function App() {
const{lat, sat_lat} = useState()
const{lon, sat_lon} = useState()
const{acc, sat_acc} = useState()

  navigator.geolocation.getCurrentPosition((position) => {
    const lat0 = position.coords.latitude;
    const lon0 = position.coords.longitude;
    const acc0 = position.coords.accuracy;
    sat_lat(lat0)
    sat_lon(lon0)
    sat_acc(acc0)
  });

  return (
  <div>
    <h1>위도: {lat} </h1>
    <h1>경도: {lon} </h1>
    <h1>정확도: {acc} </h1>
  </div>
  )
}

export default App
