import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
};

type Item = {
  period: string;        // 年月區間
  title: string;         // 學位或職稱
  org: string;           // 學校/單位
  desc?: string;         // 可選：一句補充
};

const education = [
  { now: true }, // 特殊 "Now" 節點
  {
    title: "Master of Institute of Applied Mechanics",
    org: "National Taiwan University",
    period: "Sept. 2023 – Now",
    desc: "Research on Li-ion battery diagnostics, P2D/EIS modeling, and ML, with applications in fast-charging safety and battery health management.",
    extra: "Coursework includes Electrochemical Energy Storage, Machine Learning for Engineers, and Computational Mechanics."
  },
  {
    title: "Bachelor of Civil Engineering",
    org: "National Yang Ming Chiao Tung University",
    period: "Sept. 2019 – June 2023",
    desc: "Focused on mechanics of materials and structural analysis, gaining solid foundations in engineering mechanics and numerical methods."
  }
];

// （如果也想把 Work Experience 做成時間軸，可照這個格式建立）
// const experiences: Item[] = [...];

function Timeline({ items }: { items: typeof education }) {
  return (
    <ol className="relative border-s-2 border-gray-300 ps-6">
      {items.map((x, i) => (
        <li key={i} className="mb-8 ms-2">
          <span className="absolute -start-[9px] mt-1.5 h-3.5 w-3.5 rounded-full bg-gray-300"></span>

          {x.now ? (
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

      {/* 若未來要加 Work Experience 的時間軸，解除以下註解即可 */}
      {/* <h2 className="text-2xl font-bold mt-12 mb-4">Work Experience</h2>
      <Timeline items={experiences} /> */}
    </main>
  );
}
