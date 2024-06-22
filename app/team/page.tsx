'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Command, CommandInput } from '@/components/ui/command'
import { Badge } from '@/components/ui/badge'
import UserItem from '@/components/UserItem'

type Member = {
  email: string
  fullName: string
  backgroundColor: string
  role: string
  status?: string
}

export default function TeamSettings() {
  const [members] = useState<Member[]>([
    {
      email: 'kkw855@gmail.com',
      fullName: 'KEYUNG KIM',
      backgroundColor: 'rgba(125,24,66,1)',
      role: 'admin',
    },
    {
      email: 'kevin@naver.com',
      fullName: 'Kevin Lemaitre',
      backgroundColor: 'rgba(15,24,66,1)',
      role: 'viewer',
    },
    {
      email: 'aurelia@gmail.com',
      fullName: 'Aurelia Duhan',
      backgroundColor: 'rgba(1,93,26,1)',
      role: 'admin',
    },
    {
      email: 'filip@gmail.com',
      fullName: 'Filip Filipowksi',
      backgroundColor: 'rgba(98,0,166,1)',
      role: 'viewer',
      status: 'pending',
    },
  ])

  return (
    <div className="grid gap-4">
      <header>
        <h2 className="text-[36px] font-bold">Team settings</h2>
      </header>
      <div className="grid gap-4">
        <div>
          <div className="flex items-center justify-between gap-2">
            <Command className="rounded-lg border">
              <CommandInput
                className="border-none"
                placeholder="Type an email to invite..."
              />
            </Command>
            <Button variant="secondary">Add a new member</Button>
          </div>
        </div>
        <div className="rounded border">
          {members.length === 0 && (
            <div className="p-4">There are no members yet.</div>
          )}
          {members.map((member, key) => (
            <div
              className="grid grid-cols-6 items-center border-b pr-2 last:border-b-0"
              key={key}
            >
              <div className="col-span-2">
                <UserItem
                  title={member.email}
                  description={member.fullName}
                  backgroundColor={member.backgroundColor}
                  border={false}
                />
              </div>
              <div className="col-span-3 flex gap-2">
                <Badge className={`tag ${member.role}`}>{member.role}</Badge>
                {member.status && (
                  <Badge className={`tag ${member.status}`}>
                    {member.status}
                  </Badge>
                )}
              </div>
              <div className="col-span-1 flex justify-end">
                <Button variant="ghost">Remove</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
