"use client"

import { usePathname, useRouter } from "next/navigation"

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const changeLang = (locale: string) => {
    const newPath = "/" + locale + pathname.substring(3)
    router.push(newPath)
  }

  return (
    <div className="flex gap-4 text-lg">
      <button onClick={() => changeLang("en")}>🇬🇧</button>
      <button onClick={() => changeLang("fr")}>🇫🇷</button>
      <button onClick={() => changeLang("ar")}>🇹🇳</button>
    </div>
  )
}
