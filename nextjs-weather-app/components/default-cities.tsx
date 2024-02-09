"use client";

import Link from "next/link";
import Image from "next/image";
import { FC, useEffect } from "react";
import { useFetchWeatherData } from "@/hook/weather";
import { getCities } from "@/utils/get-cities";
import { weatherColorMap } from "@/constants/color-map";
import { Weather } from "@/types/weather";
import WeatherCard from "./weather-card";
import { CardGrid } from "./card-grid";

interface DefaultCitiesProps {}

const DefaultCities: FC<DefaultCitiesProps> = () => {
  const { data, isLoading, isError } = useFetchWeatherData(getCities());

  return (
    <div>
      <div className="flex justify-center mx-auto">
        {data && (
          <CardGrid<Weather>
            items={data}
            render={(item, index) => (
              <WeatherCard
                data={item}
                key={index}
                className= "min-w-[390px] h-[280px]"
              />
            )}
          />
        )}
        <div>
        {isError && <p>Error fetching weather data</p>}
        </div>

      </div>
    </div>
  );
};

export default DefaultCities;
