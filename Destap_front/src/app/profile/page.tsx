'use client'

//app/profile/page.tsx
import ChevronLeftSolid from '@/assets/svg/ChevronLeftSolid';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeftToLine, Folder, Frown, List, Pen, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Template from '../template';
import { Input } from '@/components/ui/input';
import EditPenLine from '@/assets/svg/EditPenLine';
import EditPen from '@/assets/svg/EditPen';

export function DrawerDemo() {
    const [email, setEmail] = useState('destapemailmockup@gmail.com');
    const [phone, setPhone] = useState('+54 9 362 4 00-0000');
    const [editEmail, setEditEmail] = useState(false);
    const [editPhone, setEditPhone] = useState(false);

    return (
        <main className="flex flex-col gap-8 px-4  bg-[#181A1B] w-96">
            <div className="flex flex-col gap-6 pt-7">
                <div className="bg-primary rounded-full w-28 h-28 mx-auto flex items-center justify-center">
                    <EditPenLine className='text-primary-foreground' />
                </div>
                <div className="flex justify-center flex-col items-center gap-3">
                    <h2 className="mt-4 text-xl">Usuario, Usuario.</h2>
                    {editEmail ? (
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => setEditEmail(false)}
                            autoFocus
                            className="w-full bg-gray-800 border border-gray-600 text-white"
                        />
                    ) : (
                        <div onClick={() => setEditEmail(true)} className="cursor-pointer flex items-center gap-2 font-light">
                            <span>{email}</span>
                            <EditPen className={""} />
                        </div>
                    )}
                    {editPhone ? (
                        <Input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            onBlur={() => setEditPhone(false)}
                            autoFocus
                            className="w-full bg-gray-800 border border-gray-600 text-white"
                        />
                    ) : (
                        <div onClick={() => setEditPhone(true)} className="cursor-pointer flex items-center gap-2 font-light">
                            <span>{phone}</span>
                            <EditPen className={""} />
                        </div>
                    )}
                </div>
            </div>
            <div className='flex flex-col justify-center gap-5'>

                <Button size='xl' variant='secondary' className=' font-light'>
                    Cambio de contraseña
                </Button>
                <Separator />
                <Button size='xl' variant='secondary' className=' font-light'>
                    Eliminar cuenta de Destap!
                </Button>
            </div>
        </main>
    );
};

export default DrawerDemo;
