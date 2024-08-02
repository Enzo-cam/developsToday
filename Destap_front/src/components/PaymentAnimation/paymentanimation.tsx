import './animation.css';
import React, { useEffect, useState } from 'react';
import { IProduct } from '@/interfaces/product';
import { Button } from '../ui/button';
import { Separator } from '@radix-ui/react-separator';
import { ChevronLeft, StarIcon } from 'lucide-react';
import SuccessPhone from '@/assets/svg/SuccessPhone';
import ErrorPhone from '@/assets/svg/ErrorPhone';
import CashPhone from '@/assets/svg/CashPhone';

interface ConcentricCirclesProps {
  status: string;
  handleGoBack: () => void;
  cart: IProduct[];
}

const ConcentricCircles: React.FC<ConcentricCirclesProps> = ({ status, handleGoBack, cart }) => {
  const [particles, setParticles] = useState<{ id: number; isStar: boolean; }[]>([]);

  useEffect(() => {
    if (status === 'success' || status === 'galperin' || status === 'credit') {
      const generatedParticles = [...Array(20)].map((_, i) => {
        const isStar = Math.random() > 0.5;
        return { id: i, isStar };
      });
      setParticles(generatedParticles);
    }
  }, [status]);

  const renderParticle = (particle: { id: React.Key | null | undefined; isStar: any; }) => {
    const particleClass = `text-primary-foreground particle particle-${particle.id} size-10`;
    return particle.isStar ? (
      <StarIcon key={particle.id} className={particleClass} />
    ) : (
      <div key={particle.id} className={`${particleClass} rounded-full bg-primary-foreground`}></div>
    );
  };

  const isSuccess = status === 'success' || status === 'galperin' || status === 'credit';
  const isCash = status === 'cash';

  const totalAmount = cart.reduce((acc, item) => acc + item.price * (item.quantity ?? 0), 0);

  const renderPurchaseSummary = () => (
    <div className='flex flex-col gap-4 w-full'>
      <h3 className='font-semibold text-xl text-primary-foreground'>Resumen de la compra</h3>
      <div className='flex justify-between font-medium'>
        <span>Producto</span>
        <span>Cantidad</span>
      </div>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between">
          <span>{item.name}</span>
          <span>{item.quantity}</span>
        </div>
      ))}
      <Separator className='my-2' />
      <div className='flex justify-between font-bold'>
        <span>Total</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
    </div>
  );

  return (
    <div className={`absolute backdrop-blur-[2px] bg-background ${isCash ? 'bg-opacity-90' : 'bg-opacity-80'} top-0 left-0 right-0 flex justify-center items-center flex-col gap-9 mt-10`}>
      <div className='w-full px-4 flex justify-start items-center'>
        <Button variant={'linkActive'} onClick={handleGoBack}>
          <ChevronLeft className="size-8" />
        </Button>
      </div>
      <div className='w-full px-8 flex flex-col justify-center items-start'>
        <h1 className='text-2xl'>
          {isCash ? 'Acercate a la barra y paga tus bebibas' : status === 'galperin' ? 'Pagaste con Mercado Pago' : status === 'credit' ? 'Pagaste con tarjeta' : 'Pago'}
        </h1>
        <div className='text-sm text-muted flex items-center justify-between w-full'>
          <p>
            ¿Cómo retirar mis productos?
          </p>
          <Button className='rounded-full text-sm py-2'>Ayuda</Button>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col pointer-events-none">
        {isSuccess && <div className="circle absolute outer-circle z-10 bg-primary size-32"></div>}
        <div className={`z-10 size-64 ${isSuccess ? 'circle inner-circle bg-primary-foreground' : isCash ? 'bg-warning circle inner-circle rounded-full' : 'bg-destructive rounded-full'}`}></div>
        {isSuccess ? <SuccessPhone className={'absolute z-20 circle success'} /> : isCash ? <CashPhone className={'absolute z-20 circle success'} /> : <ErrorPhone className={'absolute z-20 circle error'} />}
        {isSuccess && particles.map(renderParticle)}
      </div>
      <div className='flex flex-col justify-center items-center gap-6 w-full px-8'>
        {!isCash && (
          <>
            <h2 className='text-4xl'>{isSuccess ? 'Yaay!' : 'Oops!'}</h2>
            <h3>{isSuccess ? 'Has comprado tus productos exitosamente' : 'Parece que ha ocurrido un error con tu pago '}</h3>
          </>
        )}
        {isSuccess ? (
          <>
            {renderPurchaseSummary()}
            <Button className="w-full text-md mt-6" size={'xl'} variant={'secondary'} onClick={() => window.location.reload()}>
              Ver mi QR de compra
            </Button>
          </>
        ) : isCash ? (
          <div className='flex flex-col align-start flex-1 w-full gap-4'>
            <div className='flex justify-between'>
              <p className='text-center'>Pagar en barra:</p>
              <p className='text-center'>({cart.length} items)<span className='text-bold text-warning'>${totalAmount.toFixed(2)}</span></p>
            </div>
            <Separator />
            <h3 className='text-base'>ID de compra pendiente: #AeT78GG</h3>
            {renderPurchaseSummary()}
            <Button className="w-full text-md mt-6" size={'xl'} variant={'secondary'} onClick={() => window.location.reload()}>
              Volver al inicio
            </Button>
          </div>
        ) : (
          <Button className="w-full text-md mt-6" size={'xl'} variant={'secondary'} onClick={() => window.location.reload()}>
            Intentar de nuevo
          </Button>
        )}
        <div className='text-sm py-5 text-muted flex items-center justify-between w-full'>
          <p>
            ¿Necesitas hablar con soporte?
          </p>
          <Button variant={'linkActive'}>Reportar</Button>
        </div>
      </div>
    </div>
  );
};

export default ConcentricCircles;