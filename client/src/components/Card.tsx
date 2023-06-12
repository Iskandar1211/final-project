import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineCheck, AiFillHeart } from "react-icons/ai";
import { FiBarChart2, FiCheckCircle } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { useAppDispatch } from "../store/hooks/hooks";
import { addToCart } from "../store/reducers/Cart";
import { addToFavorites } from "../store/reducers/Favorites";
import { IProduct } from "../types/Model";

interface Props {
  product: IProduct;
}

export const Card = ({ product }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddFavorites, setIsAddFavorites] = useState(false);

  const dispatch = useAppDispatch();

  const onAddProduct = () => {
    if (!isAddedToCart) {
      dispatch(addToCart(product));
      setIsAddedToCart(true);
      setIsClicked(true);
    }
  };
  const onAddFavorites = () => {
    if (!isAddFavorites) {
      dispatch(addToFavorites(product));
      setIsAddFavorites(true);
    }
  };
  const bgBuy = isClicked ? "bg-[#F05A00] text-white" : "";
  const buyStyles = [
    "border text-3xl cursor-pointer w-[60px] h-[56px] flex justify-center items-center border-[#F05A00] text-[#F05A00]",
    bgBuy,
  ].join(" ");
  return (
    <div className="bg-white flex gap-2 flex-col justify-between border px-2 py-2">
      <div className="flex justify-between ">
        <p>
          {product.isNew ? (
            <span className="bg-[#180A3E] text-white px-1 py-1">Новинка</span>
          ) : (
            ""
          )}
        </p>
        <div className="text-gray-400 flex gap-2 text-2xl cursor-pointer">
          <FiBarChart2 />
          <div>
            {isAddFavorites ? (
              <AiFillHeart className='text-[#FC573B]'/>
            ) : (
              <AiOutlineHeart onClick={onAddFavorites} />
            )}
          </div>
        </div>
      </div>
      <h1>{product.name}</h1>
      <div className="flex justify-center">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="flex gap-2">
        <span className="flex-1 bg-[#DEDBDB] cursor-pointer h-[3px] rounded"></span>
        <span className="flex-1 bg-[#DEDBDB] cursor-pointer h-[3px] rounded"></span>
        <span className="flex-1 bg-[#F05A00] cursor-pointer h-[3px] rounded"></span>
        <span className="flex-1 bg-[#DEDBDB] cursor-pointer h-[3px] rounded"></span>
      </div>
      <p className="text-start">{product.detailed}</p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <p className="font-bold">{product.price} ₽</p>
          <p className="text-[#DEDBDB] line-through">{product.price + 200}</p>
        </div>
        <div className=" w-fit flex gap-3 items-center">
          <p>
            {product.inStock ? (
              <span className="text-[#126935] flex gap-2 items-center justify-center">
                <AiOutlineCheck /> в наличии
              </span>
            ) : (
              <span className="text-red-500">нет в наличии</span>
            )}
          </p>
          <div
            onClick={onAddProduct}
            style={{ borderRadius: "5px 0px" }}
            className={buyStyles}
          >
            {!isClicked ? <SlBasket /> : <FiCheckCircle />}
          </div>
        </div>
      </div>
    </div>
  );
};
