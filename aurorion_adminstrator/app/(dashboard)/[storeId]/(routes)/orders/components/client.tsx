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

  // Fix the type of the orderTotal variable.
  const orderTotal: number = data.reduce((total, item) => total + item.price, 0);

  // Add a key prop to the OrderTotalComponent component.
  const OrderTotalComponent = ({ orderTotal }: { orderTotal: number }) => {
    // Assuming prices is a string like "$59.00$299.00$179.00$1,199.00$299.00$25.00$1,200.00"
    const cleanedPrices = orderTotal.replace(/\$/g, ""); // Remove $ symbols globally
    const numericalPrices = cleanedPrices.split("$").filter(Boolean).map(parseFloat); // Split and convert to numbers

    const total = numericalPrices.reduce((acc, price) => acc + price, 0);

    return (
      <div key={orderTotal}>
        <strong>Total Price:</strong> {total}
      </div>
    );
  };

  return (
    <>
      <Heading
        title={`Orders (${confirmationIdCount})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data}/>
      <div style={{ marginTop: "10px" }}>
        <OrderTotalComponent orderTotal={orderTotal} />
      </div>
    </>
  );
};
