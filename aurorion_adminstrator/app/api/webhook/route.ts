// import Stripe from "stripe";
// import  { headers } from "next/headers";
// import { NextResponse } from "next/server";

// import { stripe } from "@/lib/stripe";
// import prismadb from "@/lib/prismadb";

// export async function POST(req: Request) {
//   const body = await req.text();
//   const signature = headers().get("Stripe-Signature") as string;

//   let event: Stripe.Event; 

//   try {
//     event = stripe.webhooks.constructEvent(
//       body,
//       signature,
//       process.env.STRIPE_WEBHOOK_SECRET!
//     )
//   } catch (error: any) {
//     return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
//   }

//   const session = event.data.object as Stripe.Checkout.Session;
//   console.log("Order Session Details in json:", JSON.stringify(session));

//   const address = session?.customer_details?.address;

//   const addressComponents = [
//     address?.line1,
//     address?.line2,
//     address?.city,
//     address?.state,
//     address?.postal_code,
//     address?.country
//   ]

//   const addressString = addressComponents.filter((c) => c !== null).join(', ');

//   if (event.type === "checkout.session.completed") {
//     const order = await prismadb.order.update({
//       where: {
//         id: session?.metadata?.orderId,
//       },
//       data: {
//         isPaid: true,
//         address: addressString,
//         phone: session?.customer_details?.phone || ''
//       }, 
//       include: {
//         orderItems: true
//       }
//     })

//     const productIds = order.orderItems.map((orderItem) => orderItem.productId)

//     await prismadb.product.updateMany({
//       where: {
//         id: {
//           in: [...productIds]
//         }
//       }, 
//       data: {
//         isArchived: true
//       }
//     })
//   }

//   return new NextResponse(null, { status: 200 })
// }


import Stripe from "stripe";
import  { headers } from "next/headers";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import prismadb from "@/lib/prismadb";
import orderDetailsInsertSQL from "../../../../aurorion_frontend/app/(routes)/cart/components/summary";
import confirmationId from "../../../../aurorion_frontend/app/(routes)/cart/components/summary";
import orderDetails from "../../../../aurorion_frontend/app/(routes)/cart/components/summary";
import orderItems from "../../../../aurorion_frontend/app/(routes)/cart/components/summary";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;  

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error: any) {
    console.log("Webhook Error inside the try block");
    // console.log(window.localStorage.getItem('api-webhook-logs'));
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
  }

  const session = event.data.object as Stripe.Checkout.Session;
  console.log("Order Session Details in json:", JSON.stringify(session));

  if (event.type === "checkout.session.completed") {

    // console.log("Order session is created and sql is " + orderDetailsInsertSQL);

    // const orderDetailsInsert = await prismadb.order_details.create({
      
    //   data: {
    //     confirmation_id: confirmationId,
    //     order_time: orderDetails.orderTime,
    //     total_items: orderDetails.totalItems,
    //     order_total: orderDetails.orderTotal,
    //   },
    // });
    // console.log("Order Details Insert:", orderDetailsInsert);

    // In your React component
    const executeQuery = async (query) => {
      try {
        const response = await fetch('http://localhost:8080/api/execute-query', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(query),
        });

        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error('Error executing query:', error);
      }
};

  

  }

  return new NextResponse(null, { status: 200 })
}