import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [city, setcity] = useState("");
  const navigate = useNavigate();

  function callCity() {
    const temp = city;
    setcity("");
    navigate("/", { state: { city: `${temp}` } });
  }

  return (
    <div className="w-full flex justify-center h-10 items-center">
      <div className="w-11/12 h-full flex rounded-full items-center backdrop-blur-lg backdrop-saturate-200 ">
        <input
          type="text"
          placeholder="Search..."
          value={city}
          onChange={(event) => setcity(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") callCity();
          }}
          className="w-11/12 rounded-full h-full pl-2 pr-2 border-none outline-none backdrop-blur-lg backdrop-saturate-200 backdrop-contrast-200"
        />
        <div
          className="w-1/12 h-full flex justify-center items-center"
          onClick={callCity}
        >
          <FontAwesomeIcon
            icon={faSearch}
            className="h-1/2 mr-2 ml-2 text-white"
          />
        </div>
      </div>
    </div>
  );
}
