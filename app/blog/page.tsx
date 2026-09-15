import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import { getAllBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Notes on packing, planning and what to expect on Himalayan treks across Uttarakhand, Himachal and Ladakh — written from the trail, not a brochure.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <section className="page" id="page-blog">
      <div className="section-head" style={{ marginTop: 0 }}>
        <div>
          <div className="eyebrow">From the trail</div>
          <h2>Blog</h2>
        </div>
        <p style={{ maxWidth: '32ch', fontSize: '.85rem' }}>
          Planning notes, gear breakdowns and honest trip reports from our own departures.
        </p>
      </div>
      <div className="blog-grid">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
