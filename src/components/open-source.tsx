"use client";

import { motion } from "framer-motion";
import { Github, Star, GitFork, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DecorIcon } from "@/components/ui/decor-icon";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/ui/terminal";

export default function OpenSource() {
  const [stats, setStats] = useState({
    stars: 0,
    forks: 0,
    contributors: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [repoRes] = await Promise.all([
          fetch("https://api.github.com/repos/ignite-chat/ignite-frontend"),
          fetch("https://api.github.com/repos/ignite-chat/ignite-frontend/contributors?per_page=1&anon=true"),
        ]);
        
        const repoData = await repoRes.json();
        
        // Contributors count is tricky via API without pagination headers, 
        // but we can parse the Link header or just estimate if small.
        // For accurate count on small repos, getting the array length is fine.
        // For this specifically, let's do a direct count fetch if possible or just use the repo data fallback.
        // Actually, let's just fetch all contributors since it's small (4).
        const contributorsData = await fetch("https://api.github.com/repos/ignite-chat/ignite-frontend/contributors");
        const contributorsJson = await contributorsData.json();

        setStats({
          stars: repoData.stargazers_count || 0,
          forks: repoData.forks_count || 0,
          contributors: Array.isArray(contributorsJson) ? contributorsJson.length : 0,
        });
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <section id="open-source" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 size-full bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:16px_16px] opacity-[0.03]"></div>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 p-8 lg:p-16 overflow-hidden">
            {/* Left Column: Text & CTA */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                  Proudly <br />
                  <span className="text-orange-500">Open Source</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                   Transparency is at our core. Inspect the code, contribute features, or self-host your own instance. We build in public with the community.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-10 px-5" asChild>
                  <Link to="https://github.com/ignite-chat/ignite-frontend" target="_blank">
                    <Github className="mr-2 size-4" />
                    Star on GitHub
                  </Link>
                </Button>
                <Button variant="outline" className="h-10 px-5 font-medium border-border" asChild>
                  <Link to="https://github.com/ignite-chat/ignite-frontend/fork" target="_blank">
                    <GitFork className="mr-2 size-4 text-muted-foreground" />
                    Fork Repository
                  </Link>
                </Button>
              </div>

              <div className="pt-8 grid grid-cols-3 gap-8 border-t border-dashed border-border/50">
                <div>
                   <div className="flex items-center gap-2 mb-1">
                      <Star className="size-4 text-orange-500 fill-orange-500" />
                      <span className="text-xl font-bold">{stats.stars}</span>
                   </div>
                   <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Stars</p>
                </div>
                <div>
                   <div className="flex items-center gap-2 mb-1">
                      <GitFork className="size-4 text-zinc-500" />
                      <span className="text-xl font-bold">{stats.forks}</span>
                   </div>
                   <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Forks</p>
                </div>
                <div>
                   <div className="flex items-center gap-2 mb-1">
                      <Heart className="size-4 text-red-500 fill-red-500" />
                      <span className="text-xl font-bold">{stats.contributors}</span>
                   </div>
                   <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Contributors</p>
                </div>
              </div>
            </div>

            {/* Right Column: Visual/Card */}
            <div className="relative">
                <div className="absolute inset-0 bg-orange-500/5 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="relative z-10 w-full">
                    <Terminal className="bg-zinc-950 text-zinc-100 border-white/10 shadow-2xl">
                        <TypingAnimation delay={500} className="text-zinc-100 font-mono">
                           $ git clone https://github.com/ignite-chat/ignite-frontend.git
                        </TypingAnimation>
                        
                        <AnimatedSpan delay={2500} className="text-zinc-400 font-mono">
                           Cloning into &apos;ignite-frontend&apos;...
                        </AnimatedSpan>
                        
                        <AnimatedSpan delay={3000} className="text-zinc-400 font-mono">
                           remote: Enumerating objects: 1420, done.
                        </AnimatedSpan>
                        <AnimatedSpan delay={3200} className="text-zinc-400 font-mono">
                           remote: Counting objects: 100% (1420/1420), done.
                        </AnimatedSpan>
                        <AnimatedSpan delay={3400} className="text-zinc-400 font-mono">
                           Receiving objects: 100% (1420/1420), 12.40 MiB | 4.20 MiB/s, done.
                        </AnimatedSpan>
                        
                        <TypingAnimation delay={4500} className="text-zinc-100 font-mono mt-4">
                           $ cd ignite-frontend && npm install
                        </TypingAnimation>
                        
                        <AnimatedSpan delay={6000} className="text-zinc-400 font-mono">
                           added 1,204 packages in 5s
                        </AnimatedSpan>

                        <TypingAnimation delay={7000} className="text-zinc-100 font-mono mt-4">
                           $ npm run dev
                        </TypingAnimation>
                         
                        <AnimatedSpan delay={8000} className="text-green-400 font-mono mt-2">
                           Ready in 124ms
                        </AnimatedSpan>
                        <AnimatedSpan delay={8200} className="text-zinc-400 font-mono">
                           ➜ Local: <span className="text-blue-400 underline">http://localhost:5173</span>
                        </AnimatedSpan>
                    </Terminal>
                </div>

                {/* Floating "Contribute" Card */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-6 -right-6 z-20 bg-card p-4 rounded-xl border border-border shadow-2xl max-w-[200px]"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="size-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                            <GitFork className="size-4" />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-foreground">Pull Request</div>
                            <div className="text-[10px] text-muted-foreground">Merged 2m ago</div>
                        </div>
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">
                        &quot;Feat: Add E2E encryption support&quot;
                    </div>
                </motion.div>
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
