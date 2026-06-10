# LLM Pay - AI-Powered Financial Platform

LLM Pay is an AI-powered payment platform built for the Stellar blockchain, combining autonomous payment agents, network integration, and a modern landing page. The project features a modular architecture with backend services, a frontend dashboard, smart contract integration, and a world-class SaaS landing page.

## 🌟 Features

### Landing Page
- **Premium Design**: Dark mode (#0B0F1A background) with glassmorphism cards and glowing accents
- **Smooth Animations**: Framer Motion-powered scroll-triggered reveals, hover effects, and parallax scrolling
- **Interactive Components**:
  - Sticky navigation with magnetic button effects
  - Hero section with animated headline and email capture
  - Live statistics with real-time animated counters
  - Social proof with enterprise logos and testimonials
  - Feature showcase with 6 animated cards
  - Interactive workflow before-and-after comparison
  - AI Agent section with floating animated cards
  - Customer story with video testimonial layout
  - Global operations with interactive globe visualization
  - 200+ integrations grid with hover effects
  - Pricing CTA with email capture
  - Comprehensive enterprise footer

### Backend
- Express-based API server with payment workflow management
- Stellar network integration for fast, low-cost transactions
- AI agent decision-making capabilities
- Security, authentication, and fraud detection framework

### Frontend Dashboard
- Vite + React application for monitoring wallets and transactions
- Payment creation and approval interfaces
- AI insights, risk scores, and transaction status displays
- Real-time dashboard updates

### Smart Contracts
- Stellar SDK integration for transaction orchestration
- Validation engine for transaction verification
- Payment agent placeholders for autonomous operations

## 🏗️ Architecture

The project is organized into four main modules:

```
LLM_Pay/
├── backend/              # Express API server
├── frontend/             # React dashboard (Vite)
├── smart-contracts/      # Stellar integration layer
└── landing-page/         # Next.js 15 landing page
```

### Technology Stack

#### Landing Page
- **Framework**: Next.js 15 with App Router
- **React**: React 19
- **Styling**: Tailwind CSS with custom dark theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

#### Backend
- **Framework**: Express.js
- **Language**: JavaScript
- **Integration**: Stellar SDK

#### Frontend Dashboard
- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: JavaScript (JSX)

#### Smart Contracts
- **SDK**: Stellar SDK
- **Language**: JavaScript

## 📁 Folder Structure

### `/landing-page`
```
landing-page/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and theme
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Main landing page
│   └── components/
│       ├── AmbientBackground.tsx # Background effects
│       ├── AnimatedCounter.tsx   # Animated number counter
│       ├── Button.tsx            # Magnetic button component
│       ├── GlassCard.tsx         # Glassmorphism card
│       ├── Navigation.tsx        # Sticky navigation
│       ├── Hero.tsx              # Hero section
│       ├── LiveStats.tsx         # Live statistics
│       ├── SocialProof.tsx       # Social proof section
│       ├── Features.tsx          # Feature cards
│       ├── Workflow.tsx          # Workflow comparison
│       ├── AIAgents.tsx          # AI agent showcase
│       ├── CustomerStory.tsx     # Customer testimonial
│       ├── Stats.tsx             # Stats section
│       ├── GlobalOperations.tsx  # Global operations
│       ├── Integrations.tsx      # Integrations grid
│       ├── PricingCTA.tsx        # Pricing CTA
│       └── Footer.tsx            # Footer component
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

### `/backend`
```
backend/
├── src/
│   ├── app.js                  # Express application entry
│   ├── config/
│   │   └── index.js            # Environment configuration
│   ├── controllers/
│   │   └── paymentsController.js # Payment controllers
│   ├── routes/
│   │   └── payments.js         # API routes
│   └── services/
│       └── stellarService.js   # Stellar integration
└── package.json
```

### `/frontend`
```
frontend/
├── src/
│   ├── main.jsx               # React entry point
│   ├── App.jsx                # Main application
│   ├── components/
│   │   ├── Dashboard.jsx      # Dashboard component
│   │   └── PaymentForm.jsx    # Payment form
│   └── services/
│       └── api.js              # API client
├── index.html
├── vite.config.js
└── package.json
```

### `/smart-contracts`
```
smart-contracts/
├── src/
│   ├── index.js               # Stellar exports
│   ├── paymentAgent.js        # AI payment agent
│   └── validationEngine.js    # Validation logic
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Landing Page Setup

1. Navigate to the landing page directory:
```bash
cd landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The landing page will be available at `http://localhost:3000` (or the next available port).

4. Build for production:
```bash
npm run build
npm start
```

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the backend server:
```bash
npm run dev
```

The backend API will be available at `http://localhost:4000`.

### Frontend Dashboard Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The dashboard will be available at `http://localhost:3000`.

### Smart Contracts Setup

1. Navigate to the smart-contracts directory:
```bash
cd smart-contracts
```

2. Install dependencies:
```bash
npm install
```

Note: The smart-contracts module is intentionally minimal and serves as a logical integration layer for Stellar.

## 🎨 Landing Page Components

### Reusable Components
- **Button**: Magnetic hover effect with variants (primary, secondary, outline)
- **GlassCard**: Glassmorphism card with hover animations
- **AnimatedCounter**: Number counter with optional live ticking and decimal support

### Section Components
- **Navigation**: Sticky header with logo, menu items, and CTA buttons
- **Hero**: Animated headline, email capture, and background effects
- **LiveStats**: Real-time platform activity with live counters
- **SocialProof**: Enterprise logos, testimonials, and growth metrics
- **Features**: 6 animated feature cards with icons
- **Workflow**: Before-and-after comparison with animated flow
- **AIAgents**: Floating AI agent cards with status indicators
- **CustomerStory**: Video testimonial with metrics
- **Stats**: Key performance metrics with animated counters
- **GlobalOperations**: Interactive globe with city connections
- **Integrations**: 200+ integrations grid
- **PricingCTA**: Email capture with trust badges
- **Footer**: Comprehensive enterprise footer

## 🔧 Development

### Landing Page Customization

#### Theme Colors
Edit `src/app/globals.css` to customize the color scheme:
```css
:root {
  --background: #0B0F1A;
  --foreground: #ffffff;
}
```

#### Component Styling
All components use Tailwind CSS classes. Modify component files to adjust styling.

#### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Use Framer Motion for animations

### Backend Development

#### Adding New Routes
1. Create a new route file in `src/routes/`
2. Add the route to `src/app.js`
3. Implement controller logic in `src/controllers/`

#### Stellar Integration
Implement payment workflows in `src/services/stellarService.js` using the Stellar SDK.

### Frontend Dashboard Development

#### Adding New Components
1. Create components in `src/components/`
2. Import and use them in `src/App.jsx`
3. Connect to backend via `src/services/api.js`

## 📦 Deployment

### Landing Page Deployment

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
```

### Backend Deployment

Deploy the Express server to any Node.js hosting platform (Heroku, Railway, AWS, etc.).

### Frontend Dashboard Deployment

Build and deploy the Vite application:
```bash
npm run build
```

Deploy the `dist` folder to any static hosting service.

## 🎯 Objectives

- Automate payment workflows using AI-like agents
- Enable fast, low-cost transactions via the Stellar network
- Reduce fraud and transaction errors through validation
- Support cross-border payments with multi-currency capabilities
- Provide a developer-friendly dashboard and integration structure
- Deliver a world-class landing page experience

## 🔐 Security Considerations

- Implement proper authentication and authorization
- Use environment variables for sensitive data
- Add rate limiting to API endpoints
- Implement HTTPS in production
- Validate all user inputs
- Use Stellar's built-in security features

## 📝 License

This repository is provided as a scaffold and can be adapted freely for development purposes.

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or issues, please open an issue on the repository.

---

Built with ❤️ using Next.js 15, React 19, Tailwind CSS, and Framer Motion.
