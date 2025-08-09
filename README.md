# Full-Stack AI Developer Portfolio - Next.js

This is a modern, animated portfolio website built with Next.js 14, showcasing full-stack AI development expertise. The application features a sleek, dark theme with animated network backgrounds, smooth scrolling sections, and interactive components.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom AI theme colors
- **Framer Motion** for smooth animations
- **shadcn/ui** components for consistent UI
- **React Query** for server state management
- **Responsive design** with mobile-first approach
- **Contact form** with validation and database storage
- **Animated backgrounds** with particles and network effects

## Tech Stack

### Frontend
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui components

### Backend
- Next.js API Routes
- Drizzle ORM
- PostgreSQL (Neon Database)
- Zod validation

### Development
- ESLint
- PostCSS
- Autoprefixer

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file with your database URL:
   ```
   DATABASE_URL=your_postgresql_connection_string
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API routes
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── providers.tsx   # Client providers
│   ├── components/         # React components
│   ├── hooks/             # Custom React hooks
│   └── lib/               # Utility functions
├── shared/                # Shared schemas and types
├── public/               # Static assets
└── ...config files
```

## Key Components

- **NetworkBackground**: Animated network visualization
- **ParticleSystem**: Floating particle effects
- **HeroSection**: Main landing section with animations
- **AboutSection**: Professional background and skills overview
- **SkillsSection**: Technical skills with animated progress bars
- **ProjectsSection**: Featured AI projects showcase
- **ExperienceSection**: Professional timeline
- **ContactSection**: Contact form with validation

## Deployment

The application is optimized for deployment on Vercel:

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel deploy
   ```

## Database Setup

The application uses Drizzle ORM with PostgreSQL. To set up the database:

1. **Push schema to database:**
   ```bash
   npm run db:push
   ```

## Customization

### Colors
The application uses a custom AI-themed color palette defined in `globals.css`:
- Electric Blue: `hsl(199, 89%, 48%)`
- Cyber Cyan: `hsl(188, 86%, 53%)`
- Neon Purple: `hsl(265, 85%, 70%)`
- Matrix Green: `hsl(158, 64%, 52%)`

### Content
Update the content in each component to match your personal information:
- Personal details in `HeroSection.tsx`
- Skills in `SkillsSection.tsx`
- Projects in `ProjectsSection.tsx`
- Experience in `ExperienceSection.tsx`

## Performance

The application is optimized for performance with:
- Next.js Image optimization
- Code splitting with dynamic imports
- Optimized animations with Framer Motion
- Efficient state management with React Query

## License

MIT License - feel free to use this project as a template for your own portfolio.