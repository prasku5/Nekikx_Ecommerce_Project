// Import necessary modules and components
"use client"; // This might be a custom import or configuration, not standard in React or Next.js
import axios from "axios"; // Import the Axios library for making HTTP requests
import { useEffect, useState } from "react"; // Import the 'useEffect' hook for side effects
import { useSearchParams } from "next/navigation"; // Import 'useSearchParams' from 'next/navigation' for working with query parameters
import { toast } from "react-hot-toast"; // Import 'toast' for displaying notifications
import Button from "@/components/ui/button"; // Import a custom 'Button' component
import Currency from "@/components/ui/currency"; // Import a custom 'Currency' component
import useCart from "@/hooks/use-cart"; // Import a custom 'useCart' hook for managing the shopping cart state

// Function to generate a random alphanumeric order confirmation ID
function generateOrderConfirmationId(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

// Define the 'Summary' component
const Summary = () => {
  const [orderItemsPosted, setOrderItemsPosted] = useState(false); // New state variable
  const [orderDetailsPosted, setOrderDetailsPosted] = useState(false); // New state variable
  const [paymentCompleted, setPaymentCompleted] = useState(false); // Add state for payment completion
  const removeAll = useCart((state) => state.removeAll);  // Get a function to remove all items from the cart using the 'useCart' hook
  const [confirmationIdSaved, setConfirmationId] = useState(""); // New state variable
  const searchParams = useSearchParams(); // Get query parameters from the URL
  const items = useCart((state) => state.items); // Get items from the shopping cart using the 'useCart' hook

  const [orderDetails, setOrderDetails] = useState<{
    items: {
      name: string;
      price: number;
      size: string;
      color: string;
      CategoryName: string;
    }[];
    totalItems: number;
    orderTotal: number;
    orderTime: string;
    confirmationId: string; // Add confirmationId property
  } | null>({
    // Initialize with confirmationId as an empty string
    items: [],
    totalItems: 0,
    orderTotal: 0,
    orderTime: "",
    confirmationId: "", // Add confirmationId
  });

  // // State variables for customer address and email
  // const [customerAddress, setCustomerAddress] = useState('Customer Address');
  // const [customerEmail, setCustomerEmail] = useState('customer@example.com');

  // Calculate the total price of the items in the cart
  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);



  useEffect(() => {
    if (searchParams?.get("success")) {
      toast.success("Payment completed.");

      const confirmationId = generateOrderConfirmationId(10); // Generate a 10-character alphanumeric ID
      
      
      console.log("confirmationId in first useEffect is ", confirmationId);
      

      // Define order details
      const orderItems = items.map((item) => ({
        name: item.name,
        price: Number(item.price),
        size: item.size?.name || "N/A",
        color: item.color?.name || "N/A",
        CategoryName: item.category?.name || "N/A",
      }));

      console.log("order items detailed log is ", orderItems);

      const orderItemsPayload = orderItems.map((item) => ({
        confirmationId: confirmationId,
        name: item.name,
        price: item.price,
        size: item.size,
        color: item.color,
        categoryName: item.CategoryName,
      }));

      console.log("order items payload is ", orderItemsPayload);
      console.log("type of order items payload is ", typeof orderItemsPayload);

      if (orderItems.length > 0) {
        console.log("order items post request is sent");
        // send order items to backend
        // Send a POST request to your Spring Boot endpoint
        fetch("http://localhost:8080/order-items/", {
          method: "POST",
          // mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
            // "Allow-Cross-Origin-Origin": "*", // Allow CORS
          },
          body: JSON.stringify(orderItemsPayload),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            setOrderItemsPosted(true); // Set the state variable on success
            return response.json(); // You can remove this line if the server doesn't return JSON
          })
          .then((data) => {
            // Handle success, if needed
            console.log("Success:", data);
          })
          .catch((error) => {
            // Handle errors
            console.error("Error:", error);
          });
      } else {
        console.log("No items in the order, not sending POST request.");
      }

      const orderDetails = {
        items: orderItems,
        totalItems: items.length,
        orderTotal: totalPrice,
        orderTime: new Date().toISOString(),
        confirmationId, // Add confirmationId to order details
      };

      setOrderDetails(orderDetails); // Set order details state

      // send order details to backend
      if (orderItems.length > 0) {
        console.log("order details post request is sent");
        const orderDetailsSql = {
          confirmationId: confirmationId,
          orderTime: orderDetails.orderTime,
          totalItems: orderDetails.totalItems,
          orderTotal: orderDetails.orderTotal,
        };

        console.log("order details sql to be sent to backen", orderDetailsSql);

        // Send a POST request to your Spring Boot endpoint
        fetch("http://localhost:8080/order-details/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Allow-Cross-Origin-Origin": "*", // Allow CORS
          },
          body: JSON.stringify(orderDetailsSql),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            setOrderDetailsPosted(true); // Set the state variable on success
            return response.json(); // You can remove this line if the server doesn't return JSON
          })
          .then((data) => {
            // Handle success, if needed
            console.log("Success:", data);
          })
          .catch((error) => {
            // Handle errors
            console.error("Error:", error);
          });
      } else {
        console.log("No items in the order, not sending POST request.");
      }

      setPaymentCompleted(true); // Set payment completion state
      setOrderDetails(orderDetails);
      setConfirmationId(confirmationId); // Set the confirmationId state variable
      console.log("confirmationIdSaved in first useEffect is ", confirmationIdSaved);
      removeAll(); // Remove all items from the cart
    }

    if (searchParams?.get("canceled")) {
      toast.error("Something went wrong.");
    }
    
  }, [searchParams, removeAll]);

  // New useEffect to monitor orderItemsPosted and orderDetailsPosted states
  useEffect(() => {
    if (orderItemsPosted && orderDetailsPosted) {
      console.log("order items and details post request is sent");
      console.log("confirmationIdSaved in second useEffect is ", confirmationIdSaved);
      // Both orderItemsPosted and orderDetailsPosted are true
      // Perform the POST request to 'http://localhost:8080/execute-sql'
      const executeSqlEndpoint = "http://localhost:8080/execute-sql";

      fetch(executeSqlEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ confirmationIdSaved }), // Include any necessary data
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json(); // You can remove this line if the server doesn't return JSON
        })
        .then((data) => {
          // Handle success, if needed
          console.log("Success:", data);
        })
        .catch((error) => {
          // Handle errors
          console.error("Error:", error);
        });
    }
  }, [orderItemsPosted, orderDetailsPosted, confirmationIdSaved]);

  // New useEffect to monitor paymentCompleted state
  useEffect(() => {
    console.log("order completion status", paymentCompleted);
  }, [paymentCompleted]);

  // Function to initiate the checkout process
  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.location = response.data.url; // Redirect to the checkout URL
  };

  // Render the 'Summary' component
  return (
    <div className="mt-18 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-0">
      <h1 className="text-xl font-extrabold text-gray-900 mb-10">
        Order Summary
      </h1>
      {paymentCompleted ? (
        <div>
          {/* Display order details with larger font and Calibri font-family */}
          <h3 className="text-xl font-medium text-gray-900 font-calibri mb-4">
            Order Items List
          </h3>
          <ul className="text-xl font-calibri">
            {orderDetails?.items.map((item, index) => (
              <li key={index}>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 mr-2"
                  />
                )}
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-xl font-medium text-gray-900 font-calibri mb-4">
              Order Confirmation ID
            </div>
            {orderDetails?.confirmationId}
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-xl font-medium text-gray-900 font-calibri mb-4">
              Order total
            </div>
            <Currency value={orderDetails?.orderTotal || 0} />
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-xl font-medium text-gray-900 font-calibri mb-4">
              Order time
            </div>
            {orderDetails?.orderTime}
          </div>
        </div>
      ) : (
        // Display the total price and Checkout button
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-xl font-medium text-gray-900 font-calibri mb-4">
              Order total
            </div>
            <Currency value={totalPrice} />
          </div>
          <Button
            disabled={items.length === 0}
            onClick={onCheckout}
            className="w-full mt-6"
          >
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

// Export the 'Summary' component as the default export of this module
export default Summary;
