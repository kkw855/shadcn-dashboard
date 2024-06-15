import UserItem from '@/components/UserItem'

export default function Sidebar() {
  return (
    <div className="flex min-h-screen w-[300px] min-w-[300px] border-r p-2 flex-col gap-4">
      <div>
        <UserItem />
      </div>
      <div className='grow'>Menu</div>
      <div>Settings / Notification</div>
    </div>
  )
}
