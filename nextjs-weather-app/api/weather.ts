import { CityIdType } from "@/types/weather";
import createAxiosInstance from "@/utils/axiosInterceptor";

const axiosInstance = createAxiosInstance();

export const fetchWeatherData = async (CityId: CityIdType) => {
  const response = await axiosInstance.get(
    `${process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_URL}/data/2.5/group?id=${CityId}&units=metric&appid=${process.env.NEXT_PUBLIC_APP_API_TOKEN}`
  );

  return response.data.list;
};
