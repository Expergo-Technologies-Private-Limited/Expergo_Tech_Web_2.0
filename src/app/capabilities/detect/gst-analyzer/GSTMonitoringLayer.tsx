import { BookDemoButton } from "@/components/book-demo/BookDemoProvider";
import GSTScrollReveal from "./GSTScrollReveal";

const reviewPrompts = [
  { color: "orange", title: "Sales movement to review", text: "Compare the change with previous periods and the borrower’s usual seasonality." },
  { color: "slate", title: "A focused follow-up", text: "Use role-specific questions to decide what additional evidence is needed." },
  { color: "green", title: "A filing gap needs context", text: "Check data availability and reporting continuity before interpreting the gap." },
];

export default function GSTMonitoringLayer() {
  return (
    <GSTScrollReveal>
      <section className="gst-monitoring" aria-labelledby="gst-monitoring-title">
        <div className="gst-monitoring__inner">
          <div className="gst-monitoring__copy" data-gst-reveal-item>
            <span>MONITORING AS A SUPPORTING LAYER</span>
            <h2 id="gst-monitoring-title">Keep the next change<br /><em>in perspective.</em></h2>
            <p>A signal is a starting point for review. Bring it back to the visual history and business context before drawing a conclusion.</p>
            <small>Illustrative monitoring concepts; alert delivery and live data connections are outside this prototype.</small>
            <BookDemoButton className="gst-button gst-button--primary">REQUEST ACCESS</BookDemoButton>
          </div>
          <div className="gst-monitoring__prompts">
            {reviewPrompts.map((item, index) => (
              <article key={item.title} className="gst-monitoring__prompt" data-gst-reveal-item style={{ "--prompt-index": index } as React.CSSProperties}>
                <span className={`gst-monitoring__dot gst-monitoring__dot--${item.color}`} />
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </GSTScrollReveal>
  );
}
