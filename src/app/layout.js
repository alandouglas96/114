import './globals.css'

export const metadata = {
  title: '114',
  description: '114 Studio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
