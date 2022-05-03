export interface CreateProductDto {
  id?: number;
  description: string;
  quantity: number;
  productId: number;
  productCategoryId: number;
}
