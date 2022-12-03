export interface Order {
  id?: number;
  name?: string;
  address?: Address;
}

export class Address {
  physicalAddress?: PhysicalAddress;
}

export class PhysicalAddress {
  latitude?: number;
  longitude?: number;
}
