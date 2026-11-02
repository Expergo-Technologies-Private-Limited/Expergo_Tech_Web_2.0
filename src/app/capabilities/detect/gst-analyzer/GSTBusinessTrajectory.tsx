"use client";

import { useState } from "react";
import GSTScrollReveal from "./GSTScrollReveal";

type Metric = "sales" | "growth" | "filing";
type ChartMetric = {
  sales: number[];
  purchases: number[];
  sales12: number[];
  purchases12: number[];
  labels: string[];
  title: string;
  max: number;
  ticks: number[];
  chartType: "line" | "growth" | "filing";
};
const months6 = ["Apr 26", "May 26", "Jun 26", "Jul 26", "Aug 26", "Sep 26"];
const months12 = ["Oct 25", "Nov 25", "Dec 25", "Jan 26", "Feb 26", "Mar 26", ...months6];

const datasets: Record<Metric, ChartMetric> = {
  sales: {
    sales: [3.4, 3.8, 3.5, 4.5, 4.3, 5],
    purchases: [2.8, 3, 2.9, 3.3, 3.1, 3.7],
    sales12: [2.7, 3.1, 3.3, 2.8, 3.6, 3.2, 3.4, 3.8, 3.5, 4.5, 4.3, 5],
    purchases12: [2.1, 2.4, 2.5, 2, 2.7, 2.4, 2.8, 3, 2.9, 3.3, 3.1, 3.7],
    labels: months6,
    title: "Reported sales & purchases (₹ Cr)",
    max: 6,
    ticks: [6, 4.5, 3, 1.5, 0],
    chartType: "line",
  },
  growth: {
    sales: [6, 12, 9, 15, 11, 19],
    purchases: [4, 9, 6, 12, 8, 15],
    sales12: [8, 6, 9, 7, 11, 10, 6, 12, 9, 15, 11, 19],
    purchases12: [5, 4, 7, 6, 8, 7, 4, 9, 6, 12, 8, 15],
    labels: months6,
    title: "Reported sales growth (%)",
    max: 20,
    ticks: [20, 15, 10, 5, 0],
    chartType: "growth",
  },
  filing: {
    sales: [0, 0, 0, 0, 4.7, 0],
    purchases: [0, 0, 0, 0, 0, 0],
    sales12: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4.7, 0],
    purchases12: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    labels: months6,
    title: "Filing timeliness (days after due date)",
    max: 5,
    ticks: [5, 4, 3, 2, 1, 0],
    chartType: "filing",
  },
};

function point(index: number, value: number, length: number, max: number) {
  const x = 52 + index * (610 / Math.max(1, length - 1));
  const y = 270 - (value / max) * 220;
  return `${x},${y}`;
}

export default function GSTBusinessTrajectory() {
  const [period, setPeriod] = useState<6 | 12>(6);
  const [metric, setMetric] = useState<Metric>("sales");
  const [selected, setSelected] = useState(5);
  const data = datasets[metric];
  const labels = period === 6 ? data.labels : months12;
  const sales = period === 6 ? data.sales : data.sales12;
  const purchases = period === 6 ? data.purchases : data.purchases12;
  const chartX = (index: number) => 52 + index * (610 / Math.max(1, labels.length - 1));
  const barX = (index: number) => 52 + (index + 0.5) * (610 / labels.length);
  const chartY = (value: number) => 270 - (value / data.max) * 220;
  const points1 = sales.map((n, i) => point(i, n, sales.length, data.max)).join(" ");
  const points2 = purchases.map((n, i) => point(i, n, purchases.length, data.max)).join(" ");
  const activeValue = sales[Math.min(selected, sales.length - 1)];
  const activeMonth = labels[Math.min(selected, labels.length - 1)];
  const activeValueLabel =
    metric === "sales"
      ? `₹${activeValue.toFixed(1)} Cr`
      : metric === "growth"
        ? `+${activeValue.toFixed(1)}%`
        : activeValue === 0
          ? "On time"
          : `${activeValue.toFixed(1)} days late`;

  return (
    <GSTScrollReveal>
      <section className="gst-explorer" aria-labelledby="gst-explorer-title">
        <header className="gst-section-heading" data-gst-reveal-item>
          <span className="gst-section-eyebrow">VISUAL ANALYTICS, FRONT AND CENTRE</span>
          <h2 id="gst-explorer-title">The business trajectory. Beyond a <span>single number.</span></h2>
          <p>Switch views and periods to explore the illustrative borrower.<br />Select a point to inspect the monthly detail.</p>
        </header>

        <div className="gst-explorer__panel" data-gst-reveal-item>
          <div className="gst-explorer__topline">
            <div>
              <h3>Aarav Components Pvt Ltd</h3>
              <p>GST performance explorer · Synthetic dataset</p>
            </div>
            <div className="gst-segment" aria-label="Reporting period">
              {([6, 12] as const).map((n) => (
                <button type="button" key={n} className={period === n ? "is-active" : ""} onClick={() => { setPeriod(n); setSelected(n - 1); }}>
                  {n} months
                </button>
              ))}
            </div>
          </div>
          <div className="gst-explorer__toolbar">
            <div className="gst-segment" role="tablist" aria-label="Chart metric">
              {([["sales", "Sales & purchases"], ["growth", "Sales growth"], ["filing", "Filing timeliness"]] as const).map(([value, label]) => (
                <button role="tab" aria-selected={metric === value} type="button" key={value} className={metric === value ? "is-active" : ""} onClick={() => { setMetric(value); setSelected(Math.min(selected, 5)); }}>
                  {label}
                </button>
              ))}
            </div>
            <span className="gst-explorer__tag">Illustrative borrower</span>
          </div>

          <div className="gst-explorer__body">
            <div className="gst-explorer__chart-area">
              <div className="gst-explorer__chart-heading">
                <strong>{data.title}</strong>
                <div>
                  {metric === "sales" ? (
                    <><i className="sales-dot" />Sales<i className="purchase-dot" />Purchases</>
                  ) : (
                    <><i className={metric === "growth" ? "sales-dot" : "filing-dot"} />{metric === "growth" ? "Monthly growth" : "Filing status"}</>
                  )}
                </div>
              </div>
              <svg className="gst-explorer__chart" viewBox="0 0 720 350" role="img" aria-label={`${data.title} over ${period} months`}>
                {data.ticks.map((tick) => {
                  const y = chartY(tick);
                  return <g key={tick}><line x1="52" x2="674" y1={y} y2={y} /><text x="42" y={y + 4} textAnchor="end">{metric === "growth" ? `${tick}%` : tick}</text></g>;
                })}
                {data.chartType === "line" && (
                  <>
                    <polyline className="gst-chart-purchase-line" points={points2} />
                    <polyline className="gst-chart-sales-line" points={points1} />
                    {sales.map((n, i) => {
                      const [cx, cy] = point(i, n, sales.length, data.max).split(",");
                      return <circle key={i} className={`gst-explorer__point ${selected === i ? "is-selected" : ""}`} cx={cx} cy={cy} r="5" tabIndex={0} role="button" aria-label={`Select ${labels[i]}`} onClick={() => setSelected(i)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelected(i); } }} />;
                    })}
                  </>
                )}
                {data.chartType === "growth" && sales.map((value, i) => {
                  const barWidth = period === 6 ? 34 : 24;
                  const y = chartY(value);
                  return (
                    <g
                      key={labels[i]}
                      className={`gst-explorer__bar ${selected === i ? "is-selected" : ""}`}
                      tabIndex={0}
                      role="button"
                      aria-label={`Select ${labels[i]}: ${value}% growth`}
                      onClick={() => setSelected(i)}
                      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelected(i); } }}
                    >
                      <rect x={barX(i) - barWidth / 2} y={y} width={barWidth} height={270 - y} rx="1" />
                      <text className="gst-explorer__bar-label" x={barX(i)} y={y - 8} textAnchor="middle">{value}%</text>
                    </g>
                  );
                })}
                {data.chartType === "filing" && sales.map((value, i) => {
                  const y = chartY(value);
                  const isLate = value > 0;
                  return (
                    <g
                      key={labels[i]}
                      className={`gst-explorer__filing-point ${selected === i ? "is-selected" : ""} ${isLate ? "is-late" : ""}`}
                      tabIndex={0}
                      role="button"
                      aria-label={`Select ${labels[i]}: ${value === 0 ? "on time" : `${value} days late`}`}
                      onClick={() => setSelected(i)}
                      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelected(i); } }}
                    >
                      {isLate && <rect x={chartX(i) - 3} y={y} width="6" height={270 - y} rx="1" />}
                      <circle cx={chartX(i)} cy={y} r={isLate ? 4 : 3} />
                    </g>
                  );
                })}
                {labels.map((label, i) => <text className="gst-explorer__month" key={label} x={metric === "growth" ? barX(i) : chartX(i)} y="305" textAnchor="middle">{label}</text>)}
              </svg>
            </div>
            <aside className="gst-explorer__detail">
              <span className="gst-explorer__date">{activeMonth.toUpperCase()}</span>
              <strong>{activeValueLabel}</strong>
              <span className="gst-explorer__caption">{metric === "sales" ? "Reported sales" : metric === "growth" ? "Reported sales growth" : "Illustrative filing timing"}</span>
              <p>{metric === "sales" ? `Purchases: ₹${purchases[Math.min(selected, purchases.length - 1)].toFixed(1)} Cr. Read the two series together to explore changes in reported business activity.` : metric === "growth" ? "Compare the monthly change with the borrower’s reporting history and operating context." : activeValue === 0 ? "The filing was received on time for the assumed due date." : "This period shows a filing received after the assumed due date."}</p>
              <div className="gst-explorer__prompt"><b>REVIEW PROMPT</b><span>How does this month compare with the borrower’s operating cycle and cash flows?</span></div>
            </aside>
          </div>
          <p className="gst-explorer__note">Use Tab to reach chart points; Enter or Space selects a month. All figures are synthetic. Growth is calculated month over month; filing delay is measured in days after the assumed due date.</p>
        </div>
      </section>
    </GSTScrollReveal>
  );
}
