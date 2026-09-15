import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link className="blog-card" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
      <div className="blog-art">
        <Image src={`/${post.image}`} alt={post.imageAlt} width={560} height={132} />
      </div>
      <div className="blog-body">
        <div className="blog-tags">
          {post.tags.map((tag) => (
            <span className="blog-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="blog-title">{post.title}</div>
        <p className="blog-excerpt">{post.excerpt}</p>
        <div className="blog-meta">
          <span>{formatDate(post.date)}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}
