"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed justify-between top-10 z-50 mx-auto max-w-2xl hidden md:flex", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="All Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">All Courses</HoveredLink>
            <HoveredLink href="/web-dev">Basic Music Theory</HoveredLink>
            <HoveredLink href="/web-dev">Advanced Composition</HoveredLink>
            <HoveredLink href="/web-dev">Song Writing</HoveredLink>
            <HoveredLink href="/web-dev">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact Us"
        ></MenuItem>
      </Menu>
    </div>
  );
}
