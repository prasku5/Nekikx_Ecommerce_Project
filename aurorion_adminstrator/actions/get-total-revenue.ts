import prismadb from "@/lib/prismadb";
import { Decimal } from "@prisma/client/runtime/library";

export const getTotalRevenue = async (storeId: string) => {
  const groupedRevenue = await prismadb.order_items_joined.groupBy({
    by: ['confirmation_id'],
    _min: {
      // Assuming there's an appropriate unique identifier column like 'id'
      confirmation_id: true,
      order_total: true,
    },
  });

  console.log("grouped revenue is", groupedRevenue);

  // Get the sum of order_total for each confirmation_id
  const totalByConfirmationId = groupedRevenue.map((group) => ({
    confirmation_id: group.confirmation_id,
    total_order: group._min.order_total || 0, // Ensure it defaults to 0 if order_total is undefined
  }));

  const decimalToNumber = (value: Decimal): number => {
    return Number(value.toString());
  };
  
  // Sum up the total_order for all confirmation_ids
  const totalRevenue = totalByConfirmationId.reduce(
    (accumulator, currentGroup) => accumulator + decimalToNumber(currentGroup.total_order),
    0 as number // Specify the initial value type as number
  );

  return totalRevenue;
};
