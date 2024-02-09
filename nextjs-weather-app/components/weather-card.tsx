import { weatherColorMap } from "@/constants/color-map";
import { Weather } from "@/types/weather";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface WeatherCardProps {
  data: Weather;
  single?: boolean;
  className?: string;
}

const WeatherCard: FC<WeatherCardProps> = ({
  data,
  className,
  single,
}: WeatherCardProps) => {
  const [bgColor, setBgColor] = useState("#388ee7");

  useEffect(() => {
    const color = weatherColorMap[data.weather[0].description];
    setBgColor(color);
  }, []);

  const dateTime = new Date(data.dt);
  const formattedTime = dateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const formattedDate = dateTime.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const formattedDateTime = `${formattedTime}, ${formattedDate}`;

  return (
    <Link
      href={`/${data.id}`}
      className={`flex flex-col text-white ${className} ${
        single && "cursor-default"
      }`}
    >
      <div
        className={`relative rounded-t-lg bg-cover bg-[url("/images/CloudBack.png")] p-5 h-[60%] flex justify-around items-center `}
        style={{
          backgroundColor: bgColor,
        }}
      >
        {single ? (
          <div className="flex flex-col justify-center text-center space-y-5 ">
            <Link href="/">
              <div className="absolute top-0 left-0 p-4">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="text-white text-lg"
                />
              </div>
            </Link>
            <div className="flex flex-col justify-center text-center space-y-5">
              <div>
                <h2 className="text-xl text-white font-semibold">
                  {data.name}, {data.sys.country}
                </h2>
                <p className="text-[12px]">
                  {/* {new Date(data.dt).toLocaleString()} */}
                  {formattedDateTime}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center space-x-5">
              <div>
                <h4>{data.weather[0].description}</h4>
              </div>

              <div className="h-24 w-0.5 bg-gray-200/20"></div>

              <div className="space-y-5">
                <h1 className="text-5xl">{Math.floor(data.main.temp)}°c</h1>
                <div>
                  <p className="text-[12px]">
                    Temp Min: {data.main.temp_min}°C
                  </p>
                  <p className="text-[12px]">
                    Temp Max: {data.main.temp_max}°C
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-center text-center space-y-5">
              <div>
                <h2 className="text-xl text-white font-semibold">
                  {data.name}, {data.sys.country}
                </h2>
                <p className="text-[12px]">
                  {/* {new Date(data.dt).toLocaleString()} */}
                  {formattedDateTime}
                </p>
              </div>
              <div>
                <h4>{data.weather[0].description}</h4>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-5">
              <h1 className="text-5xl">{Math.floor(data.main.temp)}°c</h1>
              <div>
                <p className="text-[12px]">Temp Min: {data.main.temp_min}°C</p>
                <p className="text-[12px]">Temp Max: {data.main.temp_max}°C</p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="rounded-b-lg bg-[#383b47] h-[40%] flex text-[11px] justify-around p-5 items-center">
        <div>
          <p>
            <strong>Pressure : </strong>
            {data.main.pressure}Pa
          </p>
          <p>
            <strong>Humudity : </strong>
            {data.main.humidity}%
          </p>
          <p>Visibility :{data.visibility}km</p>
        </div>
        <div className="h-24 w-0.5 bg-gray-600"></div>
        <div>
          <strong>
            {data.wind.speed}m/s {data.wind.deg} Degree
          </strong>
        </div>
        <div className="h-24 w-0.5 bg-gray-600"></div>
        <div>
          <p>
            <strong>Sunrise: </strong>
            {new Date(data.sys.sunrise).toLocaleTimeString()}
          </p>
          <p>
            <strong>Sunset: </strong>
            {new Date(data.sys.sunset).toLocaleTimeString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default WeatherCard;
