import React, { useState } from "react";

const Weather = ({ handleSubmit }) => {
  const [zipCode, setZipCode] = useState("");

  const onSubmit = (e) => {
    console.log("weather- handleSubmit", zipCode);
    e.preventDefault();
    handleSubmit(zipCode);
    setZipCode("");
  };
  const handleChange = (e) => {
    const zip = e.target.value;
    setZipCode(zip);
  };
  console.log("form", zipCode);
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="zip code"
          value={zipCode}
          onChange={handleChange}
        />

        <button type="submit" onClick={onSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Weather;
