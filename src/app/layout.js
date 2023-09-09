import './globals.css'

export const metadata = {
  title: '114 Studio',
  description: 'Sound post-production studio in Barcelona',
  openGraph: {
    title: '114',
    description: 'Sound post-production studio in Barcelona',
    url: 'https://114.studio',
    siteName: '114',
    images: [
      {
        url: '',
        width: 600,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
