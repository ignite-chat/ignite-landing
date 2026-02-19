"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { DecorIcon } from "@/components/ui/decor-icon";
import { Users, Phone, Lock, Github, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

type FeatureType = {
	title: string;
	icon: React.ReactNode;
	description: string;
	detailedDescription: string;
	benefits: string[];
};

export default function Features() {
	return (
		<section id="features" className="py-24 bg-background">
			<div className="mx-auto max-w-5xl px-6">
				<div className="flex flex-col items-center gap-4 mb-14 text-center">
					<Link 
						to="/about"
						className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-500 shadow-xs hover:bg-zinc-200 dark:hover:bg-zinc-800/80 transition-all cursor-pointer group/badge"
					>
						<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse group-hover/badge:scale-125 transition-transform" />
						Brought to you by the Developers @ sellauth
					</Link>
					<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
						Speedy workflow. <br />
						<span className="text-muted-foreground">Uncompromising security.</span>
					</h2>
				</div>

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

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
						{features.map((feature) => (
							<Dialog key={feature.title}>
								<DialogTrigger asChild>
									<button
										className="group relative p-8 flex flex-col items-start gap-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/50 text-left w-full cursor-pointer outline-none focus-visible:bg-zinc-50 dark:focus-visible:bg-zinc-900/50"
									>
										<div className="size-7 text-muted-foreground transition-colors group-hover:text-orange-500">
											{feature.icon}
										</div>
										
										<div className="space-y-1">
											<h3 className="font-medium text-lg leading-tight tracking-tight">{feature.title}</h3>
											<p className="text-muted-foreground text-sm leading-relaxed">
												{feature.description}
											</p>
										</div>

										{/* Dashed separators */}
										<DashedLine className="right-5 bottom-0 left-5 group-last:hidden md:top-5 md:right-0 md:bottom-5 md:left-full" />
									</button>
								</DialogTrigger>
								<DialogContent className="sm:max-w-[425px]">
									<DialogHeader>
										<div className="size-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4">
											{feature.icon}
										</div>
										<DialogTitle className="text-2xl font-semibold tracking-tight">
											{feature.title}
										</DialogTitle>
										<DialogDescription className="text-muted-foreground pt-2 text-base leading-relaxed">
											{feature.detailedDescription}
										</DialogDescription>
									</DialogHeader>
									<div className="grid gap-4 py-4">
										<h4 className="text-sm font-bold uppercase tracking-widest text-foreground/70">Key Benefits</h4>
										<ul className="grid gap-3">
											{feature.benefits.map((benefit) => (
												<li key={benefit} className="flex items-start gap-3 text-sm text-muted-foreground">
													<CheckCircle2 className="size-4 text-orange-500 mt-0.5 shrink-0" />
													<span>{benefit}</span>
												</li>
											))}
										</ul>
									</div>
							</DialogContent>
						</Dialog>
					))}
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

const features: FeatureType[] = [
	{
		title: "Social Graph",
		icon: <Users />,
		description: "Add, remove, or block connections with intuitive ease.",
		detailedDescription: "Our Social Graph engine allows you to map out your entire networking infrastructure with sub-second latency.",
		benefits: [
			"Real-time relationship mapping",
			"Instant permission propagation",
			"Node isolation for security",
			"Scalable to millions of edges"
		]
	},
	{
		title: "Media Cloud",
		icon: <Phone />,
		description: "High-fidelity voice and crystal-clear video calls.",
		detailedDescription: "Experience low-latency streaming protocols optimized for 4K video and spatial audio across all your devices.",
		benefits: [
			"Zero-lag voice protocols",
			"Multi-user screensharing",
			"Global edge relay network",
			"Adaptive bitrate streaming"
		]
	},
	{
		title: "Privacy Protocol (E2EE)",
		icon: <Lock />,
		description: "End-to-end encryption. We cannot view your data, ever.",
		detailedDescription: "Your data is encrypted locally on your device before it ever reaches our servers. This means we have zero access to your messages, calls, or files.",
		benefits: [
			"Full End-to-End Encryption (E2EE)",
			"Zero-knowledge architecture",
			"We can't view or share your data",
			"Post-quantum security primitives"
		]
	},
	{
		title: "Open Source",
		icon: <Github />,
		description: "Built for transparency. A fully auditable source code repository.",
		detailedDescription: "Join the community of developers building the future. All core logic is available under the MIT license.",
		benefits: [
			"Fully auditable codebase",
			"Community-driven roadmap",
			"Developer API access",
			"Forkable infrastructure"
		]
	},
];
