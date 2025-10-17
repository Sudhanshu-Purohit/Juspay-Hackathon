import { MenuItem } from "@/types/types"
import { create } from "zustand"

interface DrawerState {
    isOpen: boolean
    activeMenu: MenuItem[]
    history: MenuItem[][]
    openDrawer: () => void
    closeDrawer: () => void
    goToMenu: (submenu: MenuItem[]) => void
    goBack: () => void
}

export const useDrawerStore = create<DrawerState>((set) => ({
    isOpen: false,
    activeMenu: [],
    history: [],
    openDrawer: () => set({ isOpen: true }),
    closeDrawer: () => set({ isOpen: false }),
    goToMenu: (submenu) =>
        set((state) => ({
            history: [...state.history, state.activeMenu],
            activeMenu: submenu,
        })),
    goBack: () =>
        set((state) => {
            const newHistory = [...state.history]
            const prevMenu = newHistory.pop() || []
            return { activeMenu: prevMenu, history: newHistory }
        }),
}))
