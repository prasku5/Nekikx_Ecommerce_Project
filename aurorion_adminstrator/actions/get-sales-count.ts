import prismadb from "@/lib/prismadb";

export const getSalesCount = async (storeId: string) => {

  const salesCountByConfirmationId = await prismadb.order_items_joined.groupBy({
    by: ['confirmation_id'],
    _count: true,
  });

  return salesCountByConfirmationId;

}