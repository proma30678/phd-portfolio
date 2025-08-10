// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function Home() {
//   // ======== 請改這裡的資料 ========
//   const profile = {
//     nameEn: "Ying Kung",
//     nameZh: "宮郢",
//     title: "Prospective PhD Applicant",
//     email: "evan08292001@gmail.com",
//     interests: ["Li-ion Battery", "electric vehicles", "artificial intelligence in robotics"],
//     blurbEn:
//       "My research interests focus on analyzing Lithium-ion batteries with Machine Learning and simulating lithium plating using python, pytorch and comsol.",
//     blurbZh: "",
//     cv: "/files/CV.pdf",
//     avatar: "/images/me.jpg",
//   };

//   const publications = [
//     {
//       title:
//         "Predicting the onset of lithium plating by the full-cell voltage: A pseudo-P curve approach",
//       authors:
//         "Ying Kung*, Yu-Hong Zhang, Kuo-Ching Chen, Chih-Hung Chen, Chi-Jyun Ko",
//       venue: "Under Review at Energy Storage Materials",
//       pdf: "/files/paper.pdf",
//       // 建議避免檔名含空白；若有圖片請改為 /images/plating-image.png
//       image: "",
//       highlight:
//         "Introduced a pseudo-P curve method enabling early detection of lithium plating from full-cell voltage signals.",
//     },
//   ];

//   const projects = [
//     {
//       title:
//         "Research on Frequency-Specific Modeling for Battery Parameter Identification Under Aging",
//       summary:
//         "Developed a physics-informed ML framework using frequency-segment EIS and Sobol filtering to identify key battery parameters in 0.3 s with <1% error (SOH ≥75%), achieving 10^5× faster computation than full-spectrum GA inversion while retaining physical interpretability.",
//       image: "/images/project-a.jpg",
//       link: "https://github.com/yourname/project-a",
//     },
//   ];

//   const timeline = [
//     {
//       time: "2023–2025",
//       label:
//         "M.S., Institute of Applied Mechanics, National Taiwan University",
//     },
//     {
//       time: "2019–2023",
//       label:
//         "B.S., Department of Civil Engineering, National Yang Ming Chiao Tung University",
//     },
//   ];
//   // ======== 到這裡結束 ========

//   // 導覽列：滾動後加陰影/白底
//   const [atTop, setAtTop] = useState(true);
//   useEffect(() => {
//     const onScroll = () => setAtTop(window.scrollY < 8);
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <div className="bg-white text-gray-900">
//       {/* 導覽列 */}
//       <nav
//         className={`fixed top-0 z-50 w-full transition backdrop-blur ${
//           atTop ? "bg-transparent" : "bg-white/80 shadow"
//         }`}
//       >
//         <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
//           <a href="/" className="font-semibold">
//             Ying Kung
//           </a>
//           <div className="flex gap-6 text-sm">
//             <a href="#about" className="hover:underline">
//               About
//             </a>
//             <a href="#publications" className="hover:underline">
//               Publications
//             </a>
//             <a href="#projects" className="hover:underline">
//               Projects
//             </a>
//             <a href="#education" className="hover:underline">
//               Education
//             </a>
//             <a href={profile.cv} className="rounded border px-3 py-1">
//               CV
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* 首屏 */}
//       <header className="mx-auto max-w-6xl px-6 pt-28 pb-16">
//         <div className="grid gap-10 md:grid-cols-2 items-center">
//           {/* 左：文字 */}
//           <div>
//             <h1 className="text-4xl font-bold tracking-tight">
//               {profile.nameEn} — {profile.title}
//             </h1>
//             <p className="mt-4 text-lg text-gray-700">{profile.blurbEn}</p>
//             <div className="mt-6">
//               <a
//                 href={profile.cv}
//                 className="inline-block rounded bg-gray-900 px-5 py-2 text-white"
//               >
//                 Download CV
//               </a>
//             </div>
//           </div>
//           {/* 右：大頭照卡片 */}
//           <div className="justify-self-end">
//             <div className="rounded-2xl border shadow-sm p-3 bg-white">
//               <Image
//                 src={profile.avatar}
//                 alt={profile.nameEn}
//                 width={300}
//                 height={300}
//                 className="h-72 w-72 object-cover rounded-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="mx-auto max-w-6xl px-6">
//         {/* About */}
//         <section id="about" className="scroll-mt-24 py-12">
//           <h2 className="mb-4 text-2xl font-bold">About</h2>
//           <p className="text-gray-700">{profile.blurbZh}</p>
//           <div className="mt-2 text-sm text-gray-600">
//             Interests: {profile.interests.join(" • ")}
//           </div>
//         </section>

//         {/* Publications */}
//         <section id="publications" className="scroll-mt-24 py-12 bg-gray-50">
//           <div className="mx-auto">
//             <h2 className="mb-6 text-2xl font-bold">Publications</h2>
//             <div className="grid gap-6 md:grid-cols-2">
//               {publications.map((p, i) => (
//                 <article key={i} className="rounded-2xl border bg-white p-5 shadow-sm">
//                   <h3 className="font-medium">{p.title}</h3>
//                   <p className="text-sm text-gray-600">{p.authors}</p>
//                   <p className="text-sm">{p.venue}</p>
//                   {p.highlight && (
//                     <p className="mt-2 text-sm italic text-gray-700">
//                       {p.highlight}
//                     </p>
//                   )}
//                 </article>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Projects */}
//         <section id="projects" className="scroll-mt-24 py-12">
//           <h2 className="mb-4 text-2xl font-bold">Projects</h2>
//           <div className="grid gap-4 md:grid-cols-2">
//             {projects.map((p, i) => (
//               <a
//                 key={i}
//                 href={p.link || "#"}
//                 className="block rounded-2xl border overflow-hidden hover:shadow-sm"
//               >
//                 {p.image && (
//                   <Image
//                     src={p.image}
//                     alt={p.title}
//                     width={1200}
//                     height={300}
//                     className="h-44 w-full object-cover"
//                   />
//                 )}
//                 <div className="p-4">
//                   <div className="font-medium">{p.title}</div>
//                   <div className="text-sm text-gray-600">{p.summary}</div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* Experience */}
//         <section id="timeline" className="scroll-mt-24 py-12">
//           <h2 className="mb-4 text-2xl font-bold">Experience</h2>
//           <ol className="border-l pl-6 space-y-6">
//             {timeline.map((x, idx) => (
//               <li key={idx} className="relative">
//                 <span className="absolute -left-[9px] top-1.5 h-3 w-3 rounded-full bg-gray-900"></span>
//                 <div className="text-sm text-gray-500">{x.time}</div>
//                 <div className="font-medium">{x.label}</div>
//               </li>
//             ))}
//           </ol>
//         </section>

//         {/* Contact */}
//         <section id="contact" className="scroll-mt-24 py-12">
//           <h2 className="mb-4 text-2xl font-bold">Contact</h2>
//           <div className="text-gray-700">
//             Email:{" "}
//             <a className="underline" href={`mailto:${profile.email}`}>
//               {profile.email}
//             </a>
//           </div>
//         </section>

//         <footer className="py-12 text-center text-sm text-gray-500">
//           © {new Date().getFullYear()} {profile.nameEn}
//         </footer>
//       </main>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import { profile, skills, publications, timeline } from "@/content/site";

export default function Home() {
  return (
    <main>
      {/* Hero：標題 + 右側照片 */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-12 bg-gray-100">
       <div className="grid gap-6 md:grid-cols-[1fr_auto] items-start">
          {/* 左：標題與卡片 */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">
              {profile.nameEn}
            </h1>
            <p className="mt-2 text-lg text-center md:text-left text-gray-700">
              {profile.title} {profile.affiliation ? `at ${profile.affiliation}` : ""}
            </p>

            <div className="mt-6 p-6">
              <h2 className="font-semibold text-gray-900">Research Topic</h2>
              <p className="mt-2 text-gray-700">{profile.topics}</p>

              <h2 className="mt-6 font-semibold text-gray-900">Short Biography</h2>
              <p
  className="mt-2 text-gray-700 leading-relaxed"
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
          <div className="justify-self-center md:justify-self-end">
            <div>
              <Image
                src={profile.avatar}
                alt={profile.nameEn}
                width={200}
                height={260}
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills / Projects 帶狀區塊（維持原設計） */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2">
          {/* Skills */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">Skills</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              {skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Projects（首頁列 3 條，更多請到 /projects） */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">Projects</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Real-time battery state estimation</li>
              <li>Electrochemical parameter identification</li>
              <li>Lithium plating onset prediction</li>
            </ul>
            <a href="/projects" className="mt-3 inline-block text-sm underline">
              see more…
            </a>
          </div>
        </div>
      </section>

      {/* Publications（精簡版：淺灰底、黑字、標題加粗） */}
      <section id="publications" className="py-12 bg-gray-100">
        <div className="mx-auto max-w-6xl px-6 text-gray-900">
          <h3 className="mb-4 text-2xl font-bold">Publications</h3>
          <ul className="space-y-3">
            {publications.slice(0, 2).map((p, i) => (
              <li key={i} className="list-disc pl-5">
                <div className="font-bold">{p.title}</div>
                <div className="text-sm">
                  {p.authors} — {p.venue}
                </div>
              </li>
            ))}
          </ul>
          <a href="/publications" className="mt-3 inline-block text-sm underline">
            see more…
          </a>
        </div>
      </section>

      {/* Education（精簡版：淺灰底、黑字、標題加粗） */}
      <section id="education" className="py-12 bg-gray-100">
        <div className="mx-auto max-w-6xl px-6 text-gray-900">
          <h3 className="mb-4 text-2xl font-bold">Education</h3>
          <ol className="border-l pl-6 space-y-4">
            {timeline.slice(0, 2).map((x, i) => (
              <li key={i} className="relative pl-4"> {/* ← 多加 pl-4 讓文字右移 */}
                <span
                  className="absolute -left-2 top-2 h-3 w-3 rounded-full bg-gray-900"
                ></span>
                <div className="text-sm">{x.time}</div>
                <div className="font-medium">{x.label}</div>
              </li>
            ))}
          </ol>
          <a href="/education" className="mt-3 inline-block text-sm underline">
            see more…
          </a>
        </div>
      </section>
    </main>
  );
}
