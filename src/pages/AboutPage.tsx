"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { DecorIcon } from "@/components/ui/decor-icon";
import { ArrowLeft, Github, Globe, Users, Code2, Heart, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-background selection:bg-orange-500/30">
			<section className="py-24 max-w-5xl mx-auto px-6">
				{/* Navigation */}
				<motion.div 
					initial={{ opacity: 0, x: -10 }}
					animate={{ opacity: 1, x: 0 }}
					className="mb-12"
				>
					<Link 
						to="/"
						className="px-6 py-2.5 rounded-md bg-zinc-950 border border-white/[0.05] text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white hover:border-white/10 transition-all duration-300 relative group overflow-hidden"
					>
						<div className="relative z-10 flex items-center gap-2">
							<ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
							Back to System
						</div>
						<div className="absolute inset-0 bg-linear-to-b from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
					</Link>
				</motion.div>

				<div className="flex flex-col items-center gap-4 mb-20 text-center">
					<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-500 shadow-xs">
						<span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
						Registry / Engineers @ sellauth
					</div>
					<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-foreground">
						Engineering the <br />
						<span className="italic font-serif text-muted-foreground">Private Web</span>
					</h1>
					<p className="max-w-xl text-muted-foreground text-sm leading-relaxed mt-4">
						SellAuth is a specialized infrastructure lab focused on building high-performance communication protocols with zero-knowledge primitives.
					</p>
				</div>

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

					<div className="grid grid-cols-1 md:grid-cols-2">
						{aboutSections.map((section, index) => (
							<div
								className="group relative p-10 flex flex-col items-start gap-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
								key={section.title}
							>
								<div className="size-8 text-muted-foreground transition-colors group-hover:text-orange-500">
									{section.icon}
								</div>
								
								<div className="space-y-2">
									<h2 className="font-medium text-xl tracking-tight">{section.title}</h2>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{section.description}
									</p>
								</div>

								{/* Dashed separators */}
								{index % 2 === 0 && (
									<DashedLine className="hidden md:block top-10 bottom-10 -right-[1.5px]" />
								)}
								<DashedLine className="right-10 bottom-0 left-10 block group-last:hidden md:group-nth-last-2:hidden" />
							</div>
						))}
					</div>
				</div>

				{/* Social/System Footer */}
				<div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
					{[
						{ label: "Github", value: "@ignite-chat", icon: <Github size={14}/>, href: "https://github.com/ignite-chat/ignite-frontend" },
						{ label: "Network", value: "sellauth.com", icon: <Globe size={14}/>, href: "https://sellauth.com" },
						{ label: "System", value: "v1", icon: <Shield size={14}/>, href: "#" },
					].map((item) => (
						<Link 
							key={item.label}
							to={item.href}
							className="p-6 rounded-2xl border border-border bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-between group hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
						>
							<div className="flex items-center gap-3">
								<div className="text-muted-foreground group-hover:text-orange-500 transition-colors">
									{item.icon}
								</div>
								<div>
									<p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{item.label}</p>
									<p className="text-sm font-medium">{item.value}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>
		</main>
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

const aboutSections = [
	{
		title: "Core Infrastructure",
		icon: <Code2 />,
		description: "We build the fundamental layers of private communication. From local-first sync engines to end-to-end encrypted tunnels, our code is written for reliability and auditability.",
	},
	{
		title: "User Sovereignty",
		icon: <Users />,
		description: "Our mission is to return control to the user. We believe that data belongs to the person who created it, not the platform that routes it.",
	},
	{
		title: "Encryption First",
		icon: <Shield />,
		description: "Privacy isn't a bolt-on; it's the core primitive. Every architectural decision we make starts with the question: 'How can we know as little as possible?'",
	},
	{
		title: "Open Ecosystem",
		icon: <Heart />,
		description: "Transparency breeds trust. We are committed to maintaining an open source that allows the global community to verify, fork, and improve our protocols.",
	},
];
