'use client'

import { BellIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { CommandDemo } from '@/components/Command'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function Header() {
  const [notifications] = useState([
    {
      text: 'This is a notification',
      date: '02-01-2015',
      read: true,
    },
    {
      text: 'This is another notification',
      date: '02-01-2015',
      read: false,
    },
  ])

  return (
    <div className="grid grid-cols-2 gap-4 border-b p-4">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="relative" variant="outline" size="icon">
              <div
                className={cn(
                  'absolute -right-1 -top-2 my-1 h-3 w-3 rounded-full',
                  notifications.find((x) => x.read)
                    ? 'bg-green-500'
                    : 'bg-neutral-200',
                )}
              />
              <BellIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notifications.map((item, key) => (
              <DropdownMenuItem
                key={key}
                className="flex cursor-pointer items-start gap-2 px-3 py-2 transition hover:bg-neutral-50"
              >
                <div
                  className={cn(
                    'my-1 h-3 w-3 rounded-full',
                    !item.read ? 'bg-green-500' : 'bg-neutral-200',
                  )}
                />
                <div>
                  <p>{item.text}</p>
                  <p className="text-xs text-neutral-500">{item.date}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
