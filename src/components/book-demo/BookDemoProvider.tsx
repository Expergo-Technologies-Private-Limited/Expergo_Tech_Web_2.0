"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { BookDemoMode } from "./BookDemoModal";

function getNodeText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getNodeText).join(" ");
  }

  return "";
}

export function BookDemoButton({
  className,
  children,
  mode,
}: {
  className?: string;
  children: ReactNode;
  mode?: BookDemoMode;
}) {
  const resolvedMode =
    mode ?? (/brief|breif/i.test(getNodeText(children)) ? "brief" : "demo");

  return (
    <Link
      href={resolvedMode === "brief" ? "/executive-brief" : "/book-demo"}
      className={className}
    >
      {children}
    </Link>
  );
}
