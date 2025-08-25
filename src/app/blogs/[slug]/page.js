import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, BRAND_COLOR } from "@/content/blogs";

export async function generateMetadata({ params }) {
  const post = getBlogBySlug(params.slug);
  if (!post) return { title: "Post | Clarygen" };
  return {
    title: `${post.title} | Clarygen`,
    description: post.excerpt,
    keywords: post.keywords,
  };
}

export default function BlogPost({ params }) {
  const post = getBlogBySlug(params.slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="w-full pt-28 md:pt-32"
        style={{
          background: `linear-gradient(135deg, ${BRAND_COLOR} 0%, #0b2f52 100%)`,
        }}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-white">
          <div className="flex items-center gap-3 text-xs font-medium opacity-90">
            <span className="inline-flex items-center px-2 py-1 rounded-full border border-white/30">{post.tags?.[0] || "Insight"}</span>
            <span className="text-white/80">{new Date(post.date).toLocaleDateString()}</span>
            <span className="text-white/60">•</span>
            <span className="text-white/80">{post.readTimeMinutes} min read</span>
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-12">
        <article className="prose prose-slate max-w-none">
          {post.sections.map((s, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{ color: "#0b0b0c" }}>
                {s.heading}
              </h2>
              {s.body && (
                <p className="mt-3 text-slate-700 leading-relaxed">{s.body}</p>
              )}
              {s.bullets && (
                <ul className="mt-4 list-disc pl-6 text-slate-700">
                  {s.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mt-10">
            <Link href="/blogs" className="inline-flex items-center px-4 py-2 rounded-full border font-medium hover:bg-slate-50" style={{ borderColor: BRAND_COLOR, color: BRAND_COLOR }}>
              ← Back to all posts
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
