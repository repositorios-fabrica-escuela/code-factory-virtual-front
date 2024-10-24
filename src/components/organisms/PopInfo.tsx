import React, { ReactNode, forwardRef, useState } from 'react';
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Pencil } from 'lucide-react';
import Link from 'next/link';

interface PopoverProps {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  trigger: ReactNode;

}

export const PopInfo = forwardRef<HTMLDivElement, PopoverProps>(({
  fullName = "",
  email = "",
  phoneNumber = "",
  trigger
}, ref) => {
 

  return (
    <div ref={ref}>
      <Popover >
        <PopoverTrigger asChild>
            {trigger}
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-gray-300">
          <div className="grid gap-4">
            <div className="flex items-end justify-center">
              <Avatar className='h-24 w-24'>
                <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                <AvatarFallback>AV</AvatarFallback>
              </Avatar>
              <Link href="/authentication/update/update" className="h-8 w-8 flex items-center justify-center ml-2">
                <Pencil className="h-5 w-5" />
              </Link>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="name">Nombre:</Label>
                <span className="col-span-2">{fullName || "N/A"}</span>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="phone">Teléfono:</Label>
                <span className="col-span-2">{phoneNumber || "N/A"}</span>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="email">Email:</Label>
                <span className="col-span-2">{email || "N/A"}</span>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
});

PopInfo.displayName = 'PopInfo';