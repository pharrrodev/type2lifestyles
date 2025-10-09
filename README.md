# Type2Lifestyles Website

A modern, SEO-optimized blog and content hub for the Type 2 diabetes community, built with Next.js 14 and Tailwind CSS.

## 🚀 Features

- **Fast & SEO-Optimized** - Built with Next.js 14 App Router for excellent performance
- **Responsive Design** - Mobile-first approach, works beautifully on all devices
- **Blog System** - Easy-to-manage blog posts with categories
- **Brand Consistency** - Matches Type2Lyfe app colors (#14B8A6 teal theme)
- **Social Integration** - Links to TikTok, YouTube, Instagram
- **App Promotion** - Dedicated landing page for Type2Lyfe app

## 📁 Project Structure

```
type2lifestyles-website/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   ├── app/               # Type2Lyfe app landing page
│   │   ├── blog/              # Blog listing & posts
│   │   ├── resources/         # Resources page
│   │   ├── layout.tsx         # Root layout with nav/footer
│   │   └── globals.css        # Global styles
│   └── components/
│       ├── Navbar.tsx         # Navigation component
│       └── Footer.tsx         # Footer component
├── public/                    # Static assets
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the project folder:**
```bash
cd C:\pharrrohealth\type2lifestyles-website
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open browser:**
Visit http://localhost:3000

## 📝 Adding Blog Posts

### Method 1: Create New Page (Current Setup)

1. Create a new folder in `src/app/blog/your-post-slug/`
2. Add `page.tsx` with your content
3. Update the blog list in `src/app/blog/page.tsx`

### Method 2: Use MDX (Future Enhancement)

Install MDX packages and create `.mdx` files for easier blog management.

## 🎨 Design System

### Colors
- **Primary Teal**: `#14B8A6`
- **Dark Teal**: `#0F766E`  
- **Light Teal**: `#5DD4C3`
- **Secondary Blue**: `#4A9FD8`
- **Background Light**: `#F7F9FC`
- **Background Dark**: `#1F2937`

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, responsive sizes
- **Body**: 16-18px base size

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/pharrrodev/type2lifestyles-website
git push -u origin main
```

2. **Deploy on Vercel:**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Configure project settings:
  - Framework Preset: Next.js
  - Root Directory: `./`
  - Build Command: `npm run build`
  - Output Directory: `.next`
- Deploy!

3. **Add custom domain:**
- Go to Project Settings → Domains
- Add `type2lifestyles.com`
- Update DNS records as instructed

### Environment Variables
No environment variables needed for basic setup. Add as needed for:
- Analytics (Google Analytics, etc.)
- Newsletter integration
- Contact forms

## 📱 Social Media Links

Update social media URLs in:
- `src/components/Footer.tsx`
- `src/app/page.tsx`

Current placeholders:
- TikTok: `https://tiktok.com/@type2lifestyles`
- YouTube: `https://youtube.com/@type2lifestyles`
- Instagram: `https://instagram.com/type2lifestyles`

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📄 License

© 2025 Type2Lifestyles. All rights reserved.

Built with ❤️ by [PharrroDev](https://pharrrodev.com)

## 🤝 Contributing

This is a private project. For questions or suggestions, contact the development team.

## 📞 Support

For issues or questions:
- Email: support@type2lifestyles.com (update with actual email)
- GitHub Issues: [Create an issue](https://github.com/pharrrodev/type2lifestyles-website/issues)

---

**Next Steps:**
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Add more blog posts
4. Deploy to Vercel
5. Connect custom domain
6. Set up analytics
