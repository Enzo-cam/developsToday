import { useMemo } from 'react';

import { IProduct } from '@/interfaces/product';

// Define un tipo para los resultados del hook para un mejor manejo de tipos.
type UseCartCalculationsResult = {
  subtotal: number;
  serviceCost: number;
  total: number;
  totalItems: number;
};

export const useCalculate = (items: IProduct[]): UseCartCalculationsResult => {
  // Calcula todos los valores necesarios y memoízalos para evitar recálculos innecesarios
  const calculations = useMemo(() => {
    const subtotal = items.reduce((total, item) => total + (item.quantity ?? 0) * item.price, 0);
    const serviceCost = subtotal * 0.07; // 7% de costo de servicio
    const total = subtotal + serviceCost;
    const totalItems = items.reduce((total, item) => total + (item.quantity ?? 0), 0);
    
    return { subtotal, serviceCost, total, totalItems };
  }, [items]); // Dependencia: items. El cálculo se re-ejecutará si los items cambian.

  return calculations;
};
