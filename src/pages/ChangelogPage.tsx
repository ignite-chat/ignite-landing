"use client";

import React, { useEffect, useState } from "react";
import { 
  GitCommit, 
  Calendar, 
  User, 
  ExternalLink, 
  Files, 
  Plus, 
  Minus,
  Sparkles
} from "lucide-react";
import { DecorIcon } from "@/components/ui/decor-icon";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Commit {
  sha: string;
  commit: {
    author: {
      name: string;
      date: string;
    };
    message: string;
  };
  html_url: string;
  author: {
    avatar_url: string;
  };
}

interface CommitDetail extends Commit {
  files: {
    filename: string;
    additions: number;
    deletions: number;
    status: string;
  }[];
  stats: {
    total: number;
    additions: number;
    deletions: number;
  };
}

function DashedLine({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("absolute border-collapse border border-dashed border-border/60", className)}
      {...props}
    />
  );
}

function CommitModalContent({ sha }: { sha: string }) {
  const [detail, setDetail] = useState<CommitDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/ignite-chat/ignite-frontend/commits/${sha}`
        );
        const data = await response.json();
        setDetail(data);
      } catch (error) {
        console.error("Failed to fetch commit detail:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [sha]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="size-5 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!detail) return <div className="py-12 text-center text-zinc-500 text-sm">Failed to retrieve telemetry.</div>;

  return (
    <div className="space-y-8 pt-6 max-h-[65vh] overflow-y-auto pr-4 custom-scrollbar">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Commit Specification</h4>
            <div className="flex items-center gap-4 text-[10px] font-mono font-bold">
                <span className="flex items-center gap-1.5 text-emerald-500/90"><Plus className="size-3" /> {detail.stats.additions}</span>
                <span className="flex items-center gap-1.5 text-rose-500/90"><Minus className="size-3" /> {detail.stats.deletions}</span>
            </div>
        </div>
        <div className="bg-zinc-950/40 rounded-2xl border border-white/[0.03] p-5 shadow-inner">
            <p className="text-sm text-zinc-300 leading-relaxed font-normal whitespace-pre-wrap">
              {detail.commit.message}
            </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
                <Files className="size-3" />
                Impacted Logic ({detail.files.length})
            </h4>
        </div>
        <div className="grid gap-1.5">
          {detail.files.slice(0, 15).map((file) => (
            <div 
              key={file.filename}
              className="flex items-center justify-between p-3.5 bg-white/[0.02] hover:bg-white/[0.04] rounded-xl border border-white/[0.03] transition-all duration-200 group/file"
            >
              <span className="text-xs text-zinc-400 font-mono truncate max-w-[75%] group-hover/file:text-zinc-200 transition-colors" title={file.filename}>
                {file.filename}
              </span>
              <div className="flex items-center gap-3 font-mono text-[10px] font-bold shrink-0">
                {file.additions > 0 && <span className="text-emerald-500/50">+{file.additions}</span>}
                {file.deletions > 0 && <span className="text-rose-500/50">-{file.deletions}</span>}
              </div>
            </div>
          ))}
          {detail.files.length > 15 && (
            <p className="text-[10px] text-zinc-600 text-center pt-2 italic">Showing first 15 files of {detail.files.length}</p>
          )}
        </div>
      </div>

      <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3.5">
            <div className="relative">
                <img src={detail.author?.avatar_url} className="size-9 rounded-full grayscale hover:grayscale-0 transition-all duration-500 border border-white/10" alt="" />
                <div className="absolute -bottom-0.5 -right-0.5 size-3 bg-emerald-500 border-2 border-background rounded-full" />
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-semibold text-zinc-200 tracking-tight">{detail.commit.author.name}</span>
                <span className="text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-black">Engineering</span>
            </div>
        </div>
        <a 
          href={detail.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-2.5 bg-white text-black rounded-md text-xs font-bold transition-all hover:-translate-y-0.5 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.8)_inset] shadow-white/5 active:translate-y-0"
        >
          Explore Source
          <ExternalLink className="size-3.5" />
        </a>
      </div>
    </div>
  );
}

export default function ChangelogPage() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/ignite-chat/ignite-frontend/commits?per_page=12"
        );
        const data = await response.json();
        if (Array.isArray(data)) {
          setCommits(data);
        }
      } catch (error) {
        console.error("Failed to fetch commits:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 max-w-7xl mx-auto px-6 py-24 md:py-40 w-full">
        
        {/* Header Section */}
        <div 
            className="flex flex-col items-center gap-5 mb-24 text-center"
        >
             <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/5 border border-orange-500/10 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 shadow-sm">
                <Sparkles className="size-3" />
                Engineering Journal
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
                System Redefined. <br />
                <span className="text-muted-foreground font-light italic">Every heartbeat captured.</span>
            </h1>
        </div>

        {/* Changelog Grid */}
        <div className="relative">
            {/* Corner Icons */}
            <DecorIcon className="size-6 stroke-1.5 text-zinc-800" position="top-left" />
            <DecorIcon className="size-6 stroke-1.5 text-zinc-800" position="top-right" />
            <DecorIcon className="size-6 stroke-1.5 text-zinc-800" position="bottom-left" />
            <DecorIcon className="size-6 stroke-1.5 text-zinc-800" position="bottom-right" />

            {/* Outer Dashed Borders */}
            <DashedLine className="-top-[1.5px] right-4 left-4" />
            <DashedLine className="top-4 -right-[1.5px] bottom-4" />
            <DashedLine className="top-4 bottom-4 -left-[1.5px]" />
            <DashedLine className="right-4 -bottom-[1.5px] left-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
                {loading ? (
                    <div className="col-span-full flex items-center justify-center py-24">
                        <div className="size-6 border-2 border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
                    </div>
                ) : commits.length > 0 ? (
                    commits.map((commit) => (
                      <Dialog key={commit.sha}>
                        <DialogTrigger asChild>
                          <button 
                              className="group relative p-8 flex flex-col items-start gap-6 transition-all hover:bg-zinc-950/30 text-left w-full cursor-pointer outline-none focus-visible:bg-zinc-950/30 hover:z-10"
                          >
                              <div className="size-7 text-zinc-600 transition-colors group-hover:text-orange-500 flex items-center justify-center">
                                  <GitCommit className="size-5" />
                              </div>
                              
                              <div className="space-y-3">
                                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.25em] text-zinc-600 transition-colors group-hover:text-orange-500/60">
                                      <Calendar className="size-2.5" />
                                      {formatDate(commit.commit.author.date)}
                                  </div>
                                  <h3 className="font-semibold text-base leading-snug tracking-tight text-zinc-100 line-clamp-2 min-h-[3rem] group-hover:text-white transition-colors">
                                      {commit.commit.message.split('\n')[0]}
                                  </h3>
                                  <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2 font-light">
                                      {commit.commit.message.split('\n').slice(1).join(' ').trim() || "Automated system optimization and logic refinement."}
                                  </p>
                              </div>

                              <div className="mt-auto pt-5 flex items-center justify-between w-full border-t border-dashed border-white/[0.05]">
                                  <div className="flex items-center gap-2">
                                      <span className="text-[9px] font-black text-zinc-600 group-hover:text-zinc-400 transition-colors uppercase tracking-[0.15em]">
                                        {commit.commit.author.name.split(' ')[0]}
                                      </span>
                                      <span className="size-1 rounded-full bg-zinc-800" />
                                      <span className="text-[9px] font-mono text-zinc-700 font-bold group-hover:text-orange-500/40 transition-colors">
                                        {commit.sha.substring(0, 7)}
                                      </span>
                                  </div>
                              </div>

                              {/* Internal Dashed Separators */}
                              <DashedLine className="top-4 bottom-4 -right-[1.5px] hidden lg:block group-[&:nth-child(4n)]:hidden" />
                              <DashedLine className="top-4 bottom-4 -right-[1.5px] hidden md:block lg:hidden group-[&:nth-child(2n)]:hidden" />
                              <DashedLine className="left-4 right-4 -bottom-[1.5px] block border-border/30" />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-2xl bg-zinc-950/95 backdrop-blur-3xl border-white/[0.05] text-foreground p-8 shadow-2xl">
                          <DialogHeader>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="size-10 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 shadow-inner">
                                    <GitCommit className="size-5" />
                                </div>
                                <div className="space-y-1">
                                    <DialogTitle className="text-xl font-bold tracking-tight text-white">Commit Analytics</DialogTitle>
                                    <DialogDescription className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
                                        ID: {commit.sha}
                                    </DialogDescription>
                                </div>
                            </div>
                          </DialogHeader>
                          <CommitModalContent sha={commit.sha} />
                        </DialogContent>
                      </Dialog>
                    ))
                ) : (
                    <div className="col-span-full text-center py-32 text-zinc-600 text-sm font-light italic">
                        Initializing...
                    </div>
                )}
            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
