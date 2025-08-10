import { publications } from "@/content/site";
import Image from "next/image";

export default function PublicationsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Publications</h1>

      <div className="space-y-8">
        {publications.map((p, i) => (
          <article
            key={i}
            className="grid md:grid-cols-2 gap-6 items-center rounded-2xl border bg-white p-5 shadow-sm"
          >
            {/* 左：圖片（有提供才渲染） */}
            {p.image && (
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={p.image}              // 例如：/images/thesis-a.png（public/images 下）
                  alt={p.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* 右：內容 */}
            <div>
              <h2 className="font-bold text-lg">{p.title}</h2>
              {p.authors && <p className="text-sm text-gray-600">{p.authors}</p>}
              {p.venue && <p className="text-sm mb-2">{p.venue}</p>}
              {p.highlight && (
                <p
                  className="text-sm italic text-gray-700"
                  dangerouslySetInnerHTML={{ __html: p.highlight }}
                />
              )}

              {/* PDF 下載連結 */}
              {p.pdf && (
                <a
                  // 如果 p.pdf 已是絕對路徑（/files/xxx.pdf）就直接用；
                  // 若僅給檔名（xxx.pdf）就自動補上 /files/
                  href={p.pdf.startsWith("/") ? p.pdf : `/files/${p.pdf}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded bg-gray-900 px-4 py-2 text-white hover:opacity-90"
                  
                >
                  View PDF
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
