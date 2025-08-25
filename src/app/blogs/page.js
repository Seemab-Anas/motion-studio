import Link from "next/link";
import Image from "next/image";
import { getAllBlogs, BRAND_COLOR } from "@/content/blogs";

export const metadata = {
  title: "Blogs | Clarygen",
  description: "Insights on IT outsourcing, proactive support, AI, and managed services.",
};

export default function BlogsPage() {
  const posts = getAllBlogs();

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-20">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: BRAND_COLOR }}>
            The Journal
          </h1>
          <p className="text-slate-600 mt-3 max-w-2xl">
            Expert perspectives on IT, automation and business operations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blogs/${p.slug}`}
              className="group rounded-2xl border border-slate-200 hover:shadow-lg transition overflow-hidden bg-white"
            >
              {p.image ? (
                <div className="relative w-full h-44 md:h-56">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              ) : null}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs font-medium">
                  <span className="inline-flex items-center px-2 py-1 rounded-full border" style={{ borderColor: BRAND_COLOR, color: BRAND_COLOR }}>
                    {p.tags?.[0] || "Insight"}
                  </span>
                  <span className="text-slate-500">{p.readTimeMinutes} min read</span>
                </div>

                <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight group-hover:opacity-90" style={{ color: "#0b0b0c" }}>
                  {p.title}
                </h2>
                <p className="mt-3 text-slate-600">{p.excerpt}</p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium" style={{ color: BRAND_COLOR }}>
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
