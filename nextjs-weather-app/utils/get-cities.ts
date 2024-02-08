import { CityIdArrayType } from "@/types/weather";
import cityID from "../data/cities.json";

export const getCities = (): CityIdArrayType => {
  const cityIDArr: CityIdArrayType = [];

  cityID.List.map((cityIDDetails) => {
    cityIDArr.push(Number(cityIDDetails.CityCode));
  });

  return cityIDArr;
};
