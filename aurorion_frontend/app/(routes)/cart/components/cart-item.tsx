"use client";

import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartItemProps { // Declares an interface named CartItemProps.
  data: Product; // Declares a property named data of type Product.
} 

// use of interface is to define a type that can be used to enforce a contract 
// on the properties of an object.

// properties of an object are the variables that are attached to the object. 
// contract is a set of rules that the object must follow.


const CartItem:React.FC<CartItemProps> = ({ // Declares a functional component named CartItem.
  data    // Declares a parameter named data of type CartItemProps.
}) => { // The function returns a JSX element.
const cart = useCart(); // Declares a constant variable cart that uses the useCart hook.

const onRemove = () => { // This line declares a function named onRemove.
  cart.removeItem(data.id); // This line calls the removeItem method of the cart object and passes the id of the product as an argument.
}
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">{data.size.name}</p>
          </div>
          <Currency value={data.price}/>
        </div>
      </div>
    </li>
  );
}
 
export default CartItem;


// HTML Tags:
// <li>: Represents an HTML list item.
// <div>: Represents an HTML division or container.
// <p>: Represents an HTML paragraph.
// <Image>: Represents a custom React component or an external library component for displaying images.
// <IconButton>: Represents a custom React component or an external library component for displaying an icon button.

// Tailwind CSS Classes:
// className="flex py-6 border-b": Applies Tailwind CSS classes to the <li> element, styling it with flex layout, padding, and a bottom border.
// Various className attributes throughout the code apply Tailwind CSS classes to style the elements with margin, padding, grid layout, and text styling.

// React Components:
// <Image>: Represents an image component. The src, alt, and className attributes are props passed to this component.
// <IconButton>: Represents a button component with an icon. The onClick and icon attributes are props passed to this component.

// Dynamic Content:
// {data.name}, {data.images[0].url}, {data.color.name}, {data.size.name}, {data.price}: These curly braces {} are used to embed dynamic JavaScript expressions within JSX. They display content dynamically based on the data object.

// Inline Styles (Tailwind CSS Utility Classes):
// className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48": Applies styles for height, width, rounded corners, and overflow for the image container.
// className="absolute z-10 right-0 top-0": Positions the remove button in the top-right corner with a z-index.
// Overall, this code demonstrates the composition of a React component using JSX, incorporating HTML tags, React components, Tailwind CSS classes, and dynamic content rendering. The use of utility classes from Tailwind CSS helps to achieve responsive and consistent styling.