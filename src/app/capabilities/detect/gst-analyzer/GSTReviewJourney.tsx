import type { CSSProperties } from "react";
import Image from "next/image";
import GSTScrollReveal from "./GSTScrollReveal";


const steps = [
  { title: "Check the coverage", text: "Start with the borrower, reporting period and available GST information.", icon: "/images/gst-analyzer/journey-account-tree.svg" },
  { title: "Read the visual story", text: "Compare trends and inspect the periods where business behaviour changes.", icon: "/images/gst-analyzer/chart-grid.svg" },
  { title: "Apply your role’s lens", text: "Frame the observations around Credit Risk or FRM review priorities.", icon: "/images/gst-analyzer/interpretation-file-text.svg" },
  { title: "Focus the next action", text: "Validate observations and record the questions that need borrower follow-up.", icon: "/images/gst-analyzer/chart-sales.svg" },
];

export default function GSTReviewJourney() {
  return (
    <GSTScrollReveal>
      <section className="gst-journey" aria-labelledby="gst-journey-title">
        <header className="gst-section-heading" data-gst-reveal-item>
          <span className="gst-section-eyebrow">A CLEAR REVIEW JOURNEY</span>
          <h2 id="gst-journey-title">From GST records to<br />a better <span>borrower conversation..</span></h2>
        </header>
        <div className="gst-journey__grid">
          {steps.map((step, index) => (
            <article
              className="gst-journey__card"
              key={step.title}
              data-gst-reveal-item
              style={{ "--journey-index": index } as CSSProperties}
            >
              <span className="gst-journey__icon">
                <Image src={step.icon} alt={step.title} width={42} height={42} />
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>
    </GSTScrollReveal>
  );
}


