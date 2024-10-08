import NavBar from '@/components/molecules/NavBar';
import { ReactNode } from 'react';

export const description =''

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className=''>
      <div className=''>
        <NavBar />
        <main className=''>{children}</main>
      </div>
    </div>
  );
}