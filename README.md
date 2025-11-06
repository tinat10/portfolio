# Tina Thai - Portfolio Website

A modern, interactive React portfolio website showcasing my work, experience, and projects.

## Features

- ✨ **Fully Interactive** - Smooth animations and transitions using Framer Motion
- 📱 **Responsive Design** - Mobile-first approach, works on all devices
- 🎨 **Modern UI** - Dark theme with beautiful gradients and hover effects
- 📧 **Contact Form** - EmailJS integration for seamless contact
- ⚡ **Performance Optimized** - Fast loading and smooth scrolling
- ♿ **Accessible** - ARIA labels and keyboard navigation support

## Tech Stack

- **React 18.3.1** - Modern React with hooks
- **Framer Motion** - Animation library
- **EmailJS** - Contact form backend
- **React Icons** - Icon library
- **CSS3** - Custom styling with animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up EmailJS (optional, for contact form):
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service
   - Create an email template
   - Get your Public Key from Account settings
   - Create a `.env` file in the root directory:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploying to GitHub Pages

```bash
npm run deploy
```

## Project Structure

```
portfolio/
├── public/
│   ├── images/          # All images and logos
│   ├── index.html       # HTML template
│   └── manifest.json     # PWA manifest
├── src/
│   ├── components/      # React components
│   │   ├── styles/      # Component-specific CSS
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   ├── ProfessionalDev.js
│   │   ├── Volunteer.js
│   │   ├── Certifications.js
│   │   ├── ContactForm.js
│   │   └── Footer.js
│   ├── data/
│   │   └── portfolioData.js  # All portfolio content
│   ├── App.js           # Main app component
│   ├── App.css          # App styles
│   ├── index.js         # Entry point
│   └── index.css        # Global styles
├── package.json
└── README.md
```

## Customization

### Updating Content

All content is stored in `src/data/portfolioData.js`. Simply edit this file to update:
- Personal information
- Education details
- Work experience
- Projects
- Certifications
- Contact information

### Styling

- Global styles: `src/index.css`
- Component styles: `src/components/styles/[Component].css`
- App styles: `src/App.css`

### Colors

The main color scheme uses:
- Primary: `#4CAF50` (Green)
- Background: `#1e1e1e` (Dark)
- Text: `#ccc` (Light gray)
- Cards: `#333` (Dark gray)

## Features in Detail

### Navigation
- Sticky navbar that changes on scroll
- Smooth scroll to sections
- Active section highlighting
- Mobile hamburger menu

### Animations
- Fade-in on scroll (Intersection Observer)
- Hover effects on cards
- Smooth transitions
- Loading animations

### Interactive Elements
- Expandable experience/volunteer cards
- Project filter by technology
- Contact form with validation
- Social media links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

- Email: tkt@njit.edu
- LinkedIn: [linkedin.com/in/thaitina](https://www.linkedin.com/in/thaitina)
- GitHub: [github.com/tinat10](https://github.com/tinat10)
