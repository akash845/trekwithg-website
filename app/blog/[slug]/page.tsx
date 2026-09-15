import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPost, BLOG_SLUGS } from '@/lib/blog';

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <section className="page" id="page-blog-detail">
      <Link className="back-link" href="/blog">
        &larr; All posts
      </Link>
      <div className="trek-detail-hero">
        <Image src={`/${post.image}`} alt={post.imageAlt} width={1120} height={380} priority />
        <div className="trek-detail-hero-overlay">
          <div className="blog-tags">
            {post.tags.map((tag) => (
              <span className="blog-tag blog-tag-dark" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <h1>{post.title}</h1>
        </div>
      </div>
      <div className="blog-meta blog-meta-detail">
        <span>{formatDate(post.date)}</span>
        <span>{post.readTime}</span>
      </div>
      <div className="blog-content">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="founder-card" style={{ marginTop: 48 }}>
        <p style={{ color: 'var(--ink)', fontSize: '1.02rem' }}>
          Planning a trek of your own? We can help you pick the right one.
        </p>
        <a
          className="btn btn-primary"
          href="https://www.instagram.com/trekwith_g/"
          target="_blank"
          rel="noopener"
          style={{ marginTop: 16, alignSelf: 'flex-start' }}
        >
          DM @trekwith_g
        </a>
      </div>
    </section>
  );
}
