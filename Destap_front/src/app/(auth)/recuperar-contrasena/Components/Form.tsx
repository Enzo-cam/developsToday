'use client';
// TODO: Arreglar un poco mas la UI para saber cuando aparece cada mensaje y demás
// TODO: FormPassword redirige al login en caso de ser sucessfull. 
import { useState,  } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import FormEmail from './FormEmail';
import FormCode from './FormCode';
import FormNewPassword from './FormNewPassword';


const formVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

export default function Form() {
  const [direction, setDirection] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [verifiedEmail, setVerifiedEmail] = useState("");
  const [tempToken, setTempToken] = useState("");

  const handleVerifyEmail = (email: string) => {
    setVerifiedEmail(email);
    setTimeout (() => {
      nextStep();
    }, 800);
  };
  
  const handleToken = (token: string) => {
    setTempToken(token);
    nextStep();
  };

  const nextStep = () => {
    setDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, 2));
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const forms = [
    <FormEmail key="email" setEmail={handleVerifyEmail} />,
    <FormCode key="code" setToken={handleToken} getBack={prevStep} verifiedEmail={verifiedEmail} />,
    <FormNewPassword key="password" token={tempToken} getBack={prevStep} verifiedEmail={verifiedEmail} />,
  ];

  return (
    <div className="flex flex-col mt-4 justify-between mx-6">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentStep}
          custom={direction}
          variants={formVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="flex flex-col gap-4"
        >
          {forms[currentStep]}
        </motion.div>
      </AnimatePresence>
        
    </div>
  );
}
