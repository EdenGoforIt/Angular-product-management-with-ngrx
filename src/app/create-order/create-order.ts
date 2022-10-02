export class CreateOrderDto {
  id?: number;
  description: string;
  quantity: number;
  productId: number;
  productCategoryId: number;
  hasConsignment: boolean;
  firstName: string;
  lastName: string;

  constructor(data?: Partial<CreateOrderDto>) {
    this.id = data?.id;
    this.description = data?.description;
    this.quantity = data?.quantity;
    this.productId = data?.productId;
    this.productCategoryId = data?.productCategoryId;
    this.hasConsignment = data?.hasConsignment ?? false;
    this.firstName = data?.firstName;
    this.lastName = data?.lastName;
  }
}
