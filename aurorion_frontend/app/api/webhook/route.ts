import Stripe from "stripe";
import  { headers } from "next/headers";
import { NextResponse } from "next/server";
import {stripe} from "@/components/order-details/stripe";
import prismadb from "@/components/order-details/prismadb";
import orderDetailsInsertSQL from "../../(routes)/cart/components/summary";
import confirmationId from "../../(routes)/cart/components/summary";
import orderDetails from "../../(routes)/cart/components/summary";
import orderItems from "../../(routes)/cart/components/summary";

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
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
  }

  const session = event.data.object as Stripe.Checkout.Session;
  console.log("Order Session Details in json:", JSON.stringify(session));

  if (event.type === "checkout.session.completed") {

    console.log("Order session is created and sql is " + orderDetailsInsertSQL);

    const orderDetailsInsert = await prismadb.order_details.create({
      
      data: {
        confirmation_id: confirmationId,
        order_time: orderDetails.orderTime,
        total_items: orderDetails.totalItems,
        order_total: orderDetails.orderTotal,
      },
    });
    console.log("Order Details Insert:", orderDetailsInsert);
  }
  return new NextResponse(null, { status: 200 })
}