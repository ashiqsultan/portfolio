"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { Home, Briefcase, Mail, Presentation, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function navigateTo(path: string) {
    router.push(path);
    setIsMenuOpen(false);
  }

  const NavButton = ({ path, icon, text }: any) => (
    <Button
      onClick={() => navigateTo(path)}
      variant="ghost"
      size="sm"
      className="w-full justify-start"
    >
      {icon}
      <span className="ml-2">{text}</span>
    </Button>
  );

  return (
    <div className="border bg-card text-card-foreground p-3 shadow-sm md:rounded-lg flex flex-col md:flex-row justify-between items-center top-0 sticky z-50">
      <div className="w-full md:w-auto flex justify-between items-center">
        <Image
          src="/avatar.jpeg"
          alt="Ashiq Sultan"
          width={100}
          className="w-10 h-10 mr-2"
          height={100}
        />
        <Logo onClick={() => navigateTo("/")} />
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Navigation Menus */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row w-full md:w-auto space-y-2 md:space-y-0 md:space-x-3 items-stretch md:items-center mt-3 md:mt-0`}
      >
        <NavButton path="/" icon={<Home className="h-4 w-4" />} text="Home" />
        <NavButton
          path="/#projects"
          icon={<Presentation className="h-4 w-4" />}
          text="Projects"
        />
        <NavButton
          path="/#work"
          icon={<Briefcase className="h-4 w-4" />}
          text="Work"
        />
        <NavButton
          path="/#contact"
          icon={<Mail className="h-4 w-4" />}
          text="Contact"
        />
        <ModeToggle />
      </div>
    </div>
  );
}
