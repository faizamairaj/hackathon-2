import { BlogHero, BlogGrid, Newsletter } from "../../components/Blog";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <BlogHero />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <BlogGrid />
      </div>
      <Newsletter />
    </div>
  );
} 