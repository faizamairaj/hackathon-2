"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-lg h-[400px] animate-pulse">
        <div className="h-48 bg-gray-200" />
        <div className="p-6 space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/4" />
          <div className="h-8 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <Link href={`/blog/${post.id}`}>
        <div className="relative h-48">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#B88E2F] text-white px-3 py-1 rounded-full text-sm">
              {post.category}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
        </div>

        <Link href={`/blog/${post.id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-[#B88E2F] transition-colors">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

        <Link
          href={`/blog/${post.id}`}
          className="text-[#B88E2F] font-semibold hover:text-[#9F7B2A] transition-colors"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
} 