import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Calendar, User, Clock, Search, TrendingUp } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Signs You're Not Drinking Enough Water",
    excerpt: "Learn to recognize the warning signs of dehydration and how HydroSmart can help you stay on track with your hydration goals.",
    content: "Proper hydration is essential for optimal health, yet many people don't drink enough water throughout the day. Here are 10 signs that indicate you may be dehydrated: 1) Persistent fatigue, 2) Dry skin and lips, 3) Dark yellow urine...",
    author: "Dr. Sarah Johnson",
    date: "2026-06-05",
    readTime: "5 min read",
    category: "Health & Wellness",
    image: "hydration-health"
  },
  {
    id: 2,
    title: "How Smart Water Bottles Are Revolutionizing Hydration",
    excerpt: "Discover how IoT technology is transforming the way we track and maintain our daily water intake.",
    content: "The integration of Internet of Things (IoT) technology into everyday items has revolutionized many aspects of our lives, and hydration tracking is no exception. Smart water bottles like HydroSmart use advanced sensors...",
    author: "Tech Innovations Team",
    date: "2026-06-03",
    readTime: "7 min read",
    category: "Technology",
    image: "tech-innovation"
  },
  {
    id: 3,
    title: "Hydration Goals for Different Lifestyles",
    excerpt: "Whether you're an athlete, office worker, or traveler, learn how to adjust your water intake for optimal performance.",
    content: "Not everyone needs the same amount of water. Your hydration needs depend on various factors including your activity level, climate, and lifestyle. Let's explore the optimal hydration strategies for different scenarios...",
    author: "Fitness Coach Mike",
    date: "2026-06-01",
    readTime: "6 min read",
    category: "Fitness",
    image: "fitness-hydration"
  },
  {
    id: 4,
    title: "The Science Behind LED Reminder Technology",
    excerpt: "Understanding how visual cues can help build better hydration habits and improve your health.",
    content: "Research shows that visual reminders are highly effective in building and maintaining healthy habits. HydroSmart's LED reminder system leverages behavioral psychology principles to help you drink water consistently...",
    author: "Dr. Emily Chen",
    date: "2026-05-28",
    readTime: "8 min read",
    category: "Science",
    image: "led-science"
  },
  {
    id: 5,
    title: "Eco-Friendly Hydration: Reducing Plastic Waste",
    excerpt: "How switching to a reusable smart bottle can make a positive environmental impact.",
    content: "Every year, millions of plastic water bottles end up in landfills and oceans. By using a reusable smart bottle like HydroSmart, you can eliminate approximately 156 single-use plastic bottles per year...",
    author: "Environmental Team",
    date: "2026-05-25",
    readTime: "5 min read",
    category: "Sustainability",
    image: "eco-friendly"
  },
  {
    id: 6,
    title: "Premium Features Deep Dive: Biometric Security",
    excerpt: "A comprehensive look at how fingerprint technology keeps your hydration data and bottle secure.",
    content: "Security and privacy are paramount in today's connected world. HydroSmart Premium's biometric fingerprint lock ensures that only you can access your bottle's drinking function. Here's how it works...",
    author: "Security Team",
    date: "2026-05-22",
    readTime: "6 min read",
    category: "Technology",
    image: "biometric-security"
  }
];

const categories = ["All", "Health & Wellness", "Technology", "Fitness", "Science", "Sustainability"];

export function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (selectedPost !== null) {
    const post = blogPosts.find(p => p.id === selectedPost);
    if (!post) return null;

    return (
      <div className="min-h-screen bg-white">
        <Header />

        <div className="pt-24 pb-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setSelectedPost(null)}
                className="mb-6 text-cyan-600 hover:text-cyan-700 font-medium flex items-center gap-2"
              >
                ← Back to Blog
              </button>

              <Card className="p-8 bg-white rounded-2xl shadow-lg">
                <Badge className="mb-4">{post.category}</Badge>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">{post.excerpt}</p>

                  <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl p-8 mb-8">
                    <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-16 h-16 text-gray-400" />
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{post.content}</p>

                  <div className="mt-8 p-6 bg-cyan-50 rounded-xl border border-cyan-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Key Takeaways</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Stay hydrated throughout the day with smart reminders</li>
                      <li>• Track your progress with real-time analytics</li>
                      <li>• Join the HydroSmart community for motivation</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-cyan-50 rounded-2xl border-2 border-cyan-200 mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to improve your hydration?</h3>
                <p className="text-gray-700 mb-4">
                  Get your HydroSmart bottle today and start your journey to better health!
                </p>
                <a
                  href="/"
                  className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all"
                >
                  Shop Now
                </a>
              </Card>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">HydroSmart Blog</h1>
              <p className="text-xl text-gray-600">
                Tips, insights, and stories about hydration and wellness
              </p>
            </div>

            <Card className="p-6 bg-white rounded-2xl shadow-lg mb-8">
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search articles..."
                  className="pl-12 h-14 rounded-xl text-lg"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Card>

            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <Card
                    key={post.id}
                    onClick={() => setSelectedPost(post.id)}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="bg-gradient-to-r from-cyan-100 to-blue-100 h-48 flex items-center justify-center">
                      <TrendingUp className="w-16 h-16 text-cyan-600" />
                    </div>

                    <div className="p-6">
                      <Badge className="mb-3">{post.category}</Badge>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-12 bg-white rounded-2xl shadow-lg text-center">
                <p className="text-gray-600 text-lg">No articles found matching your search</p>
                <p className="text-gray-500 text-sm mt-2">Try different keywords or select another category</p>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
