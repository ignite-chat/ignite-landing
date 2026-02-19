"use client";


import { DecorIcon } from "@/components/ui/decor-icon";
import { cn } from "@/lib/utils";

export default function ScreenshareFeature() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Corner Icons */}
          <DecorIcon
            className="size-6 stroke-2 stroke-border"
            position="top-left"
          />
          <DecorIcon
            className="size-6 stroke-2 stroke-border"
            position="top-right"
          />
          <DecorIcon
            className="size-6 stroke-2 stroke-border"
            position="bottom-left"
          />
          <DecorIcon
            className="size-6 stroke-2 stroke-border"
            position="bottom-right"
          />

          {/* Dashed Borders */}
          <DashedLine className="-top-[1.5px] right-3 left-3" />
          <DashedLine className="top-3 -right-[1.5px] bottom-3" />
          <DashedLine className="top-3 bottom-3 -left-[1.5px]" />
          <DashedLine className="right-3 -bottom-[1.5px] left-3" />

          <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden relative">
            
            {/* Text Side */}
            <div className="lg:col-span-4 p-10 lg:p-14 flex flex-col justify-between relative z-10">
               {/* Text Glow */}
               <div className="absolute top-0 left-0 w-full h-full bg-orange-500/5 blur-[100px] -z-10 rounded-full pointer-events-none" />

              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-bold uppercase tracking-widest text-orange-500 shadow-[0_0_10px_-4px_rgba(249,115,22,0.5)]">
                  <span className="relative flex size-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full size-2 bg-orange-500"></span>
                  </span>
                  Broadcast Protocol
                </div>
                
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1]">
                  Stream like <br />
                  <span className="italic font-serif text-muted-foreground">you&apos;re in the</span> <br />
                  same room
                </h2>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  High quality and low latency streaming makes it feel like you&apos;re hanging out on the couch with friends while playing a game, watching shows, or doing homework.
                </p>
              </div>

              <div className="pt-12 grid grid-cols-1 gap-6">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-orange-500/70">Performance</p>
                  <p className="text-sm font-medium">Lag-free 4K / 60FPS Streaming</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-orange-500/70">Collaboration</p>
                  <p className="text-sm font-medium">Multi-user screen control</p>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="lg:col-span-8 relative bg-zinc-50 dark:bg-zinc-900/40 p-6 lg:p-12 flex items-center justify-center min-h-[450px] overflow-hidden">
               {/* Pattern for Image Side */}
               <div className="absolute inset-0 size-full bg-[radial-gradient(black_1px,transparent_1px)] dark:bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:16px_16px] opacity-[0.03]"></div>

              {/* Internal Dashed Divider */}
              <DashedLine className="hidden lg:block top-8 bottom-8 -left-[1.5px]" />
              
              {/* Subtle Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/10 z-10 transition-transform duration-500 hover:scale-[1.01]">
                <img 
                  src="/screenshare.jpg" 
                  alt="Ignite Screenshare Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashedLine({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cn("absolute border-collapse border border-dashed border-border", className)}
			{...props}
		/>
	);
}
