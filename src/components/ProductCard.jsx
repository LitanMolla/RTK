import React from "react";
import { useDispatch } from "react-redux";
import { cart } from "../features/addToCart/addToCartSlice";

const ProductCard = ({ product }) => {
    const { _id, name, pricePerUnit, unit, image } = product;
    const dispatch = useDispatch()
    const handleCart = () => {
        dispatch(cart(product))
    }
    return (
        <div className="bg-white shadow-md overflow-hidden w-full hover:shadow-lg transition ">
            <img
                src={image}
                alt={name}
                className="w-full h-60 object-cover"
            />
            <div className="mt-3 px-3">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold truncate capitalize">{name}</h2>
                    <h4 className="text-base font-bold capitalize">৳ {pricePerUnit}/{unit}</h4>
                </div>
            </div>
            <button
                onClick={handleCart}
                className="w-full mt-3 py-2 bg-green-600 text-white hover:bg-green-700 cursor-pointer duration-300">Add to cart</button>
        </div>
    );
};

export default ProductCard;