"use client";

import { useFetchCityWeatherData } from "@/hook/weather";
import { FC } from "react";
import WeatherCard from "./weather-card";

interface CityWeatherProps {
  id: string;
}

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
    </div>
  );
};

export default CityWeather;
