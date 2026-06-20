import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageContent } from "@/components/layout/PageContent";
import { newProjects } from "@/lib/data/mock-data";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "New Projects",
  description: "Discover tomorrow's addresses today — pre-launch and under-construction luxury developments.",
};

const statusFilters = ["Pre-Launch", "Under Construction", "Ready to Move", "Completed"];
const cities = ["Mumbai", "Delhi", "Bangalore", "Dubai", "Gurgaon", "Pune"];

export default function NewProjectsPage() {
  return (
    <>
      <PageHeader
        label="New Launches"
        title="Discover Tomorrow's Addresses Today"
        description="Pre-launch bookings, under-construction properties, and ready-to-move luxury developments."
        image="https://images.unsplash.com/photo-1486406146928-c627a92ad1ab?w=1920&q=80"
      />
      <PageContent>
        <div className="content-stack pt-10 md:pt-12">
          <div className="flex flex-wrap gap-2">
            {statusFilters.map((s, i) => (
              <button key={s} type="button" className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full border ${i === 0 ? "border-gold-true text-gold-warm bg-gold-alpha10" : "border-iron text-ash"}`}>
                {s}
              </button>
            ))}
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {cities.map((c, i) => (
              <button key={c} type="button" className={`px-4 py-2 text-sm rounded-full border shrink-0 ${i === 0 ? "border-gold-true text-gold-warm" : "border-iron text-ash"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {newProjects.map((project) => (
              <article key={project.id} className="card-panel overflow-hidden hover:border-gold-alpha40 transition-all group">
                <div className="relative h-48">
                  <Image src={project.image} alt={project.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="400px" />
                  <span className={`absolute top-4 left-4 tag ${project.status === "PRE_LAUNCH" ? "tag-new" : project.status === "READY_TO_MOVE" ? "tag-verified" : "tag-featured"}`}>
                    {project.status.replace(/_/g, " ")}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gold-warm uppercase tracking-wider mb-1">{project.developer}</p>
                  <h3 className="font-display text-xl text-white mb-1">{project.name}</h3>
                  <p className="text-sm text-ash mb-4">{project.location}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.configurations.map((c) => (
                      <span key={c} className="px-2 py-1 text-xs border border-iron rounded text-ash">{c}</span>
                    ))}
                  </div>
                  <p className="font-mono text-gold-warm mb-2">From {formatPrice(project.priceFrom)}</p>
                  <p className="text-xs text-smoke mb-4">Possession: {project.possessionDate}</p>
                  {project.progress < 100 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-smoke mb-1">
                        <span>Construction Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-slate rounded-full overflow-hidden">
                        <div className="h-full bg-gold-true rounded-full" style={{ width: `${project.progress}%` }} />
                      </div>
                    </div>
                  )}
                  <button type="button" className="btn-primary w-full">Register Interest</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageContent>
    </>
  );
}
