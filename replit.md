# Full-Stack AI Developer Portfolio Website

## Overview

This is a modern, animated portfolio website built for showcasing full-stack AI development expertise. The application features a sleek, dark theme with animated network backgrounds, smooth scrolling sections, and interactive components. It serves as a professional portfolio showcasing real AI projects using LangChain, LangGraph, agentic workflows, n8n, LangFlow, MCP integration, and LLM fine-tuning capabilities.

## Recent Changes (January 2025)
- Updated projects to showcase real AI applications: AI Support Assistant, COSMIC Data Platform, and COSMIC MarketVerse AI
- Enhanced skills section to reflect full-stack AI expertise including LangChain, LangGraph, Agentic Workflows, MCP, Fine-tuning, n8n, and LangFlow
- Replaced About section profile image with animated AI Development Stack showcase
- Updated all content to position as Full-Stack AI Developer rather than general AI Engineer
- All project descriptions now feature advanced AI technologies and real-world applications

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built with **React 18** using **TypeScript** and follows a component-based architecture. The application uses **Vite** as the build tool and development server, providing fast hot module replacement and optimized builds.

**Key architectural decisions:**
- **Single Page Application (SPA)**: Uses `wouter` for client-side routing instead of React Router for a lighter footprint
- **Component Structure**: Organized into reusable UI components using shadcn/ui design system
- **Styling**: Utilizes **Tailwind CSS** with custom CSS variables for theming, specifically designed with an AI/tech aesthetic featuring electric blue, neon, and matrix green colors
- **Animations**: Integrates **Framer Motion** for smooth page transitions and scroll-triggered animations
- **3D Graphics**: Includes **Three.js** with React Three Fiber for 3D network background effects

### Backend Architecture
The server-side uses **Express.js** with **TypeScript** in an ESM (ES Modules) configuration. The architecture follows a simple REST API pattern.

**Key architectural decisions:**
- **Middleware Pattern**: Uses Express middleware for request logging, JSON parsing, and error handling
- **Route Organization**: API routes are centralized in a dedicated routes file
- **Development Integration**: Seamlessly integrates with Vite in development mode using Vite's middleware mode
- **Error Handling**: Implements centralized error handling middleware

### Data Storage Solutions
The application uses a **PostgreSQL** database managed through **Drizzle ORM**.

**Key architectural decisions:**
- **Drizzle ORM**: Chosen for type-safe database operations and excellent TypeScript integration
- **Schema Management**: Database schema is defined in a shared directory for type consistency between client and server
- **Connection**: Uses **Neon Database** serverless driver for PostgreSQL connectivity
- **Validation**: Implements **Zod** schemas for runtime type validation and form data validation

### Authentication and Authorization
Currently implements a basic storage interface with in-memory user management. The architecture is designed to easily scale to more robust authentication systems.

**Architectural considerations:**
- **Storage Interface**: Uses an abstract `IStorage` interface allowing for easy swapping of storage implementations
- **Session Management**: Configured for PostgreSQL-based session storage using `connect-pg-simple`
- **Extensibility**: Structure allows for easy integration of authentication providers

### Form Handling and Validation
The contact form system demonstrates a complete form-to-database workflow.

**Key architectural decisions:**
- **React Hook Form**: Uses `@hookform/resolvers` with Zod for client-side validation
- **Type Safety**: Shared validation schemas between client and server ensure consistency
- **User Feedback**: Implements toast notifications for form submission feedback
- **Data Flow**: Form data flows through validation layers before database persistence

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with concurrent features
- **Express.js**: Node.js web framework for API server
- **TypeScript**: Type safety across the entire application
- **Vite**: Build tool and development server

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: React component library built on Radix UI primitives
- **Radix UI**: Headless component library providing accessibility features
- **Framer Motion**: Animation library for React components

### Database and ORM
- **Drizzle ORM**: TypeScript ORM for database operations
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **Neon Database**: Cloud PostgreSQL service (implied from driver usage)

### 3D Graphics and Animation
- **Three.js**: 3D graphics library
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Helper components for React Three Fiber

### Form and Data Management
- **React Hook Form**: Form state management and validation
- **@hookform/resolvers**: Form validation resolvers
- **Zod**: Runtime type validation and schema validation
- **@tanstack/react-query**: Server state management and caching

### Development and Build Tools
- **Replit Integration**: Configured for Replit development environment with specialized plugins
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing tool
- **Autoprefixer**: CSS vendor prefixing

### Session and Storage
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **nanoid**: Secure, URL-safe unique ID generator