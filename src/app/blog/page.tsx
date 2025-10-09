import Link from 'next/link'

const blogPosts = [
  {
    slug: 'getting-started-with-glucose-tracking',
    title: 'Getting Started with Glucose Tracking',
    excerpt: 'Learn the basics of monitoring your blood sugar levels effectively and understanding what the numbers mean.',
    date: '2025-01-15',
    category: 'Getting Started',
  },
  {
    slug: 'best-foods-for-type-2-diabetes',
    title: 'Best Foods for Type 2 Diabetes',
    excerpt: 'Discover which foods help maintain stable blood sugar levels and support overall health.',
    date: '2025-01-10',
    category: 'Nutrition',
  },
  {
    slug: 'exercise-tips-for-diabetes-management',
    title: 'Exercise Tips for Diabetes Management',
    excerpt: 'How physical activity can transform your diabetes management and improve your quality of life.',
    date: '2025-01-05',
    category: 'Exercise',
  },
]

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Blog
          </h1>
          <p className="text-xl opacity-90">
            Expert tips, guides, and insights for managing Type 2 diabetes
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 bg-background-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-primary-dark"></div>
                <div className="p-6">
                  <span className="text-sm text-primary font-semibold">{post.category}</span>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 mt-1">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-primary font-semibold">Read More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              More articles coming soon! Follow us on social media for daily tips and updates.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Browse by Category</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-lg mb-2">Getting Started</h3>
              <p className="text-gray-600 text-sm">Basics for beginners</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-lg mb-2">Nutrition</h3>
              <p className="text-gray-600 text-sm">Food & meal planning</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-lg mb-2">Exercise</h3>
              <p className="text-gray-600 text-sm">Physical activity tips</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-lg mb-2">Medication</h3>
              <p className="text-gray-600 text-sm">Treatment information</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-lg mb-2">Lifestyle</h3>
              <p className="text-gray-600 text-sm">Daily habits & tips</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-lg mb-2">Success Stories</h3>
              <p className="text-gray-600 text-sm">Community experiences</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
