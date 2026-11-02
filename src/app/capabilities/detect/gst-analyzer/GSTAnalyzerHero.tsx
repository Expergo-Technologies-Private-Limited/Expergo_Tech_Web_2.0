"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BookDemoButton } from "@/components/book-demo/BookDemoProvider";

const months = ["APR", "MAY", "JUN", "JUL", "AUG", "SEP"];

function GSTDashboardPreview() {
  const chartRef = useRef<HTMLDivElement>(null);
  const [isChartVisible, setIsChartVisible] = useState(false);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsChartVisible(entry.isIntersecting && entry.intersectionRatio >= 0.35),
      { threshold: 0.35 },
    );

    observer.observe(chart);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="gst-dashboard" aria-label="Illustrative GST analytics dashboard">
      <div className="gst-dashboard__topbar">
        <span>EARLYSAFE GST INTELLIGENCE</span>
        <span className="gst-dashboard__dots" aria-hidden="true">● ● ●</span>
      </div>

      <div className="gst-dashboard__body">
        <div className="gst-dashboard__company">
          <span>XYZ Private Limited</span>
          <span className="gst-dashboard__badge">Illustrative</span>
        </div>

        <div className="gst-dashboard__stats" aria-label="GST performance summary">
          <div className="gst-dashboard__stat">
            <span>6-month reported sales</span>
            <strong>₹24.8 Cr</strong>
          </div>
          <div className="gst-dashboard__stat">
            <span>Sales vs prior period</span>
            <strong>+12.4%</strong>
          </div>
          <div className="gst-dashboard__stat">
            <span>Filing coverage</span>
            <strong>6 / 6</strong>
          </div>
        </div>

        <div
          ref={chartRef}
          className={`gst-chart${isChartVisible ? " gst-chart--active" : ""}`}
          role="img"
          aria-label="Illustrative sales and purchases trend from April to September"
        >
          <Image
            className="gst-chart__layer gst-chart__grid"
            src="/images/gst-analyzer/chart-grid.svg"
            alt=""
            width={448}
            height={128}
            aria-hidden="true"
          />
          <Image
            className="gst-chart__layer gst-chart__sales"
            src="/images/gst-analyzer/chart-sales.svg"
            alt=""
            width={448}
            height={124}
            aria-hidden="true"
          />
          <Image
            className="gst-chart__layer gst-chart__purchases"
            src="/images/gst-analyzer/chart-purchases.svg"
            alt=""
            width={449}
            height={58}
            aria-hidden="true"
          />
          <svg
            className="gst-chart__layer gst-chart__line"
            width="448.06"
            height="94.656"
            viewBox="0 0 448.06 94.656"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              className="gst-chart__moving-line"
              d="M0 93.1295L89.61 68.8821L179.22 82.5872L268.83 41.472L358.44 46.7432L448.05 1.41107"
              pathLength={1}
              fill="none"
              strokeWidth="3.16271"
              stroke="#15B5C1"
            />
          </svg>
          <div className="gst-chart__months" aria-hidden="true">
            {months.map((month) => <span key={month}>{month}</span>)}
          </div>
        </div>

        <div className="gst-insight">
          <strong>✧ CREDIT RISK INTERPRETATION</strong>
          <p>
            Sales are expanding, with a softer August followed by a September recovery.
            Validate the trend against cash flows and the borrower’s operating cycle.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function GSTAnalyzerHero() {
  return (
    <section className="gst-hero" aria-labelledby="gst-hero-title">
      <div className="gst-hero__glow" aria-hidden="true" />
      <div className="gst-hero__content">
        <div className="gst-hero__copy">
          <div className="gst-hero__eyebrow">Earlysafe GST Intelligence for lending teams</div>
          <h1 id="gst-hero-title">
            <span>See the business.</span>
            <span className="gst-hero__accent">Understand the risk.</span>
          </h1>
          <p className="gst-hero__description">
            Turn GST data into a clear view of business performance
            <br className="gst-hero__desktop-break" /> with visual analytics and AI interpretation shaped for Credit
            <br className="gst-hero__desktop-break" /> Risk and FRM teams..
          </p>
          <div className="gst-hero__actions">
            <BookDemoButton className="gst-button gst-button--primary">REQUEST ACCESS</BookDemoButton>
            <Link className="gst-button gst-button--secondary" href="#gst-capabilities">
              VIEW CAPABILITIES
            </Link>
          </div>
        </div>

        <div className="gst-hero__visual">
          <GSTDashboardPreview />
        </div>
      </div>

      <div className="gst-roles" id="gst-capabilities" aria-label="GST Analyzer teams and use cases">
        <strong>A common view. A role-specific lens.</strong>
        <span>Credit Risk</span>
        <span>Fraud Risk Management</span>
        <span>Portfolio review</span>
        <span>Borrower monitoring</span>
      </div>
    </section>
  );
}
