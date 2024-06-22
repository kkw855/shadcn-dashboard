import type { FC } from 'react'

import { cn } from '@/lib/utils'

type Prop = {
  title: string
  description: string
  backgroundColor: string
  border?: boolean
}

const UserItem: FC<Prop> = ({
  title,
  description,
  backgroundColor,
  border = true,
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-2 rounded-[8px] p-2',
        { border: border },
      )}
    >
      <div
        className="avatar flex min-h-10 min-w-10 items-center justify-center rounded-full font-bold text-white"
        style={{ backgroundColor: backgroundColor }}
      >
        <p>GD</p>
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">{title}</p>
        <p className="text-xs text-neutral-500">{description}</p>
      </div>
    </div>
  )
}

export default UserItem
