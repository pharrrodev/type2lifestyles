import Link from 'next/link'

export default function AppPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-secondary text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Type2Lyfe
          </h1>
          <p className="text-2xl mb-4 opacity-90">
            Snap Photos. Track Health. Manage Type 2 Diabetes.
          </p>
          <p className="text-xl mb-8 opacity-80">
            AI-powered Type 2 diabetes tracking app for managing glucose, meals, weight & blood pressure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://type2lyfe.vercel.app" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-xl"
            >
              Try FREE Web App →
            </a>
            <button 
              className="bg-primary-dark text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition opacity-70 cursor-not-allowed"
              disabled
            >
              Android App (Coming Soon)
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-background-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Powerful Features Built for Type 2 Diabetes Management
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🩸</div>
              <h3 className="text-xl font-bold mb-2">Glucose Tracking</h3>
              <p className="text-gray-600">Monitor your blood sugar levels and spot patterns over time</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-bold mb-2">AI Meal Analysis</h3>
              <p className="text-gray-600">Snap a photo and get instant nutritional insights with AI</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold mb-2">Weight Management</h3>
              <p className="text-gray-600">Track your weight trends and progress toward goals</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-2">Blood Pressure</h3>
              <p className="text-gray-600">Monitor cardiovascular health alongside glucose levels</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Beautiful Charts</h3>
              <p className="text-gray-600">Visualize your health data with interactive graphs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-xl font-bold mb-2">Medication Tracking</h3>
              <p className="text-gray-600">Never miss a dose with medication reminders</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-bold mb-2">Dark Mode</h3>
              <p className="text-gray-600">Comfortable viewing in any lighting condition</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Privacy First</h3>
              <p className="text-gray-600">Your health data belongs to you, always encrypted</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            How Type2Lyfe Works for Type 2 Diabetes
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Create Your Free Account</h3>
                <p className="text-gray-600 text-lg">Sign up with email or Google OAuth in seconds</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Log Your Health Data</h3>
                <p className="text-gray-600 text-lg">Manually enter readings or snap photos for AI analysis</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">View Insights & Trends</h3>
                <p className="text-gray-600 text-lg">See beautiful charts and export data for doctor visits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Take Control of Your Type 2 Diabetes?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands using Type2Lyfe to manage their Type 2 diabetes with confidence
          </p>
          <a 
            href="https://type2lyfe.vercel.app" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-xl"
          >
            Start Tracking FREE Today →
          </a>
          <p className="mt-6 text-sm opacity-75">
            No credit card required • Works on any device • Privacy-focused
          </p>
        </div>
      </section>

      {/* Screenshots placeholder */}
      <section className="py-16 px-4 bg-background-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            See Type2Lyfe in Action
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="h-96 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-4xl">
                📊
              </div>
              <div className="p-4 text-center">
                <p className="font-semibold">Dashboard Overview</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="h-96 bg-gradient-to-br from-primary-light to-secondary flex items-center justify-center text-white text-4xl">
                📸
              </div>
              <div className="p-4 text-center">
                <p className="font-semibold">AI Meal Analysis</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="h-96 bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center text-white text-4xl">
                📈
              </div>
              <div className="p-4 text-center">
                <p className="font-semibold">Health Trends</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to blog */}
      <section className="py-12 px-4 text-center">
        <Link href="/blog" className="text-primary hover:text-primary-dark font-semibold text-lg">
          ← Back to Blog
        </Link>
      </section>
    </div>
  )
}
