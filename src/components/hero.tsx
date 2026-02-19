"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden min-h-dvh flex flex-col justify-center bg-white dark:bg-black pt-20">
      {/* Spotlight Effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <svg
          className="absolute -top-[20%] -left-[10%] w-[150%] h-[150%] animate-spotlight opacity-100 md:opacity-80"
          viewBox="0 0 3787 2842"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter)">
            <ellipse
              cx="1924.71"
              cy="273.501"
              rx="1924.71"
              ry="273.501"
              transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
              fill="currentColor"
              className="text-orange-500/10 dark:text-white"
              fillOpacity="0.15"
            />
          </g>
          <defs>
            <filter
              id="filter"
              x="0.860352"
              y="0.838989"
              width="3785.16"
              height="2840.26"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="151"
                result="effect1_foregroundBlur_1065_8"
              />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Large Grid Pattern */}
      <div
        className={cn(
          "absolute inset-0 z-0 opacity-30 dark:opacity-30 opacity-70",
          "[background-size:60px_60px] md:[background-size:80px_80px]",
          "[background-image:linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]",
          "[mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_10%,transparent_100%),linear-gradient(to_bottom,black_40%,transparent_100%)]"
        )}
      />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24 flex flex-col items-start text-left w-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start space-y-8 max-w-4xl"
        >
          {/* Badge */}
          <Link 
            to="/download"
            className="w-fit h-full text-[10px] bg-white/50 dark:bg-zinc-900/40 backdrop-blur-md px-3 py-1.5 border border-black/5 dark:border-white/5 rounded-full flex items-center gap-2 shadow-sm dark:shadow-2xl hover:bg-black/5 dark:hover:bg-zinc-800/60 hover:border-black/10 dark:hover:border-white/10 transition-all group/badge"
          >
            <Monitor className="w-3 h-3 text-orange-500 group-hover/badge:scale-110 transition-transform" />
            <span className="w-px h-2.5 bg-black/10 dark:bg-white/10" />
            <span className="text-orange-600 dark:text-orange-500/80 font-bold uppercase tracking-widest">
              Download our desktop app
            </span>
          </Link>

          {/* Branded Title */}
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] md:leading-[1.05]">
            Your Place to <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Talk</span>
            {" "}and{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Hang Out</span>
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed font-medium">
            Ignite is the easiest way to talk over voice, video, and text. 
            Create your own community, join existing ones, and stay connected with the people who matter most.
          </p>

          {/* Liquid Glass Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-2"
          >
            <Button 
                asChild
                variant="default"
                className="h-11 px-8 rounded-md bg-orange-600 dark:bg-primary hover:bg-orange-700 dark:hover:bg-orange-600 text-white"
            >
              <Link to="/download">Get Started</Link>
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="h-11 px-6 bg-white border border-black/10 text-black shadow-sm hover:bg-zinc-50 dark:bg-white/[0.03] dark:border-white/10 dark:text-white dark:hover:bg-white/5 transition-colors">
                  Already have an account?
                </Button>
              </DialogTrigger>
              <DialogContent className="border-black/5 dark:border-white/5 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-3xl text-foreground">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">Welcome Back</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Log in to your Ignite account to continue connecting with your communities.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                  <Button className="w-full h-12">Log In</Button>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </motion.div>
      </section>

      {/* Re-adding the original subtle accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl aspect-video opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-orange-500/20 blur-[160px] rounded-full mix-blend-screen" />
      </div>

      {/* Smooth Fade to Next Section */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
    </div>
  );
}
