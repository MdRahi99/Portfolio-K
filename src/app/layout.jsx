import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'My Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className='flex justify-between items-start lg:py-8 lg:px-8'>
          <div className='w-full lg:w-9/12 min-h-screen'>
            {children}
          </div>
          <div className='w-full lg:w-3/12 h-96 lg:shadow-lg lg:p-4 lg:shadow-sky-300 fixed right-8 lg:top-24 z-50'>
            <Header />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
