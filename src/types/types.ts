import { LucideIcon } from "lucide-react"

export type MenuData = MenuItem[]

export type MenuItem = {
    label: string
    description?: string
    icon: LucideIcon
    items?: MenuItem[]
}