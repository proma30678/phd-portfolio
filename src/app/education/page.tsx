// src/app/education/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
};

type Item = {
  period: string; // 年月區間
  title: string;  // 學位或職稱
  org: string;    // 學校/單位
  desc?: string;  // 補充一句
  extra?: string; // 額外補充（課程等）
};

const education: (Item | { now: true })[] = [
  { now: true }, // 特殊 "Now" 節點
  {
    title: "Master of Institute of Applied Mechanics",
    org: "National Taiwan University",
    period: "Sept. 2023 – Now",
    desc:
      "Research on Li-ion battery diagnostics, P2D/EIS modeling, and ML, with applications in fast-charging safety and battery health management. Coursework includes Stochastic Control, Machine Learning,  Electronics Laboratory and Computational Mechanics.",
  },
  {
    title: "Bachelor of Civil Engineering",
    org: "National Yang Ming Chiao Tung University",
    period: "Sept. 2019 – June 2023",
    desc:
      "Focused on mechanics of materials and structural analysis, gaining solid foundations in engineering mechanics and numerical methods.",
  },
];

// === Awards & Honors ===
type Award = {
  title: string;
  org?: string;
  detail?: string;
  year: string;
};

const awards: Award[] = [
  {
    title: "College of Engineering Dean’s Award",
    org: "National Taiwan University",
    detail:
      "Top 10% of graduates in each department; eligibility requires at least one research paper submission.",
    year: "Aug, 2025",
  },
  {
    title:
      "Honorable Mention, 35th National Symposium on Combustion and Energy, Student Paper Competition",
    year: "May, 2025",
  },
];

function Timeline({ items }: { items: (Item | { now: true })[] }) {
  return (
    <ol className="relative border-s-2 border-gray-300 ps-6">
      {items.map((x, i) => (
        <li key={i} className="mb-10 ms-2">
          <span className="absolute -start-[9px] mt-1.5 h-3.5 w-3.5 rounded-full bg-gray-300" />
          {"now" in x ? (
            // 只調字級，不動原本顏色（灰）
            <div className="text-[17px] md:text-[18px] font-medium text-gray-400">
              Now
            </div>
          ) : (
            <>
              <div className="text-[17px] md:text-[18px] font-medium text-gray-400">
                {x.period}
              </div>

              <div className="mt-1">
                {/* 標題字級與 Short Biography 一致（不改顏色） */}
                <div className="text-[17px] md:text-[18px] font-bold tracking-tight">
                  {x.title}
                </div>
                <div className="text-[17px] md:text-[18px] text-gray-500">
                  {x.org}
                </div>

                { x.desc && (
                  <p className="mt-2 text-[17px] md:text-[18px] leading-[1.9] tracking-[0.01em] justify text-gray-500">
                    {x.desc}
                  </p>
                )}
              </div>
            </>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function EducationPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      {/* 主標題：只改字級與字重，不動顏色 */}
      <h1 className="text-xl md:text-2xl font-bold tracking-tight mb-6">
        Education
      </h1>

      {/* 教育時間軸 */}
      <Timeline items={education} />

      {/* Awards & Honors：字級同步 Short Biography，不動顏色 */}
      <section className="mt-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">
          Awards &amp; Honors
        </h2>
        <ul className="space-y-4">
          {awards.map((a, idx) => (
            <li key={idx} className="flex flex-col">
              {/* 第一行：標題 + 機構 + 年份（只調字級/行距） */}
              <div className="flex items-start text-[17px] md:text-[18px] leading-[1.9] tracking-[0.01em]">
                <span className="mr-2">•</span>
                <span>
                  <span className="font-bold">{a.title}</span>
                  {a.org && <span>, {a.org}</span>}
                  <span className="text-gray-400"> — {a.year}</span>
                </span>
              </div>
              {/* 第二行：細節（字級/行距同步） */}
              {a.detail && (
                <div className="pl-5 text-[17px] md:text-[18px] leading-[1.9] tracking-[0.01em] text-gray-600">
                  {a.detail}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
