import { ThemeProvider } from '@/components/theme-provider';
import { websiteMetadata } from '@/lib/data';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: websiteMetadata.title,
  description: websiteMetadata.description,
  openGraph: {
    title: websiteMetadata.title,
    description: websiteMetadata.description,
    // TODO Update this link to your own avatar image
    images: [''],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
