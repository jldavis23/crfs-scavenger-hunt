import './globals.css'
import { ProgressDataProvider } from './context/ProgressDataContext'
import { ProgressBar } from './components/ProgressBar.js'

export const metadata = {
  title: 'CRFS Scavenger Hunt',
  description: 'Scavenger hunt game for the Capitol Reef Field Station',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">

      <ProgressDataProvider>
        <body className='font-monterrat'>
          <ProgressBar/>
          {children}
        </body>
      </ProgressDataProvider>
    </html>
  )
}
