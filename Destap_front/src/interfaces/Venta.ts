export interface IVenta{
    _id:              string;
    user:             string;
    event:            string;
    isValidated:      boolean;
    paymentMethod:    string;
    checkoutResponse: CheckoutResponse;
    qr:               string;
    id:               string;
    createdAt:        Date;
    updatedAt:        Date;
}


export interface CheckoutResponse {
    totalCost:   number;
    serviceCost: number;
    finalTotal:  number;
    details:     DetailVenta[];
}

export interface DetailVenta {
    productId: string;
    quantity:  number;
    price:     number;
    total:     number;
}