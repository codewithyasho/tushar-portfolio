# Portfolio Website

A professional portfolio website inspired by modern artist portfolios, featuring a clean and elegant design with smooth animations and responsive layout.

## Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Smooth Animations**: Fade-in effects and smooth scrolling
- **Clean Layout**: Professional and modern design
- **Easy to Customize**: Simple HTML, CSS, and JavaScript

## Structure

```
tushar-portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript for interactions
└── README.md          # This file
```

## Customization Guide

### 1. Personal Information

In `index.html`, replace:
- "YOUR NAME" with your actual name
- Update the title in the `<title>` tag
- Update the introduction text in the `.intro` section
- Update the copyright text in the footer

### 2. Images

Replace the placeholder Unsplash images with your own:
- Hero section image
- Featured section image
- Music section image
- Film section image
- Books section image

### 3. Video

Replace the YouTube video embed link in the Featured Video section with your own video URL.

### 4. Social Media Links

Update the social media links in the footer with your actual profile URLs:
- Instagram
- Twitter
- Facebook
- YouTube

### 5. Navigation Links

Update or add navigation sections based on your needs in the `<nav>` section.

### 6. Colors

To change the color scheme, modify the CSS variables in `styles.css`:

```css
:root {
    --purple-dark: #4a2c52;
    --purple-medium: #6b4974;
    --purple-light: #8b6a94;
    --cream: #f5f1ed;
    --text-light: #a99a9a;
    --text-dark: #333;
    --white: #ffffff;
}
```

## How to Use

1. Open the folder in VS Code
2. Update all the content with your own information
3. Replace images with your own photos
4. Open `index.html` in a browser to preview
5. Deploy to your hosting service (GitHub Pages, Netlify, Vercel, etc.)

## Deployment Options

### GitHub Pages
1. Create a new repository on GitHub
2. Push this code to the repository
3. Go to Settings > Pages
4. Select the main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Sign up at netlify.com
2. Drag and drop this folder to Netlify
3. Your site will be live instantly

### Vercel
1. Sign up at vercel.com
2. Import your GitHub repository
3. Deploy with one click

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Free to use for personal and commercial projects.

## Credits

Design inspired by professional artist portfolios.
