import React, { ReactNode } from 'react'
import SideNav from './SideNav'
import Header from './Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen ">
      {/* @ts-expect-error Async Server Component */}
      <SideNav />
      <div className="w-full ml-[24.4rem]">
        <Header />
        <main className="min-h-[calc(100vh-7.2rem)] mt-[7.2rem] bg-bg-2">{children}</main>
      </div>

      
    </div>
  )
}
