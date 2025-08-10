import { Fragment } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/site";

export default function ProjectsPage() {
  const p = projects[0];

  const subtitle =
    "Below is the framework I developed during my M.S.—it showcases my research focus and technical strengths.";

  const bullets = [
    <Fragment key="b1">
      A <span className="font-semibold">segment-specific, physics-informed ML framework</span> that
      estimates key electrochemical parameters from <span className="font-semibold">partial EIS</span>.
    </Fragment>,
    <Fragment key="b2">
      <span className="font-semibold">Two-stage Sobol sensitivity filtering</span> selects
      band-specific parameters in arbitrary segment order.
    </Fragment>,
    <Fragment key="b3">
      Each band-specific Transformer predicts targets in
      <span className="font-semibold"> &lt; 0.3 s</span> and reconstructs the corresponding impedance arc with
      <span className="font-semibold"> MAPE &lt; 1% (SOH ≥ 75%)</span> or <span className="font-semibold">&lt; 3%</span> under severe aging.
    </Fragment>,
    <Fragment key="b4">
      Recovers known aging trends (e.g., <span className="font-semibold">solid-phase diffusion decay</span>,{" "}
      <span className="font-semibold">film-resistance growth</span>) ensuring physical consistency.
    </Fragment>,
    <Fragment key="b5">
      <span className="font-semibold">~10<sup>5</sup>× faster</span> than full-spectrum GA inversion while preserving fidelity—any{" "}
      <span className="font-semibold">single frequency segment</span> suffices for real-time BMS parameter ID.
    </Fragment>,
  ];

  return (
    <main className="projects-page bg-gray-100 min-h-screen">
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-16 space-y-10">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-sm text-gray-700">{subtitle}</p>

        <ProjectCard
          title={p.title}
          image={p.image}
          bullets={bullets}
          tags={p.tags}
        />
      </section>
    </main>
  );
}
