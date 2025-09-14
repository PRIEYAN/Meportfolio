# Prieyan MN Portfolio

A modern, responsive portfolio website built with React showcasing my skills, experience, and projects.

## Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Optimized for all device sizes
- **Dynamic Content**: GitHub API integration for live repository data
- **Interactive Elements**: Smooth scrolling navigation and hover effects
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading with optimized assets

## Tech Stack

- React 18
- Framer Motion (animations)
- React Icons
- Axios (API calls)
- CSS3 with custom properties
- Responsive design with CSS Grid and Flexbox

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/prieyan/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Deployment

The app is ready to be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the `build` folder or connect your repository
- **GitHub Pages**: Use the `gh-pages` package to deploy to GitHub Pages
- **AWS S3**: Upload the `build` folder to an S3 bucket with static hosting

## Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.js` - Main hero section
- `src/components/About.js` - About section content
- `src/components/Experience.js` - Work experience and achievements
- `src/components/Contact.js` - Contact information

### GitHub Integration

The portfolio automatically fetches repositories from GitHub using the GitHub API. Update the username in:

- `src/components/Projects.js` - Line with `axios.get('https://api.github.com/users/prieyan/repos...')`

### Styling

The design uses CSS custom properties for easy theming. Main colors are defined in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
  /* ... other variables */
}
```

## Sections

1. **Hero**: Introduction with call-to-action buttons
2. **About**: Personal information and focus areas
3. **Experience**: Work history and achievements
4. **Skills**: Technical skills with progress indicators
5. **Projects**: Featured projects and GitHub repositories
6. **Contact**: Contact form and social links

## Performance

- Optimized images and assets
- Lazy loading for animations
- Efficient API calls
- Minimal bundle size
- Responsive images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Prieyan MN - [prieyanmn2007@gmail.com](mailto:prieyanmn2007@gmail.com)

Project Link: [https://github.com/prieyan/portfolio](https://github.com/prieyan/portfolio)
