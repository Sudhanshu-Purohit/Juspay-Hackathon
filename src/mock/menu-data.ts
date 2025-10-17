import { MenuData } from "@/types/types"
import {
    Home,
    Box,
    User,
    Settings,
    HelpCircle,
    Info,
    Circle,
    FileText,
    Server,
    Mail,
    MessageCircle,
} from "lucide-react"

export const menuData: MenuData = [
    {
        label: "Home",
        description: "Welcome to our comprehensive platform",
        icon: Home,
    },
    {
        label: "Products & Services",
        description: "Explore our offerings",
        icon: Box,
        items: [
            {
                label: "Software",
                description: "Business and productivity software",
                icon: FileText,
                items: [
                    {
                        label: "CRM Tool",
                        description: "Manage customer relationships",
                        icon: Circle,
                    },
                    {
                        label: "Project Management",
                        description: "Track tasks and deadlines",
                        icon: Circle,
                    },
                ],
            },
            {
                label: "Hardware",
                description: "Reliable devices for your needs",
                icon: Server,
                items: [
                    {
                        label: "Laptops",
                        description: "High-performance laptops",
                        icon: Circle,
                    },
                    {
                        label: "Monitors",
                        description: "High-resolution displays",
                        icon: Circle,
                    },
                ],
            },
        ],
    },
    {
        label: "Profile",
        description: "Manage your profile",
        icon: User,
        items: [
            { label: "Edit Profile", icon: Circle },
            { label: "View Profile", icon: Circle },
        ],
    },
    {
        label: "Settings",
        description: "Account settings and privacy",
        icon: Settings,
        items: [
            {
                label: "Account",
                description: "Change username and password",
                icon: Circle,
            },
            {
                label: "Privacy",
                description: "Manage privacy settings",
                icon: Circle,
            },
        ],
    },
    {
        label: "Help",
        description: "Support and FAQs",
        icon: HelpCircle,
        items: [
            {
                label: "FAQ",
                description: "Frequently asked questions",
                icon: Circle,
            },
            {
                label: "Contact Support",
                description: "Get in touch with our team",
                icon: MessageCircle,
                items: [
                    {
                        label: "Email",
                        description: "Send us an email",
                        icon: Mail,
                    },
                    {
                        label: "Chat",
                        description: "Live chat support",
                        icon: MessageCircle,
                    },
                ],
            },
            {
                label: "About Us",
                description: "Learn more about the company",
                icon: Info,
            },
        ],
    },
]
