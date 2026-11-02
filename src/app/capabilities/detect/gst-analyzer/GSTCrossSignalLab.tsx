import GSTScrollReveal from "./GSTScrollReveal";

const signals = [
  { number: "01", title: "Sales & business momentum", text: "Review reported sales trajectories, period movements and seasonal patterns. Identify the months that merit a closer conversation.", side: "left" },
  { number: "02", title: "Purchase & operating patterns", text: "Compare purchases with sales to frame questions about the operating cycle and shifts in trading activity.", side: "right" },
  { number: "03", title: "Filing behaviour & continuity", text: "Keep filing gaps and delays in view. Distinguish missing information from evidence of business change.", side: "left" },
  { number: "04", title: "Coverage & analytical context", text: "Understand the reporting period and GSTIN coverage behind each view, so interpretations reflect the available evidence.", side: "right" },
];

export default function GSTCrossSignalLab() {
  return (
    <GSTScrollReveal>
      <section className="gst-cross-signal" aria-labelledby="gst-cross-title">
        <header className="gst-section-heading" data-gst-reveal-item>
          <span className="gst-section-eyebrow gst-section-eyebrow--blue">CROSS-SIGNAL LAB</span>
          <h2 id="gst-cross-title">Explore the signals in their <span>business context.</span></h2>
          <p>Isolated ratios can look benign. Expergo models how borrower interpretation sharpens when multiple<br className="gst-section-break" /> independent movements combine.</p>
        </header>
        <div className="gst-cross-signal__board" data-gst-reveal-item>
          <div className="gst-cross-signal__axis" aria-hidden="true"><i /><i /><i /><i /></div>
          {signals.map((signal) => (
            <article key={signal.number} data-gst-reveal-item className={`gst-signal-card gst-signal-card--${signal.side}`}>
              <span>{signal.number}</span>
              <h3>{signal.title}</h3>
              <p>{signal.text}</p>
            </article>
          ))}
        </div>
      </section>
    </GSTScrollReveal>
  );
}
