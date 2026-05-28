"use client";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="border-b border-white/10 pb-6 mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl">
          Experience
        </h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-16">
        {/* Job 1 */}
        <div className="relative pl-8 sm:pl-12">
          {/* Timeline Dot */}
          <span className="absolute -left-1.25 top-2 flex h-2.5 w-2.5 rounded-full bg-cyan-400 ring-4 ring-black" />

          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white tracking-wide">
                Front-End Developer (Remote)
              </h3>
              <p className="text-sm font-medium text-cyan-400/90 mt-1">
                Myvamsnet Limited
              </p>
            </div>
            <p className="text-xs font-mono uppercase tracking-wider text-white/40 md:text-right">
              10/2025 – Present &middot; Nigeria
            </p>
          </div>

          <ul className="space-y-3 text-sm md:text-base text-white/70 leading-relaxed list-disc list-outside pl-4 marker:text-cyan-400/60">
            <li>
              Worked in Agile/Scrum environment using Git, Jira, Slack, and
              Teams.
            </li>
            <li>
              Integrated Supabase for authentication and database services.
            </li>
            <li>Built and shipped features for client applications.</li>
            <li>Fixed bugs and improved application performance.</li>
            <li>Collaborated with backend developers and designers.</li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="relative pl-8 sm:pl-12">
          {/* Timeline Dot */}
          <span className="absolute -left-[5px] top-2 flex h-2.5 w-2.5 rounded-full bg-white/30 ring-4 ring-black" />

          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white tracking-wide">
                Front-End Developer Intern
              </h3>
              <p className="text-sm font-medium text-cyan-400/90 mt-1">
                Myvamsnet Limited
              </p>
            </div>
            <p className="text-xs font-mono uppercase tracking-wider text-white/40 md:text-right">
              10/2024 – 10/2025 &middot; Remote, Nigeria
            </p>
          </div>

          <ul className="space-y-3 text-sm md:text-base text-white/70 leading-relaxed list-disc list-outside pl-4 marker:text-white/30">
            <li>Tested APIs using Postman.</li>
            <li>Used TanStack Query for data fetching and caching.</li>
            <li>Deployed apps to Vercel.</li>
            <li>Built responsive UI components.</li>
            <li>Worked in a collaborative team environment.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
