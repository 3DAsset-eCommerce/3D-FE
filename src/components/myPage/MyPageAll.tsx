/**
 * 마이페이지 전체 컴포넌트
 */
'use client'
import React, { useState } from 'react'

import MyPageNav from './MyPageNav'
import MyOrderHistory from './MyOrderHistory'
import MyAccountSetting from './MyAccountSetting'

export default function MyPageAll() {
  const [selectedTab, setSelectedTab] = useState(true)
  console.log({ selectedTab })
  return (
    <>
      <MyPageNav selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab ? <MyAccountSetting /> : <MyOrderHistory />}
    </>
  )
}
