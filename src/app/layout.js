// ✅ layout.js (Server Component)
import "./globals.css";


export const metadata = {
  title: "CEA Church",
  description: "Christian Evangelical Assembly - Vision for Harvest",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#1a1a1a'
      }
    ]
  },
  manifest: '/site.webmanifest',
  themeColor: '#1a1a1a',
  backgroundColor: '#1a1a1a'
};

import ClientLayout from "./ClientLayout"; // Import the new client component

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
