# 📁 Project File Structure

```
eco-route-react/
│
├── 📄 index.html                 # Entry HTML file
├── 📄 package.json              # Dependencies and scripts
├── 📄 vite.config.js            # Vite configuration
├── 📄 README.md                 # Main documentation
├── 📄 QUICKSTART.md             # Quick setup guide
├── 📄 FILE_STRUCTURE.md         # This file
├── 📄 .gitignore                # Git ignore rules
│
├── 📁 src/                      # Source code
│   │
│   ├── 📄 main.jsx              # React entry point
│   ├── 📄 App.jsx               # Main app with routing
│   │
│   ├── 📁 components/           # Shared components
│   │   ├── 📄 Layout.jsx        # Main layout wrapper
│   │   ├── 📄 Layout.css
│   │   ├── 📄 Sidebar.jsx       # Navigation sidebar
│   │   └── 📄 Sidebar.css
│   │
│   ├── 📁 pages/                # Page components
│   │   ├── 📄 Dashboard.jsx     # Main dashboard
│   │   ├── 📄 Dashboard.css
│   │   ├── 📄 FleetManagement.jsx
│   │   ├── 📄 FleetManagement.css
│   │   ├── 📄 Drivers.jsx
│   │   ├── 📄 Drivers.css
│   │   ├── 📄 Deliveries.jsx
│   │   ├── 📄 Deliveries.css
│   │   ├── 📄 ESGReports.jsx
│   │   ├── 📄 ESGReports.css
│   │   ├── 📄 Analytics.jsx
│   │   ├── 📄 Analytics.css
│   │   ├── 📄 Settings.jsx
│   │   └── 📄 Settings.css
│   │
│   └── 📁 styles/               # Global styles
│       └── 📄 index.css         # Base CSS reset
│
└── 📁 public/                   # Static assets (add images here)
```

## Key Files Explained

### Configuration Files
- **package.json**: Lists all npm dependencies and scripts
- **vite.config.js**: Vite build tool configuration
- **index.html**: Main HTML template that loads React

### Source Code
- **main.jsx**: Bootstraps React and mounts to DOM
- **App.jsx**: Sets up React Router and defines all routes

### Components
- **Layout.jsx**: Wraps all pages with sidebar navigation
- **Sidebar.jsx**: Navigation menu with route highlighting

### Pages (7 Main Pages)
1. **Dashboard**: Real-time fleet overview
2. **FleetManagement**: Vehicle cards with metrics
3. **Drivers**: Driver profiles and leaderboard
4. **Deliveries**: Delivery tracking
5. **ESGReports**: Sustainability reports
6. **Analytics**: Data visualizations
7. **Settings**: App configuration

## Adding New Pages

1. Create component in `src/pages/NewPage.jsx`
2. Create styles in `src/pages/NewPage.css`
3. Add route in `src/App.jsx`
4. Add navigation link in `src/components/Sidebar.jsx`

## Modifying Existing Pages

Each page component is self-contained:
- JSX structure in `.jsx` file
- Styles in corresponding `.css` file
- Import shared styles with `@import url('./Dashboard.css')`
