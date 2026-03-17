# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## Flutter Dashboard Template

A production-ready, fully responsive Flutter dashboard template is included in the [`flutter_dashboard/`](./flutter_dashboard) directory.

### Features

- **Responsive layout** – adapts seamlessly for Web, Windows, and Mobile
  - Desktop (≥ 1024 px): persistent left sidebar
  - Tablet (768–1023 px): icon-only collapsed sidebar
  - Mobile (< 768 px): hidden sidebar accessible via a drawer (hamburger menu)
- **Color scheme** – white surfaces with a professional blue accent palette
- **Left sidebar navigation** – collapsible with active state indicators, smooth animations, and hover effects
- **Top header bar** – page title, search field, notification badge, settings icon, and user profile
- **Metric cards** – four KPI summary cards with trend badges
- **Charts** (via [`fl_chart`](https://pub.dev/packages/fl_chart)):
  - Revenue line chart with gradient fill and touch tooltips
  - User activity grouped bar chart
  - Traffic sources donut chart
- **Recent activity feed** – timestamped activity list
- **State management** via [`GetX`](https://pub.dev/packages/get)

### File structure

```
flutter_dashboard/
├── pubspec.yaml                         # Dependencies
└── lib/
    ├── main.dart                        # App entry point
    ├── app/
    │   └── app.dart                     # GetMaterialApp wrapper
    ├── controllers/
    │   └── dashboard_controller.dart    # GetX controller (nav, metrics, activity)
    ├── screens/
    │   └── dashboard_screen.dart        # Main responsive screen
    ├── widgets/
    │   ├── sidebar.dart                 # Left navigation sidebar
    │   ├── header.dart                  # Top header bar
    │   ├── metric_card.dart             # KPI metric card widget
    │   ├── chart_widgets.dart           # fl_chart chart widgets
    │   └── recent_activity.dart         # Recent activity list card
    └── utils/
        ├── app_colors.dart              # Color palette constants
        ├── app_constants.dart           # Spacing, sizing, breakpoints
        └── responsive_helper.dart       # Responsive layout helpers
```

### Getting started

1. Copy the `flutter_dashboard/` folder into a new Flutter project (or use it stand-alone):

   ```bash
   cp -r flutter_dashboard /path/to/your_flutter_project
   cd /path/to/your_flutter_project/flutter_dashboard
   flutter pub get
   flutter run
   ```

2. Supported run targets:

   ```bash
   flutter run -d chrome       # Web
   flutter run -d windows      # Windows desktop
   flutter run -d android      # Android / mobile
   flutter run -d ios          # iOS / mobile
   ```

### Dependencies

| Package | Version | Purpose |
|---|---|---|
| `get` | ^4.6.6 | State management & routing |
| `fl_chart` | ^0.68.0 | Charts and data visualisation |
| `cupertino_icons` | ^1.0.6 | Icon set |

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
