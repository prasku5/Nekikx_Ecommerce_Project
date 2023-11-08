"use client";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
import ReactStars from 'react-stars';

interface InfoProps {
  data: Product;
  averageRating: number;
}

const Info: React.FC<InfoProps> = ({
  data, averageRating
}) => {
  const cart = useCart();

  const onAddToCart = () => {
  cart.addItem(data);
  }
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
         <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">Size:</h3>
        <div>{data?.size?.name}</div>
      </div>
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">Color:</h3>
        <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }}/>
      </div>
      <div className="rating-container">
        <div className="rating-title"> <strong>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</strong></div>
        {/* console.log("average rating is", {averageRating}); */}
        <ReactStars count={5} value={averageRating} size={24} activeColor={'#ffd700'} />
      </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add to Cart
          <ShoppingCart />
        </Button>

      </div>
     
    </div>
  );
}
 
export default Info;