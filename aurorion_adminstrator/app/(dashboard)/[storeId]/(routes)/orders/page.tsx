// import { format } from "date-fns";

// import prismadb from "@/lib/prismadb";
// import { formatter } from "@/lib/utils";
// import { OrderClient } from "./components/client";
// import { OrderColumn } from "./components/columns";

// const OrdersPage = async ({ params }: { params: { storeId: string } }) => {
//   const orders = await prismadb.order.findMany({
//     where: {
//       storeId: params.storeId,
//     },
//     include: {
//       orderItems: {
//         include: {
//           product: true,
//         },
//       },
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   const formattedOrders: OrderColumn[] = orders.map((item) => ({
//     id: item.id,
//     phone: item.phone,
//     address: item.address,
//     products: item.orderItems
//       .map((orderIteam) => orderIteam.product.name)
//       .join(", "),
//     totalPrice: formatter.format(
//       item.orderItems.reduce((total, item) => {
//         return total + Number(item.product.price);
//       }, 0)
//     ),
//     isPaid: item.isPaid,
//     createdAt: format(item.createdAt, "MMMM do, yyyy"),
//   }));
//   return (
//     <div className="flex col">
//       <div className="flex-1 space-y-4 p-8 pt-6">
//         <OrderClient data={formattedOrders} />
//       </div>
//     </div>
//   );
// };

// export default OrdersPage;

import { OrderClient } from './components/client';
import { OrderColumn } from './components/columns';
import { PrismaClient } from '@prisma/client';

// Create a single instance of the Prisma client
const prismadb = new PrismaClient();

const YourComponent = async () => {
  try {
    // Fetch data from the order_details table
    const ordersDetailsTable = await prismadb.order_details.findMany({
      include: {
        order_items: true,
      },
      orderBy: {
        order_time: 'desc',
      },
    });

    // Format the fetched data
    const formattedOrders: OrderColumn[] = ordersDetailsTable.map((item) => ({
      id: item.confirmation_id,
      confirmationId: item.confirmation_id,
      order_time: item.order_time,
      total_items: item.total_items,
      order_total: item.order_total,
    }));

    return (
      <div className="flex col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <OrderClient data={formattedOrders} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error or display an error message
    return <div>Error fetching data</div>;
  }
};

export default YourComponent;
