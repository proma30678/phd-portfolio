export default function Home() {
  // ======== 請改這裡的資料 ========
  const profile = {
    nameEn: "Ying Kung", // 英文名字
    nameZh: "宮郢",        // 中文名字
    title: "Prospective PhD Applicant", // 頭銜
    email: "evan08292001@gmail.com", // 聯絡信箱
    interests: ["Li-ion Battery", "electric vehicles", "artificial intelligence in robotics"], // 研究關鍵字
    blurbEn:
      "My research interests focus on analyzing Lithium-ion batteries with Machine Learning and simulating lithium plating using python, pytorch and comsol.",
    blurbZh:
      "",
    cv: "/files/CV.pdf", // 簡歷 PDF 路徑
    avatar: "/images/me.jpg", // 頭像圖片路徑
  };

  const publications = [
    {
      title: "Predicting the onset of lithium plating by the full-cell voltage: A pseudo-P curve approach",
      authors: "Ying Kung*, Yu-Hong Zhang, Kuo-Ching Chen, Chih-Hung Chen, Chi-Jyun Ko",
      venue: "Under Review at  Energy Storage Materials",
      pdf: "/files/paper.pdf",
      image: "/images/plating image.png",
      highlight: "Introduced a pseudo-P curve method enabling early detection of lithium plating from full-cell voltage signals.",
    },
  ];

  const projects = [
    {
      title: "Research on Frequency-Specific Modeling for Battery Parameter Identification Under Aging",
      summary: "Developed a physics-informed ML framework using frequency-segment EIS and Sobol filtering to identify key battery parameters in 0.3 s with <1% error (SOH ≥75%), achieving 10^5× faster computation than full-spectrum GA inversion while retaining physical interpretability.",
      image: "/images/project-a.jpg",
      link: "https://github.com/yourname/project-a",
    },
  ];

  const timeline = [
    { time: "2023–2025", label: "M.S., Institute of Applied Mechanics, National Taiwan University" },
    { time: "2019–2023", label: "B.S., Department of Civil Engineering, National Yang Ming Chiao Tung University" },
  ];
  
  // ======== 到這裡結束 ========

  const LinkBtn = ({ href, children }: { href: string; children: any }) => (
    <a
      href={href}
      className="rounded border px-3 py-1 text-sm hover:bg-gray-50"
    >
      {children}
    </a>
  );

  return (
    <div className="bg-white text-gray-900">
      {/* 導覽列 */}
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold">
            {profile.nameEn}
          </a>
          <div className="flex gap-5 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#publications" className="hover:underline">Publications</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#timeline" className="hover:underline">Experience</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href={profile.cv} className="rounded border px-3 py-1">CV</a>
          </div>
        </div>
      </nav>

      {/* 首屏 */}
      <header className="mx-auto max-w-5xl px-4 pt-28 pb-12">
        <div className="flex items-center gap-6">
          <img
            src={profile.avatar}
            alt={profile.nameEn}
            className="h-24 w-24 rounded-full object-cover border"
          />
          <div>
            <h1 className="text-3xl font-bold">
              {profile.nameEn} — {profile.title}
            </h1>
            <p className="mt-2 max-w-2xl text-gray-700">{profile.blurbEn}</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <a href={profile.cv} className="rounded bg-gray-900 px-4 py-2 text-white">
                Download CV
              </a>
              {profile.scholar && <LinkBtn href={profile.scholar}>Google Scholar</LinkBtn>}
              {profile.github && <LinkBtn href={profile.github}>GitHub</LinkBtn>}
              {profile.linkedin && <LinkBtn href={profile.linkedin}>LinkedIn</LinkBtn>}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4">
        {/* About */}
        <section id="about" className="scroll-mt-24 py-12">
          <h2 className="mb-4 text-2xl font-bold">About</h2>
          <p className="text-gray-700">{profile.blurbZh}</p>
          <div className="mt-2 text-sm text-gray-600">
            Interests: {profile.interests.join(" • ")}
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="scroll-mt-24 py-12">
          <h2 className="mb-4 text-2xl font-bold">Publications</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {publications.map((p, i) => (
              <div key={i} className="rounded-xl border p-4">
                <div className="font-medium">{p.title}</div>
                <div className="text-sm text-gray-600">{p.authors}</div>
                <div className="text-sm">{p.venue}</div>
                {p.highlight && (
                  <div className="mt-2 text-sm italic">{p.highlight}</div>
                )}
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  {p.pdf && <a className="underline" href={p.pdf}>PDF</a>}
                  {p.doi && <a className="underline" href={p.doi}>DOI</a>}
                  {p.code && <a className="underline" href={p.code}>Code</a>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 py-12">
          <h2 className="mb-4 text-2xl font-bold">Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.link || "#"}
                className="block rounded-xl border overflow-hidden hover:shadow"
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-44 w-full object-cover"
                  />
                )}
                <div className="p-4">
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm text-gray-600">{p.summary}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="timeline" className="scroll-mt-24 py-12">
          <h2 className="mb-4 text-2xl font-bold">Experience</h2>
          <ol className="border-l pl-6 space-y-6">
            {timeline.map((x, idx) => (
              <li key={idx} className="relative">
                <span className="absolute -left-[9px] top-1.5 h-3 w-3 rounded-full bg-gray-900"></span>
                <div className="text-sm text-gray-500">{x.time}</div>
                <div className="font-medium">{x.label}</div>
              </li>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 py-12">
          <h2 className="mb-4 text-2xl font-bold">Contact</h2>
          <div className="text-gray-700">
            Email:{" "}
            <a className="underline" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </section>

        <footer className="py-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {profile.nameEn}
        </footer>
      </main>
    </div>
  );
}
