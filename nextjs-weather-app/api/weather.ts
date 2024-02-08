import { CityIdType } from "@/types/weather";
import createAxiosInstance from "@/utils/axiosInterceptor";

const axiosInstance = createAxiosInstance();

export const fetchWeatherData = async (CityId: CityIdType) => {
  const response = await axiosInstance.get(
    `${"http://api.openweathermap.org"}/data/2.5/group?id=${CityId}&units=metric&appid=${"2ff5a40ec7055129bdbd497ce586197d"}`
  );

  return response.data.list;
};
