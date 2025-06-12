# Olami.id Contractor & Supplier Landing Page

A modern, responsive landing page for a construction contractor and supplier business built with Nuxt.js.

## Features

- Static Site Generation (SSG) for fast loading and SEO benefits
- Responsive design that works on all devices
- Modern and clean UI with smooth animations
- Contact form for customer inquiries
- Optimized for performance and SEO

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ks-landing-page.git
cd ks-landing-page
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Building for Production

To generate the static site for production:

```bash
npm run generate
# or
yarn generate
```

This will create a `dist` folder with all the static files ready for deployment.

## Deploying to Hostinger

1. Generate the static site:
```bash
npm run generate
# or
yarn generate
```

2. Log in to your Hostinger account and go to the File Manager or use FTP.

3. Navigate to the public_html directory (or the directory where you want to deploy your site).

4. Upload all the contents of the `dist` folder to this directory.

5. If you're deploying to a subdirectory, you may need to adjust the `router.base` in `nuxt.config.js` before generating the static site:

```javascript
// nuxt.config.js
export default {
  router: {
    base: '/subdirectory-name/'
  }
}
```

## Customization

- **Colors**: Main color scheme can be modified in `assets/css/main.css`
- **Content**: Update the text and images in the components to match your business
- **Images**: Replace the placeholder images with your own by updating the URLs in the components

## Built With

- [Nuxt.js](https://nuxtjs.org/) - The Vue.js Framework
- [Bootstrap Vue](https://bootstrap-vue.org/) - Bootstrap components for Vue.js
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

## License

This project is licensed under the MIT License - see the LICENSE file for details.