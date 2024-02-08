"use client";

import { fetchWeatherData } from "@/api/weather";
import { CityIdArrayType, CityIdType } from "@/types/weather";
import { useQuery } from "react-query";

export const useFetchWeatherData = (CityIdArray: CityIdArrayType) => {
  return useQuery({
    queryKey: ["weather-data"],
    queryFn: async () => {
      const response = await fetchWeatherData(CityIdArray);

      return response;
    },
    cacheTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useFetchCityWeatherData = (CityId: CityIdType) => {
  return useQuery({
    queryKey: ["weather-data", CityId],
    queryFn: async () => {
      const response = await fetchWeatherData(CityId);
      return response;
    },
    cacheTime: 5 * 60 * 1000, // 5 minutes
  });
};
