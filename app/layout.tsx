import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'uz-UZ': '/uz-UZ',
    },
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  icons:'favicon.ico',
  generator: 'Next.js',
  applicationName: 'Project in Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript','Jahongir','Jonidev','Jahongir0126','Desktopdev','Jakarta in Next.js'],
  authors: [{ name: 'Jonidev' }, { name: 'Jahongir', url: 'https://nextjs.org' }],
  creator: 'Jonidev',
  publisher: 'Jahongir Jonidev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>{children}</body>
    </html>
  );
}