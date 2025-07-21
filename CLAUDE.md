# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based course promotion website (課程推廣網站) built with Vite. The project is designed to showcase various courses, inspired by https://www.tiandiren.tw/course. It's a Single Page Application (SPA) focused on course promotion and discovery.

## Common Commands

### Development
- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Architecture

### Tech Stack
- React 18 with functional components
- Vite as build tool and development server
- Inline styles (no CSS framework currently used)
- Traditional Chinese (zh-Hant) language support

### Project Structure
- `src/main.jsx` - Application entry point with React StrictMode
- `src/App.jsx` - Main application component containing the entire homepage
- `index.html` - HTML template with Chinese language support
- `vite.config.js` - Standard Vite configuration with React plugin

### Current Implementation
The app currently consists of a single-page layout with:
- Header with navigation (首頁, 課程列表)
- Hero section with gradient background
- Course showcase section with static course cards
- All styling done with inline styles using a consistent color scheme (#2d3a4b for primary, gradient backgrounds for highlights)

### Planned Features
According to README.md, the roadmap includes:
- Course listing page (課程列表)
- Individual course detail pages (課程詳情)
- Enhanced functionality to be added incrementally