# AustinstayerFX Website - Vanilla HTML/CSS/JS

This is the complete website converted to plain HTML, CSS, and JavaScript.

## File Structure

```
vanilla-site/
├── index.html          # Main HTML file
├── styles.css          # All styles
├── script.js           # All JavaScript functionality
├── README.md           # This file
└── assets/             # Images folder
    ├── logo.jpg
    └── setups/
        ├── audjpy-1h.jpg
        ├── fx-vol-40-m30.jpg
        ├── gainx-999-h1.jpg
        ├── gainx-999-m15.jpg
        ├── gbpcad-h1.jpg
        ├── step-index-m30.jpg
        ├── volatility-100-m15.jpg
        └── xauusd-gold-m30.jpg
```

## Setup Instructions

### 1. Copy the Assets
Copy the following folders from the original project to this `vanilla-site` folder:
- Copy `src/assets/logo.jpg` to `vanilla-site/assets/logo.jpg`
- Copy all files from `src/assets/setups/` to `vanilla-site/assets/setups/`

Your final structure should look like:
```
vanilla-site/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── logo.jpg
    └── setups/
        ├── audjpy-1h.jpg
        ├── fx-vol-40-m30.jpg
        ├── gainx-999-h1.jpg
        ├── gainx-999-m15.jpg
        ├── gbpcad-h1.jpg
        ├── step-index-m30.jpg
        ├── volatility-100-m15.jpg
        └── xauusd-gold-m30.jpg
```

### 2. View Locally
Simply open `index.html` in any web browser. No server required!

Or use a local server for best results:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using VS Code
# Install "Live Server" extension, then right-click index.html > "Open with Live Server"
```

## Hosting Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files (including assets folder)
3. Go to Settings > Pages
4. Select "Deploy from a branch" > main > root
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the entire `vanilla-site` folder
3. Your site is live instantly!

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import from Git or upload folder
3. Deploy!

### Option 4: Any Static Host
Upload all files to any web hosting service:
- Hostinger
- Bluehost
- GoDaddy
- DigitalOcean
- AWS S3
- Firebase Hosting

Just upload all files maintaining the folder structure.

## Features Included

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Mobile navigation menu
- ✅ Image carousel with auto-rotation
- ✅ "View All Setups" modal
- ✅ FAQ accordion
- ✅ Animated counters
- ✅ Contact form (sends to WhatsApp)
- ✅ Smooth scroll navigation
- ✅ WhatsApp floating button
- ✅ Dark theme

## Browser Support

Works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Customization

- **Colors**: Edit CSS variables at the top of `styles.css`
- **Content**: Edit directly in `index.html`
- **Functionality**: Modify `script.js`

---

© 2025 AustinstayerFX