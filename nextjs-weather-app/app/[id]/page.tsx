import CityWeather from "@/components/city-weather";

export default function Home({ params }: { params: { id: string } }) {
  return (
    <div className="flex justify-center mx-auto mb-28">
      <CityWeather id={params.id} />
    </div>
  );
}
