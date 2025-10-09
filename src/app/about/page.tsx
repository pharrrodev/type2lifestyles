import Link from 'next/link'

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Type2Lifestyles
          </h1>
          <p className="text-xl opacity-90">
            Empowering the Type 2 diabetes community with knowledge, tools, and support
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Type2Lifestyles exists to make <strong>Type 2 diabetes</strong> management simpler, more accessible, and less overwhelming. 
            We focus exclusively on Type 2 diabetes because we believe that with the right information, tools, and community support 
            tailored specifically to Type 2, anyone can thrive.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Through our blog, social media content, and the Type2Lyfe app, we provide evidence-based information, 
            practical tips, and innovative technology designed specifically for people managing Type 2 diabetes.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 bg-background-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Type2Lifestyles was born from a simple observation: managing <strong>Type 2 diabetes</strong> shouldn't be complicated. 
            Too many people with Type 2 diabetes struggle with outdated tracking methods, confusing nutrition information, and a 
            lack of accessible resources designed specifically for their needs.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We created Type2Lyfe, an AI-powered health tracking app built specifically for Type 2 diabetes management. 
            But we knew that technology alone wasn't enough. That's why we built Type2Lifestyles – a comprehensive 
            resource hub dedicated exclusively to Type 2 diabetes, where you can learn, grow, and connect with others 
            on the same journey.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Today, we're proud to serve the Type 2 diabetes community, providing them with specialized tools and 
            knowledge they need to live their healthiest lives.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Evidence-Based</h3>
              <p className="text-gray-600">
                Every piece of advice we share is backed by scientific research and medical expertise
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-3">Privacy-Focused</h3>
              <p className="text-gray-600">
                Your health data belongs to you. We never sell or share your personal information
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We leverage AI and modern technology to make health tracking effortless and insightful
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                Building a supportive space where everyone feels empowered to share and learn
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">Simplicity</h3>
              <p className="text-gray-600">
                Complex medical information made simple, accessible, and actionable for everyone
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-3">Growth</h3>
              <p className="text-gray-600">
                Constantly evolving our content and tools based on community feedback and latest research
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Type 2 Diabetes Community
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start your journey to better Type 2 diabetes management today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/app" 
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Try Type2Lyfe App
            </Link>
            <Link 
              href="/blog" 
              className="bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
