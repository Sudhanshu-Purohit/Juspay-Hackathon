"use client";

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
import { ReactNode, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Drawer } from "../ui/drawer";

interface NestedMenuDrawerProps {
  triggerButton: ReactNode;
  data: MenuData;
}

const NestedMenuDrawer = ({ triggerButton, data }: NestedMenuDrawerProps) => {
  const { isOpen, activeMenu, history, openDrawer, closeDrawer, goToMenu, goBack } = useDrawerStore();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Track animation direction: 1 = forward, -1 = back
  const [direction, setDirection] = useState(1);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const currentMenu = activeMenu.length ? activeMenu : data;

  const handleGoToMenu = (items: MenuData) => {
    setDirection(1); // forward
    goToMenu(items);
  };

  const handleGoBack = () => {
    setDirection(-1); // back
    goBack();
  };

  return (
    <>
      <div onClick={openDrawer}>{triggerButton}</div>
      <Drawer open={isOpen} onOpenChange={closeDrawer}>
        <DrawerContent className="mx-3 p-3 overflow-hidden data-[vaul-drawer-direction=bottom]:bottom-3 data-[vaul-drawer-direction=bottom]:rounded-t-2xl data-[vaul-drawer-direction=bottom]:rounded-b-2xl">
          <DrawerHeader className="hidden">
            <DrawerTitle>Nested Menu Drawer</DrawerTitle>
            <DrawerDescription>
              Nested menu drawer with smooth sliding animation on outer div.
            </DrawerDescription>
          </DrawerHeader>

          <div className="relative overflow-hidden h-full">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentMenu.map((item) => item.label).join("-")}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="h-full flex flex-col gap-2"
                ref={drawerRef}
                tabIndex={-1}
                aria-label="Multi-level drawer"
              >
                {history.length > 0 && (
                  <div>
                    <Button
                      variant="ghost"
                      onClick={handleGoBack}
                      size="sm"
                      aria-label="Go back"
                    >
                      <ChevronLeft className="size-3.5" />
                      Back
                    </Button>
                  </div>
                )}

                <ul className="space-y-2">
                  {currentMenu.map((item) => (
                    <li key={item.label}>
                      <div
                        onClick={() => item.items && handleGoToMenu(item.items)}
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
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NestedMenuDrawer;