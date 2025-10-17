'use client'

import { menuData } from "@/mock/menu-data"
import { Button } from "./ui/button"
import NestedMenuDrawer from "./menu-drawer"

const Home = () => {
    return (
        <div className="h-screen flex items-center justify-center p-3">
            <NestedMenuDrawer
                data={menuData}
                triggerButton={
                    <Button className="rounded-full font-normal bg-blue-500 hover:bg-blue-600" size="sm">
                        Open Menu
                    </Button>
                }
            />
        </div>
    )
}

export default Home