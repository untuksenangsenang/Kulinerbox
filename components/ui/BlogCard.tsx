import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Thumbnail */}
      <Link href={`/blog/${post.slug}`} className="block relative h-48 overflow-hidden" tabIndex={-1} aria-hidden="true">
        <Image
          src={post.image}
          alt={`Ilustrasi artikel: ${post.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-brand-cream text-brand-primary font-medium px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="font-heading font-bold text-brand-dark text-lg leading-snug mb-2 group-hover:text-brand-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-brand-muted text-sm leading-relaxed flex-1 mb-4">
          {post.summary}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-brand-cream">
          <div className="text-xs text-brand-muted">
            <span>{post.author}</span>
            <span className="mx-1">·</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="text-xs font-semibold text-brand-primary hover:text-brand-dark transition-colors flex items-center gap-1"
            aria-label={`Baca artikel: ${post.title}`}
          >
            Baca
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
