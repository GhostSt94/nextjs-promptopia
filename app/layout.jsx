import '@styles/globals.css'

import Navbar from '@components/Navbar'
import Provider from '@components/Provider'

export const metadata = {
    title: 'Promptopia',
    description:'Discover & Shape AI Prompts'
}

function RootLayout({children}) {
  return (
      <html lang='en'>
          <body>
              <Provider>
                  <div className='main'>
                      <div className='gradient'></div>
                  </div>
                  <main className='app'>
                      <Navbar></Navbar>
                      {children}
                  </main>
              </Provider>
          </body>
    </html>
  )
}

export default RootLayout