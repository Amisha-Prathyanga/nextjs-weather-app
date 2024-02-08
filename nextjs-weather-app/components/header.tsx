import Image from "next/image";

const Header = () => {
  return (
    <div className="flex p-8 space-x-5 justify-center mx-auto items-center">
      <div>
        <Image
          alt="header"
          className="logo"
          src={"/images/Logo.png"}
          width={45}
          height={45}
        />
      </div>
      <h1 className="text-white text-xl">Weather App</h1>
    </div>
  );
};

export default Header;
