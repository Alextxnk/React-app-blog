import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { UserRegisterForm } from '@/components/user-register-form';

export const metadata = {
   title: 'Create an account',
   description: 'Create an account to get started.'
};

export default function RegisterPage() {
   return (
      <div className='container flex h-screen w-screen flex-col items-center justify-center'>
         <Link
            href='/'
            className={cn(
               buttonVariants({ variant: 'ghost' }),
               'absolute top-4 left-4 md:top-8 md:left-8'
            )}
         >
            <>
               <Icons.chevronLeft className='mr-2 h-4 w-4' />
               На главную
            </>
         </Link>
         {/* <Link
            href='/login'
            className={cn(
               buttonVariants({ variant: 'ghost' }),
               'absolute top-4 right-4 md:top-8 md:right-8'
            )}
         >
            Вход
         </Link> */}
            <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
               <div className='flex flex-col space-y-2 text-center'>
                  <Icons.student className='mx-auto h-6 w-6' />
                  <h1 className='text-2xl font-semibold tracking-tight'>
                     Создать учетную запись
                  </h1>
                  <p className='text-sm text-slate-500 dark:text-slate-400'>
                     Введите свой адрес электронной почты и пароль ниже, чтобы создать учетную запись
                  </p>
               </div>
               <UserRegisterForm />
               <p className='px-6 text-center text-sm text-slate-500 dark:text-slate-400'>
               <Link
                  href='/login'
                  className='hover:text-brand underline underline-offset-4'
               >
                  Уже есть аккаунт? Войти
               </Link>
            </p>
               {/* <p className='px-8 text-center text-sm text-slate-500 dark:text-slate-400'>
                  Нажав продолжить, вы соглашаетесь с нашими{' '}
                  <Link
                     href='/terms'
                     className='hover:text-brand underline underline-offset-4'
                  >
                     Условиями обслуживания
                  </Link>{' '}
                  и{' '}
                  <Link
                     href='/privacy'
                     className='hover:text-brand underline underline-offset-4'
                  >
                     Политикой конфиденциальности
                  </Link>
                  .
               </p> */}
            </div>
         </div>
   );
}
