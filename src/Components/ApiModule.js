import Front from "./Front";
import DayModule from "./DayModule";
import Future from "./Future";
import { useSelector } from "react-redux";
import PlaceTimeDate from "./PlaceTimeDate";
import Pendulum from "./Loaders/Pendulum";
import SearchBar from "./SearchBar";

export default function ApiModule() {
  const state = useSelector((state) => state);

  return (
    <>
      {state?.weather?.isLoading ? (
        <Pendulum />
      ) : state?.weather?.isError ? (
        <>
          <div className="h-full flex justify-center items-center text-center text-white font-dosis font-semibold text-3xl">
            <p>Some Error Occurred While fetching the data</p>
            <p>Please try again after some time</p>
          </div>
        </>
      ) : state?.weather?.data?.error ? (
        <>
          <div className="mt-5 mb-5">
            <SearchBar />
          </div>
          <div className="justify-center items-center text-center text-white font-dosis font-semibold text-3xl">
            <p>Some Error Occurred While fetching the said Location</p>
            <p>Please Re-Enter the city name</p>
          </div>
        </>
      ) : (
        <>
          <PlaceTimeDate state={state} />
          <div className="mt-5 mb-5">
            <SearchBar />
          </div>
          <Front state={state} />
          <DayModule state={state} />
          <Future state={state} />
        </>
      )}
    </>
  );
}
