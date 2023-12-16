import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import UserProvider from './contexts/UserProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'My Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <UserProvider>
          <div className='flex justify-between items-start'>
            <div className='w-full lg:w-8/12 min-h-screen'>
              {children}
            </div>
            <div className='w-full lg:w-3/12 min-h-fit lg:shadow-lg lg:p-4 lg:shadow-sky-300 fixed right-8 lg:top-24 z-50'>
              <Header />
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </UserProvider>
      </body>
    </html>
  )
}
