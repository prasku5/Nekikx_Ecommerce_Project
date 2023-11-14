"use client";

import { Decimal } from "@prisma/client/runtime/library";
import { ColumnDef } from "@tanstack/react-table";

export type OrderItemDetailColumn = {
  id: number;
  confirmation_id: string;
  name: string;
  price: Decimal;
  size: string;
  color: string;
  category_name: string;
  order_time: Date;
  total_items: number;
  order_total: number;
};

export const columns: ColumnDef<OrderItemDetailColumn>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "confirmation_id",
    header: "Confirmation ID",
  },
  {
    accessorKey: "name",
    header: "Product Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "size",
    header: "Size",
  },
  {
    accessorKey: "color",
    header: "Color",
  },
  {
    accessorKey: "category_name",
    header: "Category",
  },
  {
    accessorKey: "order_time",
    header: "Order Time",
  },
  {
    accessorKey: "total_items",
    header: "Total Overall Ordered Items",
  },
  {
    accessorKey: "order_total",
    header: "Order Total",
  },


];
