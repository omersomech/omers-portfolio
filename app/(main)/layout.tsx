"use client";
import { Home, Linkedin, MessageCircle, User } from "lucide-react";
import { FloatingNav } from "../components/ui/floating-navbar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    {
      name: "Github",
      link: "https://github.com/omersomech",

      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/omersomech",
      icon: <Linkedin className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "projects",
      link: "/projects",
      icon: (
        <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      {children}
    </div>
  );
}
