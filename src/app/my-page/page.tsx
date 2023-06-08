/**
 * 마이페이지
 */
import Layout from '@/components/common/Layout'
import MyPageAll from '@/components/myPage/MyPageAll'

export default function MyPage() {
  return (
    <Layout>
      <div className="ml-[6%] flex h-full">
        <MyPageAll />
      </div>
    </Layout>
  )
}
