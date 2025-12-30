# SBMU WebAR Experience

A modern WebAR application featuring SBMU (Swachh Bharat Mission Urban) video experience with interactive camera-based AR effects. Built with React, Vite, and Three.js.

![WebAR](https://img.shields.io/badge/WebAR-Interactive-blue)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646cff)
![Three.js](https://img.shields.io/badge/Three.js-0.160.0-000000)

## 🎯 Features

- 🎥 **Live Camera Feed**: Real-time camera background for immersive AR experience
- 📱 **Interactive Video Card**: SBMU video with banner graphics overlay
- ✨ **Glassmorphic UI**: Premium frosted glass design with smooth animations
- 📲 **Mobile-First**: Optimized for touch devices and responsive design
- 🔗 **Learn More Button**: Direct link to SBMU official website
- 🚀 **Fast Performance**: Optimized with Vite for lightning-fast development and builds

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Modern web browser with camera support

### Installation

```bash
# Navigate to the project directory
cd SBMU/webar

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

The production build will be in the `dist/` directory.

## 🏗️ Project Structure

```
SBMU/
├── README.md
└── SBMU/
    └── webar/
        ├── src/
        │   ├── App.jsx              # Main app component with camera initialization
        │   ├── Scene.jsx            # AR scene component
        │   ├── index.css            # Global styles
        │   ├── main.jsx             # React entry point
        │   └── ui/
        │       ├── ArFrame.jsx      # Video frame component
        │       ├── ArVideoFrame.jsx # Video container
        │       ├── FloatingCTA.jsx  # Learn More button
        │       ├── SbmuUrbanBanner.jsx # SBMU banner component
        │       └── *.css            # Component styles
        ├── public/
        │   ├── assets/
        │   │   └── banner/
        │   │       └── sbmu-banner.png
        │   └── videos/
        │       └── SBMU.mp4
        ├── index.html
        ├── package.json
        ├── vite.config.js
        └── vercel.json
```

## 🎮 User Flow

1. **User opens the app** → WebAR experience loads
2. **Camera permission requested** → User grants camera access
3. **Camera activates** → Live camera feed becomes background
4. **Video card appears** → SBMU video with banner overlay plays
5. **User interacts** → Can click "Learn More" to visit SBMU website

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI framework
- **Vite 5** - Build tool and dev server
- **Three.js 0.160.0** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **GSAP** - Animation library
- **Zustand** - State management

## 📱 Browser Support

- ✅ Chrome 90+ (recommended)
- ✅ Safari 14+ (iOS 14+)
- ✅ Firefox 88+
- ✅ Edge 90+

**Requirements:**
- HTTPS required for camera access (or localhost in development)
- WebGL support required
- Camera permissions needed

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

No environment variables are required for basic functionality. The app works out of the box.

## 📝 Configuration

### Video Source

The SBMU video is located at:
```
public/videos/SBMU.mp4
```

### Banner Image

The banner image is located at:
```
public/assets/banner/sbmu-banner.png
```

### Learn More URL

The "Learn More" button links to:
```
https://sbm-urban.gujarat.gov.in
```

You can modify this URL in `src/Scene.jsx`:

```javascript
const LEARN_MORE_URL = 'https://sbm-urban.gujarat.gov.in'
```

## 🎨 Customization

### Changing the Video

1. Replace `public/videos/SBMU.mp4` with your video file
2. Ensure the video is in MP4 format for best compatibility

### Changing the Banner

1. Replace `public/assets/banner/sbmu-banner.png` with your banner image
2. Recommended size: 800x200px or similar aspect ratio

### Styling

All styles are in the `src/ui/` directory. Main style files:
- `styles.css` - Global UI styles
- `ar-frame.css` - Video frame styles
- `frame-wrapper.css` - Frame container styles
- `sbmu-banner.css` - Banner specific styles

## 🚀 Deployment

### Vercel (Recommended)

The project includes `vercel.json` for easy deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the project and deploy the `dist/` folder:

```bash
npm run build
# Deploy the dist/ folder to your hosting service
```

**Important:** Ensure your hosting service supports HTTPS, as camera access requires a secure context.

## 📄 License

Open source - available for use and modification.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Note**: This application requires camera permissions and HTTPS (or localhost) to function properly. Make sure to grant camera access when prompted by your browser.
# SBMU-Webar
