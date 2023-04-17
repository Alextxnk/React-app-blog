/* eslint-disable @next/next/no-head-element */
import { Inter as FontSans } from 'next/font/google';

import '@/styles/globals.css';
import { siteConfig } from '@/config/site';
import { absoluteUrl, cn } from '@/lib/utils';
import { Analytics } from '@/components/analytics';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

const fontSans = FontSans({
   subsets: ['latin'],
   variable: '--font-inter'
});

interface RootLayoutProps {
   children: React.ReactNode;
}

export const metadata = {
   title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`
   },
   description: siteConfig.description,
   keywords: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'Server Components',
      'Radix UI'
   ],
   authors: [
      {
         name: 'Alextxnk',
         url: 'https://alextxnk-blog.netlify.app/'
      }
   ],
   creator: 'Alextxnk',
   themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: 'black' }
   ],
   openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
         {
            url: absoluteUrl('/og.jpg'),
            width: 1200,
            height: 630,
            alt: siteConfig.name
         }
      ]
   },
   twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.description,
      images: [`${siteConfig.url}/og.jpg`],
      creator: '@alextxnk'
   },
   icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png'
   },
   manifest: `${siteConfig.url}/site.webmanifest`
};

export default function RootLayout({ children }: RootLayoutProps) {
   return (
      <html lang='ru' suppressHydrationWarning >
         <head />
         <body
            className={cn(
               'min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50',
               fontSans.variable
            )}
         >
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
               {children}
               <TailwindIndicator />
            </ThemeProvider>
            <Analytics />
            <Toaster />
         </body>
      </html>
   );
}
