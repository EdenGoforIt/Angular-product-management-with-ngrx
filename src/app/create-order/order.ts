export interface Order {
  id?: number;
  name?: string;
  address?: Address;
}

export interface Address {
  physicalAddress?: PhysicalAddress;
}

export interface PhysicalAddress {
  latitude?: number;
  longitude?: number;
}
