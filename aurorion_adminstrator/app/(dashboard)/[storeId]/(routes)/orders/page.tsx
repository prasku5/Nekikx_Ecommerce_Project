import { formatter } from "@/lib/utils";
import { OrderItemDetailClient } from "./components/client";
import { OrderItemDetailColumn } from "./components/columns";
import { ProductsSoldColumn } from "./components/columns";
import { ProductSoldClient } from "./components/client";
import { PrismaClient } from "@prisma/client";

const OrdersItemDetailsPage = async () => {
  const prisma = new PrismaClient();

  const order_items_joined = await prisma.order_items_joined.findMany();

  // Format the price and order total fields.
  const formattedOrders: OrderItemDetailColumn[] = order_items_joined.map(
    (item) => ({
      id: item.id,
      confirmation_id: item.confirmation_id,
      name: item.name,
      price: formatter.format(item.price),
      size: item.size,
      color: item.color,
      category_name: item.category_name,
      order_time: item.order_time,
      total_items: item.total_items,
      order_total: formatter.format(item.order_total),
    })
  );

  const productSoldOrders = order_items_joined.reduce((result, item) => {
    const existingProduct = result.find((p) => p.name === item.name);
  
    if (existingProduct) {
      existingProduct.numberOfProductsSold += 1;
    } else {
      result.push({
        name: item.name,
        numberOfProductsSold: 1,
      });
    }
  
    return result;
  }, [] as ProductsSoldColumn[]);

  return (
    <div className="flex-col">
    <div className="flex-1 space-y-4 p-8 pt-6">
      <OrderItemDetailClient data={formattedOrders} />
    </div>
    <div className="flex-1 space-y-4 p-8 pt-6">
      <ProductSoldClient data={productSoldOrders} />
    </div>
  </div>
  );
};

export default OrdersItemDetailsPage;