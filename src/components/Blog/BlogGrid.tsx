"use client";
import { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import { Loader2 } from 'lucide-react';

const POSTS_PER_PAGE = 6;

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Art of Minimalist Furniture Design",
    excerpt: "Discover how minimalist furniture can transform your living space into a serene and functional environment.",
    image: "/1.jpg",
    date: "March 15, 2024",
    category: "Design",
    author: "John Doe"
  },
  {
    id: 2,
    title: "Sustainable Materials in Modern Furniture",
    excerpt: "Exploring eco-friendly materials and their impact on contemporary furniture design.",
    image: "/2.jpg",
    date: "March 14, 2024",
    category: "Sustainability",
    author: "Jane Smith"
  },
  {
    id: 3,
    title: "Creating the Perfect Living Room Layout",
    excerpt: "Tips and tricks for arranging your furniture to maximize space and comfort.",
    image: "/3.jpg",
    date: "March 13, 2024",
    category: "Interior Design",
    author: "Mike Johnson"
  },
  {
    id: 4,
    title: "The History of Scandinavian Design",
    excerpt: "A journey through the evolution of Scandinavian furniture and its influence on modern design.",
    image: "/4.jpg",
    date: "March 12, 2024",
    category: "History",
    author: "Sarah Wilson"
  }
];

export default function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);
  const currentPosts = BLOG_POSTS.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  if (!mounted) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-[#B88E2F]" />
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded transition-colors ${
                currentPage === i + 1
                  ? 'bg-[#B88E2F] text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 