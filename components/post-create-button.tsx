'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';

import { cn } from '@/lib/utils';

import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';

interface PostCreateButtonProps
   extends React.HTMLAttributes<HTMLButtonElement> {}

export function PostCreateButton({
   className,
   ...props
}: PostCreateButtonProps) {
   const router = useRouter();
   const [isLoading, setIsLoading] = React.useState<boolean>(false);

   async function onClick() {
      setIsLoading(true);

      const response = await fetch('/api/posts', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            title: 'Статья без названия'
         })
      });

      setIsLoading(false);

      if (!response?.ok) {
         if (response.status === 402) {
            return toast({
               title: 'Достигнуто ограничение в 3 статьи',
               description: 'Пожалуйста, перейдите на тарифный план PRO',
               variant: 'destructive'
            });
         }

         return toast({
            title: 'Что-то пошло не так',
            description: 'Ваш статья не была создана. Пожалуйста, попробуйте снова',
            variant: 'destructive'
         });
      }

      const post = await response.json();

      // This forces a cache invalidation.
      router.refresh();

      router.push(`/editor/${post.id}`);
   }

   return (
      <button
         onClick={onClick}
         className={cn(
            buttonVariants(),
            {
               'cursor-not-allowed opacity-60': isLoading
            },
            className
         )}
         disabled={isLoading}
         {...props}
      >
         {isLoading ? (
            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
         ) : (
            <Icons.add className='mr-2 h-4 w-4' />
         )}
         Новая статья
      </button>
   );
}
