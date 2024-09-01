import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faDroplet,
  faSun,
  faSunPlantWilt,
  faTemperatureArrowDown,
  faTemperatureArrowUp,
  faUmbrella,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

export default function Front(props) {
  const navigate = useNavigate();

  const move = () => {
    navigate("More info");
  };

  return (
    <>
      <div
        className="flex flex-col justify-center items-center pt-5 lg:hidden xl:hidden"
        onClick={move}
      >
        <img
          className="size-40 hover:cursor-pointer"
          src={props?.state?.weather?.data?.current?.condition?.icon}
          alt="pic"
        />
        <h2 className="font-dosis text-2xl text-white text-center">
          {props?.state?.weather?.data?.current?.condition?.text}
        </h2>
        <h1 className="font-dosis text-7xl text-white pt-3">
          {props?.state?.weather?.data?.current?.temp_c} &deg;
        </h1>{" "}
        <br />
        <h1 className="font-dosis font-semibold text-3xl text-[#00213d] pt-3">
          Feels Like {props?.state?.weather?.data?.current?.feelslike_c} &deg;
        </h1>{" "}
        <br />
      </div>
      <div className="hidden lg:mt-6 lg:flex lg:grid-cols-2 lg:gap-4 xl:mt-6 xl:flex xl:grid-cols-2 xl:gap-4">
        <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:backdrop-blur-lg lg:backdrop-saturate-200 lg:backdrop-contrast-200 lg:pl-10 lg:pb-5 lg:pt-5 lg:rounded-r-3xl xl:grid xl:grid-cols-2 xl:gap-4 xl:backdrop-blur-lg xl:backdrop-saturate-200 xl:backdrop-contrast-200 xl:pl-10 xl:pb-5 xl:pt-5 xl:rounded-r-3xl">
          <div>
            <h1 className="font-dosis text-7xl text-white pt-10">
              {props?.state?.weather?.data?.current?.temp_c} &deg;
            </h1>{" "}
            <br />
            <h1 className="font-dosis font-semibold text-3xl text-[#00213d] pt-6">
              Feels Like {props?.state?.weather?.data?.current?.feelslike_c}{" "}
              &deg;
            </h1>{" "}
            <br />
          </div>
          <div className="pr-4 pl-4">
            <img
              className="size-40 hover:cursor-pointer"
              src={props?.state?.weather?.data?.current?.condition?.icon}
              alt="pic"
            />
            <h2 className="font-dosis text-3xl text-white text-center">
              {props?.state?.weather?.data?.current?.condition?.text}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-4 backdrop-blur-lg backdrop-saturate-200 backdrop-contrast-200 pl-10 pb-5 pt-5 rounded-l-3xl lg:w-3/4 pr-5 text-white">
          <div className="backdrop-blur-lg backdrop-saturate-200 backdrop-opacity-75 bg-slate-50 bg-opacity-10 rounded-lg font-dosis font-thin text-3xl flex flex-row w-full">
            <p className="content-center w-3/4 pl-5">
              <FontAwesomeIcon icon={faTemperatureArrowUp} className="pr-5" />{" "}
              Max Temperature
            </p>
            <p className="content-center w-1/4">
              {
                props?.state?.weather?.data?.forecast?.forecastday[0]?.day
                  ?.maxtemp_c
              }
              &deg;
            </p>
          </div>
          <div className="backdrop-blur-lg backdrop-saturate-200 backdrop-opacity-75 bg-slate-50 bg-opacity-10 rounded-lg font-dosis font-thin text-3xl flex flex-row w-full">
            <p className="content-center w-3/4 pl-5">
              <FontAwesomeIcon icon={faTemperatureArrowDown} className="pr-5" />{" "}
              Min Temperature
            </p>
            <p className="content-center w-1/4">
              {
                props?.state?.weather?.data?.forecast?.forecastday[0]?.day
                  ?.mintemp_c
              }
              &deg;
            </p>
          </div>
          <div className="backdrop-blur-lg backdrop-saturate-200 backdrop-opacity-75 bg-slate-50 bg-opacity-10 rounded-lg font-dosis font-thin text-3xl flex flex-row w-full">
            <p className="content-center w-3/4 pl-5">
              <FontAwesomeIcon icon={faWind} className="pr-5" /> Wind Speed
            </p>
            <p className="content-center w-1/4">
              {props?.state?.weather?.data?.current?.wind_kph} kph
            </p>
          </div>
          <div className="backdrop-blur-lg backdrop-saturate-200 backdrop-opacity-75 bg-slate-50 bg-opacity-10 rounded-lg font-dosis font-thin text-3xl flex flex-row w-full">
            <p className="content-center w-3/4 pl-5">
              <FontAwesomeIcon icon={faCompass} className="pr-5" /> Wind
              Direction
            </p>
            <p className="content-center w-1/4">
              {props?.state?.weather?.data?.current?.wind_dir}
            </p>
          </div>
          <div className="backdrop-blur-lg backdrop-saturate-200 backdrop-opacity-75 bg-slate-50 bg-opacity-10 rounded-lg font-dosis font-thin text-3xl flex flex-row w-full">
            <p className="content-center w-3/4 pl-5">
              <FontAwesomeIcon icon={faUmbrella} className="pr-5" /> Chance of
              rain
            </p>
            <p className="content-center w-1/4">
              {
                props?.state?.weather?.data?.forecast?.forecastday[0]?.day
                  ?.daily_chance_of_rain
              }{" "}
              %
            </p>
          </div>
          <div className="backdrop-blur-lg backdrop-saturate-200 backdrop-opacity-75 bg-slate-50 bg-opacity-10 rounded-lg font-dosis font-thin text-3xl flex flex-row w-full">
            <p className="content-center w-3/4 pl-5">
              <FontAwesomeIcon icon={faDroplet} className="pr-5" /> Humidity
            </p>
            <p className="content-center w-1/4">
              {props?.state?.weather?.data?.current?.humidity}&deg;
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex xl:flex mt-5 w-full h-full flex-row gap-4">
        <div className="w-1/3 h-[4.5rem] rounded-r-lg lg:backdrop-blur-lg lg:backdrop-saturate-200 lg:backdrop-contrast-200 text-white font-dosis font-thin text-center content-center flex flex-row">
          <div className="w-2/3 text-center content-center text-3xl">
            <FontAwesomeIcon icon={faSunPlantWilt} className="pl-5 pr-5" /> Uv
            index{" "}
          </div>
          <p className="w-1/3 text-center content-center text-3xl">
            {props?.state?.weather?.data?.forecast?.forecastday[0]?.day?.uv}
          </p>
        </div>
        <div className="w-1/3 h-[4.5rem] rounded-lg lg:backdrop-blur-lg lg:backdrop-saturate-200 lg:backdrop-contrast-200 text-white font-dosis font-thin text-center content-center flex flex-row">
          <div className="w-2/3 text-center content-center text-3xl">
            <FontAwesomeIcon icon={faSun} className="pl-5 pr-5" /> Sun Rise{" "}
          </div>
          <p className="w-1/3 text-center content-center text-3xl">
            {
              props?.state?.weather?.data?.forecast?.forecastday[0]?.astro
                ?.sunrise
            }
          </p>
        </div>
        <div className="w-1/3 h-[4.5rem] rounded-l-lg lg:backdrop-blur-lg lg:backdrop-saturate-200 lg:backdrop-contrast-200 text-white font-dosis font-thin text-center content-center flex flex-row">
          <div className="w-2/3 text-center content-center text-3xl">
            <FontAwesomeIcon icon={faSun} className="pl-5 pr-5" /> Sun Set{" "}
          </div>
          <p className="w-1/3 text-center content-center text-3xl">
            {
              props?.state?.weather?.data?.forecast?.forecastday[0]?.astro
                ?.sunset
            }
          </p>
        </div>
      </div>
    </>
  );
}
