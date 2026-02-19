import { GithubIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  {
    title: "Overview",
    href: "/",
  },
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Changelog",
    href: "/changelog",
  },
  {
    title: "Open Source",
    href: "#open-source",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
  {
    title: "About",
    href: "/about",
  },
];

export function Footer() {
  return (
    <div className="flex min-h-[400px] flex-col mt-20">
      <footer className="border-t bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-start gap-x-8 gap-y-10 py-12 sm:flex-row xl:px-0">
            <div className="max-w-xs">
              <ul className="mt-6 flex flex-wrap items-center gap-4">
                {footerLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      to={href}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe Newsletter */}
            <div className="w-full max-w-sm sm:ml-auto">
              <h6 className="font-semibold text-foreground">Stay up to date</h6>
              <form className="mt-4 flex flex-col sm:flex-row items-stretch gap-2">
                <Input 
                  placeholder="Enter your email" 
                  type="email" 
                  className="bg-background"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold shrink-0">Subscribe</Button>
              </form>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 py-8 sm:flex-row xl:px-0">
            {/* Copyright */}
            <span className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link to="/" className="font-medium hover:text-foreground">
                Ignite
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-4">
              <Button variant="outline" asChild className="gap-2">
                <Link to="https://github.com/ignite-chat/ignite-frontend" target="_blank">
                  <GithubIcon className="h-4 w-4" />
                  Download source on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
