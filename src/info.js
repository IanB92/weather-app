import React from "react";

function Info({ data }) {
  let rawTemp = data?.main?.temp - 273.15;
  const temperature = Math.floor((rawTemp * 9) / 5 + 32);
  const error = data.cod !== 200 || "";
  const place = data.name;
   let description = data?.weather?.[0]?.description

  return (
    <div className="info">
      {error ? <div>Enter Zipcode</div> : <div>{place} {temperature}&deg; {description}   </div>}
    </div>
  );
}
export default Info;
