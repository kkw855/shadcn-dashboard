export default function UserItem() {
  return (
    <div className='flex items-center justify-between gap-2 border rounded-[8px] p-2'>
      <div className="avatar min-h-10 min-w-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">
        <p>GD</p>
      </div>
      <div className='grow'>
        <p className='text-[16px] font-bold'>Key Ung Kim</p>
        <p className='text-xs text-neutral-500'>kkw855@gmail.com</p>
      </div>
    </div>
  )
}
