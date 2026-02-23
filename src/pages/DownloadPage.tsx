"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";
import { Footer } from "@/components/footer";
import { DecorIcon } from "@/components/ui/decor-icon";
import { cn } from "@/lib/utils";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";

function DashedLine({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("absolute border-collapse border border-dashed border-border", className)}
      {...props}
    />
  );
}

export default function DownloadPage() {
  const platforms = [
    {
      name: "Windows",
      icon: <FaWindows className="size-8" />,
      description: "Windows 10/11 (64-bit)",
      action: "Download .exe",
      href: "download.ignite-chat.com/windows",
      featured: true,
    },
    {
      name: "macOS",
      icon: <FaApple className="size-8" />,
      description: "macOS 12+ (Universal)",
      action: "Download .dmg",
      href: "download.ignite-chat.com/mac",
      featured: false,
    },
    {
      name: "Linux",
      icon: <FaLinux className="size-8" />,
      description: "Debian, Ubuntu, Flatpak",
      action: "Download .deb",
      href: "download.ignite-chat.com/linux",
      featured: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 container mx-auto px-6 py-24 md:py-32 flex flex-col items-center">
        
        {/* Header Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6 max-w-3xl mx-auto mb-16"
        >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                Stable Release v1.0.0
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Get <span className="text-orange-500">Ignite</span> for Desktop
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                Experience the full power of Ignite with native performance, system notifications, and better resource management.
            </p>
        </motion.div>

        {/* Features-style Grid */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-5xl"
        >
            {/* Corner Icons */}
            <DecorIcon className="size-6 stroke-2 stroke-border" position="top-left" />
            <DecorIcon className="size-6 stroke-2 stroke-border" position="top-right" />
            <DecorIcon className="size-6 stroke-2 stroke-border" position="bottom-left" />
            <DecorIcon className="size-6 stroke-2 stroke-border" position="bottom-right" />

            {/* Dashed Borders */}
            <DashedLine className="-top-[1.5px] right-3 left-3" />
            <DashedLine className="top-3 -right-[1.5px] bottom-3" />
            <DashedLine className="top-3 bottom-3 -left-[1.5px]" />
            <DashedLine className="right-3 -bottom-[1.5px] left-3" />

            <div className="grid grid-cols-1 md:grid-cols-3">
                {platforms.map((platform, index) => (
                    <div 
                        key={platform.name}
                        className="group relative p-8 flex flex-col items-start gap-6 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/50 text-left w-full outline-none"
                    >
                        <div className={`size-12 rounded-xl flex items-center justify-center transition-colors ${platform.featured ? 'bg-orange-500/10 text-orange-500' : 'bg-zinc-100 dark:bg-zinc-800 text-muted-foreground group-hover:text-orange-500'}`}>
                            {platform.icon}
                        </div>
                        
                        <div className="space-y-2 w-full">
                            <h3 className="font-bold text-xl leading-tight tracking-tight">{platform.name}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {platform.description}
                            </p>
                        </div>

                        <Button 
                            className="w-full"
                            asChild
                        >
                            <Link to={platform.href}>
                                {platform.action}
                            </Link>
                        </Button>

                        {/* Dashed separators - similar logic to features list but for 3 cols */}
                        <DashedLine className={`right-0 top-5 bottom-5 hidden md:block ${index === platforms.length - 1 ? 'md:hidden' : ''}`} style={{borderRightWidth: '1px', borderTopWidth: 0, borderBottomWidth: 0, left: 'auto'}} />
                        <DashedLine className={`bottom-0 left-5 right-5 md:hidden ${index === platforms.length - 1 ? 'hidden' : ''}`} style={{borderBottomWidth: '1px', borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}} />
                    </div>
                ))}
            </div>
        </motion.div>

        {/* Additional Links */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 text-center space-y-4"
        >
            <Dialog>
                <DialogTrigger asChild>
                    <p className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                        Looking for mobile? <span className="font-medium text-orange-500 hover:underline">Download for iOS & Android</span>
                    </p>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Coming Soon</DialogTitle>
                        <DialogDescription>
                            Ignite mobile apps for iOS and Android are currently in development. Stay tuned for updates!
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </motion.div>

      </main>
      <Footer />
    </div>
  );
}
