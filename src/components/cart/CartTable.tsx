import React from 'react'
import CartItem from './CartItem'
import CustomCheckbox from '../common/CustomCheckbox'

export default function CartTable() {
  return (
    <table className="mt-[3.2rem]">
      <thead>
        <tr className="w-[100%] text-neutral-200">
          <th className="w-[7.5%] text-center text-sm">
            <CustomCheckbox id="all" />
          </th>
          <th className="w-[6.6%] text-sm">
            <p>대표이미지</p>
          </th>
          <th className="w-[48.6%] text-sm">
            <p>이름 및 상세설명</p>
          </th>
          <th className="w-[20.7%] pr-[2.4rem] text-right text-sm">
            <p>가격</p>
          </th>
          <th className="w-[8.3%] text-sm">
            <p>찜</p>
          </th>
          <th className="w-[8.3%] text-sm">
            <p>삭제</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <CartItem />
      </tbody>
    </table>
  )
}
