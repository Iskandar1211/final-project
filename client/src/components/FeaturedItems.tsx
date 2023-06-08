import React, { useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { IProduct } from "../types/Model";
import { Card } from "./Card";

export const FeaturedItems = () => {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: crypto.randomUUID(),
      name: "Emal Big",
      img: "/Painting-supplies/Emal-116-big.png",
      price: 500,
      inStock: true,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/Painting-supplies/Emal-116.png",
      price: 650,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
    },
    {
      id: crypto.randomUUID(),
      name: "Emal Big",
      img: "/electric/nozzle.png",
      price: 500,
      inStock: true,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
    },
    {
      id: crypto.randomUUID(),
      name: "Emal",
      img: "/electric/screwdriver.png",
      price: 650,
      inStock: false,
      detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      isNew: true,
    },
  ]);

  return (
    <div className="bg-[#212526]">
      <div className="bg-black py-3 px-2 lg:px-32 md:px-7 max-sm:px-4 sm:px-6">
        <ul className="flex gap-12">
          <li className="text-white">Новинки</li>
          <li className="text-[#212526]">Акции</li>
          <li className="text-[#212526]">Хиты продаж</li>
        </ul>
      </div>
      <div className="bg-[#212526] py-5">
        <div className="lg:px-32 md:px-7 max-sm:px-4 sm:px-6 ">
          <div>
            <div className="flex items-center ">
              <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer bg-white rounded-full">
                <MdOutlineArrowBackIos />
              </div>
              <div className="flex gap-2 justify-between overflow-hidden px-4 w-[100%]">
                {products.map((product) => (
                  <div className="w-[310px] h-[380px]">
                    <Card key={product.id} product={product} />
                  </div>
                ))}
              </div>
              <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer bg-white rounded-full">
                <MdOutlineArrowForwardIos />
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-4 justify-center ">
            <span className="w-[10px] h-[10px] bg-white rounded-full"></span>
            <span className="w-[10px] h-[10px] bg-white rounded-full"></span>
            <span className="w-[10px] h-[10px] bg-white rounded-full"></span>
            <span className="w-[10px] h-[10px] bg-white rounded-full"></span>
            <span className="w-[10px] h-[10px] bg-white rounded-full"></span>
            <span className="w-[10px] h-[10px] bg-white rounded-full"></span>
            <span className="w-[10px] h-[10px] bg-white rounded-full"></span>
            <span className="w-[10px] h-[10px] bg-white rounded-full"></span>
            <span className="w-[10px] h-[10px] bg-white rounded-full"></span>
            <span className="w-[10px] h-[10px] bg-white rounded-full"></span>
            <span className="w-[10px] h-[10px] bg-white rounded-full"></span>
            <span className="w-[10px] h-[10px] bg-white rounded-full"></span>
            <span className="w-[10px] h-[10px] bg-white rounded-full"></span>
            <span className="w-[10px] h-[10px] bg-white rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};