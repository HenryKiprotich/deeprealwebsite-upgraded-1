import { NextPage } from "next";
import Image from "next/image";

const AI_HARDWARE_DEVICES = [
  {
    name: "NVIDIA Jetson Nano",
    imageUrl: "/nvidia-jetson-nano.png",
    link: "https://developer.nvidia.com/embedded/jetson-nano",
  },
  {
    name: "Google Coral Dev Board",
    imageUrl: "/google-coral-dev-board.png",
    link: "https://coral.ai/products/dev-board/",
  },
  {
    name: "Arduino Portenta H7",
    imageUrl: "/arduino-portenta-h7.png",
    link: "https://store.arduino.cc/products/portenta-h7?srsltid=AfmBOorPk_BstcQz5YTyAFTULMQ0x7tJJuYHDbWXhXU52kyCKICpldgz",
  },
  {
    name: "Raspberry Pi 4 Model B",
    imageUrl: "/Raspberry-Pi-4-Model-B.png",
    link: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/",
  },
] as const;

const AIHardwarePage: NextPage = () => {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">AI Hardware Devices</h1>
      <p className="text-lg mb-4 text-gray-300">
        Explore some of the best AI hardware devices, including Arduinos and Raspberry Pis.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {AI_HARDWARE_DEVICES.map(({ name, imageUrl, link }) => (
          <div key={name} className="bg-gray-800 rounded-lg shadow-lg p-4 text-center">
            <Image
              src={imageUrl}
              alt={name}
              width={300}
              height={200}
              className="rounded-lg object-cover mx-auto"
            />
            <h2 className="text-xl font-semibold mt-4">{name}</h2>
            <a
              href={link}
              className="mt-2 inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AIHardwarePage;
