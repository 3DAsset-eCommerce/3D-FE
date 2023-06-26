import MyPageNav from '@/components/myPage/MyPageNav'
import DetailList from '@/components/myPage/orderHistory/orderHistoryDetail/DetailList'
import React from 'react'

export default function OrderHistoryDetailPage() {
  return (
    <>
      {/* <MyPageNav
        setSelectedTab={function (prev: boolean): void {
          throw new Error('Function not implemented.')
        }}
        selectedTab={true}
      /> */}
      <DetailList />
    </>
  )
}
