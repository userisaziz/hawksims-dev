"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiUser,
  FiTag,
  FiSearch,
  FiFilter,
  FiChevronDown,
  FiMoon,
  FiSun,
  FiMonitor,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Utility function
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Badge Component
const Badge = ({ className, variant = "default", ...props }) => {
  const variants = {
    default:
      "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary:
      "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive:
      "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
};

// Button Component
const Button = ({
  className,
  variant = "default",
  size = "default",
  ...props
}) => {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};

// Card Components
const Card = React.forwardRef(({ className, ...props }, ref) => (
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

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Input Component
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
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

// Animated Background Component
const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dark theme colors
      const colors = ["#1A1A2E", "#16213E", "#0F3460", "#533483", "#E94560"];

      for (let i = 0; i < 8; i++) {
        ctx.save();
        ctx.globalAlpha = 0.1 + Math.random() * 0.1;
        ctx.globalCompositeOperation = "overlay";

        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = 200 + Math.random() * 300;

        ctx.translate(x, y);
        ctx.rotate(Math.random() * Math.PI * 2);
        ctx.beginPath();

        for (let j = 0; j < 2 * Math.PI; j += Math.PI / 6) {
          const r = size * (0.8 + 0.2 * Math.sin(j * 3 + Math.random()));
          ctx.lineTo(Math.cos(j) * r, Math.sin(j) * r);
        }

        ctx.closePath();
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = size * 0.1;
        ctx.fill();
        ctx.restore();
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 w-full h-full -z-10"
      style={{ mixBlendMode: "overlay" }}
    />
  );
};

// Theme Toggle Component
const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const Icon = theme === "dark" ? FiMoon : FiSun;

  return (
    <></>
    // <Button
    //   variant="outline"
    //   size="icon"
    //   onClick={toggleTheme}
    //   className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm"
    // >
    //   <Icon className="h-4 w-4" />
    // </Button>
  );
};

// Floating Particles Component
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Main Blog Component
const ModernBlogPage = ({
  posts = [
    {
      id: "1",
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Explore the cutting-edge technologies and methodologies that are reshaping how we build web applications.",
      content: `
            <h2>Introduction</h2>
            <p>The web development landscape is evolving at an unprecedented pace. As we move into 2024, several key trends are emerging that promise to reshape how we build and interact with web applications.</p>
            
            <h2>1. AI-Powered Development</h2>
            <p>Artificial Intelligence is no longer just a buzzword in web development. Tools like GitHub Copilot and Amazon CodeWhisperer are becoming standard in developers' toolkits, offering real-time code suggestions and automating repetitive tasks.</p>
            
            <h2>2. WebAssembly (Wasm)</h2>
            <p>WebAssembly continues to gain traction, enabling near-native performance in the browser. This technology is particularly impactful for applications that require heavy computation, such as video editing tools, 3D rendering, and scientific simulations.</p>
            
            <h2>3. Edge Computing</h2>
            <p>With the rise of edge computing, we're seeing more processing being done closer to the user. This reduces latency and improves performance for global applications.</p>
            
            <h2>4. Progressive Web Apps (PWAs)</h2>
            <p>PWAs are becoming more sophisticated, blurring the line between web and native applications. New capabilities in service workers and web manifests are making PWAs more powerful than ever.</p>
            
            <h2>5. Web3 and Decentralization</h2>
            <p>While the hype around Web3 has cooled, the underlying technologies continue to mature. Expect to see more practical applications of blockchain in web development beyond just cryptocurrencies.</p>
            
            <h2>Conclusion</h2>
            <p>The future of web development is exciting and full of possibilities. By staying informed about these trends, developers can position themselves at the forefront of the industry.</p>
          `,
      category: "Technology",
      author: "Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      featured: true,
    },
    {
      id: "1",
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Explore the cutting-edge technologies and methodologies that are reshaping how we build web applications.",
      content: `
            <h2>Introduction</h2>
            <p>The web development landscape is evolving at an unprecedented pace. As we move into 2024, several key trends are emerging that promise to reshape how we build and interact with web applications.</p>
            
            <h2>1. AI-Powered Development</h2>
            <p>Artificial Intelligence is no longer just a buzzword in web development. Tools like GitHub Copilot and Amazon CodeWhisperer are becoming standard in developers' toolkits, offering real-time code suggestions and automating repetitive tasks.</p>
            
            <h2>2. WebAssembly (Wasm)</h2>
            <p>WebAssembly continues to gain traction, enabling near-native performance in the browser. This technology is particularly impactful for applications that require heavy computation, such as video editing tools, 3D rendering, and scientific simulations.</p>
            
            <h2>3. Edge Computing</h2>
            <p>With the rise of edge computing, we're seeing more processing being done closer to the user. This reduces latency and improves performance for global applications.</p>
            
            <h2>4. Progressive Web Apps (PWAs)</h2>
            <p>PWAs are becoming more sophisticated, blurring the line between web and native applications. New capabilities in service workers and web manifests are making PWAs more powerful than ever.</p>
            
            <h2>5. Web3 and Decentralization</h2>
            <p>While the hype around Web3 has cooled, the underlying technologies continue to mature. Expect to see more practical applications of blockchain in web development beyond just cryptocurrencies.</p>
            
            <h2>Conclusion</h2>
            <p>The future of web development is exciting and full of possibilities. By staying informed about these trends, developers can position themselves at the forefront of the industry.</p>
          `,
      category: "Technology",
      author: "Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      featured: true,
    },
    // ... other posts
  ],
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const categories = [
    "All",
    ...Array.from(new Set(posts.map((post) => post.category))),
  ];

  useEffect(() => {
    let filtered = posts;

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
  }, [searchTerm, selectedCategory, posts]);

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden mt-20">
      <AnimatedBackground />
      <FloatingParticles />
      <ThemeToggle />

      {/* Header */}
      <motion.header
        className="relative z-10 border-b border-border/50 bg-background/80 backdrop-blur-xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Modern Blog
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Discover insights, tutorials, and stories from the world of
                modern development
              </motion.p>
            </div>

            {/* Search and Filter */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 lg:min-w-[400px]"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative flex-1">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background/50 backdrop-blur-sm border-border/50"
                />
              </div>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-background/50 backdrop-blur-sm border border-border/50 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-12">
        {/* Featured Post */}
        {featuredPost && (
          <motion.section
            className="mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1" />
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20"
              >
                Featured Article
              </Badge>
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1" />
            </div>

            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden aspect-video lg:aspect-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {featuredPost.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FiClock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold">
                        {featuredPost.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{featuredPost.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {featuredPost.date}
                        </p>
                      </div>
                    </div>
                    <Link href={`/blog/${featuredPost.id}`} passHref>
                      <Button className="group/btn">
                        Read More
                        <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </motion.section>
        )}

        {/* Regular Posts Grid */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-muted-foreground to-transparent flex-1" />
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-muted-foreground to-transparent flex-1" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm">
                        {post.category}
                      </Badge>
                    </div>

                    <CardHeader className="pb-4">
                      <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h3>
                    </CardHeader>

                    <CardContent className="pb-4">
                      <p className="text-muted-foreground line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <FiUser className="h-4 w-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <FiCalendar className="h-4 w-4" />
                          {post.date}
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="pt-0">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <FiClock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                        <Link href={`/blog/${post.id}`} passHref>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="group/btn"
                          >
                            Read More
                            <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground text-lg">
                No articles found matching your criteria.
              </p>
            </motion.div>
          )}
        </motion.section>

        {/* Newsletter Section */}
        <motion.section
          className="mt-24 mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-primary/20 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss the latest insights,
                tutorials, and industry trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="bg-background/50 backdrop-blur-sm border-border/50"
                />
                <Button className="sm:px-8">
                  Subscribe
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        className="relative z-10 border-t border-border/50 bg-background/80 backdrop-blur-xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Modern Blog. Crafted with passion for the developer
              community.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default ModernBlogPage;
