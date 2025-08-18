import Image from "next/image";
import { profile, skills, publications, timeline } from "@/content/site";

// 伺服端格式化日期
function formatDate(d: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

export default function Home() {
  const lastUpdated = formatDate(new Date());

  return (
    <main>
      {/* Hero：標題 + 右側照片 */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-12 bg-black-100">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] items-start">
          {/* 左：標題與卡片 */}
          <div className="richtext">
            <h1 className="text-xl md:text-4xl font-bold tracking-tight text-black-900">
              {profile.nameEn}
            </h1>
            <p className="mt-4 text-[17px] md:text-[18px] text-black-600 leading-[1.9] tracking-[0.01em] justify [text-indent:1.75em]">
              {profile.title}{" "}
              {profile.affiliation ? `at ${profile.affiliation}` : ""}
            </p>

            <div className="mt-6 p-6">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-black-900">Research Topic</h2>
              <p className="mt-4 text-[17px] md:text-[18px] text-black-600 leading-[1.9] tracking-[0.01em] justify [text-indent:1.75em]">{profile.topics}</p>

              <h2 className="mt-4 text-xl md:text-2xl font-bold tracking-tight text-black-900">Short Biography</h2>
              <p
                className="mt-4 text-[17px] md:text-[18px] text-black-600 leading-[1.9] tracking-[0.01em] justify [text-indent:1.75em]"
                dangerouslySetInnerHTML={{ __html: profile.blurbEn }}
              />


              {profile.cv && (
                <a
                  href={profile.cv}
                  className="mt-6 inline-block rounded bg-gray-900 px-5 py-2 text-white"
                >
                  Download CV
                </a>
              )}
            </div>
          </div>

          {/* 右：大頭照 */}
          <div className="justify-self-center md:justify-self-end mt-4 md:mt-24">
            <Image
              src={profile.avatar}
              alt={profile.nameEn}
              width={200}
              height={260}
              sizes="(min-width: 768px) 200px, 160px"
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Skills / Projects */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2">
          <div className="richtext">
            <h3 className="mb-4 text-xl md:text-2xl font-bold tracking-tight text-black">
              Skills
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-[17px] md:text-[18px] text-black leading-[1.9] tracking-[0.01em] justify [text-indent:1.75em]">
              {skills.map((s: string, i: number) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="richtext">
            <h3 className="mb-4 text-xl md:text-2xl font-bold tracking-tight text-black">
              Projects
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-[17px] md:text-[18px] text-black leading-[1.9] tracking-[0.01em] justify [text-indent:1.75em]">
              <li>Real-time battery state estimation</li>
              <li>Electrochemical parameter identification</li>
              <li>Lithium plating onset prediction</li>
            </ul>
            <a
              href="/projects"
              className="mt-3 inline-block text-sm underline text-black"
            >
              see more…
            </a>
          </div>
        </div>
      </section>


      {/* Publications */}
      <section id="publications" className="py-12 bg-gray-100">
        <div className="mx-auto max-w-6xl px-6 richtext">
          <h3 className="mb-4 text-xl md:text-2xl font-bold tracking-tight text-black">
            Publications
          </h3>
          <ul className="space-y-3 list-disc pl-5 text-[17px] md:text-[18px] text-black leading-[1.9] tracking-[0.01em] justify [text-indent:1.75em]">
            {publications.slice(0, 2).map((p: { title: string; authors: string; venue: string }, i: number) => (
              <li key={i}>
                <div className="font-bold">{p.title}</div>
                <div className="text-sm">{p.authors} — {p.venue}</div>
              </li>
            ))}
          </ul>
          <a
            href="/publications"
            aria-label="See more publications"
            className="mt-3 inline-block text-sm underline text-black"
          >
            see more…
          </a>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-12 bg-white">
        <div className="mx-auto max-w-6xl px-6 richtext">
          <h3 className="mb-4 text-xl md:text-2xl font-bold tracking-tight text-black">
            Education
          </h3>
          <ol className="border-l pl-6 space-y-6 text-[17px] md:text-[18px] text-black leading-[1.9] tracking-[0.01em] justify [text-indent:1.75em]">
            {timeline.slice(0, 2).map((x: { time: string; label: string }, i: number) => (
              <li key={i} className="relative pl-4">
                <span className="absolute -left-2 top-2 h-3 w-3 rounded-full bg-black" />
                <div className="text-sm">{x.time}</div>
                <div className="font-medium">{x.label}</div>
              </li>
            ))}
          </ol>
          <a
            href="/education"
            aria-label="See more education items"
            className="mt-3 inline-block text-sm underline text-black"
          >
            see more…
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 text-gray-900 hover:text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615A2.25 2.25 0 012.25 6.993V6.75"
              />
            </svg>
            <span className="text-2xl font-semibold">Contact</span>
          </a>
          <div className="mt-3 text-sm text-gray-600">
            © {profile.nameEn} | Last updated on {lastUpdated}
          </div>
        </div>
      </footer>
    </main>
  );
}
