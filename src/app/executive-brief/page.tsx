import { BookDemoRouteModal } from "@/components/book-demo/BookDemoRouteModal";
import { Header } from "@/components/Header";

export default function ExecutiveBriefPage() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-72px)] bg-[#F8FAFC] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#16B2C3]">
            Expergo
          </p>
          <h1 className="text-3xl font-bold text-[#101828] sm:text-4xl">
            Access the Executive Brief
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#667085]">
            Request a leadership view of portfolio control across signals, execution, external insights, and compliance.
          </p>
        </div>
      </main>
      <BookDemoRouteModal mode="brief" />
    </>
  );
}
