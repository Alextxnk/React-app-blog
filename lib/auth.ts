import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { Client } from 'postmark';

import { siteConfig } from '@/config/site';
import { db } from '@/lib/db';

// TODO: Move env vars to env a la t3.
// const postmarkClient = new Client(process.env.POSTMARK_API_TOKEN || '');

export const authOptions: NextAuthOptions = {
   // huh any! I know.
   // This is a temporary fix for prisma client.
   // @see https://github.com/prisma/prisma/issues/16117
   adapter: PrismaAdapter(db as any),
   session: {
      strategy: 'jwt'
   },
   pages: {
      signIn: '/login'
   },
   providers: [
      GitHubProvider({
         clientId: process.env.GITHUB_CLIENT_ID || '',
         clientSecret: process.env.GITHUB_CLIENT_SECRET || ''
      }),
      CredentialsProvider({
         type: 'credentials',
         credentials: {
            email: {
               label: 'Электронная почта',
               type: 'email',
               placeholder: 'name@example.com'
            },
            password: { label: 'Пароль', type: 'password' }
         },
         async authorize(credentials, req) {
            const { email, password } = credentials as {
               email: string;
               password: string;
            };
            // find user from db
            if (email !== 'alextxnk@gmail.com' || password !== '12345678') {
               throw new Error('Invalid credentials');
            }

            return { id: '1', name: 'Alextxnk', email: 'alextxnk@gmail.com' };
         }
      })
      /* EmailProvider({
         from: process.env.SMTP_FROM,
         sendVerificationRequest: async ({ identifier, url, provider }) => {
            const user = await db.user.findUnique({
               where: {
                  email: identifier
               },
               select: {
                  emailVerified: true
               }
            });

            const templateId = user?.emailVerified
               ? process.env.POSTMARK_SIGN_IN_TEMPLATE
               : process.env.POSTMARK_ACTIVATION_TEMPLATE;
            if (!templateId) {
               throw new Error('Missing template id');
            }

            const result = await postmarkClient.sendEmailWithTemplate({
               TemplateId: parseInt(templateId),
               To: identifier,
               From: provider.from as string,
               TemplateModel: {
                  action_url: url,
                  product_name: siteConfig.name
               },
               Headers: [
                  {
                     // Set this to prevent Gmail from threading emails.
                     // See https://stackoverflow.com/questions/23434110/force-emails-not-to-be-grouped-into-conversations/25435722.
                     Name: 'X-Entity-Ref-ID',
                     Value: new Date().getTime() + ''
                  }
               ]
            }); 

            if (result.ErrorCode) {
               throw new Error(result.Message);
            }
         }
      }) */
   ],
   callbacks: {
      async session({ token, session }) {
         if (token) {
            session.user.id = token.id;
            session.user.name = token.name;
            session.user.email = token.email;
            session.user.image = token.picture;
         }

         return session;
      },
      async jwt({ token, user }) {
         const dbUser = await db.user.findFirst({
            where: {
               email: token.email
            }
         });

         if (!dbUser) {
            if (user) {
               token.id = user?.id;
            }
            return token;
         }

         return {
            id: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            picture: dbUser.image
         };
      }
   }
};
