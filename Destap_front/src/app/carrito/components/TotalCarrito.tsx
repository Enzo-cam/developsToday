//app carrito components TotalCarrito.tsx
interface Item {
  price: number;
  quantity: number;
}

const PriceBreakdown = ({ items, taxRate, shippingCost, discount }: { items: Item[], taxRate: number, shippingCost: number, discount: number }) => {
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * taxRate;
  const totalDiscount = discount || 0;
  const total = subtotal + tax + shippingCost - totalDiscount;

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      {taxRate > 0 && (
        <div className="flex justify-between">
          <span>Tax:</span>
          <span>${tax.toFixed(2)}</span>
        </div>
      )}
      {shippingCost > 0 && (
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span>${shippingCost.toFixed(2)}</span>
        </div>
      )}
      {totalDiscount > 0 && (
        <div className="flex justify-between text-green-600">
          <span>Discount:</span>
          <span>-${totalDiscount.toFixed(2)}</span>
        </div>
      )}
      <div className="flex justify-between font-bold">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};
