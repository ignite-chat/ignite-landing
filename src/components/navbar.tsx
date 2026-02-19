"use client";

import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Logo } from "@/components/logo";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (href: string) => {
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "Changelog", href: "/changelog" },
    { name: "Open Source", href: "/#open-source" },
    { name: "FAQ", href: "/#faq" },
    { name: "Download", href: "/download" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <div className="mt-4 mx-4 w-full max-w-4xl">
        <nav
          className="
          relative backdrop-blur-2xl bg-white/40 dark:bg-black/40 border border-black/5 dark:border-white/10 rounded-2xl
          transition-all duration-500 ease-out shadow-2xl
        "
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-black/5 to-black/10 dark:from-white/5 dark:to-white/10 pointer-events-none"></div>
          <div className="relative px-4 lg:px-6">
            <div className="flex items-center justify-between h-14 gap-4">
              <Link
                to="/"
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => handleScroll("/")}
              >
                <Logo />
              </Link>

              <div className="hidden lg:flex items-center">
                <div className="flex items-center space-x-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => handleScroll(link.href)}
                      className={`text-sm font-medium transition-colors duration-150 ${
                        pathname === link.href ||
                        (pathname === "/" &&
                          link.href.startsWith("/#") &&
                          hash === link.href.substring(1))
                          ? "text-black dark:text-white"
                          : "text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <Link 
                  to="/download" 
                  className="relative px-4 py-2 rounded-md bg-linear-to-b from-[hsl(12,85%,63%)] to-[hsl(12,85%,55%)] text-white text-sm font-bold flex items-center space-x-2 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] shadow-primary/20 border-none cursor-pointer"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span className="text-white">Get Ignite</span>
                  <div className="absolute inset-0 rounded-md bg-orange-500/10 blur-lg -z-10 opacity-30"></div>
                </Link>

                <div className="lg:hidden">
                  <button
                    className="text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white p-2 transition-colors duration-150"
                    onClick={toggleMobileMenu}
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <Menu className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`lg:hidden overflow-hidden transition-all duration-300 ${
                isMobileMenuOpen ? "h-auto opacity-100 pb-4" : "h-0 opacity-0"
              }`}
            >
              <div className="border-t border-black/5 dark:border-white/10 pt-4 flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => handleScroll(link.href)}
                    className={`text-sm font-medium transition-colors duration-150 ${
                      pathname === link.href
                        ? "text-black dark:text-white"
                        : "text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
