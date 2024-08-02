//app/carrito/interfaces/index.ts
import { IProduct } from "@/interfaces/product";

export interface IPriceBreakdownProps {
	items: IProduct[];
	taxRate: number;
	shippingCost: number;
	discount: number;
}

export interface ICalculationResult {
	subtotal: number;
	tax: number;
	shippingCost: number;
	discount: number;
	total: number;
}
