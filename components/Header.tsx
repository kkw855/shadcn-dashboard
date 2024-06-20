'use client'

import { BellIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { CommandDemo } from '@/components/Command'

export default function Header() {
  return (
    <div className="grid grid-cols-2 gap-4 border-b p-4">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <Button variant="outline" size="icon">
          <BellIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
