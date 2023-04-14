'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// import { validation } from '@/lib/validation';

import { cn } from '@/lib/utils';

import { userAuthSchema } from '@/lib/validations/auth';
import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm<FormData>({
      resolver: zodResolver(userAuthSchema)
   });

   const [data, setData] = React.useState<object>({ email: '', password: '' });
   // const [errorsForm, setErrorsForm] = React.useState<object>({});

   const [isLoading, setIsLoading] = React.useState<boolean>(false);
   const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);
   const searchParams = useSearchParams();

   /* const handleChange = ({ target }) => {
      setData((prevState) => ({
         ...prevState,
         [target.name]: target.value
      }));
   }; */

   /* const validationConfig = {
      email: {
         isRequired: {
            message: 'Электронная почта обязательна для заполнения'
         },
         isEmail: { message: 'Email введен некорректно' }
      },
      password: {
         isRequired: { message: 'Пароль обязателен для заполнения' },
         isCapitalSymbol: {
            message: 'Пароль должен содержать хотя бы одну заглавную букву'
         },
         isContainDigit: {
            message: 'Пароль должен содержать хотя бы одно число'
         },
         min: {
            message: 'Пароль должен состоять минимум из 8 символов',
            value: 8
         }
      }
   };

   const validate = () => {
      const errorsForm = validation(data, validationConfig);

      setErrorsForm(errorsForm);
      return Object.keys(errorsForm).length === 0;
   };

   React.useEffect(() => {
      validate();
   }, [data]);

   const isValid = Object.keys(errorsForm).length === 0;
 */
   /* const handleSubmit = (e) => {
      e.preventDefault();
      const isValid = validate();
      if (!isValid) return;
      console.log(data);
   }; */

   async function onSubmit(data: FormData) {
      setIsLoading(true);

      const signInResult = await signIn('email', {
         email: data.email.toLowerCase(),
         redirect: false,
         callbackUrl: searchParams?.get('from') || '/dashboard'
      });

      setIsLoading(false);

      if (!signInResult?.ok) {
         return toast({
            title: 'Что-то пошло не так.',
            description:
               'Ваш запрос на вход не выполнен. Пожалуйста, попробуйте снова.',
            variant: 'destructive'
         });
      }

      return toast({
         title: 'Проверьте свою электронную почту',
         description:
            'Мы отправили вам ссылку для входа в систему. Обязательно проверьте также свой спам.'
      });
   }

   // className='sr-only'
   return (
      <div className={cn('grid gap-6', className)} {...props}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-2'>
               <div className='grid gap-1'>
                  <Label className='ml-1 mb-1' htmlFor='email'>
                     Электронная почта
                  </Label>
                  <Input
                     id='email'
                     placeholder='name@example.com'
                     type='email'
                     /* onChange={handleChange} */
                     autoCapitalize='none'
                     autoComplete='email'
                     autoCorrect='off'
                     disabled={isLoading || isGitHubLoading}
                     {...register('email')}
                  />
                  {/* {errorsForm.email && (
                     <p className='ml-1 text-sm text-red-600'>
                        {errorsForm.email.message}
                     </p>
                  )} */}
                  {errors?.email && (
                     <p className='ml-1 text-sm text-red-600'>
                        {errors.email.message}
                     </p>
                  )}
               </div>
               <div className='grid gap-1'>
                  <Label className='ml-1 mb-1' htmlFor='password'>
                     Пароль
                  </Label>
                  <Input
                     id='password'
                     type='password'
                     autoCapitalize='none'
                     autoComplete='password'
                     autoCorrect='off'
                     disabled={isLoading || isGitHubLoading}
                     {...register('password')}
                  />
                  {/* {errorsForm.email && (
                     <p className='ml-1 text-sm text-red-600'>
                        {errorsForm.email.message}
                     </p>
                  )} */}
                  {errors?.password && (
                     <p className='ml-1 text-sm text-red-600'>
                        {errors.password.message}
                     </p>
                  )}
               </div>
               <button className={cn(buttonVariants())} disabled={isLoading}>
                  {isLoading && (
                     <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                  )}
                  Войти
               </button>
            </div>
         </form>
         {/* <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
               <span className='w-full border-t border-slate-300' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
               <span className='bg-white px-2 text-slate-600'>
                  Or continue with
               </span>
            </div>
         </div>
         <button
            type='button'
            className={cn(buttonVariants({ variant: 'outline' }))}
            onClick={() => {
               setIsGitHubLoading(true);
               signIn('github');
            }}
            disabled={isLoading || isGitHubLoading}
         >
            {isGitHubLoading ? (
               <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            ) : (
               <Icons.gitHub className='mr-2 h-4 w-4' />
            )}{' '}
            Github
         </button> */}
      </div>
   );
}
