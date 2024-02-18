import 'globals.css'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'
import { test } from 'gray-matter'

export const metadata = {
  title: 'Chris Seadon',
  description: 'Chris Seadon - Mix Engineer & Videographer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className='dark max-w-full overflow-x-clip'>
        <div className='bg-amber-50 text-zinc-900 dark:bg-zinc-900 dark:text-white min-h-screen'>
          <Header />
          <main className="font-sans">{children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}