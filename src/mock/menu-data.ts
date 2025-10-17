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
    CreditCard,
    ShoppingCart,
    Globe,
    BookOpen,
    Layers,
    Lock,
    Shield,
    PieChart,
    Calendar,
    Bell,
    Award,
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
                        items: [
                            {
                                label: "Lead Management",
                                description: "Track and nurture leads",
                                icon: Circle,
                            },
                            {
                                label: "Analytics Dashboard",
                                description: "Visualize CRM data",
                                icon: PieChart,
                            },
                        ],
                    },
                    {
                        label: "Project Management",
                        description: "Track tasks and deadlines",
                        icon: Circle,
                        items: [
                            {
                                label: "Task Board",
                                description: "Kanban-style task management",
                                icon: Layers,
                            },
                            {
                                label: "Calendar View",
                                description: "Schedule your projects",
                                icon: Calendar,
                            },
                        ],
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
                        items: [
                            {
                                label: "Gaming Laptops",
                                description: "For high-end gaming",
                                icon: Circle,
                            },
                            {
                                label: "Business Laptops",
                                description: "Optimized for productivity",
                                icon: Circle,
                            },
                        ],
                    },
                    {
                        label: "Monitors",
                        description: "High-resolution displays",
                        icon: Circle,
                        items: [
                            {
                                label: "4K Monitors",
                                description: "Ultra HD displays",
                                icon: Circle,
                            },
                            {
                                label: "Curved Monitors",
                                description: "Immersive viewing experience",
                                icon: Circle,
                            },
                        ],
                    },
                ],
            },
            {
                label: "E-commerce Solutions",
                description: "Sell online efficiently",
                icon: ShoppingCart,
                items: [
                    {
                        label: "Payment Gateway",
                        description: "Secure online payments",
                        icon: CreditCard,
                    },
                    {
                        label: "Store Management",
                        description: "Manage your products and orders",
                        icon: Layers,
                    },
                    {
                        label: "Global Shipping",
                        description: "Ship worldwide",
                        icon: Globe,
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
            {
                label: "Achievements",
                description: "Your milestones and badges",
                icon: Award,
                items: [
                    {
                        label: "Certificates",
                        description: "Earned certificates",
                        icon: BookOpen,
                    },
                    {
                        label: "Badges",
                        description: "Skill badges",
                        icon: Shield,
                    },
                ],
            },
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
                icon: Lock,
            },
            {
                label: "Notifications",
                description: "Email and app alerts",
                icon: Bell,
                items: [
                    { label: "Email Alerts", icon: Mail },
                    { label: "Push Notifications", icon: Bell },
                ],
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
                items: [
                    {
                        label: "Our Story",
                        description: "History and mission",
                        icon: BookOpen,
                    },
                    {
                        label: "Leadership",
                        description: "Meet the team",
                        icon: User,
                    },
                ],
            },
        ],
    },
]
