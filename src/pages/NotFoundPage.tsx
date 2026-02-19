"use client";

import React from "react";
import { Link } from "react-router-dom";
import { AlertCircle, ChevronLeft, Terminal as TerminalIcon } from "lucide-react";
import { motion } from "framer-motion";
import { DecorIcon } from "@/components/ui/decor-icon";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground items-center justify-center px-6">
      <h1 className="text-9xl font-black tracking-tighter text-foreground">
        404
      </h1>
    </div>
  );
}
