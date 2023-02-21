import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [isConnect, setIsConnect] = useState(true);

  return (
    <div className="h-screen flex justify-center">
      <div className="container">
        <div className="header flex flex-wrap justify-between items-center">
          <img src="/images/logo.png" alt="logo" />
          <div className="hidden md:block flex justify-between mx-5">
            <button className="uppercase text-white font-500">leader board</button>
            <button className="ml-5 md:ml-10 uppercase text-white font-500">how to play</button>
          </div>
          <Button />
        </div>
        <div className="block md:hidden flex justify-around mx-5 my-5">
          <button className="uppercase text-white font-500">leader board</button>
          <button className="ml-5 md:ml-10 uppercase text-white font-500">how to play</button>
        </div>

        {!isConnect &&
          <div className="mb-16">
            <div className="flex justify-center text-center my-20">
              <h1 className="text-[56px] md:text-[76px] text-white max-w-[600px] font-bold">Welcome to Website Name!</h1>
            </div>
            <div className="flex flex-wrap justify-center ml-[125px]">
              <div className="relative">
                <img src="/images/cardbg.png" className="min-w-[499px]" alt="" />
                <div className="absolute top-0 p-12 w-[390px]">
                  <h2 className="text-[36px] font-bold ml-2">Hedera Wallets</h2>
                  <div className="text-xl ml-2">connect to your wallet</div>
                  <div className="flex justify-center items-center my-5">
                    <img src="/images/coin1.png" alt="" />
                  </div>
                  <div className="flex justify-center">
                    <Button />
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="/images/cardbg.png" className="min-w-[499px]" alt="" />
                <div className="absolute top-0 p-12 w-[390px]">
                  <h2 className="text-[36px] font-bold ml-2">Hedera Wallets</h2>
                  <div className="text-xl ml-2">connect to your wallet</div>
                  <div className="flex justify-center items-center my-5">
                    <img src="/images/coin2.png" alt="" />
                  </div>
                  <div className="flex justify-center">
                    <Button />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        {isConnect &&
          <div className="mb-16">
            <div className="flex justify-center text-center my-20">
              <h1 className="text-[56px] md:text-[76px] text-white max-w-[600px] font-bold">Mystery Box</h1>
            </div>
            <div className="flex justify-center">
              <div className="md:flex">
                <div className="relative w-[375px] pb-10 mx-6">
                  <select className="w-[375px] p-2.5 text-gray-100 bg-transparent border border-[#009F9D] rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                    <option className="bg-[#009F9D]">game with 2 boxes</option>
                    <option className="bg-[#009F9D]">game with 4 boxes</option>
                    <option className="bg-[#009F9D]">game with 6 boxes</option>
                    <option className="bg-[#009F9D]">game with 8 boxes</option>
                  </select>
                </div>
                <div className="relative w-[375px] pb-10 mx-6">
                  <select className="w-[375px] p-2.5 text-gray-100 bg-transparent border border-[#009F9D] rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                    <option className="bg-[#009F9D]">game with 2 boxes</option>
                    <option className="bg-[#009F9D]">game with 4 boxes</option>
                    <option className="bg-[#009F9D]">game with 6 boxes</option>
                    <option className="bg-[#009F9D]">game with 8 boxes</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center ">
              <div className="relative mx-6">
                <div className="flex justify-center min-w-[366px]">
                  <img src="/images/box.png" className="mt-[66px] transform transition duration-500 hover:scale-110" alt="" />
                </div>
              </div>
              <div className="relative mx-6">
                <div className="flex justify-center min-w-[366px]">
                  <img src="/images/box_open.png" className=" transform transition duration-500 hover:scale-110" alt="" />
                </div>
              </div>
            </div>
          </div>
        }

        <div className="footer flex flex-wrap justify-center md:justify-between items-center pb-10">
          <div className="mx-0">
            <img src="/images/logo.png" alt="logo" />
            <div className="max-w-[300px] text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
