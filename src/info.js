import React from "react";

function Info({ data }) {
  let rawTemp = data?.main?.temp - 273.15;
  const temperature = Math.floor((rawTemp * 9) / 5 + 32);
  const error = data.cod !== 200 || "";
  return (
    <div className="info">
      {error ? <div>Enter Zipcode</div> : <div>Temp: {temperature}&deg;</div>}
    </div>
  );
}
export default Info;
