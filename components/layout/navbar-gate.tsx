"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";

export default function NavbarGate() {
  const pathname = usePathname();

  if (pathname?.startsWith("/logs/") && pathname !== "/logs") {
    return null;
  }

  return <Navbar />;
}
