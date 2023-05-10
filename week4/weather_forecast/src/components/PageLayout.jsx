import React from 'react'
import Header from './Header'

export default function PageLayout({children}) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}
