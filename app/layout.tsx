import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { cn } from '@/app/lib/utils';
import { ModalProvider } from '@/app/providers/ModalProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={cn('antialiased flex min-h-screen', inter.className)}>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
