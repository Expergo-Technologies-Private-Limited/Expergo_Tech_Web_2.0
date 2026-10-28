"use client";

import { useMemo, useState } from "react";
import GSTScrollReveal from "./GSTScrollReveal";

const borrowers = [
  { name: "Aarav Components", gstins: "3 / 3", months: "12 / 12", status: "Ready for review", kind: "ready" },
  { name: "Meridian Packaging", gstins: "2 / 2", months: "12 / 12", status: "Ready for review", kind: "ready" },
  { name: "Northstar Trading", gstins: "2 / 3", months: "9 / 12", status: "Coverage gap", kind: "gap" },
  { name: "Vertex Textiles", gstins: "1 / 2", months: "6 / 12", status: "Awaiting data", kind: "wait" },
];

export default function GSTBorrowerCoverage() {
  const [filter, setFilter] = useState("All borrowers");
  const rows = useMemo(() => filter === "All borrowers" ? borrowers : borrowers.filter((b) => filter === "Ready for review" ? b.kind === "ready" : b.kind !== "ready"), [filter]);
  return (
    <GSTScrollReveal>
      <section className="gst-coverage-section" aria-labelledby="gst-coverage-title">
        <header className="gst-section-heading" data-gst-reveal-item>
          <span className="gst-section-eyebrow">BORROWER COVERAGE</span>
          <h2 id="gst-coverage-title">Know what you can see. And where <span>the gaps are.</span></h2>
          <p>An illustrative coverage dashboard keeps data availability<br className="gst-section-break" /> and review status visible before you interpret a trend.</p>
        </header>
        <div className="gst-coverage" data-gst-reveal-item>
          <aside className="gst-coverage__nav">
            <strong>EarlySafe workspace</strong>
            <span>Illustrative portfolio</span>
            <a href="#gst-coverage-title">◷ Review workspace</a>
            <a href="#gst-coverage-title">↗ Business analytics</a>
            <a className="is-active" href="#gst-coverage-title">▦ Borrower coverage</a>
          </aside>
          <div className="gst-coverage__main">
            <div className="gst-coverage__top">
              <h3>Borrower coverage</h3>
              <label>Show <select value={filter} onChange={(e) => setFilter(e.target.value)}><option>All borrowers</option><option>Ready for review</option><option>Need data follow-up</option></select></label>
            </div>
            <div className="gst-coverage__stats">
              <div><span>Illustrative borrowers</span><strong>4</strong></div>
              <div><span>Ready for review</span><strong>2</strong></div>
              <div><span>Need data follow-up</span><strong>2</strong></div>
            </div>
            <div className="gst-coverage__table-wrap">
              <table>
                <thead><tr><th>Borrower</th><th>GSTINs covered</th><th>Months available</th><th>Status</th></tr></thead>
                <tbody>{rows.map((borrower) => <tr key={borrower.name}><td>{borrower.name}</td><td>{borrower.gstins}</td><td>{borrower.months}</td><td><span className={`gst-status gst-status--${borrower.kind}`}>{borrower.status}</span></td></tr>)}</tbody>
              </table>
            </div>
            <p className="gst-coverage__note">Showing {rows.length} of 4 illustrative borrowers. Coverage does not imply completeness or verification of source data.</p>
          </div>
        </div>
      </section>
    </GSTScrollReveal>
  );
}
