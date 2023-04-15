import * as React from 'react';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

export interface InputProps
   extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
   ({ className, ...props }, ref) => {
      const [showPassword, setShowPassword] = React.useState<boolean>(false);

      const toggleShowPassword = () => {
         setShowPassword((prevState) => !prevState);
      };

      React.useEffect(() => {
         console.log(props.type);
      }, []);

      return (
         <div className='relative'>
            <input
               className={cn(
                  'flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
                  className
               )}
               type={showPassword ? 'text' : props.type}
               ref={ref}
               {...props}
            />
            {props.type === 'password' && (
               <button
                  className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
                  type='button'
                  onClick={toggleShowPassword}
               >
                  {showPassword ? <Icons.eyeOff /> : <Icons.eye />}
               </button>
            )}
         </div>
      );
   }
);
Input.displayName = 'Input';

export { Input };
