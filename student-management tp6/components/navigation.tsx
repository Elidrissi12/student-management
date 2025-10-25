"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Student Manager
          </Link>
          <div className="flex gap-2">
            <Link href="/">
              <Button variant={isActive("/") ? "default" : "ghost"}>Dashboard</Button>
            </Link>
            <Link href="/students">
              <Button variant={isActive("/students") ? "default" : "ghost"}>Students</Button>
            </Link>
            <Link href="/add-student">
              <Button variant={isActive("/add-student") ? "default" : "ghost"}>Add Student</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
