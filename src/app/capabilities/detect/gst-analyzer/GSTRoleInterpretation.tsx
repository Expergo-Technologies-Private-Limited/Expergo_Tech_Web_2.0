"use client";

import { useState } from "react";
import Image from "next/image";
import GSTScrollReveal from "./GSTScrollReveal";

type Role = "credit" | "frm";

const roleContent = {
  credit: {
    category: "CREDIT RISK / BUSINESS PERFORMANCE",
    title: "Growth is visible. Test the quality of the momentum.",
    intro: "Reported sales rise across the six-month view, with a dip in August and recovery in September. Purchases broadly follow the sales trajectory. These movements frame a deeper business review.",
    prompts: [
      "Compare reported growth with bank cash flows and receivable movements.",
      "Check whether September activity reflects seasonality or order timing.",
      "Discuss the operating cycle and working-capital requirements with the borrower.",
    ],
  },
  frm: {
    category: "FRM / PATTERN REVIEW",
    title: "A movement is a question, not a conclusion.",
    intro: "September sales increase after an August decline. This movement alone does not establish suspicious activity. Review the source evidence and assess whether the business explanation is consistent.",
    prompts: [
      "Corroborate the September movement with invoices and supporting records.",
      "Review whether sales and purchase timing fit the stated business activity.",
      "Check data gaps and other available evidence before escalating a concern..",
    ],
  },
} as const;

export default function GSTRoleInterpretation() {
  const [role, setRole] = useState<Role>("credit");
  const content = roleContent[role];
  return (
    <GSTScrollReveal>
      <section className="gst-role-section" aria-labelledby="gst-role-title">
        <header className="gst-section-heading" data-gst-reveal-item>
          <span className="gst-section-eyebrow">AI INTERPRETATION FOR YOUR ROLE</span>
          <h2 id="gst-role-title">The same data. A <span>different set of questions.</span></h2>
          <p>Credit Risk and Fraud Risk Management teams approach the same borrower differently. Explore how the interpretation changes with the review objective.</p>
        </header>
        <div className="gst-role-tabs" role="tablist" aria-label="Review role" data-gst-reveal-item>
          <button type="button" role="tab" aria-selected={role === "credit"} className={role === "credit" ? "is-active" : ""} onClick={() => setRole("credit")}>Credit Underwriter</button>
          <button type="button" role="tab" aria-selected={role === "frm"} className={role === "frm" ? "is-active" : ""} onClick={() => setRole("frm")}>FRM Analyst</button>
        </div>
        <article key={role} className="gst-role-panel" role="tabpanel" data-gst-reveal-item>
          <div className="gst-role-panel__head">
            <div>
              <span>{content.category}</span>
              <h3>{content.title}</h3>
            </div>
            <span className="gst-role-panel__icon" aria-hidden="true">
              <Image src="/images/gst-analyzer/interpretation-file-text.svg" alt="" width={24} height={24} />
            </span>
          </div>
          <p className="gst-role-panel__intro">{content.intro}</p>
          <ul>{content.prompts.map((prompt) => <li key={prompt}>{prompt}</li>)}</ul>
          <div className="gst-role-panel__chips"><span>Sales trend</span><span>Purchase movement</span><span>Filing history</span></div>
          <small>Interpretation supports professional judgement; corroborate observations with source records and other borrower information.</small>
        </article>
      </section>
    </GSTScrollReveal>
  );
}
