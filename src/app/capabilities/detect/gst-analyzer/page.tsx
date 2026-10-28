import type { Metadata } from "next";
import { Header } from "@/components/Header";
import GSTAnalyzerHero from "./GSTAnalyzerHero";
import GSTAnalyzerUnderstanding from "./GSTAnalyzerUnderstanding";
import GSTBusinessTrajectory from "./GSTBusinessTrajectory";
import GSTRoleInterpretation from "./GSTRoleInterpretation";
import GSTBorrowerCoverage from "./GSTBorrowerCoverage";
import GSTCrossSignalLab from "./GSTCrossSignalLab";
import GSTReviewJourney from "./GSTReviewJourney";
import GSTMonitoringLayer from "./GSTMonitoringLayer";
import GSTConsideredDecisions from "./GSTConsideredDecisions";
import GSTFaq from "./GSTFaq";
import "./gst-analyzer.css";
import "./gst-analyzer-sections.css";

export const metadata: Metadata = {
  title: "GST Analyzer | Expergo",
  description:
    "Turn GST data into a clear view of business performance with visual analytics and AI interpretation for credit risk and FRM teams.",
};

export default function GSTAnalyzerPage() {
  return (
    <div className="gst-page min-h-screen bg-white">
      <Header />
      <main>
        <GSTAnalyzerHero />
        <GSTAnalyzerUnderstanding />
        <GSTBusinessTrajectory />
        <GSTRoleInterpretation />
        <GSTBorrowerCoverage />
        <GSTCrossSignalLab />
        <GSTReviewJourney />
        <GSTMonitoringLayer />
        <GSTConsideredDecisions />
        <GSTFaq />
      </main>
    </div>
  );
}
