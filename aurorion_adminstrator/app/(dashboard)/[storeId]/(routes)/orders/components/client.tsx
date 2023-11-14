import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrderItemDetailColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Decimal } from "@prisma/client/runtime/library";

interface OrderClientProps {
  data: OrderItemDetailColumn[];
}

export const OrderItemDetailClient: React.FC<OrderClientProps> = ({ data }) => {
  const uniqueConfirmationIds = new Set(data.map((item) => item.confirmation_id));
  const confirmationIdCount = uniqueConfirmationIds.size;
    
  return (
    <>
      <Heading
        title={`Orders (${confirmationIdCount})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};