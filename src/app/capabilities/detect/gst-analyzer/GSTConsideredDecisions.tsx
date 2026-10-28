import Image from "next/image";
import GSTScrollReveal from "./GSTScrollReveal";

const principles = [
  { number: "01", label: "EVIDENCE FIRST", title: "Keep the numbers visible", text: "Read the narrative alongside the visual trend and its reporting period.", scene: "/images/gst-analyzer/principles-scene-left.png", visual: "/images/gst-analyzer/visual-evidence-first.png" },
  { number: "02", label: "CONTEXT ALWAYS", title: "Make limitations expicit", text: "Data gaps, business seasonality and source quality can change the interpretation.", scene: "/images/gst-analyzer/principles-scene-center.png", visual: "/images/gst-analyzer/visual-context-always.png" },
  { number: "03", label: "HUMAN JUDGEMENT", title: "Support the reviewer", text: "AI interpretation helps frame inquiry. Lending and fraud conclusions remain with qualified teams.", scene: "/images/gst-analyzer/principles-scene-right.png", visual: "/images/gst-analyzer/visual-human-judgement.png" },
];

export default function GSTConsideredDecisions() {
  return (
    <GSTScrollReveal>
      <section className="gst-principles" aria-labelledby="gst-principles-title">
        <header className="gst-section-heading" data-gst-reveal-item>
          <span className="gst-section-eyebrow gst-section-eyebrow--blue">DESIGNED FOR CONSIDERED DECISIONS</span>
          <h2 id="gst-principles-title">Clarity you can put into <span>a review.</span></h2>
          <p>Keep observations, interpretation and judgement distinct<br className="gst-section-break" /> throughout the analytical journey.</p>
        </header>
        <div className="gst-principles__grid">
          {principles.map((item) => (
            <div className={`gst-principles__column gst-principles__column--${item.number}`} key={item.number}>
              <div className="gst-principles__scene" data-gst-reveal-item><Image src={item.scene} alt="" fill sizes="(max-width: 760px) 100vw, 370px" /></div>
              <article className="gst-principles__card" data-gst-reveal-item>
                <Image className="gst-principles__visual" src={item.visual} alt="" width={314} height={121} />
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </div>
          ))}
        </div>
      </section>
    </GSTScrollReveal>
  );
}
