import { Metadata } from 'next';
import Link from 'next/link';

import { cn } from '@/lib/utils';
// import cn from 'classnames';
import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { UserAuthForm } from '@/components/user-auth-form';

export const metadata: Metadata = {
   title: 'Login',
   description: 'Login to your account'
};

export default function LoginPage() {
   return (
      <div className='container flex h-screen w-screen flex-col items-center justify-center'>
         <Link
            href='/'
            /* className={`${buttonClass.ghost} absolute top-4 left-4 md:top-8 md:left-8`} */
            // eslint-disable-next-line tailwindcss/no-contradicting-classname, 
            /* className={
               'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800 bg-transparent hover:bg-slate-100 dark:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent'
            } */
            /* className={`${buttonVariants({ variant: 'ghost' })}
               absolute top-4 left-4 md:top-8 md:left-8`} */
            className={cn(
               buttonVariants({ variant: 'ghost' }),
               'absolute top-4 left-4 md:top-8 md:left-8'
            )}
         >
            <>
               <Icons.chevronLeft className='mr-2 h-4 w-4' />
               Back
            </>
         </Link>
         <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-center'>
               <Icons.logo className='mx-auto h-6 w-6' />
               <h1 className='text-2xl font-semibold tracking-tight'>
                  Welcome back
               </h1>
               <p className='text-sm text-slate-500 dark:text-slate-400'>
                  Enter your email to sign in to your account
               </p>
            </div>
            <UserAuthForm />
            <p className='px-8 text-center text-sm text-slate-500 dark:text-slate-400'>
               <Link
                  href='/register'
                  className='hover:text-brand underline underline-offset-4'
               >
                  Don&apos;t have an account? Sign Up
               </Link>
            </p>
         </div>
      </div>
   );
}
