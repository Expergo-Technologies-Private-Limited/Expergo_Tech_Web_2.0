"use client";

import { useRouter } from "next/navigation";
import { BookDemoModal, type BookDemoMode } from "./BookDemoModal";

export function BookDemoRouteModal({
  mode,
  returnToPreviousPage,
}: {
  mode: BookDemoMode;
  returnToPreviousPage?: boolean;
}) {
  const router = useRouter();

  const close = () => {
    if (returnToPreviousPage) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  return <BookDemoModal open onClose={close} mode={mode} />;
}
