export interface shoppingInfo {
  address: String;
  city: String;
  phoneNo: String;
  postalCode: Number;
  country: String;
}

export interface PaymentInfo {
  user?: string;
  paidAt?: Date;
  status: string;
  delivererAt: Date;
}
