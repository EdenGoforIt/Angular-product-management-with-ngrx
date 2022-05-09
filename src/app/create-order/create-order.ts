export interface CreateOrderDto {
  id?: number;
  description: string;
  quantity: number;
  productId: number;
  productCategoryId: number;
}
