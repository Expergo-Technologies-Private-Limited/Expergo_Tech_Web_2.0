import { App } from "antd";
import GSTScrollReveal from "./GSTScrollReveal";

const questions = [
  {
    question: "What is the focus of EarlySafe GST Intelligence?",
    answer: "This proposed marketing experience places visual GST analytics and role-specific AI interpretation at the centre. Borrower coverage and monitoring support the analytical journey.",
  },
  {
    question: "How do Credit Risk and FRM interpretations differ?",
    answer: "The Credit Risk view frames questions about business momentum and operating patterns. The FRM view focuses on unusual movements and corroboration. Neither view treats an observation as proof of a credit outcome or fraud.",
  },
  {
    question: "Are these live borrower records or AI results?",
    answer: "No. Every borrower, figure, dashboard status and interpretation shown here is illustrative. Chart controls work locally with synthetic data; the role toggle switches predefined sample narratives.",
  },
  {
    question: "Does a GST trend establish repayment capacity or fraud?",
    answer: "A GST trend is one input to a broader assessment. Reviewers should corroborate it with cash flows, financial information, source records and business context before reaching a conclusion.",
  },
  {
    question: "Can we discuss our team’s workflow?",
    answer: "Use the walkthrough form below to prepare a downloadable request for your team. This standalone prototype does not transmit information or connect to a booking service.",
  },
];

export default function GSTFaq() {
  return (
    <GSTScrollReveal>
      <section className="gst-faq" aria-labelledby="gst-faq-title">
        <header className="gst-section-heading" data-gst-reveal-item>
          <span className="gst-section-eyebrow">QUESTIONS, ANSWERED</span>
          <h2 id="gst-faq-title">A closer look at <span>Earlysafe GST Intelligence.</span></h2>
        </header>
        <div className="gst-faq__list" data-gst-reveal-item>
          {questions.map((item) => (
            <details key={item.question}>
              <summary><span>{item.question}</span><b aria-hidden="true">+</b></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
     </section>
    </GSTScrollReveal>
  );
}

