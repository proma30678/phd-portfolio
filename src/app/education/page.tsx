import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
};

type Item = {
  period: string;        // 年月區間
  title: string;         // 學位或職稱
  org: string;           // 學校/單位
  desc?: string;         // 可選：一句補充
  extra?: string;        // 可選：額外補充（課程等）
};

const education: (Item | { now: true })[] = [
  { now: true }, // 特殊 "Now" 節點
  {
    title: "Master of Institute of Applied Mechanics",
    org: "National Taiwan University",
    period: "Sept. 2023 – Now",
    desc:
      "Research on Li-ion battery diagnostics, P2D/EIS modeling, and ML, with applications in fast-charging safety and battery health management.",
    extra:
      "Coursework includes Electrochemical Energy Storage, Machine Learning for Engineers, and Computational Mechanics.",
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
  title: string;   // 獎項名稱（會加粗）
  org?: string;    // 主辦單位（可省略）
  detail?: string; // 補充描述（可省略）
  year: string;    // 年份或日期
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
        <li key={i} className="mb-8 ms-2">
          <span className="absolute -start-[9px] mt-1.5 h-3.5 w-3.5 rounded-full bg-gray-300"></span>

          {"now" in x ? (
            <div className="text-sm font-medium text-gray-300">Now</div>
          ) : (
            <>
              <div className="text-sm font-medium text-gray-300">{x.period}</div>
              <div className="mt-1">
                <div className="font-semibold text-black">{x.title}</div>
                <div className="text-sm text-gray-500">{x.org}</div>
                {x.desc && (
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">{x.desc}</p>
                )}
                {x.extra && (
                  <p className="mt-1 text-sm text-gray-400 italic">{x.extra}</p>
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
      <h1 className="text-3xl font-bold mb-6">Education</h1>

      {/* 教育時間軸 */}
      <Timeline items={education} />

      {/* Awards & Honors */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Awards &amp; Honors</h2>
        <ul className="space-y-4">
          {awards.map((a, idx) => (
            <li key={idx} className="flex flex-col">
              {/* 第一行：標題 + 機構 + 年份 */}
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <span className="font-semibold text-black">{a.title}</span>
                  {a.org && <span>, {a.org}</span>}
                  <span className="text-gray-400"> — {a.year}</span>
                </span>
              </div>
              {/* 第二行：細節 */}
              {a.detail && (
                <div className="pl-5 text-gray-600">
                  {a.detail}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>


      {/* 若未來要加 Work Experience 的時間軸，解除以下註解即可 */}
      {/* <h2 className="text-2xl font-bold mt-12 mb-4">Work Experience</h2>
      <Timeline items={experiences} /> */}
    </main>
  );
}
