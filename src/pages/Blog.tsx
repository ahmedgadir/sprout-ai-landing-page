import React from 'react';
import Navigation from '@/components/Navigation';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Grant Writing in 2024",
      excerpt: "Discover the latest strategies and best practices for writing successful grant proposals that get funded.",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Grant Writing",
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: 2,
      title: "How AI is Transforming Grant Discovery",
      excerpt: "Learn how artificial intelligence is revolutionizing the way organizations find and match with funding opportunities.",
      author: "Mike Chen",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Technology",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 3,
      title: "5 Common Grant Application Mistakes to Avoid",
      excerpt: "Avoid these critical errors that cause grant applications to be rejected and learn how to improve your success rate.",
      author: "Emily Rodriguez",
      date: "December 5, 2024",
      readTime: "5 min read",
      category: "Best Practices",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 4,
      title: "Building a Sustainable Grant Strategy",
      excerpt: "Create a long-term approach to grant funding that ensures consistent revenue for your organization.",
      author: "David Park",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Strategy",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 5,
      title: "Understanding Funder Requirements and Priorities",
      excerpt: "Deep dive into what funders really want to see in grant applications and how to align your proposals.",
      author: "Lisa Thompson",
      date: "November 20, 2024",
      readTime: "9 min read",
      category: "Funding",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 6,
      title: "The Future of Grant Management Technology",
      excerpt: "Explore emerging trends and technologies that are shaping the future of grant management and application processes.",
      author: "Alex Rivera",
      date: "November 15, 2024",
      readTime: "6 min read",
      category: "Technology",
      image: "/placeholder.svg",
      featured: false
    }
  ];

  const categories = ["All", "Grant Writing", "Technology", "Best Practices", "Strategy", "Funding"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-wise-background-neutral to-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-wise-forest-green mb-6">
              Grant Writing Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert advice, best practices, and industry insights to help you succeed in grant writing and funding.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 bg-wise-forest-green/10 text-wise-forest-green px-4 py-2 rounded-full text-sm font-medium">
                Featured Article
              </span>
            </div>
            
            <div className="bg-gradient-to-br from-wise-forest-green to-wise-bright-green rounded-3xl p-8 lg:p-12 text-white">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {featuredPost.category}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-white/90 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span className="text-sm">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="bg-white text-wise-forest-green hover:bg-gray-100">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-wise-forest-green text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-wise-forest-green text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-wise-forest-green transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Grant Writing Tips
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest insights, best practices, and funding opportunities delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wise-forest-green"
            />
            <Button className="bg-wise-forest-green hover:bg-wise-bright-green">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;