export interface ProductCategory {
  id: number | null;
  name: string;
  description: string;
}

export const initialProductCategory: ProductCategory = {
  id: 0,
  name: '',
  description: '',
};
