import Link from 'next/link'

export default function ResourcesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Type 2 Diabetes Resources
          </h1>
          <p className="text-xl opacity-90">
            Helpful tools, links, and information specifically for managing Type 2 diabetes
          </p>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Tools</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/app" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-2 border-primary">
              <h3 className="text-2xl font-bold mb-3 text-primary">Type2Lyfe App</h3>
              <p className="text-gray-600 mb-4">
                Track glucose, meals, weight, and blood pressure with AI-powered photo analysis
              </p>
              <span className="text-primary font-semibold">Launch App →</span>
            </Link>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-3">BMI Calculator</h3>
              <p className="text-gray-600 mb-4">
                Calculate your Body Mass Index to track your weight management progress
              </p>
              <span className="text-gray-400">Coming Soon</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-3">Carb Counter</h3>
              <p className="text-gray-600 mb-4">
                Quick reference guide for common foods and their carbohydrate content
              </p>
              <span className="text-gray-400">Coming Soon</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-3">A1C Estimator</h3>
              <p className="text-gray-600 mb-4">
                Estimate your A1C based on your average glucose readings
              </p>
              <span className="text-gray-400">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-16 px-4 bg-background-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Trusted Resources</h2>
          <div className="space-y-4">
            <a href="https://www.diabetes.org/diabetes/type-2" target="_blank" rel="noopener noreferrer" className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">American Diabetes Association - Type 2</h3>
              <p className="text-gray-600">Official Type 2 diabetes resources, guidelines, and latest research</p>
            </a>
            <a href="https://www.cdc.gov/diabetes/basics/type2.html" target="_blank" rel="noopener noreferrer" className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">CDC Type 2 Diabetes Resources</h3>
              <p className="text-gray-600">Government health information and statistics specifically about Type 2 diabetes</p>
            </a>
            <a href="https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/type-2-diabetes" target="_blank" rel="noopener noreferrer" className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">National Institute of Diabetes - Type 2</h3>
              <p className="text-gray-600">Research-based information from NIH specifically about Type 2 diabetes management</p>
            </a>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Join Our Type 2 Diabetes Community</h2>
          <p className="text-lg text-gray-700 mb-8">
            Follow us on social media for daily Type 2 diabetes tips, motivation, and community support
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="https://tiktok.com/@type2lifestyles" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-semibold">
              📱 TikTok
            </a>
            <a href="https://youtube.com/@type2lifestyles" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-semibold">
              ▶️ YouTube
            </a>
            <a href="https://instagram.com/type2lifestyles" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition font-semibold">
              📷 Instagram
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need More Help?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Check out our blog for in-depth articles and guides
          </p>
          <Link 
            href="/blog" 
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Visit Blog
          </Link>
        </div>
      </section>
    </div>
  )
}
