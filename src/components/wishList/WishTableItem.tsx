export default function WishTableItem() {
  return (
    <div className="flex flex-col">
         <div className="flex justify-between p-4">
          <div className="flex-1">
            <input type="checkbox" />
          </div>
          <div className="flex-1">이미지</div>
          <div className="flex-1">이름</div>
          <div className="flex-1">가격</div>
          <div className="flex-1">장바구니 버튼</div>
          <div className="flex-1">삭제 버튼</div>
        </div>

    </div>
  )
}
