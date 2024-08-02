'use client'
// TODO: Fixear estilos y mostrar mensajes de error o exito
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFormState } from 'react-dom';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Button } from '@/components/ui/button';
import { checkCode } from '../actions/checkCode';

import {FormCodeSchema} from '@/lib/FormPasswordSchema';
import { IoArrowBackCircleOutline } from "react-icons/io5";


interface Props {
  setToken: (token: string) => void;
  getBack: () => void;
  verifiedEmail: string;
}

const FormCode = ({ setToken, verifiedEmail, getBack }: Props) => {
  const form = useForm<z.infer<typeof FormCodeSchema>>({
    resolver: zodResolver(FormCodeSchema),
    defaultValues: {
      code: '',
    },
  });

  const { setValue, handleSubmit } = form;
  const [state, formAction] = useFormState(checkCode, { message: "", status: 0 });
  const handleCodeChange = (value: string) => {
    setValue('code', value, { shouldValidate: true });
  };

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append('code', data.code);
    formData.append('email', verifiedEmail);
    await formAction(formData);
  });

  useEffect (() => { 
    if (state.tempToken) {
      setToken(state.tempToken);
    }
  }, [state.tempToken])

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8 mt-2">
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem className='space-y-8 flex flex-col items-center'>
              <FormLabel className="text-2xl mx-auto">Ingrese el código de verificación</FormLabel>
              <FormControl className="space-y-2 flex justify-center mx-auto">
                <InputOTP
                  maxLength={6}
                  value={field.value}
                  onChange={(value) => {
                    field.onChange(value);
                    handleCodeChange(value);
                  }}
                >
                  <InputOTPGroup className="flex justify-center mx-auto gap-3">
                    {[...Array(6)].map((_, index) => (
                      <InputOTPSlot
                        key={index}
                        className="bg-primary border text-lg rounded-sm p-4 font-semibold"
                        index={index}
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
            </FormItem>
          )}
        />
        
        <div className="text-center flex flex-col gap-2">
          <p className="font-semibold text-lg">03:00</p>
          <p>
            No te ha llegado ningún código?{' '}
            <button type="button" className="text-primary-foreground underline">Reenviar</button>
          </p>
        </div>

        <p className="text-base text-primary-foreground">
          {state?.message}
        </p>

        <div className="flex gap-2 items-center">
          <Button type="button" onClick={getBack} className="text-2xl bg-[#2E2E30] text-green py-8">
            <IoArrowBackCircleOutline />
          </Button>
          <Button type="submit" className="w-full bg-[#2E2E30] text-white py-8 text-lg">
            Verificar código
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormCode;