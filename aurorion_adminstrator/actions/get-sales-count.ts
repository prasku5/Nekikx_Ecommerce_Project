import prismadb from "@/lib/prismadb";

export const getSalesCount = async (storeId: string) => {

  const salesCountByConfirmationId = await prismadb.order_items_joined.groupBy({
    by: ['confirmation_id'],
    _count: true,
  });

  // Sum the _count values from each group
  const totalCount = salesCountByConfirmationId.reduce((sum, group) => sum + group._count, 0);

return totalCount;

}