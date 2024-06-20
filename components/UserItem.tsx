export default function UserItem() {
  return (
    <div className="flex items-center justify-between gap-2 rounded-[8px] border p-2">
      <div className="avatar flex min-h-10 min-w-10 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
        <p>GD</p>
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">Key Ung Kim</p>
        <p className="text-xs text-neutral-500">kkw855@gmail.com</p>
      </div>
    </div>
  )
}
