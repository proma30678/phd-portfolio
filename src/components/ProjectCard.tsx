"use client";
import Image from "next/image";
import { ReactNode } from "react";

export default function ProjectCard({
  title,
  image,
  bullets,
  tags,
}: {
  title: string;
  image: string;
  bullets: Array<string | ReactNode>;
  tags?: string[];
}) {
  return (
    <article className="project-card">
      <h2 className="text-3xl font-extrabold tracking-tight mb-4">
        {title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2 items-stretch">
        {/* 左：圖片 */}
        <div className="rounded-2xl bg-white p-2 shadow-lg">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={750}
            className="w-full h-auto rounded-xl object-cover"
            priority
          />
        </div>

        {/* 右：說明卡（黑字，邊框卡片） */}
        <div className="rounded-2xl bg-white shadow-lg p-6 border border-gray-300">
          <ul className="space-y-3 text-gray-900">
            {bullets.map((b, i) => (
              <li key={i} className="leading-relaxed">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 標籤 */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-5">
          {tags.map((t, i) => (
            <span
              key={i}
              className="px-4 py-1 rounded-full bg-gray-100 text-blue-900 shadow-md border border-gray-300"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
