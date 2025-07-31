"use client";

import { useState } from "react";
import { SurveyNav } from "@/components/survey/survey-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { cn } from "@/lib/utils"; // Or use `clsx` if you prefer

export function SurveyAside({ totalSteps }: { totalSteps: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white dark:bg-black w-12 h-12 flex justify-center items-center text-2xl rounded-lg border-nav-border border text-nav-icon dark:text-white"
        aria-label="Abrir menú"
      >
        <i className="icon-menu"></i>
      </button>

      <aside className="hidden lg:flex flex-col justify-between fixed top-0 left-0 h-screen w-[var(--container-2xs)] bg-gray-50 dark:bg-black p-8 z-40">
        <SidebarContent totalSteps={totalSteps} />
      </aside>

      <div
        className={cn(
          "fixed top-0 left-0 h-full w-[var(--container-2xs)] bg-gray-50 dark:bg-black p-8 z-50 transform transition-transform duration-300 lg:hidden flex flex-col justify-between",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-xl"
          aria-label="Cerrar menú"
        >
          ✕
        </button>
        <SidebarContent totalSteps={totalSteps} />
      </div>
    </>
  );
}

function SidebarContent({ totalSteps }: { totalSteps: number }) {
  return (
    <>
      <div>
        <div className="mb-20">
          <Image
            src="/nmo.svg"
            alt="Nivel de Madurez Organizacional"
            width={139}
            height={57}
            className="block dark:hidden object-contain"
          />
          <Image
            src="/nmo-dark.svg"
            alt="Nivel de Madurez Organizacional"
            width={139}
            height={57}
            className="hidden dark:block object-contain"
          />
        </div>
        <SurveyNav totalSteps={totalSteps} />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center h-16">
          <Image
            src="/london-consulting-group-logo.png"
            alt="Logo"
            width={100}
            height={40}
            className="block dark:hidden object-contain"
          />
          <Image
            src="/londonlogodark.png"
            alt="Logo"
            width={100}
            height={40}
            className="hidden dark:block object-contain"
          />
        </div>
        <ThemeToggle />
      </div>
    </>
  );
}
