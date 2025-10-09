import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Type2Lifestyles</h3>
            <p className="text-gray-400">
              Your trusted resource for managing Type 2 diabetes with confidence and support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-primary transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-primary transition">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* App */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Type2Lyfe App</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/app" className="text-gray-400 hover:text-primary transition">
                  Features
                </Link>
              </li>
              <li>
                <a href="https://type2lyfe.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition">
                  Try Web App
                </a>
              </li>
              <li>
                <a href="https://type2lyfe.vercel.app/privacy.html" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://type2lyfe.vercel.app/terms.html" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
            <div className="space-y-3">
              <a
                href="https://tiktok.com/@type2lifestyles"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-primary transition"
              >
                <span className="mr-2">📱</span> TikTok
              </a>
              <a
                href="https://youtube.com/@type2lifestyles"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-primary transition"
              >
                <span className="mr-2">▶️</span> YouTube
              </a>
              <a
                href="https://instagram.com/type2lifestyles"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-primary transition"
              >
                <span className="mr-2">📷</span> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Type2Lifestyles. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with ❤️ for the diabetes community by <a href="https://pharrrodev.com" className="text-primary hover:underline">PharrroDev</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
