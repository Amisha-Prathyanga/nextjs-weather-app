import { CityIdArrayType, CityIdType } from "@/types/weather";
import createAxiosInstance from "@/utils/axiosInterceptor";

const axiosInstance = createAxiosInstance();

export const fetchWeatherData = async (CityId: CityIdType) => {
  const response = await axiosInstance.get(
    `${process.env.OPEN_WEATHER_MAP_URL}/data/2.5/group?id=${CityId}&units=metric&appid=${process.env.REACT_APP_API_TOKEN}`
  );
  if (response.status === 200) {
    throw new Error("Could not fetch data from the source");
  }

  return response.data;
};
