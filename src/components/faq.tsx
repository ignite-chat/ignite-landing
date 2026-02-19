"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const accordionItems = [
    {
      title: "What core features does Ignite include?",
      content: (
        <div className="text-muted-foreground leading-relaxed">
          Ignite is packed with Discord-inspired features: Real-time messaging with Markdown support, organized Guilds (servers) with text channels and categories, a comprehensive friends system, and rich direct messaging capabilities.
        </div>
      ),
    },
    {
      title: "What is the technology stack?",
      content: (
        <div className="text-muted-foreground leading-relaxed">
          Ignite is built on a modern stack: <span className="font-semibold text-foreground">React 18</span> and <span className="font-semibold text-foreground">TypeScript</span>, bundled with <span className="font-semibold text-foreground">Vite 5</span>. State is managed by <span className="font-semibold text-foreground">Zustand</span>, styling via <span className="font-semibold text-foreground">Tailwind CSS</span>, and real-time events use <span className="font-semibold text-foreground">Laravel Echo + Reverb</span>.
        </div>
      ),
    },
    {
      title: "Can I run Ignite as a desktop application?",
      content: (
        <div className="text-muted-foreground leading-relaxed">
          Yes! The project includes an <span className="font-semibold text-foreground">Electron</span> build configuration. You can run <code>npm run build:electron</code> to package Ignite as a native desktop app for Windows, macOS, or Linux.
        </div>
      ),
    },
    {
      title: "How flexible is the permission system?",
      content: (
        <div className="text-muted-foreground leading-relaxed">
          Extremely flexible. Ignite offers a granular role-based permission system with hierarchy levels, color-coded member names, and specific access controls (view, send, manage) on a per-role and per-channel basis.
        </div>
      ),
    },
    {
      title: "What is required to self-host Ignite?",
      content: (
        <div className="text-muted-foreground leading-relaxed">
          To self-host, you&apos;ll need a Node.js 18+ environment for the frontend and a running Ignite API backend. Configuration is handled securely via <code>.env</code> variables for API endpoints and WebSocket credentials.
        </div>
      ),
    },
  ];

  return (
    <motion.section
      id="faq"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2, type: "spring", bounce: 0 }}
      className="relative w-full max-w-4xl mx-auto px-6 py-32 flex flex-col items-center"
    >
      <div className="flex flex-col gap-4 justify-center items-center mb-16 text-center">
        <h4 className="text-3xl font-bold sm:text-4xl text-foreground">
          Frequently Asked Questions
        </h4>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Everything you need to know about Ignite, self-hosting, and our open-source mission.
        </p>
      </div>
      <div className="w-full">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-lg px-6 bg-secondary/20 data-[state=open]:bg-secondary/40 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-medium hover:text-orange-500 py-6 cursor-pointer">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
