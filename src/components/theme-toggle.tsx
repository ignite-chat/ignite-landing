"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import React from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, startTransition] = React.useTransition();

  const toggleTheme = async () => {
    const isDark = theme === "dark";
    const nextTheme = isDark ? "light" : "dark";

    // @ts-ignore
    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    const transitionClass = nextTheme === 'dark' ? 'dark-transition' : 'light-transition';
    document.documentElement.classList.add(transitionClass);

    // @ts-ignore
    const transition = document.startViewTransition(() => {
        setTheme(nextTheme);
    });

    try {
      await transition.finished;
    } finally {
      document.documentElement.classList.remove(transitionClass);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative size-9 rounded-xl border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-200"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
