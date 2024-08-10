import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import UserProvider from './contexts/UserProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Khadija Tut Tahera',
  description: "Khadija Tut Tahera's Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <UserProvider>
          <div className='flex justify-between items-start'>
            <div className='w-full lg:w-9/12 min-h-screen py-20 lg:py-12 px-4 lg:px-20 text-white'>
              {children}
            </div>
            <div className='w-full lg:w-3/12 min-h-fit lg:p-4 fixed right-2 lg:top-24 z-50'>
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
