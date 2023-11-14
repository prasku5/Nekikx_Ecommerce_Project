import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrderItemDetailColumn, ProductsSoldColumn, columns, products_sold_columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Decimal } from "@prisma/client/runtime/library";

interface OrderClientProps {
  data: OrderItemDetailColumn[];
}

interface ProductSoldProps {
  data: ProductsSoldColumn[];
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


export const ProductSoldClient: React.FC<ProductSoldProps> = ({ data }) => {

  const products_sold_count = data.length;

  return (
    <>
      <Heading
        title={`Products Types Sold (${products_sold_count})`}
        description="products sold stats for your store"
      />
      <Separator />
      <DataTable searchKey="name" columns={products_sold_columns} data={data} />
    </>
  );
};