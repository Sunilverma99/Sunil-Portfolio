"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative  flex items-center justify-center bg-slate-400">
      <Navbar className=" top-1" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(" fixed top-10 inset-x-0  mx-auto z-50 ", className)}
     >
      <Menu setActive={setActive}>
        <Link href={"#skills"}>
        <MenuItem setActive={setActive} active={active} 
         item="Skills">
        </MenuItem></Link>
        <Link  href={"#projects"}>
        <MenuItem setActive={setActive} active={active} item="Projects">
        </MenuItem></Link>
        <Link href={"#education"}>
        <MenuItem setActive={setActive} active={active} item="Education">
        </MenuItem></Link>
        {/* <MenuItem setActive={setActive} active={active} item="Achivements">
        </MenuItem> */}
        <Link href={"#contact"}>
        <MenuItem setActive={setActive} active={active} item="Contact me">
        </MenuItem></Link>
      </Menu>
    </div>
  );
}
