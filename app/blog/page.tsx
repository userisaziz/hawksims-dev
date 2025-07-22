"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  ChevronDown,
  Search,
} from "lucide-react";
import Image from "next/image";

// Utility function
const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(" ");
};

// Badge Component
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

// Card Components
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Input Component
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

// Main Blog Component
interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const postsData: Post[] = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the cutting-edge technologies and methodologies that are reshaping how we build web applications.",
    content: "Full article content here...",
    category: "Technology",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    featured: true,
  },
  {
    id: "2",
    title: "Building Accessible Design Systems",
    excerpt:
      "Learn how to create inclusive design systems that work for everyone, regardless of their abilities.",
    content: "Full article content here...",
    category: "Design",
    author: "Marcus Rodriguez",
    date: "2024-01-12",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop",
  },
  {
    id: "3",
    title: "The Art of Code: Writing Beautiful, Maintainable Software",
    excerpt:
      "Discover principles and practices that make code not just functional, but elegant and sustainable.",
    content: "Full article content here...",
    category: "Development",
    author: "Emma Thompson",
    date: "2024-01-10",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
  },
  {
    id: "4",
    title: "AI and Machine Learning in Modern Applications",
    excerpt:
      "Understanding how artificial intelligence is transforming user experiences and development workflows.",
    content: "Full article content here...",
    category: "AI/ML",
    author: "David Kim",
    date: "2024-01-08",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
  },
  {
    id: "5",
    title: "Sustainable Web Development Practices",
    excerpt:
      "How to build environmentally conscious applications that minimize digital carbon footprint.",
    content: "Full article content here...",
    category: "Sustainability",
    author: "Lisa Park",
    date: "2024-01-05",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop",
  },
  {
    id: "6",
    title: "The Psychology of User Interface Design",
    excerpt:
      "Exploring how cognitive science principles can improve user experience and interface design.",
    content: "Full article content here...",
    category: "UX/UI",
    author: "Alex Johnson",
    date: "2024-01-03",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=400&fit=crop",
  },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(postsData);

  const categories = [
    "All",
    ...Array.from(new Set(postsData.map((post) => post.category))),
  ];

  useEffect(() => {
    let filtered = postsData;
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }
    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  const featuredPost = postsData.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <main className="relative min-h-screen bg-[#09090B] text-white font-sans overflow-x-hidden">
      <Header />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 xl:px-0 py-16">
        {/* Blur background shapes */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 w-[700px] h-[350px] opacity-60 blur-2xl pointer-events-none">
          <Image
            src="/images/blur/blur-01.svg"
            alt="blur"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute right-0 top-20 -z-10 w-[300px] h-[200px] opacity-40 blur-2xl pointer-events-none">
          <Image
            src="/images/blur/blur-02.svg"
            alt="blur"
            fill
            className="object-cover"
          />
        </div>
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-purple-100 to-purple-900">
              Blog & Insights
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover insights, tutorials, and stories from the world of modern
            development.
          </p>
        </div>
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-md bg-[#18181B] border border-gray-700 text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-[#18181B] border border-gray-700 rounded-md px-4 py-2 pr-8 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1" />
              <span className="px-3 py-1 rounded-full bg-blue-900/40 text-blue-300 text-xs font-semibold border border-blue-700">
                Featured Article
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1" />
            </div>
            <div className="rounded-3xl overflow-hidden bg-[#18181B] border border-gray-700 shadow-lg flex flex-col lg:flex-row">
              <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/80 via-transparent to-transparent" />
              </div>
              <div className="p-8 flex flex-col justify-center w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-900/40 text-blue-300 text-xs font-semibold border border-blue-700">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-white">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-blue-400 flex items-center justify-center text-white font-semibold">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-white">
                        {featuredPost.author}
                      </p>
                      <p className="text-sm text-gray-400">
                        {featuredPost.date}
                      </p>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-700 text-white font-semibold hover:bg-blue-600 transition">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* Regular Posts Grid */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent flex-1" />
            <h2 className="text-2xl font-bold text-white">Latest Articles</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent flex-1" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <div
                key={post.id}
                className="group rounded-2xl overflow-hidden bg-[#18181B] border border-gray-700 shadow-lg flex flex-col h-full"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-900/40 text-blue-300 text-xs font-semibold border border-blue-700">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                    <button className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-700 text-white font-semibold hover:bg-blue-600 transition text-sm">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </section>
        {/* Newsletter Section */}
        <section className="mt-24 mb-16">
          <div className="rounded-2xl bg-gradient-to-r from-blue-900/20 via-blue-800/20 to-blue-900/20 border border-blue-700 p-12 text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights,
              tutorials, and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#18181B] border border-gray-700 rounded-md px-4 py-2 text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="inline-flex items-center gap-2 px-8 py-2 rounded-full bg-blue-700 text-white font-semibold hover:bg-blue-600 transition">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
