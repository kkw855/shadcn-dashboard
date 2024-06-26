import Link from 'next/link'
import {
  Bell,
  Cookie,
  Inbox,
  MessageSquare,
  Settings,
  User,
  Wallet,
} from 'lucide-react'

import {
  Command,
  CommandList,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command'
import UserItem from '@/components/UserItem'

export default function Sidebar() {
  const menuList = [
    {
      group: 'General',
      items: [
        {
          link: '/',
          icon: <User />,
          text: 'Profile',
        },
        {
          link: '/',
          icon: <Inbox />,
          text: 'Inbox',
        },
        {
          link: '/',
          icon: <Wallet />,
          text: 'Billing',
        },
        {
          link: '/',
          icon: <Bell />,
          text: 'Notifications',
        },
      ],
    },
    {
      group: 'Settings',
      items: [
        {
          link: '/',
          icon: <Settings />,
          text: 'General Settings',
        },
        {
          link: '/',
          icon: <Cookie />,
          text: 'Privacy',
        },
        {
          link: '/',
          icon: <MessageSquare />,
          text: 'Logs',
        },
      ],
    },
  ]

  return (
    <div className="fixed flex min-h-screen w-[300px] min-w-[300px] flex-col gap-4 border-r p-4">
      <div>
        <UserItem
          title="kkw855@gmail.com"
          description="KEYUNG KIM"
          backgroundColor="#10b981"
        />
      </div>
      <div className="grow">
        <Command className="overflow-visible">
          <CommandList className="h-full overflow-visible">
            {menuList.map((menu, key) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option, optionKey) => (
                  <CommandItem
                    key={optionKey}
                    className="flex cursor-pointer gap-2"
                  >
                    {option.icon}
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>
        <Link href="/team" className="flex items-center gap-2">
          <Settings />
          <span>Team settings</span>
        </Link>
      </div>
    </div>
  )
}
