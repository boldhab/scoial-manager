
# SocialDash — Social Media Management Dashboard

<div align="center">

![SocialDash Dashboard](public/demo.png)

**A modern, responsive social media management and analytics dashboard built with Next.js, React, TypeScript, and Tailwind CSS.**

An interactive dashboard for exploring social media performance, content management, audience engagement, marketing campaigns, and customer insights.

[View Repository](https://github.com/boldhab/scoial-manager) · [Report a Bug](https://github.com/boldhab/scoial-manager/issues) · [Request a Feature](https://github.com/boldhab/scoial-manager/issues)

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-149ECA?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-Not_Specified-lightgrey)

</div>

---

## 📖 About the Project

**SocialDash** is a frontend-focused social media management dashboard designed to provide a centralized interface for exploring social media activities and performance metrics.

The application brings together analytics, content management, campaign monitoring, audience insights, and customer information in one responsive interface.

Built using modern frontend technologies, SocialDash demonstrates reusable component architecture, interactive data visualization, responsive design, and user-friendly dashboard experiences.

> **Project Status:** Frontend demonstration. Social media statistics, posts, campaigns, and customer records currently use sample data. Backend integration, authentication, persistent storage, and real social media publishing are not yet implemented.

---

## ✨ Features

### 📊 Dashboard & Overview
- Social media performance summary
- Interactive statistics and metric cards
- Audience growth and engagement visualizations
- Platform performance comparisons
- Responsive analytics layout
- Interactive overview controls

### 📝 Post Management
- View social media posts
- Display scheduled, published, failed, and draft statuses
- Visualize post engagement metrics
- View associated social media platforms
- Display content type, tags, and campaign information
- Post creation, editing, and deletion interfaces (planned functionality)

### 📈 Analytics & Reporting
- Follower growth charts
- Engagement rate visualizations
- Reach distribution
- Impressions and conversion metrics
- Platform performance analysis
- Chart.js-powered data visualization

### 💬 Engagement Monitoring
- Recent engagement activity
- Likes, comments, and shares
- Post-related interaction history
- Engagement overview cards

### 🎯 Campaign Management
- Marketing campaign overview
- Campaign status tracking
- Budget and spending summaries
- Conversion statistics
- Click-through rate (CTR)
- Cost per click (CPC)
- Return on ad spend (ROAS)
- Campaign performance visualizations

### 👥 Customer Management
- Customer profiles and contact information
- Customer segmentation
- Customer spending and order metrics
- Platform association
- Customer interaction summaries
- Customer analytics charts

### 🔐 User Management
- User profile listings
- Admin, editor, and viewer role labels
- Active, invited, and suspended status indicators
- User management interface

> User management currently demonstrates role and status data. Authentication and permission enforcement are not implemented.

### ⚙️ Settings & Customization
- Light and dark theme support
- System theme integration
- Responsive sidebar navigation
- Reusable interface components
- Account settings placeholder

### 📱 Responsive Design
- Mobile-friendly layout
- Collapsible navigation sidebar
- Responsive dashboard cards
- Adaptive charts
- Desktop and tablet support
- Accessible interface elements

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router) |
| Frontend | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Charts | Chart.js 4, React Chart.js 2 |
| UI Components | Radix UI |
| Icons | Lucide React |
| Theme Management | next-themes |
| UI Utilities | clsx, tailwind-merge |
| Component Variants | class-variance-authority |
| Package Manager | npm |

### Additional Installed Libraries

The project also includes:

- TanStack React Query
- Zustand
- Socket.IO Client

These dependencies can support future API communication, global state management, and real-time updates. Their installation does not mean those integrations are currently operational.

---

## 🚀 Getting Started

### Prerequisites

Make sure the following tools are installed:

- Node.js 20 or later
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/boldhab/scoial-manager.git
```

### 2. Navigate to the Project Directory

```bash
cd scoial-manager
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Application

Visit:

```text
http://localhost:3000
```

The SocialDash dashboard should now be accessible in your browser.

---

## 📁 Project Structure

```text
scoial-manager/
│
├── public/
│   ├── demo.png
│   └── *.svg
│
├── docs/
│   ├── api.md
│   ├── components.md
│   └── deployment.md
│
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── sections/
│   │   │   ├── DashboardSection.tsx
│   │   │   ├── OverviewSection.tsx
│   │   │   ├── PostsSection.tsx
│   │   │   ├── AnalyticsSection.tsx
│   │   │   ├── EngagementSection.tsx
│   │   │   ├── CampaignsSection.tsx
│   │   │   ├── CustomersSection.tsx
│   │   │   ├── UsersSection.tsx
│   │   │   └── SettingsSection.tsx
│   │   │
│   │   ├── ui/
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── loading-spinner.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── toast.tsx
│   │   │   └── tooltip.tsx
│   │   │
│   │   ├── DashboardHome.tsx
│   │   ├── Sidebar.tsx
│   │   └── ThemeToggler.tsx
│   │
│   ├── hooks/
│   │   ├── useAccessibility.ts
│   │   └── useResponsive.ts
│   │
│   └── lib/
│       └── utils.ts
│
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tailwind.config.ts (not present)
├── tsconfig.json
└── README.md
```

**Note:** Tailwind CSS 4 configuration is managed through the project's CSS and PostCSS configuration; a `tailwind.config.ts` file is not required.

---

## 🏗️ Application Architecture

SocialDash follows a component-based frontend architecture using the Next.js App Router.

```text
Next.js Application
        │
        ▼
    Root Layout
        │
        ▼
     Main Page
        │
        ├── Sidebar Navigation
        │
        ├── Theme Toggler
        │
        └── Dashboard Home
                │
                ├── Dashboard
                ├── Overview
                ├── Posts
                ├── Analytics
                ├── Engagement
                ├── Campaigns
                ├── Customers
                ├── Users
                └── Settings
                        │
                        ▼
                 Reusable UI
                   Components
```

### Architecture Highlights

- **Component-based design:** Dashboard sections are organized into independent React components.
- **Reusable UI library:** Buttons, cards, dialogs, badges, and other components share consistent styling.
- **Responsive design:** Layout behavior adapts to desktop, tablet, and mobile screen sizes.
- **Client-side navigation:** Dashboard sections are switched through React state.
- **Data visualization:** Chart.js components display sample analytics data.
- **Theme management:** `next-themes` manages light and dark appearance.

---

## 📊 Data and Current Implementation

The application currently uses sample datasets defined inside frontend components.

| Module | Current Data Source |
|--------|---------------------|
| Dashboard | Static demonstration metrics |
| Overview | Local sample data |
| Posts | In-component sample post records |
| Analytics | Static chart datasets |
| Engagement | Sample engagement activities |
| Campaigns | In-component sample campaign records |
| Customers | In-component customer dataset |
| Users | Sample user records |
| Settings | Client-side theme preference |

### Current Limitations

- No production backend API
- No persistent database
- No user authentication
- No enforced role-based access control
- No real social media account integration
- No automatic social media publishing
- No server-side post scheduling
- No live social media analytics
- Some action buttons are placeholders

The project provides a foundation for implementing these capabilities in future releases.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Generate a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Currently configured with deprecated `next lint` |

### Recommended Linting Fix

For compatibility with Next.js 15 and ESLint 9, update the lint script in `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint ."
  }
}
```

Then run:

```bash
npm run lint
```

---

## 📚 Documentation

Additional project documentation is available:

- [API Reference](docs/api.md)
- [Component Documentation](docs/components.md)
- [Deployment Guide](docs/deployment.md)

**Note:** The API documentation describes an intended integration interface. It does not represent a deployed or fully implemented backend API.

---

## 🗺️ Future Roadmap

### Phase 1 — Frontend Dashboard
- [x] Create dashboard layout
- [x] Implement sidebar navigation
- [x] Build reusable UI components
- [x] Add interactive analytics charts
- [x] Implement responsive design
- [x] Add light and dark themes

### Phase 2 — Backend Integration
- [ ] Build backend REST APIs
- [ ] Integrate a persistent database
- [ ] Implement authentication
- [ ] Add secure role-based access control
- [ ] Implement functional CRUD operations

### Phase 3 — Social Media Integration
- [ ] Integrate social media platform APIs
- [ ] Connect authorized social media accounts
- [ ] Implement post scheduling
- [ ] Enable content publishing
- [ ] Retrieve real engagement statistics

### Phase 4 — Advanced Analytics
- [ ] Add dynamic reporting
- [ ] Implement date-range filtering
- [ ] Support analytics exports
- [ ] Introduce real-time updates
- [ ] Add custom performance dashboards

### Phase 5 — Production Readiness
- [ ] Add automated tests
- [ ] Implement CI/CD pipelines
- [ ] Improve accessibility
- [ ] Add monitoring and error tracking
- [ ] Perform security testing
- [ ] Deploy production services

---

## 🤝 Contributing

Contributions and suggestions are welcome.

To contribute:

1. Fork this repository.
2. Create a feature branch.
3. Implement your improvements.
4. Commit your changes.
5. Push the branch to your fork.
6. Open a pull request.

Example:

```bash
git checkout -b feature/new-feature
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
```

Please keep contributions aligned with the existing project structure and coding conventions.

---

## 👨‍💻 Developer

**Habtamu Befekadu**

Software Engineering Student | Full-Stack Web & Mobile Developer

Passionate about building scalable web applications, intuitive interfaces, and practical software solutions.

- **GitHub:** [@boldhab](https://github.com/boldhab)


---

## ⭐ Support

If you find this project useful, consider giving the repository a star.

Your feedback, suggestions, and contributions are appreciated.

---

<div align="center">

**Built with Next.js, React, TypeScript, and Tailwind CSS.**

Developed by **[Habtamu Befekadu](https://github.com/boldhab)**

</div>
