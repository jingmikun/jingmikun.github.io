"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Publication } from "@/data/publication";

export function PublicationEntry({
  publication,
}: {
  publication: Publication;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex flex-col gap-3 rounded-lg bg-amber-50 border border-amber-100 p-4">
      <button
        type="button"
        className="w-full text-left flex items-start justify-between gap-4 group"
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
      >
        <div className="flex-1">
          <h3 className="font-serif text-md mb-1 group-hover:text-zinc-600 transition-colors">
            {publication.title}
          </h3>
          {publication.award && (
            <div className="inline-flex px-2 py-1 bg-gradient-to-r from-amber-50 to-rose-50 rounded-md items-center shadow-sm border border-amber-100/50 relative overflow-hidden align-middle">
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <p className="text-xs text-amber-700 font-medium relative">
                {publication.award}
              </p>
            </div>
          )}
        </div>
        <ChevronDown
          size={18}
          className={`mt-0.5 transition-transform duration-300 ${expanded ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {expanded && (
        <div className="flex flex-col flex-1 gap-3">
          <div className="flex flex-row gap-4 items-center">
            <p className="text-xs text-zinc-500">
              {publication.conference} {publication.year}
            </p>
          </div>

          <p 
            className="text-sm text-zinc-600 [&_b]:font-semibold [&_b]:text-zinc-800"
            dangerouslySetInnerHTML={{ __html: publication.authors }}
          />

          {publication.imageUrl && (
            <div className="relative mb-1 w-full max-w-[420px] mx-auto">
              <Image
                src={publication.imageUrl}
                alt={publication.title}
                width={400}
                height={250}
                className="rounded-lg transition-all duration-300 h-auto object-cover"
              />
            </div>
          )}

          <div className="flex flex-row gap-6">
            {publication.projectUrl && (
              <a
                href={publication.projectUrl}
                className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              >
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
                <span className="tracking-wider uppercase">Project</span>
              </a>
            )}
            {publication.paperUrl && (
              <a
                href={publication.paperUrl}
                className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              >
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
                <span className="tracking-wider uppercase">Paper</span>
              </a>
            )}
            {publication.codeUrl && (
              <a
                href={publication.codeUrl}
                className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              >
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
                <span className="tracking-wider uppercase">Code</span>
              </a>
            )}
            {publication.bibtex && (
              <a
                href={publication.bibtex}
                className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              >
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
                <span className="tracking-wider uppercase">BibTeX</span>
              </a>
            )}
          </div>

          {publication.tldr && (
            <div className="mt-1 rounded-md bg-blue-50 p-3">
              <p className="text-sm text-zinc-700">
                <span className="font-semibold mr-2">TL DR:</span>
                <span className="italic">{publication.tldr}</span>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
