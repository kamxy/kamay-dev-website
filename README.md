# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS. Features smooth animations with Framer Motion and a clean, professional design.

## 🌟 Features

- Responsive design that works on all devices
- Dark mode by default
- Smooth page transitions and animations
- Project showcase with filtering capabilities
- Contact form integration with EmailJS
- SEO optimized
- Static site generation for optimal performance
- Firebase hosting

## 🛠 Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Contact Form**: EmailJS
- **Hosting**: Firebase

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your EmailJS public key

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the site

## 📦 Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm start
   ```

## 🔥 Deployment

The site is configured for Firebase hosting. To deploy:

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Deploy to Firebase:
   ```bash
   npm run deploy
   ```

## 📝 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```plaintext
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio-website/issues).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 