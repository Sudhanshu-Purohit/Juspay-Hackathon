"use client"

import {
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer";
import { useDrawerStore } from "@/store/menu-drawer-store";
import { MenuData } from "@/types/types";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode, useRef } from "react";
import { Button } from "../ui/button";
import { Drawer } from "../ui/drawer";

interface NestedMenuDrawerProps {
  triggerButton: ReactNode
  data: MenuData
}

const NestedMenuDrawer = ({ triggerButton, data }: NestedMenuDrawerProps) => {

  const { isOpen, activeMenu, history, openDrawer, closeDrawer, goToMenu, goBack } = useDrawerStore();

  const drawerRef = useRef<HTMLDivElement>(null);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const direction = history.length ? -1 : 1;

  // Initial menu when opening drawer
  const currentMenu = activeMenu.length ? activeMenu : data;

  return (
    <>
      <div onClick={openDrawer}>{triggerButton}</div>
      <Drawer open={isOpen} onOpenChange={closeDrawer}>
        <DrawerContent className="mx-2 p-3">
          <DrawerHeader className="hidden">
            <DrawerTitle>Nested Menu Drawer</DrawerTitle>
            <DrawerDescription>A responsive and accessible animated drawer component featuring a nested menu system with smooth transitions, intuitive back navigation, and polished animations for seamless user interaction.</DrawerDescription>
          </DrawerHeader>
          <div
            className="h-full flex flex-col gap-2"
            ref={drawerRef}
            tabIndex={-1}
            aria-label="Multi-level drawer"
          >
            {history.length > 0 && (
              <div>
                <Button
                  variant={"ghost"}
                  onClick={goBack}
                  size={"sm"}
                  className=""
                  aria-label="Go back"
                >
                  <ChevronLeft className="size-3.5" />
                  Back
                </Button>
              </div>
            )}

            <AnimatePresence mode="wait" custom={direction}>
              <motion.ul
                key={currentMenu.map((item) => item.label).join("-")}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                {currentMenu.map((item) => (
                  <li key={item.label}>
                    <div
                      onClick={() => item.items && goToMenu(item.items)}
                      className="w-full h-fit cursor-pointer hover:bg-secondary p-2 rounded-sm"
                    >

                      <div className="flex gap-2 items-start w-full">
                        {item.icon && <item.icon className="size-4 mt-0.5 shrink-0" />}

                        <div className="flex flex-col justify-start w-full">
                          <div className="flex items-center justify-between gap-3 w-full">
                            <h4 className="text-sm font-medium">{item.label}</h4>

                            {item.items && item.items.length > 0 && (
                              <ChevronRight className="size-3.5" />
                            )}
                          </div>
                          {item.description && (
                            <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default NestedMenuDrawer