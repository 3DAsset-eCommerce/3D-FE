import React, { ReactNode } from 'react'
import SideNav from './SideNav'
import Header from './Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen ">
      <SideNav />
      <div className="ml-[24.4rem] w-full">
        <Header />
        <main className="mt-[7.2rem] min-h-[calc(100vh-7.2rem)] bg-bg-2">{children}</main>
      </div>
    </div>
  )
}
