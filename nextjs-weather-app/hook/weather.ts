import { fetchWeatherData } from "@/api/weather";
import { CityIdArrayType, CityIdType } from "@/types/weather";
import { useQuery } from "react-query";

export const FetchWeatherData = async (CityIdArray: CityIdArrayType) => {
  return useQuery({
    queryKey: "weatherData",
    queryFn: async () => {
      const response = await fetchWeatherData(CityIdArray);
      return response;
    },
    cacheTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

export const FetchCityWeatherData = async (CityId: CityIdType) => {
  return useQuery({
    queryKey: ["weatherData",CityId],
    queryFn: async () => {
      const response = await fetchWeatherData(CityId);
      return response;
    },
    cacheTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
