"use client";

import React from "react";
import { usePathname } from "next/navigation";
import SplashCursor from "@/components/reactbits/SplashCursor";

export default function SplashCursorGate() {
  const pathname = usePathname();

  // Optional: hide on specific pages if needed
  // Currently enabled on all pages
  return <SplashCursor />;
}
