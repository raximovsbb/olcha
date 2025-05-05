import React from "react";
import Countdown from "../../Components/CountDown/CountDown";
import { CarouselData } from "../../data/carouselData";

const Cards = () => {
  return (
    <div className="hidden lg:flex border-2 rounded-xl border-olcha w-[290px] h-[380px] py-2 px-3">
      <div>
        <div className="flex justify-between">
          <p className="text-lg font-bold dark:text-olcha">Kun mahsuloti</p>
          <Countdown />
        </div>
        <div className="flex items-center flex-col">
          <img
            src="https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-01-28/AzXTwqSDzGNy5NWjCXtJVCcFegiNQSbI1SsL44EMK0ppoyCYW4QJiRoZQlPp.jpg"
            alt=""
            className="w-[180px]"
          />
        </div>
        <p className="">Dubay shokoladi Fix Dessert Chocolatier (Original)</p>
        <div className="py-5">
          <div className="flex items-center gap-2">
            <p className="font-bold text-olcha">399000 so'm</p>
            <p className="line-through text-sm  right-28  text-blue-gray-200 dark:text-white">
              520000 so'm
            </p>
          </div>
          <p className="bg-yellow-700 w-32 mt-2 px-2 text-xs rounded-md p-1 dark:bg-white dark:text-olcha">
            47000 so'm x 12 oy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
