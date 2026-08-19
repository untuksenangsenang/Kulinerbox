import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/data/site-config";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Artikel Tidak Ditemukan" };
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const waLink = buildGeneralWhatsAppLink(siteConfig.whatsapp.number);
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <div className="relative pt-24">
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={post.image}
            alt={`Ilustrasi artikel: ${post.title}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-brand-dark/20" />
        </div>
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="max-w-3xl mx-auto">
            {post.tags && (
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-white/20 text-white px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h1 className="font-heading font-bold text-2xl md:text-4xl text-white leading-tight">
              {post.title}
            </h1>
            <p className="text-white/70 text-sm mt-2">
              {post.author} &nbsp;·&nbsp;{" "}
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Summary */}
          <p className="text-brand-muted text-lg leading-relaxed border-l-4 border-brand-primary pl-5 mb-8 italic">
            {post.summary}
          </p>

          {/* HTML Content */}
          <div
            className="prose-kuliner"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA in article */}
          <div className="mt-10 bg-brand-cream rounded-2xl p-6 text-center">
            <p className="font-heading font-bold text-brand-dark text-lg mb-2">
              Tertarik memesan catering?
            </p>
            <p className="text-brand-muted text-sm mb-4">
              Hubungi Kulinerbox via WhatsApp untuk konsultasi dan pemesanan.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-wa text-white font-semibold px-6 py-2.5 rounded-full hover:bg-green-500 transition-all duration-200 shadow-wa hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat WhatsApp Sekarang
            </a>
          </div>

          {/* Back */}
          <div className="mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-dark font-medium text-sm transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Kembali ke Blog
            </Link>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section className="py-12 bg-brand-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-heading font-bold text-brand-dark text-2xl mb-6">
              Artikel Lainnya
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="group bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <p className="font-heading font-bold text-brand-dark group-hover:text-brand-primary transition-colors mb-2">
                    {p.title}
                  </p>
                  <p className="text-brand-muted text-sm line-clamp-2">{p.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
