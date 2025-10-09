import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Type2Lifestyles
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Your trusted resource for managing <strong>Type 2 diabetes</strong> with confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/app" 
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Try Type2Lyfe App FREE
            </Link>
            <Link 
              href="/blog" 
              className="bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Everything You Need to Thrive
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-primary text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Track Your Health</h3>
              <p className="text-gray-600">
                Monitor glucose, meals, weight, and blood pressure with our AI-powered Type2Lyfe app
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-primary text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Learn & Grow</h3>
              <p className="text-gray-600">
                Expert articles, tips, and guides specifically for managing Type 2 diabetes effectively
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-primary text-4xl mb-4">💪</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Stay Motivated</h3>
              <p className="text-gray-600">
                Join our Type 2 diabetes community on TikTok, YouTube, and Instagram for daily inspiration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App CTA Section */}
      <section className="bg-primary-light py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Meet Type2Lyfe - Your Health Tracking Companion
          </h2>
          <p className="text-xl mb-8 text-white opacity-90">
            Snap photos of your meals and let AI analyze them instantly. Track glucose, weight, and blood pressure all in one beautiful app.
          </p>
          <Link 
            href="/app"
            className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-xl"
          >
            Explore Type2Lyfe App →
          </Link>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 px-4 bg-background-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Latest from Our Blog
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sample blog post cards */}
            <Link href="/blog/getting-started-with-glucose-tracking" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-primary to-primary-dark"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Getting Started with Glucose Tracking</h3>
                <p className="text-gray-600 mb-4">Learn the basics of monitoring your blood sugar levels effectively...</p>
                <span className="text-primary font-semibold">Read More →</span>
              </div>
            </Link>
            <Link href="/blog/best-foods-for-type-2-diabetes" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-primary to-primary-dark"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Best Foods for Type 2 Diabetes</h3>
                <p className="text-gray-600 mb-4">Discover which foods help maintain stable blood sugar levels...</p>
                <span className="text-primary font-semibold">Read More →</span>
              </div>
            </Link>
            <Link href="/blog/exercise-tips-for-diabetes-management" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-primary to-primary-dark"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Exercise Tips for Type 2 Diabetes</h3>
                <p className="text-gray-600 mb-4">How physical activity can transform your Type 2 diabetes management...</p>
                <span className="text-primary font-semibold">Read More →</span>
              </div>
            </Link>
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition">
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Follow Us on Social Media
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Daily tips, inspiration, and community support
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://tiktok.com/@type2lifestyles" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white p-4 rounded-full hover:bg-gray-800 transition text-2xl">
              📱 TikTok
            </a>
            <a href="https://youtube.com/@type2lifestyles" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition text-2xl">
              ▶️ YouTube
            </a>
            <a href="https://instagram.com/type2lifestyles" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-purple-600 to-pink-500 text-white p-4 rounded-full hover:opacity-90 transition text-2xl">
              📷 Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
