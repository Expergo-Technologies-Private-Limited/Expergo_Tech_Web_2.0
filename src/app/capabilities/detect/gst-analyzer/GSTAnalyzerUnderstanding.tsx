import Image from "next/image";

const steps = [
  {
    phase: "SEE",
    title: "1.Bring business performance into view",
    description:
      "Explore sales, purchases and filing patterns together, across periods, without losing the underlying context.",
    image: "/images/gst-analyzer/gst-diagram.png",
    imageAlt: "Diagram linking business activity to performance charts",
    widget: "diagram",
  },
  {
    phase: "UNDERSTAND",
    title: "2.Translate movement into meaning",
    description:
      "Use role-specific interpretation to understand what a change could mean and which evidence to examine next.",
    image: "/images/gst-analyzer/gst-coverage.png",
    imageAlt: "A trend line leading to an analytics chart",
    widget: "coverage",
  },
  {
    phase: "ACT",
    title: "3.Make the next review more focused",
    description:
      "Connect visual observations to practical review questions, with monitoring as a supporting layer.",
    image: "/images/gst-analyzer/gst-multi-signal.png",
    imageAlt: "Checklist and business performance chart",
    widget: "multi-signal",
  },
];

export default function GSTAnalyzerUnderstanding() {
  return (
    <section className="gst-understanding" aria-labelledby="gst-understanding-title">
      <div className="gst-understanding__eyebrow">
        01 / FROM RETURNS TO UNDERSTANDING
      </div>
      <h2 id="gst-understanding-title">
        GST data tells a story. Make it <span>easier to read.</span>
      </h2>
      <p className="gst-understanding__intro">
        Move from rows of reported transactions to the patterns,
        <br className="gst-understanding__desktop-break" /> changes and questions that matter in a borrower review.
      </p>

      <div className="gst-understanding__cards">
        {steps.map((step, index) => (
          <article
            className="gst-understanding__card"
            key={step.phase}
            style={{ "--card-index": index } as React.CSSProperties}
          >
            <div className="gst-understanding__widget">
              <Image
                className={`gst-understanding__image gst-understanding__image--${step.widget}`}
                src={step.image}
                alt={step.imageAlt}
                width={448}
                height={176}
              />
            </div>
            <div className="gst-understanding__phase">{step.phase}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
