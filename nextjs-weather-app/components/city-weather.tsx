"use client";

import { useFetchCityWeatherData } from "@/hook/weather";
import { FC } from "react";
import WeatherCard from "./weather-card";

interface CityWeatherProps {
  id: string;
}

//Single city weather data
const CityWeather: FC<CityWeatherProps> = ({ id }: CityWeatherProps) => {
  const { data, isLoading, isError } = useFetchCityWeatherData(id);

  return (
    <div>
      {data && (
        <WeatherCard
          data={data[0]}
          className="min-w-[620px] h-[380px]"
          single
        />
      )}
      {isError && <p className="text-2xl text-white p-10 text-center">Error fetching weather data</p>}
      {isLoading && (
        <p className="text-2xl text-white p-10 text-center">Loading...</p>
      )}
    </div>
  );
};

export default CityWeather;
