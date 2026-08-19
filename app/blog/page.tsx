import type { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import BlogCard from "@/components/ui/BlogCard";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Blog & Tips Catering",
  description:
    "Baca artikel dan tips seputar catering dari Kulinerbox. Panduan memilih menu, cara pesan, dan inspirasi acara.",
};

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-dark to-brand-primary pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Blog & Tips
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Inspirasi dan panduan seputar catering untuk acara Anda — ditulis
            langsung oleh tim Kulinerbox.
          </p>
        </div>
      </div>

      {/* Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Artikel Terbaru"
            subtitle="Tips dan panduan praktis untuk perencanaan catering acara Anda."
          />
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-brand-muted">
              <p>Artikel sedang dipersiapkan. Kunjungi kembali segera!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
